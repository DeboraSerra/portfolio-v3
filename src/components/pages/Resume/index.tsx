import { PHONE } from "@/helpers/Context";
import { graduations, languages, professionHistory } from "@/helpers/resume";
import { Subtitle, Text, Title } from "@/styles/styled";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import * as S from "./Resume.styled";

const englishFile = "/files/Resume-Debora-Serra.pdf";
const portugueseFile = "/files/Currículo-Débora-Serra.pdf";

const Resume = () => {
  return (
    <S.Main>
      <div className='container'>
        <div className='resume'>
          <Title className='center'>Débora Rodrigues Serra</Title>
          <div className='resume__content'>
            <div className='resume__contact'>
              <Subtitle className='medium center'>Contact</Subtitle>
              <Text className='small resume__contact--info'>
                <span>
                  <FaWhatsapp className='resume-icon' />
                  <FiPhone className='resume-icon' />
                </span>
                {PHONE}
              </Text>
              <Text className='small resume__contact--info'>
                <FiMail className='resume-icon' />
                debora.r.serra@gmail.com
              </Text>
              <Text className='small resume__contact--info'>
                <FaGithub className='resume-icon' />
                https://github.com/DeboraSerra
              </Text>
              <Text className='small resume__contact--info'>
                <FaLinkedin className='resume-icon' />
                https://www.linkedin.com/in/debora-r-serra/
              </Text>
            </div>

            <div className='resume__profession'>
              <Subtitle className='medium center'>
                Professional history
              </Subtitle>
              {professionHistory.map(({ start, end, title }, i) => (
                <div className='resume__profession--item' key={i}>
                  <Text className='small resume__profession--item-year'>
                    {start} - {end ?? "current"}
                  </Text>
                  <Text className='small resume__profession--item-place'>
                    {title}
                  </Text>
                </div>
              ))}
            </div>

            <div className='resume__graduation'>
              <Subtitle className='medium center'>Academic graduation</Subtitle>
              {graduations.map(({ start, end, title }, i) => (
                <div className='resume__graduation--item' key={i}>
                  <Text className='small resume__graduation--item-year'>
                    {start} - {end ?? "current"}
                  </Text>
                  <Text className='small resume__graduation--item-place'>
                    {title}
                  </Text>
                </div>
              ))}
            </div>

            <div className='resume__languages'>
              <Subtitle className='medium center'>Languages</Subtitle>
              {languages.map(({ name, level }, i) => (
                <div className='resume__languages--item' key={i}>
                  <Text className='small resume__languages--item-lang'>
                    {name}
                  </Text>
                  <Text className='small resume__languages--item-level'>
                    Level: {level}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <Subtitle className='smaller center'>Vancouver, October, 2024</Subtitle>
        </div>
        <div className='resume__btn-container'>
          <a
            className='resume__btn'
            href={englishFile}
            download='Resume-Débora-Serra.pdf'
          >
            Download resume (english)
          </a>
          <a
            className='resume__btn'
            href={portugueseFile}
            download='Curriculo-Débora-Serra.pdf'
          >
            Download resume (portuguese)
          </a>
        </div>
      </div>
    </S.Main>
  );
};

export default Resume;
