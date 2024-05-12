import styled from "styled-components";

export const Main = styled.form`
  color: ${({ theme }) => theme.text.primary};

  .control {
    &__form {
      &--title {
        margin-bottom: 20px;
        font-size: ${({ theme }) => theme.fontSizes[3]};
      } // &--title

      &--fields {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: flex-end;
        gap: 12px;
      } // &--fields

      &--label {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        &:last-of-type {
          max-width: 150px;
        } // &:last-of-type
      } // &--label

      &--check {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 70px;
        cursor: pointer;

        & input {
          position: relative;
          width: 20px;
          height: 20px;
          appearance: none;
          background: ${({ theme }) => theme.bg.input};
          border: 1px solid ${({ theme }) => theme.bg.tertiary};
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s;

          &:checked {
            background: ${({ theme }) => theme.bg.primary};
            border: 1px solid ${({ theme }) => theme.bg.primary};

            &::before {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              height: 10px;
              border-bottom: 2px solid ${({ theme }) => theme.bg.contrast[1]};
              border-right: 2px solid ${({ theme }) => theme.bg.contrast[1]};
              transform: translate(-50%, -64%) rotate(45deg);
              width: 6px;
            } // &::before
          } // &:checked
        } // & input
      } // &--check

      &--input {
        padding: 10px;
        border: 1px solid ${({ theme }) => theme.bg.primary};
        border-radius: 4px;
        font-size: ${({ theme }) => theme.fontSizes[1]};

        &:focus {
          outline: none;
        } // &:focus
      } // &--input

      &--btn {
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
        } // &:hover
      } // &--btn
    } // &__form
  } // .control
`;
