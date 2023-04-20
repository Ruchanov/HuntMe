from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    first_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

class JobCategory(models.Model):
    name = models.CharField(max_length=100)

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    website = models.URLField(blank=True, null=True)

class JobListing(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    title = models.CharField(max_length=100)
    description = models.TextField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    category = models.ForeignKey(JobCategory, on_delete=models.CASCADE)
    location = models.CharField(max_length=100)
    salary = models.FloatField()
    date_posted = models.DateField(auto_now_add=True)

class JobApplication(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    job_listing = models.ForeignKey(JobListing, on_delete=models.CASCADE)
    application_date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=[("pending", "Pending"), ("accepted", "Accepted"), ("rejected", "Rejected")], default="pending")

class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file = models.FileField(upload_to='resumes/')

