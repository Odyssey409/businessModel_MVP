import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import LoadingScreen from "./components/LoadingScreen";
import MainPage from "./pages/MainPage";
import MenuSelectionPage from "./pages/MenuSelectionPage";
import DeliveryManagementPage from "./pages/DeliveryManagementPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router basename="/businessModel_MVP">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu-selection" element={<MenuSelectionPage />} />
        <Route
          path="/delivery-management"
          element={<DeliveryManagementPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
