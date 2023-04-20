export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  user_profile: UserProfile;
}

export interface UserProfile {
  id: number;
  bio: string | null;
  location: string | null;
}
