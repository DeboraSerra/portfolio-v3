import { Subtitle, Text, Title } from "@/styles/styled";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import * as S from "./Resume.styled";

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
                <div><FaWhatsapp className='resume-icon' />
                <FiPhone className='resume-icon' /></div>
                +55 61 98231 1582
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

            <div className='resume__graduation'>
              <Subtitle className='medium center'>Academic graduation</Subtitle>

              <div className='resume__graduation--item'>
                <Text className='small resume__graduation--item-year'>
                  2021 - 2022
                </Text>
                <Text className='small resume__graduation--item-school'>
                  Web development - Trybe
                </Text>
              </div>
              <div className='resume__graduation--item'>
                <Text className='small resume__graduation--item-year'>
                  2018 - 2019
                </Text>
                <Text className='small resume__graduation--item-school'>
                  Specialization in gastronomy and authorial cook - PUCRS
                </Text>
              </div>
              <div className='resume__graduation--item'>
                <Text className='small resume__graduation--item-year'>
                  2014 - 2016
                </Text>
                <Text className='small resume__graduation--item-school'>
                  Masters degree in chemistry - UnB
                </Text>
              </div>
              <div className='resume__graduation--item'>
                <Text className='small resume__graduation--item-year'>
                  2014 - 2016
                </Text>
                <Text className='small resume__graduation--item-school'>
                  MBA in cosmetics technology - ICosmetologia
                </Text>
              </div>
              <div className='resume__graduation--item'>
                <Text className='small resume__graduation--item-year'>
                  2010 - 2014
                </Text>
                <Text className='small resume__graduation--item-school'>
                  Graduation in chemistry - UnB
                </Text>
              </div>
            </div>

            <div className='resume__profession'>
              <Subtitle className='medium center'>Professional history</Subtitle>
              <div className='resume__profession--item'>
                <Text className='small resume__profession--item-year'>
                  09/2022 - Current
                </Text>
                <Text className='small resume__profession--item-place'>
                  Front End Developer at UOL Host, São Paulo/SP
                </Text>
              </div>
              <div className='resume__profession--item'>
                <Text className='small resume__profession--item-year'>
                  09/2022 - 09/2022
                </Text>
                <Text className='small resume__profession--item-place'>
                  Front End Developer in Scandiweb, Latvia
                </Text>
              </div>
              <div className='resume__profession--item'>
                <Text className='small resume__profession--item-year'>
                  05/2022 - 09/2022
                </Text>
                <Text className='small resume__profession--item-place'>
                  Summer Job Tutor in Trybe, Belo Horizonte/MG
                </Text>
              </div>
              <div className='resume__profession--item'>
                <Text className='small resume__profession--item-year'>
                  05/2021 - 10/2021
                </Text>
                <Text className='small resume__profession--item-place'>
                  Health agent in Andradas/MG
                </Text>
              </div>
              <div className='resume__profession--item'>
                <Text className='small resume__profession--item-year'>
                  02/2020 - 12/2020
                </Text>
                <Text className='small resume__profession--item-place'>
                  Chemistry technitian in Andradas/MG
                </Text>
              </div>
              <div className='resume__profession--item'>
                <Text className='small resume__profession--item-year'>
                  01/2018 - 08/2018
                </Text>
                <Text className='small resume__profession--item-place'>
                  Sales assistant in Comunhão Espírita de Brasília, Brasília/DF
                </Text>
              </div>
              <div className='resume__profession--item'>
                <Text className='small resume__profession--item-year'>
                  10/2014 - 10/2016
                </Text>
                <Text className='small resume__profession--item-place'>
                  Intern in EMBRAPA - Agroenergy, Brasília/DF
                </Text>
              </div>
            </div>

            <div className='resume__languages'>
              <Subtitle className='medium center'>Languages</Subtitle>

              <div className='resume__languages--item'>
                <Text className='small resume__languages--item-lang'>
                  English
                </Text>
                <Text className='small resume__languages--item-level'>
                  Level: Intermediary
                </Text>
              </div>
              <div className='resume__languages--item'>
                <Text className='small resume__languages--item-lang'>
                  Portuguese
                </Text>
                <Text className='small resume__languages--item-level'>
                  Level: Native
                </Text>
              </div>
            </div>
          </div>
          <Subtitle className='smaller center'>Brasília, July, 2023</Subtitle>
        </div>
        <div className='resume__btn-container'>
          <a
            className='resume__btn'
            href='/files/Resume-jun-23.pdf'
            download='Resume-Débora-Serra.pdf'
          >
            Download resume (english)
          </a>
          <a
            className='resume__btn'
            href='/files/Resume-jun-23.pdf'
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
