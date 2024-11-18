import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 150px;
  border-radius: 15px;
  border: none;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const ButtonText = styled.span`
  position: relative;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 1;
`;

const MainButtons = () => {
  const navigate = useNavigate();

  return (
    <ButtonContainer>
      <StyledButton
        onClick={() => navigate("/menu-selection")}
        style={{ backgroundImage: `url('/path-to-menu-image.jpg')` }}
      >
        <ButtonText>다음주 메뉴 선택하러 가기</ButtonText>
      </StyledButton>
    </ButtonContainer>
  );
};

export default MainButtons;
