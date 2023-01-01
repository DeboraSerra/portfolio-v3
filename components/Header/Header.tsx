import Link from "next/link";
import { useRef, useState } from "react";
import { useDarkMode, useOnClickOutside, useWindowSize } from "usehooks-ts";
import { BiSun, BiMoon } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import * as S from "./Header.styled";
import Menu from "./components/Menu/Menu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { isDarkMode, toggle } = useDarkMode();
  const { width } = useWindowSize();
  const header = useRef<HTMLDivElement>(null);

  useOnClickOutside(header, () => setOpenMenu(false))

  return (
    <S.Header>
      <div className="container" ref={header}>
        <Link href="/" className="header__title">
          Débora Serra
        </Link>
        <S.NavBar>
          {width < 576 ? (
            <>
              {openMenu ? (
                <RxCross2
                  className="header__nav-btn"
                  onClick={() => setOpenMenu(!openMenu)}
                />
              ) : (
                <GiHamburgerMenu
                  className="header__nav-btn"
                  onClick={() => setOpenMenu(!openMenu)}
                />
              )}
              {openMenu && <Menu />}
            </>
          ) : (
            <Menu />
          )}
        </S.NavBar>
        <div onClick={toggle} className="header__theme-btn">
          {isDarkMode ? (
            <BiMoon className="header__theme-btn--icon" />
          ) : (
            <BiSun className="header__theme-btn--icon" />
          )}
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
