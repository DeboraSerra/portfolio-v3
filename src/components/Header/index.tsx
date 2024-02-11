import { ProjectsContext } from "@/helpers/Context";
import { useContext, useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { useOnClickOutside, useWindowSize } from "usehooks-ts";

import logo from "../../../assets/images/laptop.png";

import jwtDecode from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfileMenu from "../ProfileMenu";
import * as S from "./Header.styled";

const names = {
  fundaments: "Fundaments",
  frontend: "Frontend",
  backend: "Backend",
  computer_science: "Computer Science",
  personal: "Personal",
  uol: "UOL",
};

const Header = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const { width } = useWindowSize();
  const header = useRef(null);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useOnClickOutside(header, () => {
    setShowMenu(false);
  });
  const {
    routes,
    user: { login, avatarUrl },
    setUser,
    setToken,
  } = useContext(ProjectsContext);
  const router = useRouter();

  const handleRouteChange = () => {
    setShowMenu(false);
    setShowSubMenu(false);
    setShowProfileMenu(false);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    setTimeout(() => {
      const token = document.cookie.replace(/token=/, "");
      if (!!token) {
        const savedUser: {
          login: string;
          name: string;
          avatarUrl: string;
          id: number;
        } = jwtDecode(token);
        setUser(savedUser);
        setToken(token);
      }
    }, 200);
  }, []);

  return (
    <S.Header ref={header}>
      <div className='container flex'>
        {width <= 768 && (
          <GiHamburgerMenu
            onClick={() => setShowMenu(!showMenu)}
            className='hamburger-icon'
          />
        )}
        <Link href='/' className='header__logo'>
          <Image
            src={avatarUrl !== "" ? avatarUrl : logo}
            alt='Débora Serra'
            width={50}
            height={50}
          />
        </Link>
        {width > 768 ? (
          <nav className='flex center header'>
            <Link className='header__link medium' href='/'>
              Home
            </Link>
            <Link className='header__link medium' href='/resume'>
              Resume
            </Link>
            <div
              className='header__menu'
              onMouseEnter={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
            >
              <Link className='header__link medium' href='/projects'>
                Projects
                {showSubMenu ? <BiChevronUp /> : <BiChevronDown />}
              </Link>
              {showSubMenu ? (
                <div className='header__menu--abs flex column'>
                  <Link className='header__link medium' href={`/projects`}>
                    All categories
                  </Link>
                  {routes.map(({ route, name }, i) => (
                    <Link
                      className='header__link medium'
                      key={i}
                      href={`/projects/${route}`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            <Link className='header__link medium' href='/contact'>
              Contact
            </Link>
            <div
              className='header__menu'
              onMouseEnter={() => login !== "" && setShowProfileMenu(true)}
              onMouseLeave={() => login !== "" && setShowProfileMenu(false)}
            >
              <a
                className='header__link medium'
                href={
                  login
                    ? ""
                    : `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
                }
                title={!login ? "Login with Github" : ""}
              >
                {login !== "" ? login : "Login"}
                {login !== "" ? (
                  showProfileMenu ? (
                    <BiChevronUp />
                  ) : (
                    <BiChevronDown />
                  )
                ) : null}
              </a>
              {showProfileMenu ? <ProfileMenu /> : null}
            </div>
          </nav>
        ) : (
          showMenu && (
            <nav className={`header ${showMenu ? "active" : ""}`}>
              <Link className='header__link small' href='/'>
                Home
              </Link>
              <Link className='header__link small' href='/resume'>
                Resume
              </Link>
              <div
                className='header__menu'
                onClick={() => setShowSubMenu(!showSubMenu)}
              >
                <Link
                  className='header__link small'
                  href='#!'
                  onClick={(e) => e.preventDefault()}
                >
                  Projects
                  {showSubMenu ? <BiChevronUp /> : <BiChevronDown />}
                </Link>
                {showSubMenu ? (
                  <>
                    <div className='header__menu--abs'>
                      <Link className='header__link small' href={`/projects`}>
                        All categories
                      </Link>
                      {routes.map(({ id, name, route }) => (
                        <Link
                          className='header__link small'
                          key={id}
                          href={`/projects/${route}`}
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
              <Link className='header__link small' href='/contact'>
                Contact
              </Link>
              <div
                className='header__menu'
                onClick={() =>
                  login !== "" && setShowProfileMenu(!showProfileMenu)
                }
              >
                <a
                  className='header__link small'
                  href={
                    login
                      ? ""
                      : `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
                  }
                  onClick={(e) => login && e.preventDefault()}
                  title={!login ? "Login with Github" : ""}
                >
                  {login !== "" ? login : "Login"}
                  {login !== "" ? (
                    showProfileMenu ? (
                      <BiChevronUp />
                    ) : (
                      <BiChevronDown />
                    )
                  ) : null}
                </a>
                {showProfileMenu ? <ProfileMenu /> : null}
              </div>
            </nav>
          )
        )}
        <button className='header__btn' onClick={toggleDarkMode}>
          {isDarkMode ? <BsSun /> : <BsMoonFill />}
        </button>
      </div>
    </S.Header>
  );
};

export default Header;
