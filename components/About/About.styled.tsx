import styled from "styled-components";
import check from '../../assets/images/about/check-mark-icon.svg';

export const Main = styled.div`
  min-height: 72vh;
  background-color: ${(props) => props.theme.bg.primary};
  padding: 24px 48px;

  color: ${(props) => props.theme.text.secondary};

  .about {
    &__title {
      margin-bottom: 48px;
      text-align: center;
      font-size: ${(props) => props.theme.fontSizes[6]};
      position: relative;

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

    &__left-sect {
      line-height: 1.6;
      text-align: center;
      overflow: hidden;
    } // &__left

    &__p {
      margin-bottom: 12px;

      font-size: ${(props) => props.theme.fontSizes[1]};
      text-align: left;

      &::first-letter {
        font-size: ${(props) => props.theme.fontSizes[3]};
      } // &::first-letter
    } // &__p

    &__img {
      float: right;
      height: 350px;
      object-fit: cover;
      object-position: top left;
      margin: 0 24px;
    } // &__img

    &__skills {
      &-title {
        margin: 48px auto;
        position: relative;

        font-size: ${(props) => props.theme.fontSizes[4]};
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
      } // &-title

      &-list {
        list-style-position: inside;
        list-style-type: circle;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 12px;
        max-height: 50vh;

        & li {
          max-width: 200px;

          line-height: 2;
          font-size: ${(props) => props.theme.fontSizes[1]};
        }// & li
      }// &-list
    } // &__skills
  } // .about

  @media only screen and (max-width: 576px) {
    padding: 12px 24px;

    .about {
      &__img {
        float: none;
        margin: 12px 0;
      } // &__img

      &__skills {
        &-list {
          max-height: 80vh;
        }// &-list
      }// &__skills
    } // .about
  } // @media only screen and (max-width : 576px)
`;
