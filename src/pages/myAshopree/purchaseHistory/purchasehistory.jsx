import './purchasehistory.styles.scss';
import { useEffect } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import AshopreePromos from 'components/Myashopree/promos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';



export const MyPurchaseHistory = ({ title }) => {

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="mypurchase-history">
                
                <section className="all-items">
                    <MyashopreeSidePage />

                    <main>
                        <div className="main-element">
                            <div className='first'>
                                <div className='head'>
                                    <h4> My Purchase Histories </h4>
                                </div>
                                <div className='stats'>
                                    <div class="table-container" >
                                        <table class="custom-table">
                                            <thead>
                                                <th> # </th>
                                                <th style={{ width: '40rem' }}> Description </th>
                                                <th> Amount </th>
                                            </thead>    
                                            <tbody>
                                                <tr>
                                                    <td> <FontAwesomeIcon icon={faCircle} /> </td>
                                                    <td> 
                                                        Consumer Monthly Subscription of NGN0.00 charged from your Wallet. Your current plan is FREE FOREVER 
                                                        <p> wallet-280220241709114880 </p>
                                                        <p> 28/02/2024 11:08 am </p>
                                                    </td>
                                                    <td className='amount'> -#0.00 <p> <span> Delivered</span> </p> </td>
                                                </tr>
                                                <tr>
                                                    <td> <FontAwesomeIcon icon={faCircle} /> </td>
                                                    <td> 
                                                        Consumer Monthly Subscription of NGN0.00 charged from your Wallet. Your current plan is FREE FOREVER 
                                                        <p> wallet-280220241709114880 </p>
                                                        <p> 28/02/2024 11:08 am </p>
                                                    </td>
                                                    <td className='amount'> -#0.00 <p> <span> Delivered</span> </p> </td>
                                                </tr>
                                                <tr>
                                                    <td> <FontAwesomeIcon icon={faCircle} /> </td>
                                                    <td> 
                                                        Consumer Monthly Subscription of NGN0.00 charged from your Wallet. Your current plan is FREE FOREVER 
                                                        <p> wallet-280220241709114880 </p>
                                                        <p> 28/02/2024 11:08 am </p>
                                                    </td>
                                                    <td className='amount'> -#0.00 <p> <span> Delivered</span> </p> </td>
                                                </tr>
                                                <tr>
                                                    <td> <FontAwesomeIcon icon={faCircle} /> </td>
                                                    <td> 
                                                        Consumer Monthly Subscription of NGN0.00 charged from your Wallet. Your current plan is FREE FOREVER 
                                                        <p> wallet-280220241709114880 </p>
                                                        <p> 28/02/2024 11:08 am </p>
                                                    </td>
                                                    <td className='amount'> -#0.00 <p> <span> Delivered</span> </p> </td>
                                                </tr>
                                                <tr>
                                                    <td> <FontAwesomeIcon icon={faCircle} /> </td>
                                                    <td> 
                                                        Consumer Monthly Subscription of NGN0.00 charged from your Wallet. Your current plan is FREE FOREVER 
                                                        <p> wallet-280220241709114880 </p>
                                                        <p> 28/02/2024 11:08 am </p>
                                                    </td>
                                                    <td className='amount'> -#0.00 <p> <span> Delivered</span> </p> </td>
                                                </tr>
                                                <tr>
                                                    <td> <FontAwesomeIcon icon={faCircle} /> </td>
                                                    <td> 
                                                        Consumer Monthly Subscription of NGN0.00 charged from your Wallet. Your current plan is FREE FOREVER 
                                                        <p> wallet-280220241709114880 </p>
                                                        <p> 28/02/2024 11:08 am </p>
                                                    </td>
                                                    <td className='amount'> -#0.00 <p> <span> Delivered</span> </p> </td>
                                                </tr>
                                                <tr>
                                                    <td> <FontAwesomeIcon icon={faCircle} /> </td>
                                                    <td> 
                                                        Consumer Monthly Subscription of NGN0.00 charged from your Wallet. Your current plan is FREE FOREVER 
                                                        <p> wallet-280220241709114880 </p>
                                                        <p> 28/02/2024 11:08 am </p>
                                                    </td>
                                                    <td className='amount'> -#0.00 <p> <span> Delivered</span> </p> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <AshopreePromos />
                    </main>
                </section>

            </section>

        </div>
    );

};

