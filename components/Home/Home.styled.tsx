import styled from "styled-components";

export const Main = styled.div`
  min-height: 74vh;
  background-color: ${(props) => props.theme.bg.primary};
  padding: 24px 48px;

  color: ${(props) => props.theme.text.secondary};
  text-align: center;

  .home {
    &__title {
      margin-bottom: 16px;
      font-size: ${(props) => props.theme.fontSizes[3]};
    } // &__title

    &__subtitle {
      position: relative;
      font-size: ${(props) => props.theme.fontSizes[6]};

      &::before {
        content: "";
        background-color: ${(props) => props.theme.bg.inset};
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
        width: 150px;
        height: 1px;
      } // &::before
    } // &__title

    &__img {
      width: 350px;
      height: 350px;
      object-fit: cover;
      border-radius: 50%;
      margin: 24px 0;
      box-shadow: 0 0 24px ${(props) => props.theme.bg.input};
    } // &__img

    &__description {
      margin-bottom: 16px;
      font-size: ${(props) => props.theme.fontSizes[2]};

      &:last-of-type {
        margin: 32px 0 0;
      } // &:last-of-type
    } // &__description
  } // .home
  @media only screen and (max-width: 576px) {
    padding: 12px;
    .home {
      &__img {
        width: 280px;
        height: 280px;
      } // &__img

      &__description {
        line-height: 2;
      } // &__description
    } // .home
  } // @media only screen and (max-width : 576px)
`;
