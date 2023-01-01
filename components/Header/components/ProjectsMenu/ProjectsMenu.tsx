import { NextPage } from "next";
import Link from "next/link";

import * as S from "./ProjectsMenu.styled";

interface Props {}

const ProjectsMenu: NextPage<Props> = () => {
  return (
    <S.Main>
      <Link href="/fundaments">Fundaments</Link>
      <Link href="/front-end">Front end</Link>
      <Link href="/back-end">Back end</Link>
      <Link href="/computer-science">Computer science</Link>
      <Link href="/personal">Personal</Link>
    </S.Main>
  );
};

export default ProjectsMenu;
