import './mycart.styles.scss';
import { useEffect } from 'react';
import deleteIcon from 'assets/icons/trashcan.png';
import itemimage from 'assets/images/estore/productDetails/cokesecond.png';
import washingMachine from 'assets/images/estore/rectangle-22.png';
import sneakers from 'assets/images/estore/rectangle-23.png';
import { Link } from 'react-router-dom';


export const MyCarts = ({title}) => {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return (
            <div className="estore-container">
                <section className="maincontent">
                    <div className="relevantstuffs">
                        <div className='titlesandall'>
                            <h1> My Cart <span> (3) </span> </h1>
                            <button type='button' style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}> 
                                <img src={deleteIcon} alt="the trash bin" /> Remove    
                            </button>
                        </div>

                        <div className='details'>
                            <div className="detailstitle">
                                <p> Product </p>
                                <p> Quantity </p>
                                <p> Price </p>
                            </div>

                            <div className="realdeals">
                                <div>
                                    <div>
                                        <img src={itemimage} alt="" />
                                        <p> Coca cola 60cl * 12</p>
                                    </div>
                                    <div style={{  display: 'flex', gap: '0.5rem', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                        <div>
                                            <p> - </p>
                                            <p style={{ margin: '2rem 1rem' }}> 1 </p>
                                            <p> + </p>
                                        </div>
                                        <button type='button' style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}> 
                                            <img src={deleteIcon} alt="the trash bin" /> Remove    
                                        </button>
                                    </div>
                                    <p className='price'> #1200.00 </p>
                                </div> <br /> <hr />

                                <div>
                                    <div>
                                        <img src={sneakers} alt="" />
                                        <p> White Sneakers</p>
                                    </div>
                                    <div style={{  display: 'flex', gap: '0.5rem', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                        <div>
                                            <p> - </p>
                                            <p style={{ margin: '2rem 1rem' }}> 1 </p>
                                            <p> + </p>
                                        </div>
                                        <button type='button' style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}> 
                                            <img src={deleteIcon} alt="the trash bin" /> Remove    
                                        </button>
                                    </div>
                                    <p className='price'> #1200.00 </p>
                                </div> <br /> <hr />

                                <div>
                                    <div>
                                        <img src={washingMachine} alt="" />
                                        <p> Washing Machine</p>
                                    </div>
                                    <div style={{  display: 'flex', gap: '0.5rem', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                        <div>
                                            <p> - </p>
                                            <p style={{ margin: '2rem 1rem' }}> 1 </p>
                                            <p> + </p>
                                        </div>
                                        <button type='button' style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}> 
                                            <img src={deleteIcon} alt="the trash bin" /> Remove    
                                        </button>
                                    </div>
                                    <p className='price'> #1200.00 </p>
                                </div> <br /> <hr />
                            </div>
                        </div>
                    </div>

                    <div className="sideconts" st>
                        <p> Cart Summary</p>
                        <div className='grped'>
                            <div>
                                <p> Items </p>
                                <p> 3 </p>
                            </div>
                            <div>
                                <p> Subtotal </p>
                                <p> #12,000.00 </p>
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
} ;