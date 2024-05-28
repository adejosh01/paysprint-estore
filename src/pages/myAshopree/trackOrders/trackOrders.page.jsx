import './trackOrders.page.scss';
import { useEffect, useState } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
// import { NavLink } from 'react-router-dom';
// import first_store from 'assets/svg/reward_page/first_store.png';
// import second_store from 'assets/svg/reward_page/second_store.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';



export const TrackOrders = ({ title }) => {
    const [value, setValue] = useState(''); 


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
                        <h4> Track Orders </h4>

                        <div className="title-sec"> 
                            <div className='nav-btns'>
                                <button type='button' className='button active-nav-btn'> All Orders </button>
                                <button type='button' className='button '> Processing </button>
                                <button type='button' className='button '> Shipped </button>
                                <button type='button' className='button '> Delivered </button>
                                <button type='button' className='button '> Returns </button>
                            </div>
                            <form action={`/search?${value}`}>
                                <div className="searching">
                                    <FontAwesomeIcon icon={faSearch} />
                                    <input type="text" name="query" placeholder="Search for a product here" value={value} onChange={e => setValue(e.target.value)} />
                                </div>
                            </form>
                        </div>

                        <div className="body-sec">
                            <div className="title">
                                <h5> Shipped </h5>

                                <p> View order details <FontAwesomeIcon icon={faAngleRight} />  </p>
                            </div>

                            <main>
                                <div>
                                    <p> Delivery May 22-29 </p>
                                    <div className="doubleImage">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div className='minor-btns'>
                                    <button type='button' className='button active-side'> Track </button>
                                    <button type='button' className='button ' > Buy this again </button>
                                    <button type='button' className='button ' > Return/Refund </button>
                                    <button type='button' className='button ' > Leave a review </button>
                                    <button type='button' className='button ' > Change address </button>
                                </div>
                            </main>
                        </div>
                    </main>
                </section>

            </section>

        </div>
    );

};

