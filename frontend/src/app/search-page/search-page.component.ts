import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { JobListing } from '../models/jobListing';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  searchResults: JobListing[] = []; // Use the JobListing interface

  constructor(private jobService: JobService) {}

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
}
