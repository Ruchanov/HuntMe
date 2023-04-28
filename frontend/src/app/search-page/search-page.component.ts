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
  searchResults: JobListing[] = [];
  originalResults: JobListing[] = [];
  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {
    this.jobService.fetchJobListings().subscribe({
      next: (jobListings) => {
        this.searchResults = jobListings;
        this.originalResults = jobListings;
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
    this.searchResults = this.originalResults.filter((jobListing) => {
      const title = jobListing.title ? jobListing.title.toLowerCase() : '';
      const companyName = jobListing.company && jobListing.company.name ? jobListing.company.name.toLowerCase() : '';
      const description = jobListing.description ? jobListing.description.toLowerCase() : '';

      return (
        title.includes(query) ||
        companyName.includes(query) ||
        description.includes(query)
      );
    });
  }




}
