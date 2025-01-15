import { backend, cs, frontend, fundaments, uol, cctb, blueWave } from "@/helpers";
import { ProjectsContext } from "@/helpers/Context";
import { Subtitle } from "@/styles/styled";
import Link from "next/link";
import { useContext } from "react";
import Card from "./Card/Card";
import * as S from "./Project.styled";

const Project = () => {
  const { routes } = useContext(ProjectsContext);
  const trybe = ["fundaments", "front_end", "back_end", "cs"];
  const professional = ["uol", "blue_wave"];
  const cctb_route = ["cctb"];

  const getImage = (name: string) => {
    switch (name) {
      case "fundaments":
        return fundaments;
      case "front_end":
        return frontend;
      case "back_end":
        return backend;
      case "cs":
        return cs;
      case "uol":
        return uol;
      case "cctb":
        return cctb;
      case "blue_wave":
        return blueWave;
      default:
        return { src: "" };
    }
  };

  return (
    <S.Main>
      <div className='container'>
        <div className='project__section'>
          <Subtitle className='center'>Trybe projects</Subtitle>
          <div className='projects__box'>
            {routes
              .filter((r) => trybe.includes(r.route))
              .map((route) => (
                <Card
                  key={route.id}
                  src={getImage(route.route).src}
                  width={150}
                  height={150}
                  alt={route.name}
                  href={`/projects/${route.route}`}
                  title={route.name}
                />
              ))}
          </div>
        </div>
        <div className='project__section'>
          <Subtitle className='center'>CCTB projects</Subtitle>
          <div className='projects__box'>
            {routes
              .filter((r) => cctb_route.includes(r.route))
              .map((route) => (
                <Card
                  key={route.id}
                  src={getImage(route.route).src}
                  width={150}
                  height={150}
                  alt={route.name}
                  href={`/projects/${route.route}`}
                  title={route.name}
                />
              ))}
          </div>
        </div>
        <div className='project__section'>
          <Subtitle className='center'>Professional projects</Subtitle>
          <div className='projects__box'>
            {routes
              .filter((r) => professional.includes(r.route))
              .map((route) => (
                <Card
                  key={route.id}
                  src={getImage(route.route).src}
                  width={150}
                  height={150}
                  alt={route.name}
                  href={`/projects/${route.route}`}
                  title={route.name}
                />
              ))}
          </div>
        </div>
        <Link href='/projects/personal' className='projects__link'>
          Personal projects
        </Link>
      </div>
    </S.Main>
  );
};

export default Project;
