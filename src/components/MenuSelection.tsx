import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import fishJorim from "../assets/fish_jorim.jpg";
import jaeyook from "../assets/jaeyook.jpg";
import spanich from "../assets/spanich.jpg";
import gosari from "../assets/gosari.jpg";
import yangneumCrab from "../assets/yangneumCrab.jpg";
import dongtae from "../assets/dongtae.jpg";
import { useState } from "react";

const MenuList = styled.div`
  padding: 1rem;
  height: calc(100vh - 200px);
  overflow-y: auto;
`;

const MenuItem = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  gap: 1rem;
  align-items: center;
`;

const MenuImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 20%;
  object-fit: cover;
  background-color: #f5f5f5;
  flex-shrink: 0;
`;

const MenuInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
`;

const MenuName = styled.h3`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  white-space: normal;

  min-width: 0;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
`;

const OriginalPrice = styled.span`
  color: #999;
  text-decoration: line-through;
  font-size: 0.9rem;
`;

const DiscountedPrice = styled.span`
  color: #ff4444;
  font-weight: bold;
  font-size: 18px;
`;

const MenuDetails = styled.div`
  font-size: 0.85rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin: auto 0;
  flex-shrink: 0;
`;

const TotalPriceBox = styled.div`
  position: fixed;
  top: 40px;
  right: 20px;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 200px;
`;

const TotalPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;

  span {
    color: #4caf50;
  }
`;

interface MenuItem {
  id: number;
  name: string;
  calories: string;
  weight: string;
  store: string;
  rating: number;
  price: number;
  discountedPrice: number;
  image: string;
}

const MenuSelection = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "고등어조림",
      calories: "350kcal",
      weight: "120g(약 2인분)",
      store: "엄마손 반찬",
      rating: 4.5,
      price: 10000,
      discountedPrice: 8000,
      image: fishJorim,
    },
    {
      id: 2,
      name: "제육 볶음",
      calories: "440kcal",
      weight: "200g(약 2인분)",
      store: "고향집 반찬",
      rating: 4.8,
      price: 9000,
      discountedPrice: 9000,
      image: jaeyook,
    },
    {
      id: 3,
      name: "시금치 볶음",
      calories: "250kcal",
      weight: "80g(약 1인분)",
      store: "엄마손 반찬",
      rating: 4.6,
      price: 2000,
      discountedPrice: 2000,
      image: spanich,
    },
    {
      id: 4,
      name: "고사리 무침",
      calories: "125kcal",
      weight: "40g(약 1인분)",
      store: "매일 반찬",
      rating: 4.3,
      price: 1900,
      discountedPrice: 1900,
      image: gosari,
    },
    {
      id: 5,
      name: "양념 게장",
      calories: "525kcal",
      weight: "320g(약 3인분)",
      store: "매일 반찬",
      rating: 4.4,
      price: 11900,
      discountedPrice: 11900,
      image: yangneumCrab,
    },
    {
      id: 6,
      name: "동태전",
      calories: "725kcal",
      weight: "320g(약 2인분)",
      store: "전전긍긍 반찬",
      rating: 4.6,
      price: 7900,
      discountedPrice: 7900,
      image: dongtae,
    },
  ];

  const calculateTotal = () => {
    return menuItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((sum, item) => sum + item.discountedPrice, 0);
  };

  const handleCheckboxChange = (itemId: number) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <>
      <TotalPriceBox>
        <TotalPrice>
          총 주문금액: <span>{calculateTotal().toLocaleString()}원</span>
        </TotalPrice>
      </TotalPriceBox>

      <MenuList>
        {menuItems.map((item) => (
          <MenuItem key={item.id}>
            <MenuImage
              src={item.image}
              alt={item.name}
              onError={(e) => {
                e.currentTarget.src = "fallback-image-url";
              }}
            />
            <MenuInfo>
              <MenuName>
                {item.name}
                <PriceContainer>
                  <OriginalPrice>{item.price.toLocaleString()}원</OriginalPrice>
                  <DiscountedPrice>
                    {item.discountedPrice.toLocaleString()}원
                  </DiscountedPrice>
                </PriceContainer>
              </MenuName>
              <MenuDetails>
                <span>{item.calories}</span>
                <span> | </span>
                <span>{item.weight}</span>
                <span> | </span>
                <span>{item.store}</span>
                <span> | </span>
                <span>
                  {item.rating} <FaStar />
                </span>
              </MenuDetails>
            </MenuInfo>
            <Checkbox
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
};

export default MenuSelection;
