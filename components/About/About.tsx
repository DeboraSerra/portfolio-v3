import { NextPage } from "next";
import Image from "next/image";

import * as S from "./About.styled";
import Fred from "../../assets/images/about/fred.jpg";

interface Props {}

const About: NextPage<Props> = () => {
  const age = () => {
    const birth = new Date("09/16/1992");
    const monthDiff = Date.now() - birth.getTime();
    const ageDt = new Date(monthDiff);
    const year = ageDt.getUTCFullYear();
    const age = Math.abs(year - 1970);
    return age;
  };

  return (
    <S.Main>
      <div className="container">
        <h2 className="about__title">About me</h2>
        <section className="about__left-sect">
          <Image
            src={Fred}
            alt="The most beautiful dog!"
            width={300}
            height={500}
            className="about__img"
          />
          <p className="about__p">
            I am brazilian, born in Brazilia - DF. I&apos;ve lived for two
            months in Itapema/SC and almost two years in Andradas/MG.
          </p>
          <p className="about__p">
            I am {age()} years old, I like to watch movies and TV series, learn
            new things, read, dye my hair, a little of everything.
          </p>
          <p className="about__p">
            I&apos;m the mother of this beautiful dog called Fred Weasley.
          </p>
        </section>

        <section className="about__skills-sect">
          <h2 className="about__skills-title">My skills</h2>
          <ul className="about__skills-list">
            <li>Linux</li>
            <li>Git & GitHub</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Jest</li>
            <li>React</li>
            <li>Next.js</li>
            <li>RTL</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>REST API</li>
            <li>Sequelize</li>
            <li>Node.js</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Python</li>
            <li>OOP</li>
            <li>SOLID</li>
          </ul>
        </section>
      </div>
    </S.Main>
  );
};

export default About;
