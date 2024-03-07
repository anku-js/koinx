import "./Main.scss";
import AboutBitcoin from "../AboutBitcoin/AboutBitcoin";
import Tokenomics from "../Tokenomics/Tokenomics";
import TradingViewWidget from "../Chart/Chart";
import CallToAction from "../CallToAction/CallToAction";
import TrendingTokens from "../TrendingToken/TrendingToken";
import Performance from "../Performance/Performance";
export default function Heropage() {
  return (
    <div>
      <div className="main-container">
        <section className="content-left">
          <TradingViewWidget />
          <Performance />
          <AboutBitcoin />
          <Tokenomics />
        </section>
        <section className="content-right">
          <CallToAction />
          <TrendingTokens />
        </section>
      </div>
      <div className="footer"></div>
    </div>
  );
}
