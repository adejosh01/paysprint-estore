import './storeLocationProfile.styles.scss';
import { useEffect } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import config from "../../../config";


export const StoreLocationProfile = ({ title }) => {
    const apiUrl = config().baseUrl;
    
    
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
        
    }, [apiUrl, title]);

    return (
        <div className="estore-container">

            <section className="store-profile">
                
                <section className="all-items">
                    <MyashopreeSidePage />

                    <main>
                        <div className="first">
                            <h4> Adebambo's Store Profile </h4>
                            
                        </div>                                    

                        <div className="second">
                            <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11582.683237685028!2d-79.77424329338455!3d43.75170639916074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b52b7a5e6b8ad%3A0x1ebe29ba0f3e0e4d!2s2250%20Bovaird%20Dr%20E%20%23304%2C%20Brampton%2C%20ON%20L6R%200W3%2C%20Canada!5e0!3m2!1sen!2sid!4v1701869472878!5m2!1sen!2sid`} title={`304-2250 Bovaird Drive East, Brampton. ON L6R 0W3, Canada`} width="100%" height="100%" frameborder="0" style={{ border: '0' }} allowfullscreen="">
                            </iframe>
                        </div>
                    </main>
                
                </section>

            </section>  

        </div>
    );

};

