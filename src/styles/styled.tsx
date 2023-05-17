import Link from "next/link";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes[6]};

  &.medium {
    font-size: ${(props) => props.theme.fontSizes[5]};
  } // &.medium

  &.small {
    font-size: ${(props) => props.theme.fontSizes[4]};
  } // &.small
`;

export const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes[5]};

  &.medium {
    font-size: ${(props) => props.theme.fontSizes[4]};
  } // &.medium

  &.small {
    font-size: ${(props) => props.theme.fontSizes[3]};
  } // &.small
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes[3]};

  &.medium {
    font-size: ${(props) => props.theme.fontSizes[2]};
  } // &.medium

  &.small {
    font-size: ${(props) => props.theme.fontSizes[1]};
  } // &.small

  &.smallest {
    font-size: ${(props) => props.theme.fontSizes[0]};
  } // &.small
`;

export const AnchorText = styled.a`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: flex-start;

  font-size: ${(props) => props.theme.fontSizes[3]};

  &:hover {
    color: inherit;
    text-decoration: underline;
  } // &:hover

  &:active {
    color: ${(props) => props.theme.bg.contrast[0]};
  } // &:active

  &.medium {
    font-size: ${(props) => props.theme.fontSizes[2]};
  } // &.medium

  &.small {
    font-size: ${(props) => props.theme.fontSizes[1]};
  } // &.small

  &.smallest {
    font-size: ${(props) => props.theme.fontSizes[0]};
  } // &.small
`;

export const ButtonLink = styled.a``;

export const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  background-image: linear-gradient(${props => props.theme.bg.contrast[3]}, ${props => props.theme.bg.contrast[0]});

  color: ${props => props.theme.bg.primary};
  
  &.no-bg {
    background: transparent;
    
    color: ${props => props.theme.text.primary};
  }// &.no-bg
`;

export const LinkStyled = styled(Link)`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: flex-start;

  font-size: ${(props) => props.theme.fontSizes[3]};

  &:hover {
    color: inherit;
    text-decoration: underline;
  } // &:hover

  &:active {
    color: ${(props) => props.theme.bg.contrast[0]};
  } // &:active

  &.medium {
    font-size: ${(props) => props.theme.fontSizes[2]};
  } // &.medium

  &.small {
    font-size: ${(props) => props.theme.fontSizes[1]};
  } // &.small

  &.smallest {
    font-size: ${(props) => props.theme.fontSizes[0]};
  } // &.small
`;

export const ModalCard = styled.div``;
