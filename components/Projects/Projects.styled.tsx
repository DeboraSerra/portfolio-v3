import styled from "styled-components";

export const Main = styled.div`
  padding: 24px 48px;
  background-color: ${(props) => props.theme.bg.primary};
  min-height: 73vh;

  color: ${(props) => props.theme.text.secondary};

  .projects {
    &__title {
      margin-bottom: 48px;
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
    } // &__title

    &__cards {
      display: flex;
      flex-wrap: wrap;
      gap: 24px 12px;
    } // &__cards
  } // .projects
`;
