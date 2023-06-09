from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views

urlpatterns = [
    path('login/', views.user_login),
    path('user/profile/', views.user_profile, name='user_profile'),

    path('register/', views.UserCreateView.as_view(), name='user_create'),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('users/<int:pk>/', views.UserDetailView.as_view(), name='user_detail'),

    path('job_categories/', views.JobCategoryListCreateView.as_view(), name='job_categories_list_create'),
    path('job_categories/<int:pk>/', views.JobCategoryDetailView.as_view(), name='job_categories_detail'),

    path('companies/', views.CompanyListCreateView.as_view(), name='companies_list_create'),
    path('companies/<int:pk>/', views.CompanyDetailView.as_view(), name='companies_detail'),

    path('job_listings/', views.JobListingListCreateView.as_view(), name='job_listings_list_create'),
    path('job_listings/<int:pk>/', views.JobListingDetailView.as_view(), name='job_listings_detail'),

    path('job_applications/', views.JobApplicationListCreateView.as_view(), name='job_applications_list_create'),
    path('job_applications/<int:pk>/', views.JobApplicationDetailView.as_view(), name='job_applications_detail'),

    path('resumes/', views.ResumeListCreateView.as_view(), name='resumes_list_create'),
    path('resumes/<int:pk>/', views.ResumeDetailView.as_view(), name='resumes_detail'),

    path('job_search/', views.JobSearchView.as_view(), name='job_search'),
]
