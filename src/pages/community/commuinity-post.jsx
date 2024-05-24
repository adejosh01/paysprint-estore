import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./community.styles.scss";
import { useEffect } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { BottomNav } from "components/bottom-navs";
import { handleClick } from "utils/utils";
import { useNavigate } from "react-router-dom";
import question_image from 'assets/ashopree/askaquestion.png';


export const CommunityPost = ({ title }) => {
  const navigate = useNavigate();


  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

}, [title]);


  return (
    <div className="estore-container">
         
        <section className="community">
            <div className="big-title">
                <h2> Community Post Thread </h2>
            </div>
            <div className="before-the-row">
                <div className="row">
                    <div className="home">
                        <button type="button" onClick={() => handleClick('/community', navigate)}> <FontAwesomeIcon icon={faHome} /> Goto Community </button>
                    </div>

                    <div className="real-section">
                        <p className="welcome"> Good day! <br /> Welcome to aShopree's Community.👏 </p>

                        <div className="split-to-two" id="membersCategory" style={{display: 'flex'}}>
                            <div className="posted-questions">
                                <div className="each-content">
                                    <a href="#?"> Payment Issues </a>
                                    <p> My costumers paid money into my paystrint account details and uptill now I have not been credited, what's is wrong. </p>
                                    <hr />
                                    <img src={question_image} alt="the question'sImage support" />
                                    <div>
                                        <p> Payment </p>
                                        <p> Akomolafe Rukayatfarms | <small> 7 months ago </small> </p>
                                    </div>
                                </div>

                                <h4 className="ans"> 1 Answer </h4>

                                <div className="each-content">
                                    <p> Thanks. This has been satisfactorily processed back then </p>
                                    <div>
                                        <p> Shalom</p>
                                        <p> <small> 6 months ago </small> </p>
                                    </div>
                                </div>

                                <h4 className="ans"> Your Answer </h4>
                                <form action="#">
                                    <div className="submit-answers">
                                        <p> Name <span> * </span> </p>
                                        <input type="text" name="fullname" placeholder="Enter your name" required />
                                        <textarea name="message" id="" placeholder="Your thoughts..." required></textarea>
                                    </div>

                                    <button type="submit"> Post Answer </button>
                                </form>
                            </div>

                            <div className="all-categories">
                                <p> Categories </p>
                                <button type="button" onClick={() => handleClick('/askquestions', navigate)}> Ask a Question </button>
                            </div>
                        </div>

                        <div className="footersnav"> 
                            <BottomNav />
                        </div>
                    </div>                    
                </div>
            </div>
        </section>

    </div>

  );

};
