import { UserRole } from "./userRole";

export interface User {
  id: number;
  userName: string;
  email: string;
  token: string;
  ime: string;
  prezime: string;
  slika: string;
  lozinka: string;
  roles: string[];
  userRoles: UserRole[];
}
