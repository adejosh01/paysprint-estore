import { faArrowTrendUp, faDoorOpen, faGear, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const RewardSideBar = () => {

    return (
        <>
            <div className="left-side">
                <ul>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faSackDollar} />  Reward Metrics </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faSackDollar} /> Store </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faSackDollar} /> Products </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faArrowTrendUp} /> Purchase History </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faSackDollar} /> Store Locations </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faSackDollar} /> Messages </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faGear} /> Settings </Link> </li>
                    <li> <Link to={'#'}> <FontAwesomeIcon icon={faDoorOpen} /> Sign Out </Link> </li>
                </ul>    
            </div>
        </>
    );
};


export default RewardSideBar;