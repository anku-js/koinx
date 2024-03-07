"use client";
import "./AboutBitcoin.scss";
import { FaArrowRightLong } from "react-icons/fa6";

import type { Currencies } from "./../../../types"

interface Props {
  currencies: Currencies
}

export default function AboutBitcoin({ currencies }: Props) {
  const {
    heading,
    subheading,
    description,
    heading2,
    description2_pointer1,
    description2_pointer2,
    description2_pointer3,
    heading3,
    card_details,
    summary,
  } = currencies;

  return (
    <div className="about-bitcoin">
      <div className="about-bitcoin-container">
        <h1 className="about-bitcoin-text">{heading}</h1>
        <div className="about-bitcoin-section1">
          <h2>{subheading}</h2>
          <p>{description}</p>
        </div>
        <h2>{heading2}</h2>
        <div className="about-bitcoin-section2">
          <p>{description2_pointer1}</p>
          <p>{description2_pointer2}</p>
          <p>{description2_pointer3}</p>
        </div>
        <div className="about-bitcoin-section3">
          <h1>{heading3}</h1>
          <div className="card-container">
            <div className="card1">
              <div className="card-img">
                <img
                  src={card_details.profit.img}
                  alt="Calculate your Profits banner"
                  width="128"
                  height="128"
                />
              </div>
              <div className="card-text">
                <p>{card_details.profit.heading}</p>
                <button>
                  Check Now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="card2">
              <div className="card-img">
                <img
                  src={card_details.liability.img}
                  alt="Calculate your liability banner"
                  width="128"
                  height="128"
                />
              </div>
              <div className="card-text">
                <p>{card_details.liability.heading}</p>
                <button>
                  Check Now <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
}
