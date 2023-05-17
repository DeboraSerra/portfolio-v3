import { Subtitle, Text, Title } from "@/styles/styled";
import * as S from "./Home.styled";

import profile from "../../../../assets/images/home/me.jpg";
import Image from "next/image";

const Home = () => {
  return <S.Main>
    <div className="container">
      <Title className="center">Hi! I&apos;m </Title>
      <div className="home__intro flex center">
        <Image src={profile} alt="Débora Serra" width={3880} height={5184} />
        <div className="home__intro--right">
          <Subtitle>Débora Serra</Subtitle>
          <Text>Full Stack Web Developer | Chemist</Text>
          <Text>Baker | Cosmetologist</Text>
        </div>
      </div>
    </div>
  </S.Main>
}

export default Home