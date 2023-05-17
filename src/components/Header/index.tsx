import { ProjectsContext } from "@/helpers/Context";
import React, { useContext, useEffect, useState } from "react";
import { useDarkMode } from "usehooks-ts";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Button, LinkStyled, Title } from "@/styles/styled";

import logo from "../../../assets/images/laptop.png";

import * as S from "./Header.styled";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { routes } = useContext(ProjectsContext);

  const { isDarkMode, toggle } = useDarkMode();

  return (
    <S.Header>
      <div className='container flex'>
        <Link href="/"><Image src={logo} alt="Débora Serra" width={50} height={50} /></Link>
        <nav className='flex center'>
          <LinkStyled className='medium' href='/'>
            Home
          </LinkStyled>
          <LinkStyled className='medium' href='/resume'>
            Resume
          </LinkStyled>
          <div
            className='header__menu'
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <LinkStyled className='medium' href='/projects'>
              Projects
              {showMenu ? <BiChevronUp /> : <BiChevronDown />}
            </LinkStyled>
            {showMenu ? (
              <div className='header__menu--abs flex column'>
                {routes.map(({ id, name, route }) => (
                  <LinkStyled
                    className='small'
                    key={id}
                    href={`/projects/${route}`}
                  >
                    {name}
                  </LinkStyled>
                ))}
              </div>
            ) : null}
          </div>
          <LinkStyled className='medium' href='/contact'>
            Contact
          </LinkStyled>
          <Button className='no-bg' onClick={toggle}>
            {isDarkMode ? <BsSun /> : <BsMoonFill />}
          </Button>
        </nav>
      </div>
    </S.Header>
  );
};

export default Header;
