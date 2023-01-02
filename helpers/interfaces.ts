export interface Project {
  id: number;
  description: string;
  name: string;
  repository: string;
  image: string;
}

export interface ProjectArrays {
  fundaments: Project[];
  front_end: Project[];
  back_end: Project[];
  computer_science: Project[];
  personal: Project[];
}

export type Modules =
  | "fundaments"
  | "front_end"
  | "back_end"
  | "personal"
  | "computer_science";

export interface Data {
  data: Project | ProjectArrays[];
}

export interface ProjectsPaths {
  id: number;
  name: string;
  route: string;
}