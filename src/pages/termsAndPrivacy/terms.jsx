import './terms.styles.scss';
import { useEffect } from 'react';


export const TermsAndPrivacy = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="termsandprivacy">
                <div className="contents">
                    <div className="details">
                        <h2> Terms Of Use </h2>

                        <div className="both-contents">
                            <div className="side">
                                <ol type='1'>
                                    <li> Account Terms </li>
                                    <li> Account Activation
                                        <ol>
                                            <li> Store Owner </li>
                                            <li> Employee Accounts </li>
                                            <li> Ashopree Payments and Checkout Accounts. </li>
                                            <li> My Branded PAY </li>
                                            <li> Domain Names </li>
                                        </ol>
                                    </li>
                                    <li> Ashopree Rights </li>
                                    <li> Your Responsibilities </li>
                                    <li> Payment of fees and taskes </li>
                                    <li> Confidentiality </li>
                                    <li> Limitation of Liability and Indemnification </li>
                                    <li> Intellectual Property and Your Materials
                                        <ol>
                                            <li> Your Materials </li>    
                                            <li> aShopree Intellectual Property </li>    
                                            <li> aShopree Delivery </li>    
                                            <li> SMS Messaging </li>    
                                            <li> Theme Store </li>    
                                            <li> aShopree Email </li>    
                                            <li> My Online Store App </li>    
                                            <li> Third Party Services, Experts, and Experts Marketplace </li>    
                                            <li> Beta Services </li>    
                                        </ol>    
                                     </li>
                                     <li> Feedback and Review </li>
                                     <li> DMCA Notice and Takedown Procedure </li>
                                     <li> Privacy and Data Protection </li>
                                     <li> aShopree Contracting Party </li>
                                     <li> Term and Termination </li>
                                     <li> Modifications </li>
                                     <li> General Conditions </li>
                                </ol>
                            </div>
                            <div className="main">
                                <div>
                                    <h5> Welcome to aShopree </h5>
                                    <p> By signing up for a Ashopree Account (as defined in Section 1) or by using any Ashopree Services (as defined below), you are agreeing to be bound by the following terms and conditions (the “Terms of Service”). </p>
                                    <p> As used in these Terms of Service, “we”, “us”, “our” and “Ashopree” means the applicable Ashopree Contracting Party (as defined in Section 13 below), and “you” means the Ashopree User (if registering for or using a Ashopree Service as an individual), or the business employing the Ashopree User (if registering for or using a Ashopree Service as a business) and any of its affiliates. </p>
                                    <p> Ashopree provides a flexible all-in-one online platform that offers Online store, virtual store front and virtual payments services that enables merchants to unify their commerce activities. Among other features, this platform includes a range of tools for merchants to customize online stores, sell in multiple places (including web, mobile, social media, other online platforms, and other online locations (“Online Services”) and manage products, inventory, payments, fulfillment, Delivery, business operations, marketing and advertising, and engage with existing and potential customers. Any such service or services offered by Ashopree are referred to in these Terms of Services as the “Service(s)”. Any new features or tools which are added to the current Services will also be subject to the Terms of Service. You can review the current version of the Terms of Service at any time at https://ashopree.com/legal/terms. </p>
                                    <p> You must read, agree with and accept all of the terms and conditions contained or expressly referenced in these Terms of Service, including Ashopree’s Acceptable Use Policy (“AUP”) and Privacy Policy, and, if applicable, the Supplementary Terms of Service for E.U. Merchants ("EU Terms"), the Ashopree API License and Terms of Use (“API Terms”) and the Ashopree Data Processing Addendum (“DPA”) before you may sign up for a Ashopree Account or use any Ashopree Service. Additionally, if you offer goods or services in relation to COVID-19, you must read, acknowledge, and agree to the Rules of Engagement for Sale of COVID-19 Related Products. </p>
                                    <p> Please read the Terms of Service, including any document referred to in these Terms of Service, for the complete understanding of your legal requirements. By using Ashopree or any Ashopree services, you are agreeing to these terms. Please check back for updates regularly. </p>
                                </div> 
                                <ol type='1'>
                                    <li>
                                        <h5> Account Terms </h5>
                                        <p> Which means You are responsible for your Account, the Materials you upload to the Ashopree Service and the operation of your Ashopree Store. If you violate Ashopree’s terms of service, we may cancel your service access. If we need to reach you, we will communicate via the Primary Email Address on file. </p>
                                        <p> To access and use the Services, you must register for a Ashopree account (“Account”).   To complete your Account registration, you must provide us with your full legal name, business address, phone number, a valid email address, and any other information indicated as required. Ashopree may reject your application for an Account, or cancel an existing Account, for any reason, at our sole discretion. </p>
                                        <p> You must be the older of: (i) 18 years, or (ii) at least the age of majority based on the jurisdiction where you reside and from which you use the Services to open an Account. </p>
                                        <p> You confirm that you are receiving any Services provided by Ashopree for the purposes of carrying on a business activity and not for any personal, household or family purpose. </p>
                                        <p> You acknowledge that Ashopree will use the email address you provide on opening an Account or as updated by you from time to time as the primary method for communication with you (“Primary Email Address”). You must monitor the Primary Email Address you provide to Ashopree and your Primary Email Address must be capable of both sending and receiving messages. Your email communications with Ashopree can only be authenticated if they come from your Primary Email Address. </p>
                                        <p> You are responsible for keeping your password secure. Ashopree cannot and will not be liable for any loss or damage from your failure to maintain the security of your Account and password. </p>
                                        <p> We may request additional security measures at any time and reserve the right to adjust these requirements at our discretion. </p>
                                        <p> Technical support in respect of the Services is only provided to Ashopree Users. Questions about the Terms of Service should be sent to Ashopree Support. </p>
                                        <p> You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Services, or access to the Services without the express written permission by Ashopree. </p>
                                        <p> You agree not to work around, bypass, or circumvent any of the technical limitations of the Services, including to process orders outside Ashopree’s Checkout, use any tool to enable features or functionalities that are otherwise disabled in the Services, or decompile, disassemble or otherwise reverse engineer the Services. </p>
                                        <p> You agree not to access the Services or monitor any material or information from the Services using any robot, spider, scraper, or other automated means. </p>
                                        <p> You understand that your Materials may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of </p>
                                        <p> connecting networks or devices. “Materials” means Your Trademarks, copyright content, any products or services you sell through the Services (including description and price), and any </p>
                                        <p> photos, images, videos, graphics, written content, audio files, code, information, or other data provided or made available by you or your affiliates to Ashopree or its affiliates. </p>
                                    </li> 
                                    <li>
                                        <h5> Account Activation </h5>
                                        <p> Which means Only contact person can be the “Store Owner”, usually the person signing up for the Ashopree Service. The Store Owner is responsible for the Account, is bound by these Terms of Service and is responsible for the actions of others accessing the Account. If you sign up on behalf of your employer, your employer is the Store Owner responsible for your Account.We automatically create certain accounts for you to accept payments. You are responsible for activating and deactivating these accounts and complying with their terms, which may be with various third parties, including but not limited to PayPal, Apple Pay, and Google Payment. Any domain you purchase through us will automatically renew unless you opt out. </p>
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

