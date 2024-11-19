import styled from "styled-components";
import { FaCrown } from "react-icons/fa";
import logo from "../assets/logo.png";

const HeaderContainer = styled.div`
  padding: 1rem;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const UserGrade = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const UserInfo = styled.div`
  font-size: 0.9rem;
  color: #495057;
`;

const Balance = styled.div`
  font-weight: bold;
  color: #212529;
  margin-top: 0.5rem;
`;

const UserSection = styled.div`
  // 기존 스타일 유지
`;

const LogoSection = styled.img`
  width: 120px;
  height: auto;
`;

const UserHeader = ({ isMain = false }) => {
  return (
    <HeaderContainer>
      <UserSection>
        <UserGrade>
          <FaCrown
            style={{ backgroundColor: "black", color: "gold", padding: "2px" }}
          />
          <span>블랙등급</span>
        </UserGrade>
        <UserInfo>
          <div>홍길동</div>
          <div>광진구 능동로 123-1</div>
        </UserInfo>
        <Balance>잔여 금액: 73,120원</Balance>
      </UserSection>
      {isMain && <LogoSection src={logo} alt="로고" />}
    </HeaderContainer>
  );
};

export default UserHeader;
