"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CoinCard from "./CoinCard";
import "./CoinSlider.scss";

interface Coins {
  id: number;
  symbol: string;
  icon: string;
  percentChange: number;
  currentPrice: string;
  graph: string;
}
interface Props {
  heading: string;
  coins: Coins[]
}

const CoinSlider = ({ coins, heading }: Props) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="coinSlider">
      <h3>{heading}</h3>
      <div className="container">
        <div
          className={`prev ${isBeginning ? "disabled" : ""}`}
          //@ts-ignore
          onClick={() => swiperRef?.current?.slidePrev()}
        >
          <img src="/images/arrowLeft.png" alt="" />
        </div>
        <Swiper
          onSwiper={(swiper) => {
            //@ts-ignore
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          spaceBetween={16}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
          }}
        >
          <div className="coinsList">
            {coins.map(
              ({ id, symbol, icon, percentChange, currentPrice, graph }) => (
                <SwiperSlide key={id}>
                  <CoinCard
                    symbol={symbol}
                    icon={icon}
                    percentChange={percentChange}
                    currentPrice={currentPrice}
                    graph={graph}
                  />
                </SwiperSlide>
              )
            )}
          </div>
        </Swiper>
        <div
          className={`next ${isEnd ? "disabled" : ""}`}
          //@ts-ignore
          onClick={() => swiperRef?.current?.slideNext()}
        >
          <img src="/images/arrowRight.png" alt="Right arrow icon" />
        </div>
      </div>
    </div>
  );
};

export default CoinSlider;
