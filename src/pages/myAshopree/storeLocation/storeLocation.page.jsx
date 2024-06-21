import './storeLocation.styles.scss';
import { useEffect, useState } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import { Link } from 'react-router-dom';
import ashopree from 'assets/ashopree/ashopree_con_border.png';
import config from "../../../config";
import { useAuth } from "../../../hook/AuthProvider";
import axios from "axios";
import { LoaderVTwo } from 'components/loader/loader.component.version-two';


export const StoreLocation = ({ title }) => {
    const apiUrl = config().baseUrl;
    const auth = useAuth();
    const [storeLocationList, setStoreLocationList] = useState([]);

    const getStoreLocationList = async () => {

        try {

            const thisconfig = {
                method: 'get',
                url: `${apiUrl}/shop/merchant/free-listing`,
                headers: {
                    Authorization: 'Bearer ' + auth.token
                }
            }

            const response = await axios(thisconfig);

            // console.log(response.data);

            setStoreLocationList(response.data.data);

        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    setTimeout(() => window.location.href = '/login', 1000);
                }
            }
        }

    }

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
        getStoreLocationList();
    }, [apiUrl, title]);

    return (
        <div className="estore-container">

            <section className="location">
                
                <section className="all-items">
                    <MyashopreeSidePage />

                    { storeLocationList.length > 0 ? (
                            <main>
                                <div className="first">
                                    <h4> Store Location </h4>
                                    <div className='grouped-companies'>
                                            { storeLocationList.map((item, index) => (
                                                    <div className="each-comp" key={index}>
                                                        <div className="head">
                                                            <p> {item.name} </p>
                                                            <p> {item.province} </p>
                                                            <small> <button> {(item.industry).toLowerCase()} </button> </small>
                                                        </div>
                                                        <div className="img-sec">
                                                            <img src={ashopree} alt={item.id} style={{ width: "60px", height: "60px" }} />
                                                            <em><p> {item.title} </p><p><small>{(item.address).toLowerCase()}</small></p></em>
                                                        </div>
                                                        <Link to={'#'}> View Profile </Link>
                                                    </div>
                                                ))
                                            }
                                    </div>
                                </div>                                    

                                <div className="second">
                                        <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11582.683237685028!2d-79.77424329338455!3d43.75170639916074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b52b7a5e6b8ad%3A0x1ebe29ba0f3e0e4d!2s2250%20Bovaird%20Dr%20E%20%23304%2C%20Brampton%2C%20ON%20L6R%200W3%2C%20Canada!5e0!3m2!1sen!2sid!4v1701869472878!5m2!1sen!2sid`} title={`304-2250 Bovaird Drive East, Brampton. ON L6R 0W3, Canada`} width="100%" height="100%" frameborder="0" style={{ border: '0' }} allowfullscreen="">
                                        </iframe>
                                </div>
                            </main>
                        ) : (
                            <main style={{ flexDirection: 'column' }}>
                                <LoaderVTwo />
                            </main>
                        )
                    }
                        
                </section>

            </section>

        </div>
    );

};

