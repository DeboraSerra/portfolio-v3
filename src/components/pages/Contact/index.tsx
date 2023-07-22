import { Text, Title } from "@/styles/styled";
import * as S from "./Contact.styled";

const Contact = () => {
  return (
    <S.Main>
      <div className='container'>
        <Title className='center'>🚧 Page in construction 🚧</Title>
        <div className='contact__content'>
          <Text className='contact__text'>
            Send me an email then:{" "}
            <a href='mailto:debora.r.serra@gmail.com'>debora.r.serra@gmail.com</a>
          </Text>
          <Text className='contact__text'>
            Or text me:{" "}
            <a href='https://wa.me/5561982311582'>+55 61 9 8231 1582</a>
          </Text>
          <Text className="contact__text">Look for me on <a href="https://www.linkedin.com/in/debora-r-serra/">LinkedIn</a></Text>
          <Text className="contact__text">Or see my projects and technologies on <a href="https://github.com/DeboraSerra">GitHub</a></Text>
        </div>
      </div>
    </S.Main>
  );
};

export default Contact;
