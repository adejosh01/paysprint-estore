import './wishlist.styles.scss';
import { useEffect, useState } from 'react';
// import deleteIcon from 'assets/icons/trashcan.png';
// import itemimage from 'assets/images/estore/productDetails/cokesecond.png';
// import washingMachine from 'assets/images/estore/rectangle-22.png';
// import sneakers from 'assets/images/estore/rectangle-23.png';
// import { performOperation } from 'components/randomFunctions/counter';
import config from "../../config";
import { useAuth } from "../../hook/AuthProvider";
import axios from "axios";

export const MyWishlist = ({title}) => {

    const apiUrl = config().baseUrl;
    const auth = useAuth();
    const [wishListItem, setWishListItem] = useState([]);

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);

        // Get My Wishlist ...
        const getWishListItems = async () => {

            try {

                const thisconfig = {
                    method: 'get',
                    url: `${apiUrl}/shop/product/mywishlist`,
                    headers: {
                        Authorization: 'Bearer ' + auth.token
                    }
                }

                const response = await axios(thisconfig);

                setWishListItem(response.data.data);

            } catch (error) {
                if (error.response) {
                    if (error.response.status === 401) {
                        setTimeout(() => window.location.href = '/login', 1000);
                    }
                }
            }
        }

        getWishListItems();
      }, [title, apiUrl, auth.token]);    
    
    // let currentNumber = 1;

    // const [number, setNumber] = useState(currentNumber);

    // // Function to handle the click event and perform the subtraction operation
    // const handleSubtraction = () => {
    //     const newNumber = performOperation(number, '-');
    //     setNumber(newNumber);
    // };

    // // Function to handle the click event and perform the addition operation
    // const handleAddition = () => {
    //     const newNumber = performOperation(number, '+');
    //     setNumber(newNumber);
    // };

    // console.log(wishListItem);

return (
    <div className="estore-container">
        <section className="wishlist">
            <div className="relevantstuffs">
                <div className='titlesandall'>
                    <h1> My Wishlist <span> ({wishListItem.length}) </span> </h1>
                </div>

                <div className='details'>
                    <div className="detailstitle">
                        <p> Product </p>
                        <p> In Stock </p>
                        <p> Price </p>
                    </div>

                    <div className="realdeals">
                    {
                        wishListItem.length > 0 ? (
                            wishListItem.map((item, index) => (
                                <>
                                    <div key={index}>
                                        <div>
                                            <img src={item.product.image} alt="" />
                                            <p> {item.product.productName}</p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                            <div>
                                                <p style={{ margin: '2rem 1rem' }}> {item.product.stock} </p>
                                            </div>
                                        </div>
                                        <p className='price'> {item.currencySymbol}{item.product.amount} </p>
                                    </div> <br /> <hr />
                                </>
                            ))
                            
                        ) : (
                            <>
                                <div>
                                    <p>No product added to wishlist yet</p>
                                </div> <br /> <hr />
                            </>
                        )
                    }
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
    
);

};