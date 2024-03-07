import "./globals.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CoinSlider from "./components/CoinSlider/CoinSlider";
import { trendingTokenResponse } from "@/app/data";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <div className="coinSliderContainer">
        <CoinSlider coins={trendingTokenResponse} heading="You may also like" />
        <CoinSlider coins={trendingTokenResponse} heading="Trending Coins" />
      </div>
    </div>
  );
}
