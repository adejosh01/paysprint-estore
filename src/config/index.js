export default () => ({
    baseUrl: process.env.NODE_ENV === "development" ? "https://paysprint.ca/api/v1" : process.env.REACT_APP_API_URL
});

