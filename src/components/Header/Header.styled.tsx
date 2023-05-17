import styled from "styled-components";

export const Header = styled.header`
  background-color: ${props => props.theme.bg.primary};
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.text.primary};

  color: ${props => props.theme.text.primary};

  nav {
    flex-basis: 70%;
  }// nav

  .header {
    &__menu {
      position: relative;
      
      &--abs {
        padding: 8px 12px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${props => props.theme.bg.primary};
        box-shadow: 0 8px 12px ${props => props.theme.bg.shadow};
      }// &--abs
    }// &__menu
  }// .header
`;