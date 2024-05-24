import './storeLocation.styles.scss';
import { useEffect } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import { Link } from 'react-router-dom';
import first_store from 'assets/svg/reward_page/first_store.png';
import second_store from 'assets/svg/reward_page/second_store.png';
import third from 'assets/svg/reward_page/third_store.png';
import fourth from 'assets/svg/reward_page/fourth_store.png';
import fifth from 'assets/svg/reward_page/fifth_store.png';
import six from 'assets/svg/reward_page/sixth_store.png';



export const StoreLocation = ({ title }) => {

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="location">
                
                <section className="all-items">
                    <MyashopreeSidePage />
                    <main>
                        <div className="first">
                            <h4> Store Location </h4>
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
                                <div className="each-comp">
                                    <div className="head">
                                        <p> PaySprint Inc. </p>
                                        <p> Sans Fransisco </p>
                                        <small> <button> ag </button> <button> ag </button> <button> ag </button> <button> ag </button> </small>
                                    </div>
                                    <div className="img-sec">
                                        <img src={third} alt="" />
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
                                        <img src={fourth} alt="" />
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
                                        <img src={fifth} alt="" />
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
                                        <img src={six} alt="" />
                                        <em> <p> Olusegun </p> <p> Founder </p> </em>
                                    </div>
                                    <Link to={'#'}> View Profile </Link>
                                </div>
                            </div>
                        </div>
                        <div className="second">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11582.683237685028!2d-79.77424329338455!3d43.75170639916074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b52b7a5e6b8ad%3A0x1ebe29ba0f3e0e4d!2s2250%20Bovaird%20Dr%20E%20%23304%2C%20Brampton%2C%20ON%20L6R%200W3%2C%20Canada!5e0!3m2!1sen!2sid!4v1701869472878!5m2!1sen!2sid" title="304-2250 Bovaird Drive East, Brampton. ON L6R 0W3, Canada" width="100%" height="100%" frameborder="0" style={{ border: '0' }} allowfullscreen="">
                            </iframe>
                        </div>
                    </main>
                </section>

            </section>

        </div>
    );

};

