import styled from "styled-components";

export const Main = styled.main`
  padding: 80px 0;
  background-color: ${props => props.theme.bg.tertiary};
  min-height: 100vh;

  .home {
    &__intro {
      margin: 32px 0;
      padding-top: 32px;
      border-top: 1px solid ${props => props.theme.bg.contrast[3]};

      & img {
        width: 500px;
        height: 500px;
        object-fit: cover;
        object-position: 50% 60%;
        border-radius: 50%;
      }// & img

      &--right {
        min-width: 50%;

        text-align: center;
      }// &--right
    }// &__intro
  }// .home
`;
