import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./testimonial-card.styles.scss";

export const TestimonialCard = ({ text, name, position }) => {
  return (
    <div className="testimonial">
      <p>{text}</p>
      <div className="info">
        <h5>{name}</h5>
        <em>{position}</em>
      </div>
      <div className="stars">
        <FontAwesomeIcon icon={faStar} style={{ color: "#E7AA07" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#E7AA07" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#E7AA07" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#E7AA07" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#E7AA07" }} />
      </div>
    </div>
  );
};
