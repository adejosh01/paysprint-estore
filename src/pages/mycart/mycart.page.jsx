import './mycart.styles.scss';
import { useEffect, useState } from 'react';
import deleteIcon from 'assets/icons/trashcan.png';
import { Link } from 'react-router-dom';
// import { performOperation } from 'components/randomFunctions/counter';
import config from "../../config";
import axios from "axios";
import { useAuth } from "../../hook/AuthProvider";

export const MyCarts = ({ title }) => {
    const apiUrl = config().baseUrl;
    const auth = useAuth();
    const [cartItem, setCartItem] = useState([]);
    const [merchantInfo, setMerchantInfo] = useState();
    const [sumTotal, setSumTotal] = useState(0);
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);

        const getCartItems = async () => {

            const thisconfig = {
                method: 'get',
                url: `${apiUrl}/shop/product/loadmycart`,
                headers: {
                    Authorization: 'Bearer ' + auth.token
                }
            }

            const response = await axios(thisconfig);

            setCartItem(response.data.data);
            setMerchantInfo(response.data.merchant);

            if ((response.data.data).length > 0) {
                var cartTotal = [];
                for (let i = 0; i < response.data.data.length; i++) {
                    const arrTotal = Number(response.data.data[i].price * response.data.data[i].quantity);
                    cartTotal.push(arrTotal);
                }

                const sum = cartTotal.reduce((total, n) => total + n, 0);
                setSumTotal(sum);

            }

        }

        getCartItems();

    }, [title, apiUrl, auth.token]);

    return (
        <div className="estore-container">
            <section className="maincontent">
                <div className="relevantstuffs">
                    <div className='titlesandall'>
                        <h1> My Cart <span> ({cartItem.length}) </span> </h1>

                        {cartItem.length > 0 ? (
                            <>
                                <button type='button' style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <img src={deleteIcon} alt="the trash bin" /> Remove
                                </button>
                            </>
                        ) : null}

                    </div>

                    <div className='details'>

                        <div className="detailstitle">
                            <p> Product </p>
                            <p> Quantity </p>
                            <p> Price </p>
                        </div>

                        { cartItem.length > 0 ? (
                            cartItem.map((item, index) => (
                                <>
                                    <div className="realdeals" index={index}>
                                        <div>
                                            <div>
                                                <img src={item.productImage} alt="" />
                                                <p> {item.productName}</p>
                                            </div>
                                            <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                                <div>
                                                    {/* <p onClick={handleSubtraction}> - </p> */}
                                                    <p style={{ margin: '2rem 1rem' }}> {item.quantity} </p>
                                                    {/* <p onClick={handleAddition}> + </p> */}
                                                </div>
                                                {/* <button type='button' style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                                                <img src={deleteIcon} alt="the trash bin" /> Remove
                                                            </button> */}
                                            </div>
                                            <p className='price'> {merchantInfo?.currencySymbol} {Number(item.price).toLocaleString()} </p>
                                        </div> <br /> <hr />
                                    </div>
                                </>
                            ))

                        ) : (
                            <p style={{ textAlign: "center", fontSize: 20 }}>No item added to cart. Continue shopping</p>
                        )}
                    </div>
                </div>

                <div className="sideconts">
                    <p> Cart Summary</p>
                    <div className='grped'>
                        <div>
                            <p> Items </p>
                            <p> {cartItem.length} </p>
                        </div>
                        <div>
                            <p> Subtotal </p>
                            <p> {merchantInfo?.currencySymbol} {Number(sumTotal).toLocaleString()}  </p>
                        </div>
                    </div>
                    <button type='button'>
                        <Link to={'/checkout'}>
                            <p> Proceed to Checkout </p>
                        </Link>
                    </button>
                </div>
            </section>
        </div>
    );
};