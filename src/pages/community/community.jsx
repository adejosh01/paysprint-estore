import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./community.styles.scss";
import { useEffect } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { BottomNav } from "components/bottom-navs";


export const Community = ({ title }) => {

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

}, [title]);


  return (
    <div className="estore-container">
         
        <section className="community">
            <div className="big-title">
                <h2> Community Questions </h2>
            </div>
            <div className="before-the-row">
                <div className="row">
                    <div className="home">
                        <button> <FontAwesomeIcon icon={faHome} /> Goto Homepage </button>
                    </div>

                    <div className="real-section">
                        <p className="welcome"> Good day! Welcome to PaySprint developers community.👏 </p>

                        <div className="split-to-two">
                            <div className="posted-questions">
                                <div className="nav">
                                    <p> All Post</p>
                                    <button> Ask a Question </button>
                                </div>
                                <div className="each-content">
                                    <a href="/"> Payment Issues </a>
                                    <p> My costumers paid money into my paystrint account details and uptill now I have not been credited, what's is wrong. </p>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Akomolafe Rukayatfarms | <small> 7 months ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <a href="/"> Payment Issues </a>
                                    <p> My costumers paid money into my paystrint account details and uptill now I have not been credited, what's is wrong. </p>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Akomolafe Rukayatfarms | <small> 7 months ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <a href="#"> Since the PS fx is not available in Nigeria, when sending money to another country try through mobile wallet will curency exchanges occur automatically? </a>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Azeez Alade | <small> 1 year ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <hr />
                                    <div>
                                        <p> Choose a category </p>
                                        <p> Saad Alkhalaf | <small> 1 year ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <a href="/"> Money was sent to my account, notification received but money wasn't credited to the account. Why is that, and can something be done about it? </a>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Agyapong Edward Boakye | <small> 1 year ago </small> </p>
                                    </div>
                                </div>
                            </div>

                            <div className="all-categories">
                                <a href="/askquestions"> Ask a Question </a>
                                <h4> Categories </h4>
                                <p> App Review </p>
                                <p> PaySprint Login </p>
                                <p> Developer Tools </p>
                                <p> API Integration </p>
                                <p> Platform Policy </p>
                                <p> Others </p>
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
