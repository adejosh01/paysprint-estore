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

  const [allChecked, setAllChecked] = useState(false);
  const [individualToggles, setIndividualToggles] = useState({ productsListed: false, storeAvailable: false, questionSubmitted: false, answerSubmitted: false, productPrice: false, priceReduction: false, partner: false, tags: false, });

  const handleAllToggle = () => {
    setAllChecked(!allChecked);
    setIndividualToggles(prevState => {
      const newState = {};
      for (const key in prevState) {
        newState[key] = !allChecked;
      }
      return newState;
    });
  };

  const handleSingleToggle = (toggleName) => {
    setIndividualToggles(prevState => ({
      ...prevState,
      [toggleName]: !prevState[toggleName],
    }));
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
                        <p className="welcome"> Good day! <br /> Welcome to aShopree's Community.👏 </p>

                        <div className="tags">
                            <div className="mini-navs">
                                <button type="button" className="buttons active-button" data-target="membersCategory" onClick={ (event) => communityTogglePages(event) }> Members Category </button>
                                <button type="button" className="buttons" data-target="listedShops" onClick={ (event) => communityTogglePages(event) }> Listed Stores Categories </button>
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
                                    <p> New Products Listed <Toggle checked={individualToggles.productsListed} onChange={() => handleSingleToggle('productsListed')} /> </p>
                                    <p> New Store available <Toggle checked={individualToggles.storeAvailable} onChange={() => handleSingleToggle('storeAvailable')} /> </p> 
                                    <p> New Question submitted <Toggle checked={individualToggles.questionSubmitted} onChange={() => handleSingleToggle('questionSubmitted')} /> </p>
                                    <p> New Answer submitted <Toggle checked={individualToggles.answerSubmitted} onChange={() => handleSingleToggle('answerSubmitted')} /> </p>
                                    <p> New Product price <Toggle checked={individualToggles.productPrice} onChange={() => handleSingleToggle('productPrice')} /> </p>
                                    <p> Price Reduction <Toggle checked={individualToggles.priceReduction} onChange={() => handleSingleToggle('priceReduction')} /> </p>
                                    <p> New Partner <Toggle checked={individualToggles.partner} onChange={() => handleSingleToggle('partner')} /> </p>
                                    <p> New Tags <Toggle checked={individualToggles.tags} onChange={() => handleSingleToggle('tags')} /> </p>
                                    <p> All <Toggle checked={allChecked} onChange={handleAllToggle} /> </p>
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
                                    <a href="community/post"> Payment Issues </a>
                                    <p> My costumers paid money into my paystrint account details and uptill now I have not been credited, what's is wrong. </p>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Akomolafe Rukayatfarms | <small> 7 months ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <a href="community/post"> Payment Issues </a>
                                    <p> My costumers paid money into my paystrint account details and uptill now I have not been credited, what's is wrong. </p>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Akomolafe Rukayatfarms | <small> 7 months ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <a href="community/post"> Payment Issues </a>
                                    <p> My costumers paid money into my paystrint account details and uptill now I have not been credited, what's is wrong. </p>
                                    <hr />
                                    <div>
                                        <p> Payment </p>
                                        <p> Akomolafe Rukayatfarms | <small> 7 months ago </small> </p>
                                    </div>
                                </div>
                                <div className="each-content">
                                    <a href="community/post"> Payment Issues </a>
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
                                <a href={'/stores'}> Stores Available </a>
                                <a href={'#?'}> Inactive Store Owners </a>
                                <a href={'#?'}> Upcoming Stores </a>
                                <a href={'#?'}> Community Associates </a>
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
                                    <a href="community/post"> Payment Issues </a>
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
                                 <h4> Listed Stores Categories </h4>
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
                                    <a href="community/post"> Payment Issues </a>
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
                                <h4> Listed Product </h4>
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
                                    <a href="community/post"> Payment Issues </a>
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
                                <a href={'#?'}> Community Associates </a>
                                <a href={'#?'}> Potential Store Owners </a>
                                <a href={'#?'}> Inactive Store Owners </a>
                                <a href={'#?'}> Store Under Construction </a>
                                <a href={'#?'}> Upcoming Stores </a>
                                <a href={'/stores'}> Stores Available </a>
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
