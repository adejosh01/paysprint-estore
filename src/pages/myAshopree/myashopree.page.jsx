import './myashopree.styles.scss';
import { useEffect, useState } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import exchange_icon from 'assets/svg/reward_page/exchange.png';
import cashback from 'assets/svg/reward_page/cash_back.png';
import review from 'assets/svg/reward_page/review_points.png';
import ref from 'assets/svg/reward_page/referral_points.png';
import ProgressBar from 'components/loader/progress.bar.component';
import AshopreePromos from 'components/Myashopree/promos';
import { useAuth } from 'hook/AuthProvider';
import config from '../../config';
import axios from 'axios'; 

export const Myashopree = ({ title }) => {
    const apiUrl = config().baseUrl;
    const user = useAuth();
    const [rewardMetrics, setRewardMetrics] = useState([]);

    const getRewardMetrics = async () => {
        try {


            const thisconfig = {
                method: 'get',
                url: `${apiUrl}/ashopree/myashopree/reward-metrics`,
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            };

            const response = await axios(thisconfig);

            console.log(response.data);

            setRewardMetrics(response.data.data);


        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    setTimeout(() => window.location.href = '/login', 1000);
                }

                if (error.response.data.message === "Unathorized user") {
                    setTimeout(() => window.location.href = '/login', 1000);
                }
            }
            
        }
    }


    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
        getRewardMetrics();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="myashopree">
                
                <section className="all-items">
                    <MyashopreeSidePage />

                    <main>
                        <div className="main-element">
                            <div className='first'>
                                <div className='head'>
                                    <h4> Reward Summary </h4>
                                    <div>
                                        <img src={exchange_icon} alt="" />
                                        <p> Point exchange </p>
                                    </div>
                                </div>
                                <div className='stats'>
                                    <div className="single">
                                        <img src={cashback} alt="" />
                                        <div>
                                            <p> {user.user.currencySymbol}{Number(rewardMetrics.cashback).toFixed(2)} </p>
                                            <p> Cashback </p>
                                            <p> +8% from yesterday </p>
                                        </div>
                                    </div>
                                    <div className="single">
                                        <img src={review} alt="" />
                                        <div>
                                            <p> {rewardMetrics.review_point} </p>
                                            <p> Review Points </p>
                                            <p> +5% from yesterday </p>
                                        </div>
                                    </div>
                                    <div className="single">
                                        <img src={ref} alt="" />
                                        <div>
                                            <p> {rewardMetrics.refer_point} </p>
                                            <p> Referral Points </p>
                                            <p> 0.5% from yesterday </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='second'>
                                <h4> Tasks </h4>
                                <div className="table">
                                    <table>
                                        <thead>
                                            <th> # </th>
                                            <th> Name </th>
                                            <th> Progress </th>
                                            <th> Status </th>
                                        </thead> <hr />
                                        <tbody>

                                            {
                                                rewardMetrics ? (
                                                    rewardMetrics.tasks?.length > 0 ? (
                                                        rewardMetrics.tasks.map((item, index) => (
                                                            <>
                                                                <tr key={index}>
                                                                    <td> {index + 1} </td>
                                                                    <td> {item.name} </td>
                                                                    <td style={{ width: '25%' }}> <ProgressBar width={item.progress} /> </td>
                                                                    <td>
                                                                        {
                                                                            item.progress === 100 ? <button type="button" > Redeem </button> : <button type="button" > Do more </button>
                                                                        }
                                                                    </td>
                                                                </tr> <hr />
                                                            </>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan={"4"}>No tasks here yet</td>
                                                        </tr>
                                                    )
                                                ) : (<p>Loading ...</p>)
                                            }

                                            
                                            
                                        </tbody>
                                    </table>
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

