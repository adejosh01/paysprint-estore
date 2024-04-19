import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./community.styles.scss";
import { useEffect, useState } from "react";
import { faClose, faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import { BottomNav } from "components/bottom-navs";
import CategoriesData from "utils/allcategories/categories";
import { communityTogglePages, handleClick } from "utils/utils";
import { useNavigate } from "react-router-dom";
import Toggle from "components/toggleBtnsOnly/toggle";


export const Community = ({ title }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false); // State to track open/closed state

  const toggleNotification = () => {
    setIsOpen(!isOpen);
  };

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
                                <button type="button" className="buttons active-button" data-target="membersCategory" onClick={ (event) => communityTogglePages(event) }> Members Category </button>
                                <button type="button" className="buttons" data-target="listedShops" onClick={ (event) => communityTogglePages(event) }> Listed Shops </button>
                                <button type="button" className="buttons" data-target="listedProducts" onClick={ (event) => communityTogglePages(event) }> Listed Products </button>
                                <button type="button" className="buttons" data-target="listedPartners" onClick={ (event) => communityTogglePages(event) }> Listed Partners </button>
                            </div>
                            <div className="settings">  
                                <button type="button" onClick={ toggleNotification }> Set Notifications </button>  
                                <button type="button" onClick={ toggleNotification }> <FontAwesomeIcon icon={isOpen ? faClose : faGear} /> </button>
                            </div>
                        </div>

                        {isOpen && (
                            <div className="settingsDetails">
                                <div className="all-categories">
                                    <p> New Products Listed <Toggle /> </p>
                                    <p> New Store available <Toggle /> </p> 
                                    <p> New Question submitted <Toggle /> </p>
                                    <p> New Answer submitted <Toggle /> </p>
                                    <p> New Product price <Toggle /> </p>
                                    <p> Price Reduction <Toggle /> </p>
                                    <p> New Partner <Toggle /> </p>
                                    <p> New Tags <Toggle /> </p>
                                    <p> All <Toggle /> </p>
                                </div>
                            </div>
                        )}

                        <div className="split-to-two" id="membersCategory" style={{display: 'flex'}}>
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
                                <h4> Member Categories </h4>
                                <p> Community Associates </p>
                                <p> Potential Store Owners </p>
                                <p> Inactive Store Owners </p>
                                <p> Store Under Construction </p>
                                <p> Upcoming Stores </p>
                                <p> Stores Available </p>
                                {/* <CategoriesData /> */}
                            </div>
                        </div>

                        <div className="split-to-two" id="listedShops" style={{display: 'none'}}>
                            <div className="posted-questions">
                                <div className="nav">
                                    <p> All Post</p>
                                    <button type="button" onClick={() => handleClick('/askquestions', navigate)}> Ask a Question </button>
                                </div>
                                <div className="each-content">
                                    <a href="/"> Accounting Services Issues </a>
                                    <p> My costumers paid money into my paystrint account details and uptill now I have not been credited, what's is wrong. </p>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Akomolafe Rukayatfarms | <small> 7 months ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <a href="/"> Accounting Services Issues </a>
                                    <p> My costumers paid money into my paystrint account details and uptill now I have not been credited, what's is wrong. </p>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Akomolafe Rukayatfarms | <small> 7 months ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <a href="/"> Potential Store Issues </a>
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
                                {/* <h4> Listed Shop Categories </h4>
                                <p> Community Associates </p>
                                <p> Potential Store Owners </p>
                                <p> Inactive Store Owners </p>
                                <p> Store Under Construction </p>
                                <p> Upcoming Stores </p>
                                <p> Stores Available </p> */}
                                <CategoriesData />
                            </div>
                        </div>

                        <div className="split-to-two" id="listedProducts" style={{display: 'none'}}>
                            <div className="posted-questions">
                                <div className="nav">
                                    <p> All Post</p>
                                    <button type="button" onClick={() => handleClick('/askquestions', navigate)}> Ask a Question </button>
                                </div>
                                <div className="each-content">
                                    <a href="/"> Art Issues </a>
                                    <p> My costumers paid money into my paystrint account details and uptill now I have not been credited, what's is wrong. </p>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Akomolafe Rukayatfarms | <small> 7 months ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <a href="/"> Antiques Issues </a>
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
                                    <a href="/"> Business Issues </a>
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
                                <h4> Listed Product Categories </h4>
                                {/* <p> Community Associates </p>
                                <p> Potential Store Owners </p>
                                <p> Inactive Store Owners </p>
                                <p> Store Under Construction </p>
                                <p> Upcoming Stores </p>
                                <p> Stores Available </p> */}
                                <CategoriesData />
                            </div>
                        </div>

                        <div className="split-to-two" id="listedPartners" style={{display: 'none'}}>
                            <div className="posted-questions">
                                <div className="nav">
                                    <p> All Post</p>
                                    <button type="button" onClick={() => handleClick('/askquestions', navigate)}> Ask a Question </button>
                                </div>
                                <div className="each-content">
                                    <a href="/"> All Stores Issues </a>
                                    <p> My costumers paid money into my paystrint account details and uptill now I have not been credited, what's is wrong. </p>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Akomolafe Rukayatfarms | <small> 7 months ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <a href="/"> Inactiveness of Stores </a>
                                    <p> My costumers paid money into my paystrint account details and uptill now I have not been credited, what's is wrong. </p>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Akomolafe Rukayatfarms | <small> 7 months ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <a href="/"> Community bill Issues </a>
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
                                <h4> Listed Partner Categories </h4>
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
