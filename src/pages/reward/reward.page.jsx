import './reward.styles.scss';
import { useEffect } from 'react';
import RewardSideBar from 'components/myRewards/side.page';
import exchange_icon from 'assets/svg/reward_page/exchange.png';
import cashback from 'assets/svg/reward_page/cash_back.png';
import review from 'assets/svg/reward_page/review_points.png';
import ref from 'assets/svg/reward_page/referral_points.png';
import ProgressBar from 'components/loader/progress.bar.component';



export const Reward = ({ title }) => {

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="reward">
                
                <section className="all-items">
                    <RewardSideBar />

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
                                            <tr>
                                                <td> 01 </td>
                                                <td> Refer 5 people </td>
                                                <td style={{ width: '25%' }}> <ProgressBar width={75} /> </td>
                                                <td> <button type="button" > Redeem </button> </td>
                                            </tr> <hr />
                                            <tr>
                                                <td> 02 </td>
                                                <td> Post twice on facebook </td>
                                                <td style={{ width: '25%' }}> <ProgressBar width={60} /> </td>
                                                <td> <button type="button" > Redeem </button> </td>
                                            </tr> <hr />
                                            <tr>
                                                <td> 03 </td>
                                                <td> Comment on 4 posts </td>
                                                <td style={{ width: '25%' }}> <ProgressBar width={50} /> </td>
                                                <td> <button type="button" > Redeem </button> </td>
                                            </tr> <hr />
                                            <tr>
                                                <td> 04 </td>
                                                <td> Share link 3 times </td>
                                                <td style={{ width: '25%' }}> <ProgressBar width={30} /> </td>
                                                <td> <button type="button" > Redeem </button> </td>
                                            </tr> <hr />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="promos">
                            <h4> Promos </h4>

                            <div className='parent'>
                                <div>
                                    <div> <p> 01 </p> <p> Freebies </p> </div>
                                    <button> Get </button>
                                </div>
                                <div>
                                    <div> <p> 02 </p> <p> Free shipping </p> </div>
                                    <button> Get </button>
                                </div>
                                <div>
                                    <div> <p> 03 </p> <p> Order discount </p> </div>
                                    <button> Get </button>
                                </div>
                                <div>
                                    <div> <p> 01 </p> <p> Freebies </p> </div>
                                    <button> Get </button>
                                </div>
                                <div>
                                    <div> <p> 02 </p> <p> Free shipping </p> </div>
                                    <button> Get </button>
                                </div>
                                <div>
                                    <div> <p> 03 </p> <p> Order discount </p> </div>
                                    <button> Get </button>
                                </div>
                                <div>
                                    <div> <p> 01 </p> <p> Freebies </p> </div>
                                    <button> Get </button>
                                </div>
                                <div>
                                    <div> <p> 02 </p> <p> Free shipping </p> </div>
                                    <button> Get </button>
                                </div>
                                <div>
                                    <div> <p> 03 </p> <p> Order discount </p> </div>
                                    <button> Get </button>
                                </div>
                                <div>
                                    <div> <p> 01 </p> <p> Freebies </p> </div>
                                    <button> Get </button>
                                </div>
                                <div>
                                    <div> <p> 02 </p> <p> Free shipping </p> </div>
                                    <button> Get </button>
                                </div>
                                <div>
                                    <div> <p> 03 </p> <p> Order discount </p> </div>
                                    <button> Get </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>

            </section>

        </div>
    );

};

