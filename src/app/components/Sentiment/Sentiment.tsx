import "./Sentiment.scss";
import { BsInfoCircleFill } from "react-icons/bs";

interface Props {
  keyEvent: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[];
}

export default function Sentiment({ keyEvent }:Props) {
  return (
    <div className="sentiment">
      <div className="sentiment-container">
        <h1>Sentiment</h1>
        <div className="keyEvent-cont">
          <h2>
            Key Events
            <BsInfoCircleFill className="info-logo" />
          </h2>
          <ul className="keyEvent-list">
            {keyEvent.map(({ id, image, title, description }) => (
              <li key={id}>
                <div className="event-info">
                  <div className="event-image">
                    <img src={image} alt={`Image of ${title}`} />
                  </div>
                  <p className="title-description">
                    <span className="title">{title}</span>
                    <span className="description">{description}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="analysis">
          <h2>
            Analyst Estimates
            <BsInfoCircleFill className="info-logo" />
          </h2>
          <div className="analysis-container">
            <p className="analysis-percent">76%</p>
            <div className="analysis-info">
              <div className="action">
                <p className="action-name">Buy</p>
                <p className="action-data">
                  <span className="buy-percent"></span>76%
                </p>
              </div>
              <div className="action">
                <p className="action-name">Hold</p>
                <p className="action-data">
                  <span className="hold-percent"></span>8%
                </p>
              </div>
              <div className="action">
                <p className="action-name">Sell</p>
                <p className="action-data">
                  <span className="sell-percent"></span>16%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
