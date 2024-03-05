import "./AboutBitcoin.scss";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutBitcoin() {
  return (
    <div className="about-bitcoin">
      <div className="about-bitcoin-container">
        <h1 className="about-bitcoin-text">About Bitcoin</h1>
        <div className="about-bitcoin-section1">
          <h2>What is Bitcoin?</h2>
          <p>
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
        <hr></hr>
        <h2>Lorem ipsum dolor sit amet</h2>
        <div className="about-bitcoin-section2">
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p>
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </p>
          <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
        <hr></hr>
        <div className="about-bitcoin-section3">
          <h1>Already Holding Bitcoin?</h1>
          <div className="card-container">
            <div className="card1">
              <div className="card-img">
                <img src="/images/img1.jpg" />
              </div>
              <div className="card-text">
                <p>Calculate your Profits</p>
                <button>
                  Check Now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="card2">
              <div className="card-img">
                <img src="/images/img2.jpg" />
              </div>
              <div className="card-text">
                <p>Calculate your liability</p>
                <button>
                  Check Now <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <hr></hr>
          <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </div>
  );
}
