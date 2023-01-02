import styled from "styled-components";

export const Main = styled.div`
  padding: 48px;
  position: relative;
  background-color: ${props => props.theme.bg.primary};
  display: flex;
  justify-content: space-between;
  gap: 24px;

  .project {
    &__back {
      &-btn {
        position: absolute;
        top: 4px;
        display: flex;
        align-items: center;
        gap: 2px;
        cursor: pointer;

        color: ${props => props.theme.text.primary};
        font-weight: ${props => props.theme.fontWeights.bold};
      }// &-btn
    }// &__back

    &__img {
      object-fit: cover;
    }// &__img

    &__right {
      display: flex;
      flex-direction: column;

      color: ${props => props.theme.text.secondary};
    }// &__right

    &__title {
      margin-bottom: 24px;
      position: relative;

      color: ${props => props.theme.text.primary};
      font-weight: ${props => props.theme.fontWeights.heading};
      text-align: center;

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
    }// &__ttile

    &__description {
      margin-bottom: 24px;

      line-height: ${props => props.theme.lineHeights.body};
      font-size: ${props => props.theme.fontSizes[1]};

      & p {
        margin-bottom: 12px;

        &::first-letter {
          font-size: ${props => props.theme.fontSizes[3]};
        }// &::first-letter
      }// & p
    }// &__description

    &__link {
      background-color: ${props => props.theme.bg.inset};
      border: none;
      border-radius: 4px;
      padding: 12px 24px;
      margin: auto;
      cursor: pointer;

      color: ${props => props.theme.text.secondary};
      font-weight: ${props => props.theme.fontWeights.heading};
      font-size: ${props => props.theme.fontSizes[1]};

      & a {
        display: block;
        width: 100%;
        height: 100%;
      }// & a

      &:hover {
        background-color: ${props => props.theme.bg.input};
      }// &:hover

      &:active {
        box-shadow: 0 0 4px ${props => props.theme.bg.inset};
      }// &:active
    }// &__link
  }// .project
`;
