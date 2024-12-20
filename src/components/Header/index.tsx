import { ProjectsContext } from "@/helpers/Context";
import { useContext, useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { useOnClickOutside } from "usehooks-ts";

import logo from "../../../assets/images/laptop.png";

import jwtDecode from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import * as S from "./Header.styled";
import LogInMenu from "./LogInMenu";
import SubMenu from "./SubMenu";

const Header = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const header = useRef(null);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useOnClickOutside(header, () => {
    setShowMenu(false);
  });

  const {
    user: { avatarUrl },
    setUser,
    setToken,
    width,
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
              {showSubMenu ? <SubMenu /> : null}
            </div>
            <Link className='header__link medium' href='/contact'>
              Contact
            </Link>
            <LogInMenu
              setShowProfileMenu={setShowProfileMenu}
              showProfileMenu={showProfileMenu}
            />
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
                {showSubMenu ? <SubMenu /> : null}
              </div>
              <Link className='header__link small' href='/contact'>
                Contact
              </Link>
              <LogInMenu
                setShowProfileMenu={setShowProfileMenu}
                showProfileMenu={showProfileMenu}
              />
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
