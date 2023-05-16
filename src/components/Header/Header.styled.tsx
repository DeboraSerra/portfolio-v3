import styled from "styled-components";

export const Header = styled.header`
  background-color: ${props => props.theme.bg.primary};
  padding: 20px 12px;
  border-bottom: 1px solid ${props => props.theme.text.primary};

  color: ${props => props.theme.text.primary};
`;