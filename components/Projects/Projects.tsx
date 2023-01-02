import { NextPage } from "next";
import Image from "next/image";
import { Modules, Project } from "../../helpers/interfaces";
import { usePageLoading } from "../../helpers/usePageLoading";
import ProjectCard from "./components/ProjectCard/ProjectCard";

import * as S from "./Projects.styled";

interface Props {
  projects: Project[];
  module: Modules;
}

const Projects: NextPage<Props> = ({ projects, module }) => {
  const { isLoading } = usePageLoading();

  if (isLoading) return <p>Loading...</p>
  
  return (
    <S.Main>
      <h1 className="projects__title">My Projects</h1>
      <div className="projects__cards">
        {projects.map((proj) => (
          <ProjectCard id={+proj.id} name={proj.name} image={proj.image} key={proj.id} module={module} />
        ))}
      </div>
    </S.Main>
  );
};

export default Projects;
