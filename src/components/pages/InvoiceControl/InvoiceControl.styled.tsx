import styled from "styled-components";

export const Main = styled.div`
  background-color: ${({ theme }) => theme.bg.tertiary};
  padding: 40px 0;
  min-height: 61vh;

  .control {
    &__title {
      color: ${({ theme }) => theme.text.primary};
    } // &__title
  } // .control
`;
