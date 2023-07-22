import { Modules, Project } from "@/helpers";
import { Title } from "@/styles/styled";
import Card from "./Card/Card";
import * as S from "./Module.styled";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal/Modal";

const titles = {
  personal: "Personal",
  front_end: "Front End",
  back_end: "Back End",
  computer_science: "Computer Science",
  fundaments: "Fundaments",
  uol_host: "UOL Host",
};

interface Props {
  projects: Project[];
  module?: Modules;
}

const ProjectModule = ({ projects, module }: Props) => {
  const [active, setActive] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index: number) => {
    setActive(index)
    setOpenModal(true)
    window.scrollTo({ top: 0 })
  }

  return (
    <S.Main>
      <div className='container'>
        <Title className='center'>{titles[module as Modules]}</Title>
        <div className='project__box'>
          {projects?.map((proj, index) => (
            <Card name={proj.name} image={proj.image} key={proj.id} onClick={() => handleOpenModal(index)} />
          ))}
        </div>
        {openModal && <Modal project={projects[active]} setOpenModal={setOpenModal} />}
      </div>
    </S.Main>
  );
};

export default ProjectModule;
