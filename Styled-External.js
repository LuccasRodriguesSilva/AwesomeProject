import styled from "styled-components/native";

export const PageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  `;

export const PageTitle = styled.Text`
font-size: 50;
font-weight: bold
color: white;
`;

export const PageSubTitle = styled.Text`
font-size: 50;
font-weight: bold
color: yellow;
`;

export default function App() {
  return( <PageContainer>
    <PageTitle>INDMO</PageTitle>
    <PageSubtitle>Hello World!</PageSubtitle>
  </PageContainer>);
}