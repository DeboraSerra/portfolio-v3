import styled from "styled-components";

export const Main = styled.main`
  padding: 40px 0;
  background-color: ${(props) => props.theme.bg.tertiary};
  min-height: 61.5vh;

  .project {
    &__box {
      margin: 32px auto;
      padding-top: 32px;
      border-top: 1px solid ${(props) => props.theme.bg.contrast[3]};
      display: flex;
      flex-wrap: wrap;
      gap: 16px 32px;
      justify-content: center;
    } // &__box

    &__card {
      width: 220px;
      height: 300px;
      border-radius: 4px;
      box-shadow: 0 0 24px #00000029;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      cursor: pointer;

      text-align: center;

      &:hover {
        box-shadow: 0 0 4px ${(props) => props.theme.bg.contrast[2]};
      } // &:hover
    } // &__card

    &__img {
      height: 50%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      } // & img
    } // &-img

    &__modal {
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: #000000b7;
      display: flex;
      z-index: 4;

      &-box {
        background-color: ${(props) => props.theme.bg.secondary};
        width: 70%;
        min-height: 80vh;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        padding: 24px 32px;
        position: relative;
        border-radius: 8px;
        box-shadow: 0 0 48px ${(props) => props.theme.text.placeholder};

        & a {
          color: ${props => props.theme.text.tertiary};

          &:hover {
            text-decoration: underline;
          }// &:hover
        }// & a

        @media only screen and (max-width : 768px) {
          width: 90%;

          & a {
            text-decoration: underline;
          }// & a
        }// @media only screen and (max-width : 768px)

        @media only screen and (max-width : 350px) {
          max-width: 100%;
          margin: 68px auto;
        }// @media only screen and (max-width : 350px)

        
      } // &-box

      &-img {
        height: 40%;
        width: 100%;
        flex-grow: 2;
        justify-content: center;
        align-items: center;
        display: flex;

        & img {
          max-height: 100%;
          width: auto;
          max-width: 100%;
          height: auto;
          object-fit: contain;
        } // & img
      } // &-img

      &-text {
        flex-grow: 1;
        text-align: center;
        max-width: 700px;
      } // &-text

      &-close {
        position: absolute;
        right: 4px;
        top: 4px;
        cursor: pointer;
        background-color: transparent;
        border: none;

        color: ${props => props.theme.text.tertiary};
        font-size: ${(props) => props.theme.fontSizes[4]};
      } // &-close
    } // &__modal
  } // .project
`;
