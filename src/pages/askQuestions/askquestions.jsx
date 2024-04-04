import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./askquestions.styles.scss";
import { useEffect } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export const AskQuestions = ({ title }) => {

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

}, [title]);


  return (
    <div className="estore-container">
         
        <section className="askquestions">
            <div className="big-title">
                <h2> Ask Questions </h2>
            </div>

            <div className="before-the-row">
                <div className="row">
                    <div className="home">
                        <button> <FontAwesomeIcon icon={faHome} /> Goto Community </button>
                    </div>
                   
                </div>
            </div>
        </section>

    </div>

  );

};
