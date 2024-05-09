import config from "../config";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export const getConditionalClassName = (
  condition,
  defaultClass,
  conditionalClass
) => `${defaultClass} ${condition ? conditionalClass : ""}`;

export const getConditionalClassNames = (
  conditions,
  defaultClass,
  conditionalClasses
) => {
  let result = defaultClass;
  if (conditions.length !== conditionalClasses.length) return defaultClass;

  for (let i = 0; i < conditions.length; i++) {
    if (conditions[i]) result += ` ${conditionalClasses[i]}`;
  }

  return result;
};

export const formatDateToInputDate = (date) => {
  let month = date.getMonth() + 1;
  if (month < 10) month = `0${month}`;

  let day = date.getDate();
  if (day < 10) day = `0${day}`;

  return `${date.getFullYear()}-${month}-${day}`;
};

export const formatInputDateToDate = (inputDate) => {
  let [year, month, day] = inputDate.split("-");
  return new Date(year, month - 1, day);
};

export const getMaxDOBForAdult = () => {
  let currDate = new Date();
  let newYear = currDate.getFullYear() - 18;
  let maxDate = new Date(newYear, currDate.getMonth(), currDate.getDate());

  return maxDate;
};

export const to2DecimalPlaces = (num) => Number(num).toFixed(2);

export function handleClick(destination, navigate) {
  navigate(destination);
  // console.log(`Going to ${destination}`);
}

export function stripHtmlTags(html) {
  
  return html.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ');
}

export function immediatePage() {
  const referralPartners = document.getElementsByClassName("referralpartner");
  const proceedToNextItem = document.getElementsByClassName("theNextToSee");
  let index = 0;
  let index2 = 0;

  for (index; index < referralPartners.length; index++) {

    referralPartners[index].style.display = "none";
  }

  for (index2; index2 < proceedToNextItem.length; index2++) {

    proceedToNextItem[index2].classList.add("active");
  }
}

export function showTheForm() {
  const nextToSee = document.getElementsByClassName("theNextToSee");
  const proceedToForm = document.getElementsByClassName("theForm");
  let index = 0;
  let index2 = 0;

  for (index; index < nextToSee.length; index++) {

    // nextToSee[index].style.display = "none"; 
    nextToSee[index].classList.remove("active");
  }

  for (index2; index2 < proceedToForm.length; index2++) {

    proceedToForm[index2].classList.add("activeForm");
  }
}

export function getLoginScreen() {
  const nextToSee = document.getElementsByClassName("theNextToSee");
  const proceedToForm = document.getElementsByClassName("loginScreen");
  let index = 0;
  let index2 = 0;

  for (index; index < nextToSee.length; index++) {

    // nextToSee[index].style.display = "none"; 
    nextToSee[index].classList.remove("active");
  }

  for (index2; index2 < proceedToForm.length; index2++) {

    proceedToForm[index2].classList.add("activeForm");
  }
}

export function toggleLoginScreen(accountType) {
  const personalForm = document.querySelector('.login_page_for_individual');
  const merchantForm = document.querySelector('.login_page_for_merchant');

  if (accountType === 'personal-acct') {
    personalForm.classList.add('current_screen');
    merchantForm.classList.remove('current_screen');

  } else if (accountType === 'merchant-acct') {
    personalForm.classList.remove('current_screen');
    merchantForm.classList.add('current_screen');
    
  } else {
    console.log('Cannot find your account type')
  }

}


export function communityTogglePages(event) {
  event.preventDefault();  //To prevent default callings

  if (!event || !event.target) {
    console.error("Event or event target is missing.");
    return;
  }
  const previouslyActiveButton = document.querySelector('.active-button');
  if (previouslyActiveButton) {
    previouslyActiveButton.classList.remove('active-button');
  }


  const divs = document.querySelectorAll('.split-to-two');
  divs.forEach(div => div.style.display = 'none');

  const buttonId = event.target.getAttribute('data-target');
  if (!buttonId) {
    console.error("Button doesn't have data-target attribute.");
    return;
  }

  const targetDiv = document.getElementById(buttonId);
  if (!targetDiv) {
    console.error("Corresponding content div not found.");
    return;
  }

  targetDiv.style.display = 'flex';

  event.target.classList.add('active-button');

  // console.log(event);

}


export function scrollToDataSection(sectionId) {

  const section = document.getElementById(sectionId);

  console.log(section);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }

}


export function CheckAutoComplete () {
    const [value, setValue] = useState(null);

    return (
        <label htmlFor="address">
          Auto complete address
          {/* <input
            type="text"
            id="autocomplete"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            onFocus={handleFocus}
            /> */}

            <GooglePlacesAutocomplete 
                apiKey={`${config().google.apiKey}`}
                selectProps={{ 
                    value: value,
                    onChange: setValue
                 }}
            />
        </label>
    );
}