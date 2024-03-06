import "./Main.scss";
import AboutBitcoin from "../AboutBitcoin/AboutBitcoin";
import Tokenomics from "../Tokenomics/Tokenomics";
import TradingViewWidget from "../Chart/Chart";

export default function Heropage() {
  return (
    <section className="main-container">
      <TradingViewWidget />
      <AboutBitcoin />
      <Tokenomics />
    </section>
  );
}
