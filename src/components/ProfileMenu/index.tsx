import { ProjectsContext } from "@/helpers/Context";
import Link from "next/link";
import { useContext } from "react";
import * as S from "./ProfileMenu.styled";

const ProfileMenu = () => {
  const {
    user: { id },
  } = useContext(ProjectsContext);
  return (
    <S.Main className='header__menu--abs flex column'>
      <Link className='header__link medium' href={`/profile/${id}`}>
        Profile
      </Link>
      <Link
        className='header__link medium'
        href={`/profile/${id}/invoices-control`}
      >
        Invoices control
      </Link>
      <a
        className='header__link medium'
        href='https://recipes-blush-psi.vercel.app/'
      >
        Recipes book
      </a>
      <Link className='header__link medium' href='/api/logout'>
        Logout
      </Link>
    </S.Main>
  );
};

export default ProfileMenu;
