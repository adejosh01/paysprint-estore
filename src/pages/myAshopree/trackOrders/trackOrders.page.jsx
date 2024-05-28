import './trackOrders.page.scss';
import { useEffect, useState } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
// import { NavLink } from 'react-router-dom';
// import first_store from 'assets/svg/reward_page/first_store.png';
// import second_store from 'assets/svg/reward_page/second_store.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



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
                    </main>
                </section>

            </section>

        </div>
    );

};

