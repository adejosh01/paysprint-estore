import './referralpartner.styles.scss';
import { useEffect } from 'react';


export const ReferralPartner = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="referralpartner">
                <h2> Welcome to Referral Partner page </h2>               
            </section>

        </div>
    );

};

