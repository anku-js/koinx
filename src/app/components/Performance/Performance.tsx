import "./Performance.scss";
import { BsInfoCircleFill } from "react-icons/bs";

export default function Performance() {
  return (
    <>
      <div className="navigation-tab">
        <a>Overview</a>
        <a>Fundamentals</a>
        <a>News Insights</a>
        <a>Sentiments</a>
        <a>Team</a>
        <a>Technicals</a>
        <a>Tokenomics</a>
      </div>
      <div className="performance">
        <div className="performance-container">
          <h1>Performance</h1>
          <div className="performance-metrix">
            <div className="performances-details">
              <div className="low-high">
                <p className="heading">Today’s Low</p>
                <p className="price">46,930.22</p>
              </div>
              <input
                type="range"
                min="46,930.22"
                max="49,343.83"
                value="$48,637.83"
                className="slider"
                id="myRange"
                disabled
              ></input>
              <div className="low-high">
                <p className="heading">Today’s High</p>
                <p className="price">49,343.83</p>
              </div>
            </div>
            <div className="performances-details">
              <div className="low-high">
                <p className="heading">52W Low</p>
                <p className="price">16,930.22</p>
              </div>
              <input
                type="range"
                //   min="1"
                //   max="100"
                //   value="90"
                className="slider"
                id="myRange"
                disabled
              ></input>
              <div className="low-high">
                <p className="heading">52W High</p>
                <p className="price">49,743.83</p>
              </div>
            </div>
          </div>
          <div className="fundamentals">
            <h2>
              Fundamentals <BsInfoCircleFill className="icon" />
            </h2>
            <div className="fundamentals-list">
              <ul className="fundamentals-table">
                <li className="fundamentals-li">
                  <p className="fundamentals-factors">Bitcoin Price</p>
                  <p className="fundamentals-data">$16,815.46</p>
                </li>
                <li className="fundamentals-li">
                  <p className="fundamentals-factors">24h Low / 24h High</p>
                  <p className="fundamentals-data">$16,382.07 / $16,874.12</p>
                </li>
                <li className="fundamentals-li">
                  <p className="fundamentals-factors">7d Low / 7d High</p>
                  <p className="fundamentals-data">$16,382.07 / $16,874.12</p>
                </li>
                <li className="fundamentals-li">
                  <p className="fundamentals-factors">Trading Volume</p>
                  <p className="fundamentals-data">$23,249,202,782</p>
                </li>
                <li className="fundamentals-li">
                  <p className="fundamentals-factors">Market Cap Rank</p>
                  <p className="fundamentals-data">#1</p>
                </li>
              </ul>
              <ul className="fundamentals-table">
                <li className="fundamentals-li">
                  <p className="fundamentals-factors">Market Cap</p>
                  <p className="fundamentals-data">$323,507,290,047</p>
                </li>
                <li className="fundamentals-li">
                  <p className="fundamentals-factors">Market Cap Dominance</p>
                  <p className="fundamentals-data">38.343%</p>
                </li>
                <li className="fundamentals-li">
                  <p className="fundamentals-factors">Volume / Market Cap</p>
                  <p className="fundamentals-data">0.0718</p>
                </li>
                <li className="fundamentals-li">
                  <p className="fundamentals-factors">All-Time High</p>
                  <div>
                    <p className="allTime-data">
                      $69,044.77 <span className="allTime-high">-75.6%</span>
                    </p>
                    <p className="allTime-description">
                      Nov 10, 2021 (about 1 year)
                    </p>
                  </div>
                </li>
                <li className="fundamentals-li">
                  <p className="fundamentals-factors">All-Time Low</p>
                  <div>
                    <p className="allTime-data">
                      $67.81 <span className="allTime-low">24729.1%</span>
                    </p>
                    <p className="allTime-description">
                      Jul 06, 2013 (over 9 years)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
