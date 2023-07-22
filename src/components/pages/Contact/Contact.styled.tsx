import styled from "styled-components";

export const Main = styled.main`
  padding: 40px 0;
  background-color: ${(props) => props.theme.bg.tertiary};
  min-height: 61.5vh;

  .contact {
    &__content {
      margin-top: 128px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }// &__content

    &__text {
      text-align: center;

      & a {
        &:hover {
          text-decoration: underline;
          color: inherit;
        }// &:hover

        @media only screen and (max-width : 768px) {
          text-decoration: underline;
        }// @media only screen and (max-width : 768px)
      }// & a
    }// &__text
  }// .contact
`;
