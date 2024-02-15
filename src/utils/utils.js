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
