import styled, { keyframes } from "styled-components";
import appLogo from "../assets/app_logo.png";

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #e0ded1;

  @media (max-width: 768px) {
    background-size: 80%;
  }
`;

const AppTitle = styled.h1`
  color: black;
  font-size: 400px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 290px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// 새로운 애니메이션 추가
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const dots = keyframes`
  0%, 20% { content: '.'; }
  40% { content: '..'; }
  60% { content: '...'; }
  80% { content: '....'; }
  100% { content: '.'; }
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-top: 150px;
`;

const LoadingText = styled.div`
  font-size: 1.2rem;
  margin-top: 20px;
  color: #666;

  &::after {
    content: "";
    animation: ${dots} 1.5s infinite;
  }
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer style={{ backgroundImage: `url(${appLogo})` }}>
      <AppTitle>반찬 GO</AppTitle>
      <LoadingSpinner />
      <LoadingText>로딩중</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingScreen;
