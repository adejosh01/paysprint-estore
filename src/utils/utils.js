import axios from "axios";
import { useEffect, useState } from "react";

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

export function API_RESPONSES_FROM_BACKEND (title) { 
  const apiUrl = process.env.REACT_APP_API_URL || 'https://paysprint.ca/api/v1';
  const [error, setError] = useState(null);
  const [hotDeals, setData] = useState([]);
  const [topProducts, setData2] = useState([]);
  const [trendingServices, setData3] = useState([]);
  const [registeredStores, setData4] = useState([]);

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/hot-deals`) 
    .then(response => {
      setData(response.data.data);
    }).catch(error => {
      setError('Error fetching Hot-deals product data: ' + error.message);
    });

    axios.get(`${apiUrl}/ashopree/product/top`) 
    .then(response => {
      if (response.data && response.data.data) {
        setData2(response.data.data);
        setError(null); 
      } else {
        setError('No data returned for the Top Products');
      }

    }).catch(error => {
      setError('Error fetching Top Products data: ' + error.message);
    });

    axios.get(`${apiUrl}/ashopree/services/trending`) 
    .then(response => {
      setData3(response.data.data);
    }).catch(error => {
      setError('Error fetching Trending Services data: ' + error.message);
    });

    axios.get(`${apiUrl}/ashopree/stores/registered`) 
    .then(response => {
      setData4(response.data.data);
    }).catch(error => {
      setError('Error fetching Trending Services data: ' + error.message);
    });

}, [apiUrl, title]);

  return { hotDeals, topProducts, trendingServices, registeredStores, error };

}

