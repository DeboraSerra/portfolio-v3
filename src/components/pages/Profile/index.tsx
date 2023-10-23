import { ProjectsContext } from "@/helpers/Context";
import Image from "next/image";
import { useContext } from "react";
import * as S from './Profile.styled'

const Profile = () => {
  const {
    user: { avatarUrl, login, name },
  } = useContext(ProjectsContext);

  return (
    <S.Main>
      <Image src={avatarUrl} alt={login} width={300} height={300} />
      <h1 className='profile__login'>{login}</h1>
      <h2 className='profile__name'>{name}</h2>
    </S.Main>
  );
};

export default Profile;
