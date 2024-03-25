import './referralpartner.styles.scss';
import { useEffect } from 'react';
import ecommerceImg from 'assets/ashopree/eCommerce.png';


export const ReferralPartner = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="referralpartner">
                <div>
                    <img src={ecommerceImg} alt="" />
                </div>
                <div>
                    <h2> Be a Referral Partner </h2>
                    <p> By referring businesses in your network to ashopree, you are not only helping them to boost their businesses and streamlining their payments, but you are also earning rewards for yourself. <br /> Its a win-win opportunity for all! </p>
                    <button type='button'> Join our Referral Program today </button>
                </div>
            </section>

            <section className="proceed">
                
            </section>

        </div>
    );

};

