import {User} from "./user";

export interface LoginResponse {
  token: string;
  access: string;
  refresh: string;
}
