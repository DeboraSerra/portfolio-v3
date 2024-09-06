import { PHONE, WHATS_LINK } from "@/helpers/Context";
import { AnchorText, Text, Title } from "@/styles/styled";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Footer>
      <div className='container'>
        <Title className='small'>Débora Serra</Title>
        <Text className='small'>Full Stack Developer</Text>
        <div className='footer__contact'>
          <AnchorText
            target='__blank'
            rel='noreferrer'
            href={WHATS_LINK}
            className='smallest'
          >
            <BsWhatsapp className='footer__icon' />
            {PHONE}
          </AnchorText>
          <AnchorText
            target='__blank'
            rel='noreferrer'
            href='https://github.com/DeboraSerra'
            className='smallest'
          >
            <BsGithub className='footer__icon' />
            https://github.com/DeboraSerra
          </AnchorText>
          <AnchorText
            target='__blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/debora-r-serra/'
            className='smallest'
          >
            <BsLinkedin className='footer__icon' />
            https://www.linkedin.com/in/debora-r-serra/
          </AnchorText>
          <AnchorText
            target='__blank'
            rel='noreferrer'
            href='mailto:debora.r.serra@gmail.com'
            className='smallest'
          >
            <SiGmail className='footer__icon' />
            debora.r.serra@gmail.com
          </AnchorText>
        </div>
      </div>
    </S.Footer>
  );
};

export default Footer;
