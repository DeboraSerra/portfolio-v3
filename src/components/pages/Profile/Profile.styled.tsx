import styled from "styled-components";

export const Main = styled.div`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bg.quaternary};

  color: ${(props) => props.theme.text.primary};

  & img {
    border-radius: 50%;
    margin-bottom: 40px;
    box-shadow: 0 0 12px 4px ${(props) => props.theme.bg.tertiary};
  } // & img

  .profile {
    &__login {
      margin-bottom: 32px;

      font-size: ${(props) => props.theme.fontSizes[4]};
    } // &__login

    &__name {
      font-size: ${(props) => props.theme.fontSizes[6]};
    } // &__name
  } // .profile
`;
