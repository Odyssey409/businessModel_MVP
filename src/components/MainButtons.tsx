import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import btn1Img from "../assets/food_deliver.jpg";
import btn2Img from "../assets/manage_deliver.png";
import btn3Img from "../assets/map.png";
import btn4Img from "../assets/findFav.png";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const NotImplemented = styled.span`
  font-size: 0.8rem;
  color: #ff4444;
`;

const MainButtons = () => {
  const navigate = useNavigate();

  return (
    <ButtonContainer>
      <StyledButton
        onClick={() => navigate("/menu-selection")}
        style={{ backgroundImage: `url(${btn1Img})` }}
      >
        <ButtonText>다음주 메뉴 선택하러 가기</ButtonText>
      </StyledButton>
      <StyledButton
        onClick={() => navigate("/delivery-management")}
        style={{ backgroundImage: `url(${btn2Img})` }}
      >
        <ButtonText>내가 시킨 메뉴 관리하러 가기</ButtonText>
      </StyledButton>
      <StyledButton
        onClick={() => {}}
        style={{ backgroundImage: `url(${btn3Img})` }}
      >
        <ButtonText>
          주변 반찬가게 찾아보기
          <NotImplemented>(구현X)</NotImplemented>
        </ButtonText>
      </StyledButton>
      <StyledButton
        onClick={() => {}}
        style={{ backgroundImage: `url(${btn4Img})` }}
      >
        <ButtonText>
          나의 반찬 취향 찾기
          <NotImplemented>(구현X)</NotImplemented>
        </ButtonText>
      </StyledButton>
    </ButtonContainer>
  );
};

export default MainButtons;
