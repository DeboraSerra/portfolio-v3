import { backend, cs, frontend, fundaments, uol } from "@/helpers";
import { Subtitle } from "@/styles/styled";
import Link from "next/link";
import Card from "./Card/Card";
import * as S from "./Project.styled";

const Project = () => {
  return (
    <S.Main>
      <div className='container'>
        <div className='project__section'>
          <Subtitle className='center'>Trybe projects</Subtitle>
          <div className='projects__box'>
            <Card
              src={fundaments.src}
              width={150}
              height={150}
              alt='Fundaments'
              href='/projects/fundaments'
              title='Fundaments'
            />
            <Card
              src={frontend.src}
              width={212}
              height={150}
              alt='Front-end'
              href='/projects/front_end'
              title='Front-end'
            />
            <Card
              src={backend.src}
              width={150}
              height={150}
              alt='Back-end'
              href='/projects/back_end'
              title='Back-end'
            />
            <Card
              src={cs.src}
              width={150}
              height={150}
              alt='Computer science'
              href='/projects/computer_science'
              title='Computer Science'
            />
          </div>
        </div>
        <div className='project__section'>
          <Subtitle className="center">Professional projects</Subtitle>
          <div className='projects__box'>
            <Card
              src={uol.src}
              width={128}
              height={46}
              alt='UOL Host'
              href='/projects/uol_host'
              title='UOL Host'
            />
          </div>
        </div>
        <Link href='/projects/personal' className="projects__link">Personal projects</Link>
      </div>
    </S.Main>
  );
};

export default Project;
