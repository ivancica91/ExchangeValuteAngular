import { UserRole } from "./userRole";


export interface Member {
  id: number;
  userName: string;
  email: string;
  token: string;
  ime: string;
  prezime: string;
  slika: string;
  roles: string[];
  userRoles: UserRole[];
}

export interface PostMember {
  userName: string;
  email: string;
  ime: string;
  prezime: string;
  slika: string;
  lozinka: string;
}
