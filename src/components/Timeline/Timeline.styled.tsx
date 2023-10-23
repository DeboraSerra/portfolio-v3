import styled, { keyframes } from "styled-components";

const fadeLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-200%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeRight = keyframes`
0% {
    opacity: 0;
    transform: translateX(200%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Main = styled.div`
  margin: 128px auto 64px;
  width: 900px;
  position: relative;
  display: flex;
  flex-direction: column;

  .line {
    width: 2px;
    height: 100%;
    position: absolute;
    background-color: ${(props) => props.theme.bg.contrast[3]};
    left: 50%;
    transform: translateX(-50%);
  } // .line

  .item {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    position: relative;

    &::before {
      content: '';
      width: 16px;
      height: 16px;
      background-color: ${props => props.theme.bg.contrast[3]};
      position: absolute;
      border-radius: 50%;
      border: 3px solid ${props => props.theme.bg.tertiary};
      top: 50%;
      transform: translateY(-50%);
    }// &::before

    text-align: center;

    &.left {
      align-self: flex-start;
      animation-name: ${fadeLeft};
      animation-duration: 0.8s;

      &::before {
        right: -58px;
      }// &::before

      &.active {
      }// &.active
    } // &.left

    &.right {
      align-self: flex-end;
      animation-name: ${fadeRight};
      animation-duration: 0.8s;

      &::before {
        left: -58px;
      }// &::before

      &.active {
      }// &.active
    } // &.right

    & .image {
      width: 200px;
      height: 150px;
      background-color: #fff;

      & img {
        height: 150px;
        max-width: 150px;
        width: auto;
        object-fit: contain;
      } // & img
    } // & .image

    & .title {
      font-weight: ${props => props.theme.fontWeights.body};

      & .date {
      font-size: ${(props) => props.theme.fontSizes[2]};
      font-weight: ${props => props.theme.fontWeights.bold};
    }// & .date
    }// & .title
  } // .item

  @media only screen and (max-width : 992px) {
    width: 100%;

    .item {
      max-width: 48%;

      &.left, &.right {
        &.active {
          animation-name: none;
        }// &.active
      }// &.left, &.right

      &.left {
        &::before {
          right: -22px;
        }// &::before
      }// &.left

      &.right {
        &::before {
          left: -22px;
        }// &::before
      }// &.right
    }// .item
  }// @media only screen and (max-width : 992px)

  @media only screen and (max-width : 768px) {
    .line {
      left: 0;
    }// .line

    .item {
      &.left, &.right {
        align-self: center;
        max-width: 90%;

        &::before {
          left: -72px;
        }// &::before
      }// &.left, &.right
    }// .item
  }// @media only screen and (max-width : 768px)
`;
