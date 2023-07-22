import styled from "styled-components";

export const Main = styled.main`
  padding: 40px 0;
  background-color: ${(props) => props.theme.bg.tertiary};

  .resume {
    &__content {
      border-top: 1px solid ${(props) => props.theme.bg.contrast[3]};
      padding-top: 32px;
      margin: 32px auto;
      max-width: 70%;
      display: flex;
      flex-direction: column;
      gap: 48px;
    } // &__content

    &__contact {
      &--info {
        display: flex;
        gap: 8px;
        align-items: center;
      } // &--info
    } // &__contact

    &__graduation,
    &__profession,
    &__languages {
      &--item {
        display: flex;
        gap: 8px;
        align-items: center;

        &-year,
        &-lang {
          font-weight: ${(props) => props.theme.fontWeights.link};
        } // &-year
      } // &--item
    } // &__graduation, &__profession

    &__btn {
      padding: 12px 24px;
      border: none;
      border-radius: 4px;
      background-image: linear-gradient(
        ${(props) => props.theme.bg.contrast[3]},
        ${(props) => props.theme.bg.contrast[0]}
      );

      color: ${(props) => props.theme.bg.primary};
      text-align: center;

      &:hover {
        background-image: linear-gradient(
          ${(props) => props.theme.bg.contrast[1]},
          ${(props) => props.theme.bg.contrast[3]}
        );
      }// &:hover


      &-container {
        display: flex;
        gap: 16px;
        margin: 64px auto;
        width: fit-content;
      } // &-container
    } // &__btn

    @media only screen and (max-width : 992px) {
      &__content {
        max-width: 100%;
      }// &__content
    }// @media only screen and (max-width : 992px)

    @media only screen and (max-width : 768px) {
      &__btn {
        &-container {
          flex-direction: column;
        }// &-container
      }// &__btn
    }// @media only screen and (max-width : 768px)
    
    @media only screen and (max-width : 400px) {
      &__contact {
      &--info {
        flex-direction: column;
        text-align: center;
      } // &--info
    } // &__contact

    &__graduation,
    &__profession,
    &__languages {
      &--item {
        flex-direction: column;
        text-align: center;
      } // &--item
    } // &__graduation, &__profession
    }// @media only screen and (max-width : 400px)
  } // .resume
`;
