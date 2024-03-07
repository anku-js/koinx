import React from "react";

interface Props {
  symbol: string;
  icon: string;
  percentChange: number;
  currentPrice: string;
  graph: string;
}

const CoinCard = ({
  symbol,
  icon,
  percentChange,
  currentPrice,
  graph,
}: Props) => {
  return (
    <div className="coin-card">
      <div className="coin-info">
        <div className="token-img">
          <img src={icon} alt="Token Icon" width="26" height="26" />
        </div>
        <p className="symbol">{symbol}</p>
        <p
          className="percentChange"
          style={{
            backgroundColor: percentChange > 0 ? "#0AB27D0F" : "#EE68551A",
            color: percentChange > 0 ? "#32BE88" : "#E96975",
          }}
        >
          {percentChange > 0 ? "+" : ""}
          {percentChange}%
        </p>
      </div>
      <p className="currentPrice">{currentPrice}</p>
      <div className="graph">
        <img src={graph} alt="Token Graph" width="140" height="60" />
      </div>
    </div>
  );
};

export default CoinCard;
