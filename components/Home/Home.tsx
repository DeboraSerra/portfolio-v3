import { NextPage } from "next";
import Image from "next/image";
import Profile from "../../assets/images/home/profile.jpg";

import * as S from "./Home.styled";

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <S.Main>
      <h1 className="home__title">Hello world!</h1>
      <h2 className="home__subtitle">My name is Débora Serra</h2>
      <Image
        src={Profile}
        alt="Débora Serra"
        width={500}
        height={600}
        className="home__img"
      />
      <p className="home__description">
        Web developer student in Trybe | Masters degree in Chemistry by UnB
      </p>
      <p className="home__description">
        Cosmetologist by iCosmetologia | Post-graduated in Gastronomy in PUC-RS
      </p>
      <p className="home__description">
        See my{" "}
        <a
          href="https://github.com/DeboraSerra"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </S.Main>
  );
};

export default Home;
