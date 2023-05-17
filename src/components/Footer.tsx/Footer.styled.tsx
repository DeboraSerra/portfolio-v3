import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${props => props.theme.bg.primary};
  padding: 40px 0;
  border-top: 1px solid ${props => props.theme.text.primary};

  color: ${props => props.theme.text.primary};

  .footer {
    &__contact {
      display: flex;
      flex-direction: column;
      gap: 4px;
      border-top: 1px solid ${props => props.theme.bg.contrast[3]};
      padding-top: 16px;
    }// &__contact
  }// .footer
`;
