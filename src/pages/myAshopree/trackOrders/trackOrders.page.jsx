import './trackOrders.page.scss';
import { useEffect } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import { Link } from 'react-router-dom';
import first_store from 'assets/svg/reward_page/first_store.png';
import second_store from 'assets/svg/reward_page/second_store.png';



export const TrackOrders = ({ title }) => {

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="track-orders">
                
                <section className="all-items">
                    <MyashopreeSidePage />
                    <main>
                        <div className="first">
                            <h4> Track Orders </h4>
                            <div className='grouped-companies'>
                                <div className="each-comp">
                                    <div className="head">
                                        <p> PaySprint Inc. </p>
                                        <p> Sans Fransisco </p>
                                        <small> <button> ag </button> <button> ag </button> <button> ag </button> <button> ag </button> </small>
                                    </div>
                                    <div className="img-sec">
                                        <img src={first_store} alt="" />
                                        <em> <p> Olusegun </p> <p> Founder </p> </em>
                                    </div>
                                    <Link to={'#'}> View Profile </Link>
                                </div>
                                <div className="each-comp">
                                    <div className="head">
                                        <p> PaySprint Inc. </p>
                                        <p> Sans Fransisco </p>
                                        <small> <button> ag </button> <button> ag </button> <button> ag </button> <button> ag </button> </small>
                                    </div>
                                    <div className="img-sec">
                                        <img src={second_store} alt="" />
                                        <em> <p> Olusegun </p> <p> Founder </p> </em>
                                    </div>
                                    <Link to={'#'}> View Profile </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>

            </section>

        </div>
    );

};

