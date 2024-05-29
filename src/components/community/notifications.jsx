import Toggle from "components/toggleBtnsOnly/toggle";
import { useState } from "react";


export const CommunityNotification  = () => {
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



    return (<>
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
    </>);
};