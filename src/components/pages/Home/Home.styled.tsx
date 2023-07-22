import styled from "styled-components";

export const Main = styled.main`
  padding: 40px 0;
  background-color: ${props => props.theme.bg.tertiary};

  .home {
    &__intro {
      margin: 24px 0;
      padding-top: 28px;
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

      @media only screen and (max-width : 992px) {
        flex-direction: column;
        gap: 48px;

        & img {
          max-width: 100%;
          height: auto;
          aspect-ratio: 1/1;
        }// & img
      }// @media only screen and (max-width : 992px)
    }// &__intro
  }// .home
`;
