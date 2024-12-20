import { ProjectsContext } from "@/helpers/Context";
import Link from "next/link";
import { useContext } from "react";

const SubMenu = () => {
  const { routes, width } = useContext(ProjectsContext);
  const isMobile = width <= 768;
  return (
    <div className={`header__menu--abs ${!isMobile ? "flex column" : ""}`}>
      <Link
        className={`header__link ${isMobile ? "small" : "medium"}`}
        href={`/projects`}
      >
        All categories
      </Link>
      {routes.map(({ route, name, id }) => (
        <Link
          className={`header__link ${isMobile ? "small" : "medium"}`}
          key={id}
          href={`/projects/${route}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;
