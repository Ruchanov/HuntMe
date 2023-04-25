import { Component } from '@angular/core';
import {JobService} from "../job.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent {
  vacancy: JobService;
  constructor(private route: ActivatedRoute, private jobService: JobService
  ) {
    this.vacancy = {} as JobService;
  }
  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    this.jobService.getVacancyById(jobId).subscribe(vacancy => {
      this.vacancy = vacancy;
    });
  }
}
