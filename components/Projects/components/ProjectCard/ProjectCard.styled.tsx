import styled from "styled-components";

export const Main = styled.div`
  background-color: ${props => props.theme.bg.input};
  border-radius: 8px;
  width: 220px;
  text-align: center;

  .projects__card {
    &-title {
      margin: 16px auto 0;
    }// &-title
    
    &-link {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      height: 100%;
      width: 100%;
    }// &-link

    &-img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 0 0 8px 8px;
    }// &-img
  }// .projects__card
`;
