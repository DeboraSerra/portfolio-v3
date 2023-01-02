import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Modules } from "../../../../helpers/interfaces";

import * as S from "./ProjectCard.styled";

interface Props {
  id: number;
  name: string;
  image: string;
  module: Modules;
}

const ProjectCard: NextPage<Props> = ({ id, name, image, module }) => {
  console.log(id, module)
  return (
    <S.Main>
      <Link href={`/projects/${module}/${id}`} className="projects__card-link">
        <h3 className="projects__card-title">{name}</h3>
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="projects__card-img"
        />
      </Link>
    </S.Main>
  );
};

export default ProjectCard;
