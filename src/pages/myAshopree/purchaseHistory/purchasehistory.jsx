import './purchasehistory.styles.scss';
import { useEffect } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import exchange_icon from 'assets/svg/reward_page/exchange.png';
import cashback from 'assets/svg/reward_page/cash_back.png';
import review from 'assets/svg/reward_page/review_points.png';
import ref from 'assets/svg/reward_page/referral_points.png';
import AshopreePromos from 'components/Myashopree/promos';



export const MyPurchaseHistory = ({ title }) => {

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="mypurchase-history">
                
                <section className="all-items">
                    <MyashopreeSidePage />

                    <main>
                        <div className="main-element">
                            <div className='first'>
                                <div className='head'>
                                    <h4> Purchase History </h4>
                                    <div>
                                        <img src={exchange_icon} alt="" />
                                        <p> Point exchange </p>
                                    </div>
                                </div>
                                <div className='stats'>
                                    <div className="single">
                                        <img src={cashback} alt="" />
                                        <div>
                                            <p> $1k </p>
                                            <p> Cashback </p>
                                            <p> +8% from yesterday </p>
                                        </div>
                                    </div>
                                    <div className="single">
                                        <img src={review} alt="" />
                                        <div>
                                            <p> 300 </p>
                                            <p> Review Points </p>
                                            <p> +5% from yesterday </p>
                                        </div>
                                    </div>
                                    <div className="single">
                                        <img src={ref} alt="" />
                                        <div>
                                            <p> 8 </p>
                                            <p> Referral Points </p>
                                            <p> 0.5% from yesterday </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <AshopreePromos />
                    </main>
                </section>

            </section>

        </div>
    );

};

