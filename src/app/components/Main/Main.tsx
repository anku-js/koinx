"use client";
import "./Main.scss";
import React, { useState, useEffect } from "react";
import TradingViewWidget from "../Chart/Chart";
import CallToAction from "../CallToAction/CallToAction";
import TrendingTokens from "../TrendingToken/TrendingToken";
import Performance from "../Performance/Performance";
import Sentiment from "../Sentiment/Sentiment";
import AboutBitcoin from "../AboutBitcoin/AboutBitcoin";
import Breadcrumb from "../Breadcrum";
import Tokenomics from "../Tokenomics/Tokenomics";
import Team from "../Team/Team";
import { currencies } from "@/app/data";
import { teamMemberInfo } from "@/app/data";
import { tokenomicsDetails } from "@/app/data";
import { keyEvent } from "@/app/data";

const breadcrumbItems = [
  { text: 'Cryptocurrencies', link: '/' },
  { text: 'Bitcoin', link: '/bitcoin' },
];

export default function Heropage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [trendingCoins, setTrendingCoins] = useState([]);

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
        // Narrowed the type
        if(error instanceof Error) {
          setError(error.message);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="main-container">
        <section className="content-left">
          <Breadcrumb items={breadcrumbItems}/>
          <TradingViewWidget />
          <Performance />
          <Sentiment keyEvent={keyEvent}/>
          <AboutBitcoin currencies={currencies}/>
          <Tokenomics tokenomicsDetails={tokenomicsDetails}/>
          <Team teamMemberInfo={teamMemberInfo} />
        </section>
        <section className="content-right">
          <CallToAction />
          <TrendingTokens trendingCoins={trendingCoins} />
        </section>
      </div>
    </div>
  );
}
