import Link from "next/link";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes[6]};
  color: ${(props) => props.theme.text.primary};

  &.medium {
    font-size: ${(props) => props.theme.fontSizes[5]};
  } // &.medium

  &.small {
    font-size: ${(props) => props.theme.fontSizes[4]};
  } // &.small

  &.center {
    text-align: center;
  } // &.center

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes[5]};

    &.medium {
      font-size: ${(props) => props.theme.fontSizes[4]};
    } // &.medium

    &.small {
      font-size: ${(props) => props.theme.fontSizes[3]};
    } // &.small
  } // @media only screen and (max-width : 768px)
`;

export const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes[5]};
  color: ${(props) => props.theme.text.secondary};

  &.center {
    text-align: center;
  }// &.center

  &.medium {
    font-size: ${(props) => props.theme.fontSizes[4]};
  } // &.medium

  &.small {
    font-size: ${(props) => props.theme.fontSizes[3]};
  } // &.small

  &.smaller {
    font-size: ${(props) => props.theme.fontSizes[2]};
  } // &.small

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes[4]};

    &.medium {
      font-size: ${(props) => props.theme.fontSizes[3]};
    } // &.medium

    &.small {
      font-size: ${(props) => props.theme.fontSizes[2]};
    } // &.small
  } // @media only screen and (max-width : 768px)
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes[3]};
  color: ${(props) => props.theme.text.tertiary};

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
  color: ${(props) => props.theme.text.tertiary};

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
  background-image: linear-gradient(
    ${(props) => props.theme.bg.contrast[3]},
    ${(props) => props.theme.bg.contrast[0]}
  );

  color: ${(props) => props.theme.bg.primary};

  &.no-bg {
    background: transparent;

    color: ${(props) => props.theme.text.primary};
  } // &.no-bg
`;

export const LinkStyled = styled(Link)`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: flex-start;

  font-size: ${(props) => props.theme.fontSizes[3]};
  color: ${(props) => props.theme.text.tertiary};

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
