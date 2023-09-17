import styled from "styled-components";

export const Main = styled.main`
  padding: 40px 0;
  background-color: ${(props) => props.theme.bg.tertiary};

  .projects {
    &__box {
      display: flex;
      gap: 32px;
      justify-content: center;
      margin: 32px 0;
      border-top: 1px solid ${(props) => props.theme.bg.contrast[3]};
      padding-top: 32px;
      flex-wrap: wrap;
    } // &__box

    &__link {
      display: block;
      font-size: ${(props) => props.theme.fontSizes[5]};
      color: ${(props) => props.theme.text.secondary};
      text-align: center;

      text-decoration-color: ${(props) => props.theme.text.secondary};
      
      &:hover {
        text-decoration: underline;
      } // &:hover
      
      @media only screen and (max-width: 768px) {
        text-decoration: underline;
      } // @media only screen and (max-width : 768px)
    } // &__link

    &__card {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
      width: 150px;
      border-radius: 8px;
      box-shadow: 0 0 24px #00000029;
      padding: 8px 12px;
      
      text-align: center;
      text-decoration-color: ${(props) => props.theme.text.secondary};

      &:hover {
        box-shadow: 0 0 4px ${(props) => props.theme.bg.contrast[2]};
      } // &:hover

      &-image {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        & img {
          max-width: 100%;
          height: auto;
        } // & img
      } // &-imagem
    } // &__card
  } // .projects
`;
