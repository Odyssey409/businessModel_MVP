import styled from "styled-components";
import ad from "../assets/adbanner.png";

const BannerContainer = styled.div`
  width: 100%;
  height: 110px;
  position: fixed;
  bottom: 0;
  background-color: #dae2ed;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AdBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={ad} alt="광고" />
    </BannerContainer>
  );
};

export default AdBanner;
