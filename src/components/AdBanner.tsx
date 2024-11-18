import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background-color: #f8f9fa;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AdBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src="/path-to-ad-image.jpg" alt="광고" />
    </BannerContainer>
  );
};

export default AdBanner;
