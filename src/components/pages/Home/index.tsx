import { Subtitle, Text, Title } from "@/styles/styled";
import * as S from "./Home.styled";

import profile from "../../../../assets/images/home/me.jpg";
import Image from "next/image";
import Timeline from "@/components/Timeline";

const Home = () => {
  return (
    <S.Main>
      <div className='container'>
        <Title className='center'>Welcome to my Portfolio!</Title>
        <div className='home__intro flex center'>
          <Image src={profile} alt='Débora Serra' width={388.0} height={518.4} />
          <div className='home__intro--right'>
            <Subtitle>Débora Serra</Subtitle>
            <Text>Full Stack Web Developer | Chemist</Text>
            <Text>Baker | Cosmetologist</Text>
          </div>
        </div>
        <Timeline />
      </div>
    </S.Main>
  );
};

export default Home;
