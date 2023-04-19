import {JobListing} from "./jobListing";

export interface JobApplication{
  user: User;
  job_listing: JobListing;
  application_date: Date;
  status: string;
}
