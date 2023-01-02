import { NextPage } from "next";
import Link from "next/link";
import { useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useOnClickOutside } from "usehooks-ts";
import { ProjectsPaths } from "../../../../helpers/interfaces";
import ProjectsMenu from "../ProjectsMenu/ProjectsMenu";

interface Props {
  paths: ProjectsPaths[];
}

const Menu: NextPage<Props> = ({ paths }) => {
  const [openProject, setOpenProject] = useState(false);
  const projects = useRef<HTMLDivElement>(null);

  useOnClickOutside(projects, () => setOpenProject(false));

  const handleOpenProject = () => setOpenProject(!openProject);

  return (
    <div className="header__links">
      <Link href="/about" className="header__link">
        About Me
      </Link>
      <div onClick={handleOpenProject} className="header__link" ref={projects}>
        Projects {openProject ? <BiChevronUp /> : <BiChevronDown />}
        {openProject && <ProjectsMenu paths={paths} />}
      </div>
      <Link href="/contact" className="header__link">
        Contact
      </Link>
    </div>
  );
};

export default Menu;
