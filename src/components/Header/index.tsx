import { ProjectsContext } from "@/helpers/Context";
import { useContext, useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsMoonFill, BsSun } from "react-icons/bs";
import {
  useOnClickOutside,
  useTernaryDarkMode,
  useWindowSize,
} from "usehooks-ts";

import logo from "../../../assets/images/laptop.png";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import * as S from "./Header.styled";

const Header = () => {
  const { width } = useWindowSize();
  const header = useRef(null);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useOnClickOutside(header, () => {
    setShowMenu(false);
  });
  const { routes } = useContext(ProjectsContext);
  const router = useRouter();

  const handleRouteChange = () => {
    setShowMenu(false);
    setShowSubMenu(false);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const { isDarkMode, setTernaryDarkMode } = useTernaryDarkMode();

  return (
    <S.Header ref={header}>
      <div className='container flex'>
        {width <= 768 && (
          <GiHamburgerMenu
            onClick={() => setShowMenu(!showMenu)}
            className='hamburger-icon'
          />
        )}
        <Link href='/'>
          <Image src={logo} alt='Débora Serra' width={50} height={50} />
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
                  {routes.map(({ id, name, route }) => (
                    <Link
                      className='header__link medium'
                      key={id}
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
          </nav>
        ) : (
          showMenu && (
            <nav className='header'>
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
                  <div className='header__menu--abs'>
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
                ) : null}
              </div>
              <Link className='header__link small' href='/contact'>
                Contact
              </Link>
            </nav>
          )
        )}
        <button
          className='header__btn'
          onClick={() => {
            isDarkMode
              ? setTernaryDarkMode("light")
              : setTernaryDarkMode("dark");
          }}
        >
          {isDarkMode ? <BsSun /> : <BsMoonFill />}
        </button>
      </div>
    </S.Header>
  );
};

export default Header;
