export default () => ({
    baseUrl: process.env.NODE_ENV === "developments" ? "http://localhost:9090/api/v1" : process.env.REACT_APP_API_URL
});

