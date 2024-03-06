import "./Main.scss";
import AboutBitcoin from "../AboutBitcoin/AboutBitcoin";
import Tokenomics from "../Tokenomics/Tokenomics";
export default function Heropage() {
  return (
    <section className="main-container">
      <AboutBitcoin />
      <Tokenomics />
    </section>
  );
}
