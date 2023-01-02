import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.bg.secondary};
  min-height: 64px;
  padding: 24px 48px;
  position: relative;
  bottom: 0;
  box-shadow: 0 -4px 24px ${(props) => props.theme.bg.input};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .footer {
      &__heading {
        font-size: ${(props) => props.theme.fontSizes[2]};
        color: ${(props) => props.theme.text.primary};
      } // &__heading

      &__nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 30%;

        font-size: ${(props) => props.theme.fontSizes[0]};

        &--item {
          line-height: ${(props) => props.theme.lineHeights.body};

          &:hover {
            text-decoration: underline;
          } // &:hover
        } // &:a
      } // &__nav
    } // .footer
  } // .container

  @media only screen and (max-width: 576px) {
    .container {
      flex-direction: column;
      gap: 16px;
      align-items: center;

      .footer {
        &__heading {
          text-align: center;
        } // &__heading

        &__nav {
          align-items: center;
          width: 100%;

          &--item {
            text-decoration: underline;
          } // &--item
        } // &__nav
      } // .footer
    } // .container
  } // @media only screen and (max-width : 576px)
`;
