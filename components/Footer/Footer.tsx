import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Footer>
      <div className="container">
        <h2 className="footer__heading">Developed by Débora Serra</h2>
        <nav className="footer__nav">
          <a
            target="_blank"
            rel="noreferrer"
            className="footer__nav--item"
            href="https://github.com/DeboraSerra"
          >
            My github page
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="footer__nav--item"
            href="https://wa.me/+5561982311582"
          >
            My what&apos;s app
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="footer__nav--item"
            href="https://www.linkedin.com/in/debora-r-serra/"
          >
            My Linked-in
          </a>
        </nav>
      </div>
    </S.Footer>
  );
};

export default Footer;
