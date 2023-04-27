import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { JobListing } from '../models/jobListing';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  searchResults: JobListing[] = []; // Use the JobListing interface

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {
    this.jobService.fetchJobListings().subscribe({
      next: (jobListings) => {
        this.searchResults = jobListings;
      },
      error: (error) => {
        console.error('Error fetching vacancies:', error);
      },
    });
  }
  navigateToJobDetails(id: string) {
    this.router.navigate(['/vacancy', id]);
  }
  search(): void {
    const query = (document.getElementById('search-bar') as HTMLInputElement).value.toLowerCase();
    this.searchResults = this.searchResults.filter((jobListing) => {
      return (
        jobListing.title.toLowerCase().includes(query) ||
        jobListing.company.name.toLowerCase().includes(query) ||
        jobListing.description.toLowerCase().includes(query)
      );
    });
  }

}
