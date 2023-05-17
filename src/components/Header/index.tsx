import { ProjectsContext } from "@/helpers/Context";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import * as S from "./Header.styled";
import { useDarkMode } from "usehooks-ts";
import { Button, LinkStyled, Title } from "@/styles/styled";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { routes } = useContext(ProjectsContext);

  const { isDarkMode, toggle } = useDarkMode();

  return (
    <S.Header>
      <div className='container flex'>
        <Title>Débora Serra</Title>
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
