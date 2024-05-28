import styled from "styled-components";

export const Main = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  padding: 0;

  color: ${({ theme }) => theme.text.primary};

  .invoice {
    &__filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 16px;
      gap: 12px;

      &--btn {
        padding: 8px 12px;
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
        } // &:hover
      } // &--btn

      & .refresh-icon {
        font-size: ${(props) => props.theme.fontSizes[4]};
        color: ${(props) => props.theme.text.primary};
      } // & .refresh-icon
    } // &__filter

    &__header {
      display: flex;
      align-items: center;
      width: 100%;
      background-color: ${({ theme }) => theme.bg.quaternary};

      text-align: center;

      & h2 {
        cursor: pointer;

        font-size: ${({ theme }) => theme.fontSizes[4]};
      } // & h2

      &--client {
        width: 40%;
      }

      &--date {
        width: 22%;
      }

      &--value {
        width: 22%;
      }

      &--column {
        width: 15%;

        text-align: center;
      } // &--column
    } // &__header

    &__item {
      display: flex;
      align-items: center;
      width: 100%;
      padding-top: 8px;

      text-align: center;

      &:nth-of-type(even) {
        background-color: ${({ theme }) => theme.bg.primary};
      }

      &--client {
        width: 40%;

        font-size: ${({ theme }) => theme.fontSizes[3]};
      }

      &--date {
        width: 22%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &--value {
        width: 22%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &--column {
        width: 15%;

        &.button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: background 0.3s;

          color: ${({ theme }) => theme.text.primary};
          font-size: ${({ theme }) => theme.fontSizes[4]};

          &:hover {
            color: ${({ theme }) => theme.bg.contrast[3]};
          } // &:hover
        } // &.button
      } // &--column
    } // &__item]

    &__total {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 12px 32px;

      font-size: ${({ theme }) => theme.fontSizes[3]};

      &--label {
        font-weight: bold;
      }
    } // &__total
  } // .invoice

  @media only screen and (max-width: 768px) {
    .invoice {
      &__filter {
        &--btn {
          font-size: ${({ theme }) => theme.fontSizes[0]};
        } // &--btn
      } // &__filter

      &__header {
        font-size: ${({ theme }) => theme.fontSizes[2]};
      } // &__header

      &__item {
        font-size: ${({ theme }) => theme.fontSizes[1]};
      } // &__item
    } // .invoice
  } // @media only screen and (max-width : 768px)
`;
