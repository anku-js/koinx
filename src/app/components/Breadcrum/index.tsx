import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./styles.scss";

interface Props {
  items: {
    text: string;
    link: string;
  }[];
}

const breadcrumbStyles = [
    {
        color: "#3E5765"
    },
    {
        color: "#0F1629",
        fontWeight: 500
    }
];

const Breadcrumb = ({ items }: Props) => {
  return (
    <nav>
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.link ? (
              <a href={item.link} style={{...breadcrumbStyles[index]}}>{item.text}</a>
            ) : (
              <span>{item.text}</span>
            )}
            { items.length - 1 > index && <FaAngleDoubleRight />}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
