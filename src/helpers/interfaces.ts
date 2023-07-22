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
  uol_host?: Project[];
}

export type Modules =
  | "fundaments"
  | "front_end"
  | "back_end"
  | "personal"
  | "computer_science"
  | "uol_host";

export interface Data {
  data: Project | ProjectArrays[];
}

export interface ProjectsPaths {
  id: number;
  name: string;
  route: string;
}

export interface TimelineInterface {
  img: string;
  from: number;
  to: number | undefined;
  title: string;
  content: string;
  width: number;
  height: number;
}