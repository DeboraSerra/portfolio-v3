import { Modules, Project } from "@/helpers";
import { Subtitle, Title } from "@/styles/styled";
import { useEffect, useState } from "react";
import Card from "./Card/Card";
import Modal from "./Modal/Modal";
import * as S from "./Module.styled";

const titles = {
  personal: "Personal",
  front_end: "Front End",
  back_end: "Back End",
  computer_science: "Computer Science",
  fundaments: "Fundaments",
  uol_host: "UOL Host",
  cctb: "CCTB",
};

interface Props {
  projects: Project[];
  module?: Modules;
}

const parseTerm = (term: number) => `${term}º Term`;

const ProjectModule = ({ projects, module }: Props) => {
  const [active, setActive] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [currentProjects, setCurrentProjects] = useState<{
    [key: string]: Project[];
  }>({});

  const handleOpenModal = (index: number) => {
    setActive(index);
    setOpenModal(true);
    window.scrollTo({ top: 0 });
  };

  const handleOpenCCTBModal = (id: number) => {
    const index = projects.findIndex((proj) => proj.id === id);
    setActive(index);
    setOpenModal(true);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    if (module === "cctb") {
      const projectsByTerm: { [key: string]: Project[] } = {};
      projects.forEach((project) => {
        if (!projectsByTerm[parseTerm(project.term as number)]) {
          projectsByTerm[parseTerm(project.term as number)] = [];
        }
        projectsByTerm[parseTerm(project.term as number)].push(project);
      });
      setCurrentProjects(projectsByTerm);
    }
  }, []);

  if (module === "cctb") {
    return (
      <S.Main>
        <div className='container'>
          <Title className='center'>{titles[module as Modules]}</Title>
          <div className='project__box'>
            {Object.entries(currentProjects)?.map(([key, value]) => (
              <div key={key}>
                <Subtitle className='center'>{key}</Subtitle>
                <div className='project__box'>
                  {value.map((proj) => (
                    <Card
                      name={proj.name}
                      image={proj.image}
                      key={proj.id}
                      onClick={() => handleOpenCCTBModal(proj.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {openModal && (
            <Modal project={projects[active]} setOpenModal={setOpenModal} />
          )}
        </div>
      </S.Main>
    );
  }

  return (
    <S.Main>
      <div className='container'>
        <Title className='center'>{titles[module as Modules]}</Title>
        <div className='project__box'>
          {projects?.map((proj, index) => (
            <Card
              name={proj.name}
              image={proj.image}
              key={proj.id}
              onClick={() => handleOpenModal(index)}
            />
          ))}
        </div>
        {openModal && (
          <Modal project={projects[active]} setOpenModal={setOpenModal} />
        )}
      </div>
    </S.Main>
  );
};

export default ProjectModule;
