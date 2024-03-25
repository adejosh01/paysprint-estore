import './terms.styles.scss';
import { useEffect } from 'react';


export const TermsAndPrivacy = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="termsandprivacy">
                <div className="contents">
                    <h2> Terms And Privacy Policy </h2>
                    
                </div>                
            </section>

        </div>
    );

};

