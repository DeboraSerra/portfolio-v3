import { ProjectsContext } from "@/helpers/Context";
import { useContext } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ProfileMenu from "../ProfileMenu";

const LogInMenu = ({
  showProfileMenu,
  setShowProfileMenu,
}: {
  showProfileMenu: boolean;
  setShowProfileMenu: (val: boolean) => void;
}) => {
  const {
    user: { login },
    width,
  } = useContext(ProjectsContext);

  const isMobile = width <= 768;

  const renderArrow = () => {
    return showProfileMenu ? <BiChevronUp /> : <BiChevronDown />;
  };

  return (
    <div
      className='header__menu'
      onMouseEnter={() => !isMobile && login !== "" && setShowProfileMenu(true)}
      onMouseLeave={() =>
        !isMobile && login !== "" && setShowProfileMenu(false)
      }
      onClick={(e) => isMobile && login && e.preventDefault()}
    >
      <a
        className={`header__link ${isMobile ? "small" : "medium"}`}
        href={
          login
            ? "#"
            : `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
        }
        title={!login ? "Login with Github" : ""}
      >
        {login !== "" ? login : "Login"}
        {login !== "" ? renderArrow() : null}
      </a>
      {showProfileMenu ? <ProfileMenu /> : null}
    </div>
  );
};

export default LogInMenu;
