import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import fishJorim from "../assets/fish_jorim.jpg";
import jaeyook from "../assets/jaeyook.jpg";
import yangneumCrab from "../assets/yangneumCrab.jpg";

interface OrderItem {
  id: number;
  menuName: string;
  store: string;
  price: number;
  orderDate: string;
  rating: number;
  review: string;
  imageUrl: string;
}

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

const MenuInfo = styled.div`
  margin-bottom: 1rem;
`;

const MenuName = styled.h4`
  margin: 0 0 0.5rem 0;
`;

const MenuDetails = styled.div`
  color: #666;
  font-size: 0.9rem;

  > div {
    margin-bottom: 0.25rem;
  }
`;

const StarContainer = styled.div`
  margin-bottom: 0.5rem;
`;

const StarButton = styled.button<{ selected: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ selected }) => (selected ? "#ffd700" : "#ccc")};
  font-size: 1.2rem;
`;

const ReviewInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  background-color: #228be6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

const ReviewLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  margin-bottom: 1rem;
  align-items: start;
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const ReviewInputSection = styled.div`
  width: 100%;
  grid-column: 1 / -1; // 전체 너비 사용
  margin-top: 1rem;
`;

const MenuImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  align-self: flex-start;
`;

const DeliveryManagement = () => {
  const [orders, setOrders] = useState<OrderItem[]>([
    {
      id: 1,
      menuName: "고등어 조림",
      store: "엄마손 반찬",
      price: 8000,
      orderDate: "2024-03-15",
      rating: 0,
      review: "",
      imageUrl: fishJorim,
    },
    {
      id: 2,
      menuName: "제육 볶음",
      store: "고향집 반찬",
      price: 9000,
      orderDate: "2024-03-15",
      rating: 0,
      review: "",
      imageUrl: jaeyook,
    },
    {
      id: 3,
      menuName: "양념 게장",
      store: "매일 반찬",
      price: 11900,
      orderDate: "2024-03-15",
      rating: 0,
      review: "",
      imageUrl: yangneumCrab,
    },
  ]);

  const handleRatingChange = (orderId: number, rating: number) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, rating } : order
      )
    );
  };

  const handleReviewChange = (orderId: number, review: string) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, review } : order
      )
    );
  };

  const handleSubmitReview = (orderId: number) => {
    console.log(
      "리뷰 제출:",
      orders.find((order) => order.id === orderId)
    );
  };

  return (
    <Container>
      <ProgressContainer>
        <h3>현재 배송 현황</h3>
        <ProgressBar>
          <Progress />
        </ProgressBar>
        <p>배송중 - 오늘 오전 7시 도착 예정</p>
      </ProgressContainer>

      <ReviewSection>
        <h3>주문 내역 및 리뷰</h3>
        {orders.map((order) => (
          <ReviewItem key={order.id}>
            <ReviewLayout>
              <ReviewContent>
                <MenuInfo>
                  <MenuName>{order.menuName}</MenuName>
                  <MenuDetails>
                    <div>{order.store}</div>
                    <div>{order.price.toLocaleString()}원</div>
                    <div>주문일자: {order.orderDate}</div>
                  </MenuDetails>
                </MenuInfo>
                <StarContainer>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarButton
                      key={star}
                      selected={star <= order.rating}
                      onClick={() => handleRatingChange(order.id, star)}
                    >
                      <FaStar />
                    </StarButton>
                  ))}
                </StarContainer>
              </ReviewContent>
              <MenuImage src={order.imageUrl} alt={order.menuName} />
              <ReviewInputSection>
                <ReviewInput
                  placeholder="리뷰를 작성해주세요"
                  value={order.review}
                  onChange={(e) => handleReviewChange(order.id, e.target.value)}
                />
                <SubmitButton onClick={() => handleSubmitReview(order.id)}>
                  리뷰 등록
                </SubmitButton>
              </ReviewInputSection>
            </ReviewLayout>
          </ReviewItem>
        ))}
      </ReviewSection>
    </Container>
  );
};

export default DeliveryManagement;
