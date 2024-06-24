import './favouritestores.styles.scss';
import { useEffect } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import { Link } from 'react-router-dom';
import first_store from 'assets/svg/reward_page/first_store.png';
import second_store from 'assets/svg/reward_page/second_store.png';
import third from 'assets/svg/reward_page/third_store.png';
import fourth from 'assets/svg/reward_page/fourth_store.png';
import fifth from 'assets/svg/reward_page/fifth_store.png';
import six from 'assets/svg/reward_page/sixth_store.png';


export const MyFavouriteStores = ({title}) => {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);    
    

return (
    <div className="estore-container">

        <section className="favourite-stores">
                
            <section className="all-items">
                <MyashopreeSidePage />

                <main>
                    <div className="first">
                        <h4> My Favourite Stores </h4>
                        <div className='grouped-companies'>
                            <div className="each-comp">
                                <div className="head">
                                    <p> PaySprint Inc. </p>
                                    <p> Location: <span> Sans Fransisco </span> </p>
                                    <p> Store Description: <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam itaque rerum in optio recusandae non minus </span> </p>
                                </div>
                                <div className="img-sec">
                                    <img src={first_store} alt="" />
                                    <em> <p> Olusegun </p> <p> Founder </p> </em>
                                </div>
                                <Link to={'/merchant-store/15499'}> Visit Store </Link>
                            </div>
                            <div className="each-comp">
                                <div className="head">
                                    <p> Grace Furniture. </p>
                                    <p> Location: <span> Sans Fransisco </span> </p>
                                    <p> Store Description: <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam itaque rerum in optio recusandae non minus </span> </p>
                                </div>
                                <div className="img-sec">
                                    <img src={second_store} alt="" />
                                    <em> <p> Olusegun </p> <p> Founder </p> </em>
                                </div>
                                <Link to={'/merchant-store/15499'}> Visit Store </Link>
                            </div>
                            <div className="each-comp">
                                <div className="head">
                                    <p> JSC Globals </p>
                                    <p> Location: <span> Sans Fransisco </span> </p>
                                    <p> Store Description: <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam itaque rerum in optio recusandae non minus </span> </p>
                                </div>
                                <div className="img-sec">
                                    <img src={third} alt="" />
                                    <em> <p> Olusegun </p> <p> Founder </p> </em>
                                </div>
                                <Link to={'/merchant-store/15499'}> Visit Store </Link>
                            </div>
                            <div className="each-comp">
                                <div className="head">
                                    <p> Snapi </p>
                                    <p> Location: <span> Sans Fransisco </span> </p>
                                    <p> Store Description: <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam itaque rerum in optio recusandae non minus </span> </p>
                                </div>
                                <div className="img-sec">
                                    <img src={fourth} alt="" />
                                    <em> <p> Olusegun </p> <p> Founder </p> </em>
                                </div>
                                <Link to={'/merchant-store/15499'}> Visit Store </Link>
                            </div>
                            <div className="each-comp">
                                <div className="head">
                                    <p> PaySprint Inc. </p>
                                    <p> Location: <span> Sans Fransisco </span> </p>
                                    <p> Store Description: <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam itaque rerum in optio recusandae non minus </span> </p>
                                </div>
                                <div className="img-sec">
                                    <img src={fifth} alt="" />
                                    <em> <p> Olusegun </p> <p> Founder </p> </em>
                                </div>
                                <Link to={'/messages'}> Visit Store </Link>
                            </div>
                            <div className="each-comp">
                                <div className="head">
                                    <p> Bemint </p>
                                    <p> Location: <span> Sans Fransisco </span> </p>
                                    <p> Store Description: <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam itaque rerum in optio recusandae non minus </span> </p>
                                </div>
                                <div className="img-sec">
                                    <img src={six} alt="" />
                                    <em> <p> Olusegun </p> <p> Founder </p> </em>
                                </div>
                                <Link to={'/merchant-store/15499'}> Visit Store </Link>
                            </div>
                            <div className="each-comp">
                                <div className="head">
                                    <p> Gidicodes </p>
                                    <p> Location: <span> Sans Fransisco </span> </p>
                                    <p> Store Description: <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam itaque rerum in optio recusandae non minus </span> </p>
                                </div>
                                <div className="img-sec">
                                    <img src={first_store} alt="" />
                                    <em> <p> Olusegun </p> <p> Founder </p> </em>
                                </div>
                                <Link to={'/merchant-store/15499'}> Visit Store </Link>
                            </div>
                            <div className="each-comp">
                                <div className="head">
                                    <p> PaySprint Inc. </p>
                                    <p> Location: <span> Sans Fransisco </span> </p>
                                    <p> Store Description: <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam itaque rerum in optio recusandae non minus </span> </p>
                                </div>
                                <div className="img-sec">
                                    <img src={second_store} alt="" />
                                    <em> <p> Olusegun </p> <p> Founder </p> </em>
                                </div>
                                <Link to={'/merchant-store/15499'}> Visit Store </Link>
                            </div>
                            <div className="each-comp">
                                <div className="head">
                                    <p> PaySprint Inc. </p>
                                    <p> Location: <span> Sans Fransisco </span> </p>
                                    <p> Store Description: <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam itaque rerum in optio recusandae non minus </span> </p>
                                </div>
                                <div className="img-sec">
                                    <img src={third} alt="" />
                                    <em> <p> Olusegun </p> <p> Founder </p> </em>
                                </div>
                                <Link to={'/merchant-store/15499'}> Visit Store </Link>
                            </div>
                            <div className="each-comp">
                                <div className="head">
                                    <p> GreenMarket </p>
                                    <p> Location: <span> Sans Fransisco </span> </p>
                                    <p> Store Description: <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam itaque rerum in optio recusandae non minus </span> </p>
                                </div>
                                <div className="img-sec">
                                    <img src={fourth} alt="" />
                                    <em> <p> Olusegun </p> <p> Founder </p> </em>
                                </div>
                                <Link to={'/merchant-store/15499'}> Visit Store </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

        </section>

    </div>
      );

};