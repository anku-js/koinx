// // TradingViewWidget.jsx
"use client";
import "./Chart.scss";
import React, { useEffect, useState, useRef, memo } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

function TradingViewWidget() {
  const container = useRef();
  const [dataFromApi, setDataFromApi] = useState();

  useEffect(function () {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
    )
      .then((res) => res.json())
      .then((data) => setDataFromApi(data));
  }, []);

  useEffect(() => {
    if (!document.getElementById("tradingview-widget-script")) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.id = "tradingview-widget-script";
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "timezone": "Etc/UTC",
          "hide_legend": true,
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "#fff",
          "range": "5D",
          "withdateranges": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="chart">
      <div className="chart-container">
        <div className="chart-header">
          <div className="chart-heading">
            <img
              src="/images/img4.jpg"
              alt="bitcoin icon"
              className="bitcoin-icon"
            />
            <h1>Bitcoin </h1>
            <p className="btc">BTC</p>
            <p className="rank1">Rank #1</p>
          </div>
          <div className="chart-details-usd">
            <h1>$ {dataFromApi?.bitcoin?.usd}</h1>
            <div
              className="usd-percent-change"
              style={{
                backgroundColor:
                  dataFromApi?.bitcoin?.usd_24h_change < 0
                    ? "#f9c3c3"
                    : "#ebf9f4",
                color:
                  dataFromApi?.bitcoin?.usd_24h_change < 0
                    ? "#cb3737"
                    : "#285c4a",
              }}
            >
              {dataFromApi?.bitcoin?.usd_24h_change < 0 ? (
                <BiSolidDownArrow />
              ) : (
                <BiSolidUpArrow />
              )}
              {dataFromApi?.bitcoin?.usd_24h_change.toFixed(2)}%
            </div>
            <p>(24H)</p>
          </div>
          <div className="chart-details-inr">₹ {dataFromApi?.bitcoin?.inr}</div>
        </div>
        <div
          className="tradingview-widget-container"
          ref={container}
          style={{ height: "100%", width: "100%" }}
        >
          <p>Bitcoin Price Chart (USD)</p>
          <div
            className="tradingview-widget-container__widget"
            style={{ height: "calc(100% - 32px)", width: "100%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
