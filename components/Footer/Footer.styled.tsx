import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${props => props.theme.bg.secondary};
  min-height: 64px;
  padding: 12px 24px;
  position: relative;
  bottom: 0;

  .footer {
    &__heading {
      font-size: ${props => props.theme.fontSizes[2]};
      color: ${props => props.theme.text.secondary};
    }// &__heading

    &__nav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 30%;

      font-size: ${props => props.theme.fontSizes[0]};

      &--item {
        line-height: ${props => props.theme.lineHeights.body};
      }// &:a
    }// &__nav
  }// .footer

  @media only screen and (max-width : 576px) {
    flex-direction: column;
    gap: 16px;
    align-items: center;

    .footer {
      &__heading {
        text-align: center;
      }// &__heading
      
      &__nav {
        align-items: center;
        width: 100%;
      }// &__nav
    }// .footer
  }// @media only screen and (max-width : 576px)
`;
