import './side.styles.scss';
import { faArrowTrendUp, faCartShopping, faGear, faGift, faGlobe, faMessage, faPeopleGroup, faStarHalfStroke, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";
import graph_metric from 'assets/svg/reward_page/graph_metric.png';
import graph_metric2 from 'assets/svg/reward_page/graph_metric2.png';
import product_icon from 'assets/svg/reward_page/product_icon.png';
import logout from 'assets/svg/reward_page/logout.png';
import { confirmationOfAction } from "utils/utils";
import { useAuth } from "hook/AuthProvider";


const MyashopreeSidePage = () => {

    const location = useLocation();
    const pathname = location.pathname;

    const auth = useAuth();
    // console.log(auth);

    return (
        <>
            <div className="left-side">
                <ul className="side-menu">
                    <NavLink to={'/myashopree'}> <p> {pathname === '/myashopree' ? ( <img src={graph_metric} alt='graphImg' /> ) : ( <img src={graph_metric2} alt="graphImg" /> )}  Reward Metrics </p> </NavLink>
                    <NavLink to={'/favourite-stores'}> <p> <FontAwesomeIcon icon={faCartShopping} /> Favourite Stores </p> </NavLink>
                    <NavLink to={'/wishlist'}> <p> <FontAwesomeIcon icon={faGift} /> My Wishlist </p> </NavLink>
                    <NavLink to={'/track-orders'}> <p> <img src={product_icon} alt="productImg" /> Track Orders </p> </NavLink>
                    <NavLink to={'/purchase-history'}> <p> <FontAwesomeIcon icon={faArrowTrendUp} /> Purchase History </p> </NavLink>
                    <NavLink to={'/store-location'}> <p> <FontAwesomeIcon icon={faGlobe} /> Store Locations </p> </NavLink>
                    <NavLink to={'/messages'}> <p> <FontAwesomeIcon icon={faMessage} /> Messages </p> </NavLink>
                    <NavLink to={'/reviews'}> <p> <FontAwesomeIcon icon={faStarHalfStroke} /> My Reviews </p> </NavLink>
                    <NavLink to={'/myashopree/profile'}> <p> <FontAwesomeIcon icon={faUser} /> Profile </p> </NavLink>
                    <NavLink to={'/community'}> <p> <FontAwesomeIcon icon={faPeopleGroup} /> Community </p> </NavLink>
                    <NavLink to={'/myashopree/settings'}> <p> <FontAwesomeIcon icon={faGear} /> Settings </p> </NavLink>
                    <NavLink to={'logout'}> <p onClick={ () => confirmationOfAction(auth) }> <img src={logout} alt="logoutImg" /> Sign Out </p> </NavLink>
                </ul>    
            </div>
        </>
    );
};


export default MyashopreeSidePage;