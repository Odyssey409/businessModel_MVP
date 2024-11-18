import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const Container = styled.div`
  padding: 1rem;
`;

const ProgressContainer = styled.div`
  margin-bottom: 2rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e9ecef;
  border-radius: 10px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: 75%;
  height: 100%;
  background-color: #228be6;
`;

const ReviewSection = styled.div`
  margin-top: 2rem;
`;

const ReviewItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
`;

const DeliveryManagement = () => {
  return (
    <Container>
      <ProgressContainer>
        <h3>현재 배송 현황</h3>
        <ProgressBar>
          <Progress />
        </ProgressBar>
        <p>배송중 - 오늘 오후 2시 도착 예정</p>
      </ProgressContainer>

      <ReviewSection>
        <h3>지난 주문 리뷰</h3>
        <ReviewItem>
          <h4>고등어 조림</h4>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} color="#fcc419" />
            ))}
          </div>
        </ReviewItem>
      </ReviewSection>
    </Container>
  );
};

export default DeliveryManagement;
