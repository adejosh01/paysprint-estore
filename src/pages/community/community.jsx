import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./community.styles.scss";
import { useEffect } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { BottomNav } from "components/bottom-navs";
// import CategoriesData from "utils/allcategories/categories";
import { handleClick } from "utils/utils";
import { useNavigate } from "react-router-dom";


export const Community = ({ title }) => {
    const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

}, [title]);


  return (
    <div className="estore-container">
         
        <section className="community">
            <div className="big-title">
                <h2> Community </h2>
            </div>
            <div className="before-the-row">
                <div className="row">
                    <div className="home">
                        <button type="button" onClick={() => handleClick('/', navigate)}> <FontAwesomeIcon icon={faHome} /> Goto Homepage </button>
                    </div>

                    <div className="real-section">
                        <p className="welcome"> Good day! Welcome to Ashopree's Community.👏 </p>

                        <div className="tags">
                            <div className="mini-navs">
                                <button type="button" className="buttons active-button"> Members Category </button>
                                <button type="button" className="buttons"> Listed Shops </button>
                                <button type="button" className="buttons"> Listed Products </button>
                                <button type="button" className="buttons"> Listed Partners </button>
                            </div>
                            <div className="settings">
                                <button> Set Notifications </button>
                            </div>
                        </div>

                        <div className="split-to-two">
                            <div className="posted-questions">
                                <div className="nav">
                                    <p> All Post</p>
                                    <button type="button" onClick={() => handleClick('/askquestions', navigate)}> Ask a Question </button>
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
                                    <a href="/"> Since the PS fx is not available in Nigeria, when sending money to another country try through mobile wallet will curency exchanges occur automatically? </a>
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
                                <h4> Members Categories </h4>
                                <p> Community Associates </p>
                                <p> Potential Store Owners </p>
                                <p> Inactive Store Owners </p>
                                <p> Store Under Construction </p>
                                <p> Upcoming Stores </p>
                                <p> Stores Available </p>
                                {/* <CategoriesData /> */}
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
