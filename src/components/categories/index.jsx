import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import "./allcategories.scss";

export const Categories = (prop) => {
    const [data, setData] = useState([]);
    const apiUrl = config().baseUrl;


    useEffect(() => {
        // document.title = title;
        window.scrollTo(0, 0);

        axios.get(`${apiUrl}/ashopree/product/category`)
            .then(response => {
                setData(response.data.data);
            }).catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [apiUrl]);

    return (
            <div className="sidebar">
                <h4> Store Category</h4>
                {data.length !== 0 ? (
                    <div>
                        {Array.isArray(data) && data.map((item, index) => (
                            <a href={`/allcategories?categoryname=${item.category}`} key={index}>
                                <div>
                                    <p >{item.category}</p>
                                </div>
                            </a>
                        ))}

                        {!Array.isArray(data) && <div>Error: Sorry, Please check your network connection and try again</div>}
                    </div>
                ) : (

                    <p style={{ textAlign: 'center', fontSize: '2rem' }}> Loading... </p>
                )}
            </div>
            
    )
}