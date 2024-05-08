export default () => ({
    baseUrl: process.env.NODE_ENV === "development" ? "https://paysprint.ca/api/v1" : process.env.REACT_APP_API_URL,
    google: {
        apiKey: 'AIzaSyC4b_d3enQHEGQpGQ1WragPd0L89xG4vGA',
        mapUrl: 'https://maps.googleapis.com/maps/api'
    }
});

