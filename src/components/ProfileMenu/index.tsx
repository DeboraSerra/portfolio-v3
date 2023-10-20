import Link from 'next/link';
import * as S from './ProfileMenu.styled'

const ProfileMenu = () => {
  return (
    <S.Main>
      <Link href='/profile'>Profile</Link>
      <Link href=''>Receiving control</Link>
      <Link href='/api/logout'>Logout</Link>
    </S.Main>
  );
}

export default ProfileMenu;
