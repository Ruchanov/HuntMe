import { Component } from '@angular/core';
import {JobService} from "../job.service";
import {ActivatedRoute} from "@angular/router";
import {JobListing} from "../models/jobListing";

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent {
  vacancy: JobListing;
  constructor(private route: ActivatedRoute, private jobService: JobService
  ) {
    this.vacancy = {} as JobListing;
  }
  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    // Надо создать getVacancyById
    this.jobService.getVacancyById(jobId).subscribe(vacancy => {
      this.vacancy = vacancy;
    });
  }
}
