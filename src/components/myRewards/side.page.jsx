import { faArrowTrendUp, faCartShopping, faGear, faGlobe, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import graph_metric from 'assets/svg/reward_page/graph_metric.png';
import product_icon from 'assets/svg/reward_page/product_icon.png';
import logout from 'assets/svg/reward_page/logout.png';


const RewardSideBar = () => {

    return (
        <>
            <div className="left-side">
                <ul className="side-menu">
                    <li className="active"> <Link to={'#'}> <img src={graph_metric} alt="djsh" />  Reward Metrics </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faCartShopping} /> Store </Link> </li>
                    <li> <Link to={'#'}> <img src={product_icon} alt="productImg" /> Products </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faArrowTrendUp} /> Purchase History </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faGlobe} /> Store Locations </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faMessage} /> Messages </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faGear} /> Settings </Link> </li>
                    <li> <Link to={'#'}> <img src={logout} alt="logoutImg" /> Sign Out </Link> </li>
                </ul>    
            </div>
        </>
    );
};


export default RewardSideBar;