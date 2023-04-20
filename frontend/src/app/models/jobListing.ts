import {Company} from "./company";
import {JobCategory} from "./jobCategory";

export interface JobListing {
  id: number;
  title: string;
  description: string;
  company: Company;
  category: JobCategory;
  location: string;
  salary: number;
  date_posted: string;
}
