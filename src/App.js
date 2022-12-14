import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import HeroConnectWallet from "./components/HeroConnectWallet/HeroConnectWallet";
import PaymentIntegration from "./components/PaymentIntegration/PaymentIntegration";
import About from "./components/About/About";
import FanClub from "./components/Fanclub/FanClub";
import Purchase from "./components/Purchase/Purchase";
import PayIntPanel from "./components/PayIntPanel/PayIntPanel";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/connect-wallet" element={<HeroConnectWallet />}></Route>
        <Route
          path="/payment-integration"
          element={<PaymentIntegration />}
        ></Route>
        <Route path="/fanclub" element={<FanClub />}></Route>
      </Routes>

      <Routes>
        <Route path="/purchase" element={<Purchase />}></Route>
        <Route
          path="/payment-integration-panel"
          element={<PayIntPanel />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
