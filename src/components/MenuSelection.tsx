import styled from "styled-components";
import { FaStar } from "react-icons/fa";

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
`;

const MenuImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;

const MenuInfo = styled.div`
  flex: 1;
`;

const MenuName = styled.h3`
  margin-bottom: 0.5rem;
`;

const MenuDetails = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

const MenuSelection = () => {
  const menuItems = [
    {
      id: 1,
      name: "고등어 조림",
      calories: "250kcal",
      store: "엄마손 반찬",
      rating: 4.5,
      price: 8000,
      image: "/path-to-image.jpg",
    },
  ];

  return (
    <MenuList>
      {menuItems.map((item) => (
        <MenuItem key={item.id}>
          <MenuImage src={item.image} alt={item.name} />
          <MenuInfo>
            <MenuName>{item.name}</MenuName>
            <MenuDetails>
              <span>{item.calories}</span>
              <span> | </span>
              <span>{item.store}</span>
              <span> | </span>
              <span>
                {item.rating} <FaStar />
              </span>
            </MenuDetails>
          </MenuInfo>
          <Checkbox type="checkbox" />
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default MenuSelection;
