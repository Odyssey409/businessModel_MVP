import styled from "styled-components";

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
`;

const AppTitle = styled.h1`
  color: white;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer
      style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}
    >
      <AppTitle>반찬구독</AppTitle>
    </LoadingContainer>
  );
};

export default LoadingScreen;
