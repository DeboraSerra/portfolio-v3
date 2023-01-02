import styled from "styled-components";

export const Main = styled.div`
  position: absolute;
  z-index: 100;
  top: 40px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bg.secondary};
  padding: 12px;
  box-shadow: 0 12px 24px ${(props) => props.theme.bg.input};

  color: ${(props) => props.theme.text.secondary};

  & a {
    margin-bottom: 8px;

    &:last-of-type {
      margin-bottom: 0;
    } // &:last-of-type
    &:hover {
      color: ${(props) => props.theme.text.tertiary};
      text-decoration: underline;
    } // &:hover
  } // & a

  @media only screen and (max-width: 576px) {
    top: 28px;
  } // @media only screen and (max-width : 576px)
`;
