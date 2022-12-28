export interface Project {
  id: number;
  description: string;
  module: string;
  name: string;
  link: string;
  src: string;
}

export interface ProjectArrays {
  fundaments: Project[];
  frontEnd: Project[];
  backEnd: Project[];
  computerScience: Project[];
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