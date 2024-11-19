import UserHeader from "../components/UserHeader";
import MainButtons from "../components/MainButtons";
import AdBanner from "../components/AdBanner";

const MainPage = () => {
  return (
    <>
      <UserHeader isMain={true} />
      <MainButtons />
      <AdBanner />
    </>
  );
};

export default MainPage;
