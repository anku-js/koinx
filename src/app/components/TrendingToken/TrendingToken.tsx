"use client";
import "./TrendingToken.scss";
import React, { useState, useEffect } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const TrendingTokens = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const currencyCode = "usd";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        setTrendingCoins(data.coins.slice(0, 3));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="trendingToken">
      <h3>Trending Coins (24h)</h3>
      <ul>
        {trendingCoins.map(({ item }) => {
          const { id, name, thumb, data } = item;
          const tokenChange24h =
            data.price_change_percentage_24h[currencyCode].toFixed(2);

          const isTokenUp = tokenChange24h > 0;
          return (
            <li key={id}>
              <div className="tokenInfo">
                <div className="tokenImg">
                  <img src={thumb} alt={name} />
                </div>
                <p className="tokenName">{name}</p>
              </div>
              <div className={`token24hrChange ${isTokenUp ? "up" : "down"}`}>
                <span>
                  {isTokenUp ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
                </span>
                <span>{tokenChange24h}%</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrendingTokens;
