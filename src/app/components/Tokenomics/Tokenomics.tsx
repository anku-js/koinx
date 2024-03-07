import "./Tokenomics.scss";

interface Props {
  tokenomicsDetails: {
    heading: string;
    heading2: string;
    img: string;
    investors: string;
    foundation: string;
    description: string;
  }
}

export default function Tokenomics({tokenomicsDetails}: Props) {
  const { heading, heading2, img, investors, foundation, description } = tokenomicsDetails;
  return (
    <div className="tokenomics">
      <div className="tokenomics-container">
        <h1>{heading}</h1>
        <h2>{heading2}</h2>
        <div className="statistics-container">
          <img src={img} alt="pie chart" />
          <div className="statistics-description">
            <p>
              <span className="statistics-description-point1"></span>
              {investors}
            </p>
            <p>
              <span className="statistics-description-point2"></span>
              {foundation}
            </p>
          </div>
        </div>
        <p className="tokenomics-text">{description}</p>
      </div>
    </div>
  );
}
