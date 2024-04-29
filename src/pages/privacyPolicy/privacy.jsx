import './privacy.styles.scss';
import { useEffect } from 'react';


export const PrivacyPolicy = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="privacy-policy">
                <div className="contents">
                    <div className="details">
                        <h2> Privacy Policy </h2>

                        <div className="both-contents">
                            <div className="side">
                                <ol type='1'>
                                    <li> Introduction </li>
                                    <li> Our Services</li>
                                    <li> Information We Collect About You
                                        <ol>
                                            <li> Customer Information </li>    
                                            <li> Individual Information </li>    
                                            <li> Customer Collected Information </li>    
                                            <li> Sensitive Data </li>    
                                            <li> Cookies and Web Beacons </li>    
                                            <li> Other Information </li>    
                                            <li> Children </li>    
                                            <li> How we collect your personal information </li>    
                                            <li> How we use your personal information
                                                <ol>
                                                    <li> Use in delivering services </li>    
                                                    <li> Direct Marketing and Mailing list </li>    
                                                    <li> Other sharing </li>
                                                </ol>    
                                             </li>    
                                            <li> How we disclose your personal information 
                                                <ol>
                                                    <li> Processors and Sub-processors </li>    
                                                    <li> Optionial Third-Party Services </li>    
                                                    <li> Financial Information </li>    
                                                    <li> Social Networks </li>    
                                                </ol>
                                            </li> 
                                            <li> International Transfers of Personal Information </li>    
                                            <li> Security and retention of personal information
                                                <ol>
                                                    <li> Securing your account </li>    
                                                    <li> Data Security </li>
                                                    <li> Data Breaches </li>
                                                    <li> Retention of Personal Information </li>
                                                </ol>    
                                             </li>    
                                            <li> Access and Amendments
                                                <ol>
                                                    <li> Deleting your Personal Information </li>
                                                    <li> Other Rights </li>
                                                </ol>
                                             </li>    
                                            <li> Additional EU GDPR Matters
                                                <ol> 
                                                    <li> Lawful Bases for Processing Personal Data </li>
                                                    <li> Data Protection Officer/EU Representative </li>
                                                </ol>    
                                             </li>    
                                            <li> Contact Details </li>    
                                            <li> Definitions </li> 
                                        </ol>    
                                     </li>
                                </ol>
                            </div>
                            <div className="main">
                                <ol type='1'>
                                    <li>
                                        <h5> Introduction </h5>
                                        <p> Thank you for using the services of Ashopree. We provide ecommerce, store front and payment services for micro and small businesses all over the world. </p>
                                        <p> This Privacy Policy applies to the processing of personal data by Ashopree Inc. (as defined) located at 340-2250 Bovaird Drive East, Brampton ON. L6R 3J5 </p>
                                        <p> We may change this Policy from time to time. If we do, we shall post a revision of this Privacy Policy at httAshopree://ashopree.com/privacy-policy and your continued use of the Services provided through mobile app or website shall be subject to such revised terms. </p>
                                    </li> 
                                    <li>
                                        <h5> Our Services </h5>
                                        <p> Our Service include: </p>
                                        <p> We offer ecommerce solution, store front and capacilities for your business to receive payment for goods and services sold. </p>
                                        <p> We also offer fulfilment centre, a network of delivery service providers that assist businesses to delivery goods. </p>
                                    </li> 
                                    <li>
                                        <h5> Information We Collect About You </h5>
                                    </li>
                                </ol>           

                            </div>
                        </div>
                    </div>                    
                </div>                
            </section>

        </div>
    );

};

