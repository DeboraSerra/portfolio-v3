import { NextPage } from "next";
import Link from "next/link";
import { ProjectsPaths } from "../../../../helpers/interfaces";

import * as S from "./ProjectsMenu.styled";

interface Props {
  paths: ProjectsPaths[]
}

const ProjectsMenu: NextPage<Props> = ({ paths }) => {
  return (
    <S.Main>
      {paths.map(({ id, name, route }) => (
        <Link href={`/projects/${route}`} key={id}>{name}</Link>

      ))}
    </S.Main>
  );
};

export default ProjectsMenu;
