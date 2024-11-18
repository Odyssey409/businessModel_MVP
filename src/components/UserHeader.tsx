import styled from "styled-components";
import { FaCrown } from "react-icons/fa";

const HeaderContainer = styled.div`
  padding: 1rem;
  background-color: #f8f9fa;
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

const UserHeader = () => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

export default UserHeader;
