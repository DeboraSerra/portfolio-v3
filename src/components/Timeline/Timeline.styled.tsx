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
  margin: 128px auto 0;
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
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    text-align: center;

    &.left {
      align-self: flex-start;

      &.active {
        animation-name: ${fadeLeft};
        animation-duration: 0.8s;
      }// &.active
    } // &.left

    &.right {
      align-self: flex-end;

      &.active {
        animation-name: ${fadeRight};
        animation-duration: 0.8s;
      }// &.active
    } // &.right

    & .image {
      width: 200px;
      height: 150px;

      & img {
        height: 150px;
        /* width: auto; */
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
      }// &.left, &.right
    }// .item
  }// @media only screen and (max-width : 768px)
`;
