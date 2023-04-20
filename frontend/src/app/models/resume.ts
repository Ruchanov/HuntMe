import {User} from "./user";

export interface Resume {
  id: number;
  user: User;
  file: File | string;
}
