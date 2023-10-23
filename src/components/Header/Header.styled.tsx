import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.bg.primary};
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.text.primary};
  height: 90px;

  color: ${(props) => props.theme.text.primary};

  nav {
    flex-basis: 70%;
  } // nav

  .hamburger-icon {
    font-size: ${(props) => props.theme.fontSizes[3]};
    cursor: pointer;
  } // .hamburger-icon

  .header {
    &.active {
      animation-name: ${fadeLeft};
      animation-duration: 0.5s;
    } // &.active

    &__logo {
      & img {
        border-radius: 50%;
      }// & img
    }// &__logo

    &__link {
      display: flex;
      gap: 2px;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;

      font-size: ${(props) => props.theme.fontSizes[3]};
      color: ${(props) => props.theme.text.tertiary};

      &:hover {
        color: inherit;
        text-decoration: underline;
      } // &:hover

      &:active {
        color: ${(props) => props.theme.bg.contrast[0]};
      } // &:active

      &.medium {
        font-size: ${(props) => props.theme.fontSizes[2]};
      } // &.medium

      &.small {
        font-size: ${(props) => props.theme.fontSizes[1]};
      } // &.small

      &.smallest {
        font-size: ${(props) => props.theme.fontSizes[0]};
      } // &.small
    } // &__link

    &__btn {
      padding: 12px 24px;
      border: none;
      border-radius: 4px;

      color: ${(props) => props.theme.bg.primary};
      background: transparent;

      color: ${(props) => props.theme.text.primary};
    } // &__btn

    &__menu {
      position: relative;

      &--abs {
        width: 180px;
        padding: 8px 12px;
        position: absolute;
        left: -12px;
        background-color: ${(props) => props.theme.bg.primary};
        box-shadow: 2px 4px 12px 4px ${(props) => props.theme.bg.shadow};
      } // &--abs
    } // &__menu

    @media only screen and (max-width: 768px) {
      position: absolute;
      min-width: 230px;
      top: 90px;
      background-color: ${(props) => props.theme.bg.primary};
      height: 100vh;
      left: 0;
      padding: 12px 24px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      z-index: 3;

      &__menu {
        &--abs {
          position: static;
          transform: translateX(0);
          box-shadow: none;
          animation-name: ${fadeIn};
          animation-duration: 0.5s;
        } // &--abs
      } // &__menu
    } // @media only screen and (max-width : 768px)
  } // .header
`;
