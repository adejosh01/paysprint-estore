import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./needs-tab-placeholder.styles.scss";

export const NeedsTabPlaceholder = ({ text }) => {
  return (
    <div className="needs-tab-container">
      <div className="top">
        <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#e7aa07" }} />
        <div className="separator" />
      </div>
      <p>{text}</p>
      <button>
        Get started
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};
