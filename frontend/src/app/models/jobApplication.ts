import {JobListing} from "./jobListing";
import {User} from "./user";

export interface JobApplication {
  id: number;
  user: User;
  job_listing: JobListing;
  application_date: string;
  status: 'pending' | 'accepted' | 'rejected';
}
