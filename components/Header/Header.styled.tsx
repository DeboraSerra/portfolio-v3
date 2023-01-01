import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  background-color: ${(props) => props.theme.bg.secondary};
  padding: 12px 24px;
  box-shadow: 0 4px 24px ${(props) => props.theme.bg.input};
  height: 64px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header {
      &__title {
        font-size: ${(props) => props.theme.fontSizes[5]};
        font-weight: ${(props) => props.theme.fontWeights.heading};
        color: ${(props) => props.theme.text.primary};
        text-decoration: none;
      } // &__title

      &__links {
        display: flex;
        flex-grow: 1;
        justify-content: space-around;
        align-items: center;
        max-width: 700px;
      } // &__links

      &__link {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${(props) => props.theme.text.secondary};
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme.text.tertiary};
          text-decoration: underline;
        } // &:hover
      } // &__link

      &__theme-btn,
      &__nav-btn {
        color: ${(props) => props.theme.text.secondary};
        cursor: pointer;
        font-size: ${(props) => props.theme.fontSizes[3]};
      } // &__theme-btn

      @media only screen and (max-width: 576px) {
        &__links {
          position: absolute;
          top: 64px;
          left: 0;
          display: flex;
          justify-content: space-around;
          width: 100%;
          background-color: ${(props) => props.theme.bg.secondary};
          padding: 12px 24px;
          box-shadow: 0 12px 24px ${(props) => props.theme.bg.input};
        } // &__links
      } // @media only screen and (max-width : 576px)
    } // .header
  } // .container
`;

export const NavBar = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  max-width: 700px;
`;
