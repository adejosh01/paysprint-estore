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
                                        <ol type='1'>
                                            <li> 
                                                <h5> Customer Information </h5>
                                                <p> We collect information from people who visit our website, make enquiries or otherwise contact us, trial our software, or set up and operate an account on behalf of a Merchant (including Merchant Administrators and Authorized Users). We call this ‘Customer Information.’ </p>
                                                <p> The Customer Information we collect includes: </p>
                                                <p> Name, email address and phone number and other contact details. </p>
                                                <p> Merchant name, location, website and number of members. </p>
                                                <p> Financial information such as your Merchant’s bank account details and Tax ID. </p>
                                                <p> Legal representative information such as name, address, date of birth and copy of personal identification. </p>
                                                <p> Electronic data such as IP addresses. </p>
                                            </li>
                                            <li>
                                                <h5> Individual Information </h5>
                                                <p> Personal information is also collected from individuals who use our Services to interact with, or send money, receive money, pay invoice or maintain a wallet with us. We call this information ‘Individual Information.’ </p>
                                                <p> Information collected from individuals includes: </p>
                                                <p> Name, email, phone number, address, and contact details. </p>
                                                <p> Other information required for verification purposes such as date of birth and copy of personal identification. </p>
                                                <p> Payment information such as bank account details or credit / debit card information. </p>
                                                <p> We collect and process Individual Information as a Data Controller (for GDPR purposes). </p>
                                                <p> More detailed information about the data collected in relation to the use of our Services  included in the Ashopree Terms of Service. </p>
                                            </li>
                                            <li>
                                                <h5> Customer Collected Information </h5>
                                                <p> You may use our Services by attending selling to customers over the online store created and using of our virtual store fronts and receive payment to your business account. </p>
                                                <p> We call information collected for these services ‘Customer Collected Information.’ </p>
                                                <p> Merchants who use our Pay Invoice System upload or support the uploading of information about their Customers, members and other individuals. In this case, the Merchant Administrator determines what personal information they will collect from you. That information is usually not disclosed to us nor do we have any right to use that information. </p>
                                                <p> We process Customer Collected Information as a Data Processor (for GDPR purposes). </p>
                                                <p> We assume that Merchants collect and process all Customer Collected Information lawfully, and in accordance with their obligations as Data Controllers pursuant to the GDPR and other applicable data protection laws. </p>
                                            </li>
                                            <li>
                                                <h5> Sensitive Data </h5>
                                                <p> The Customer Information, Individual Information and Customer Collected Information processed as part of our Services will include “special category data” for the purposes of the EU GDPR, or “sensitive data” under other privacy laws, as it includes information that relate to individual’s merchant affiliation. </p>
                                                <p> We need your consent to collect this type of data (where we are acting as Data Controller as outlined above). To support this requirement, we have included confirmation of your consent in our on-line forms and on our website. If you do not provide this information, we may not be able to provide our Services. </p>
                                                <p> Customer Collected Information is also special category or sensitive information, but this information has been collected and is processed by the Merchant as Data Controller. </p>
                                                <p> If you are concerned about the Customer Collected Information that has been included in any of or Services, we recommend you contact the Merchant you are affiliated with. </p>
                                            </li>
                                            <li>
                                                <h5> Cookies and Web Beacons </h5>
                                                <p> Ashopree may collect information through the use of common information-gathering tools such as web beacons or cookies. </p>
                                                <p>  A cookie is a small string of text that a website can send to your browser which helAshopree the Site remember and customize your visit. You have the option to delete or decline cookies by changing your browser’s settings. </p>
                                                <p> Web beacons help sites to understand the browsing, viewing, and click activity of visitors to our site. </p>
                                                <p> For more information about our collection and use of this type of data, please refer to our Cookie Policy. </p>
                                            </li>
                                            <li>
                                                <h5> Other information Ashopree may also collect information from your interaction with the Site, such as statistics in connection with pageviews, IP address, and standard web log information. </h5>
                                                <p> Other information that may be collected includes the average sent or received amount, the geographic breakdown of transactions by area, what times of the day have the heaviest traffic, and for what purpose money was sent or the type of service an invoice is paid. This information, collected in the aggregate, allows ASHOPREE to better serve all users and in the development of new products and services. None of this information is used to identify individuals. </p>
                                                <p> When browsing the Site through a mobile phone or mobile application, we will attempt to collect your location through ASHOPREE in order to understand transactions behaviours purposes. You may remove this location sharing authorization. </p>
                                            </li>
                                            <li>
                                                <h5> Children </h5>
                                                <p> ASHOPREE does not knowingly collect any Personal Information from or about a child (which we generally regard as anyone under the age of 16 years, subject to local law requirements) without the consent of the child’s parent or legal guardian. We may ask for evidence of a user’s date of birth to help us verify this. </p>
                                                <p> If we discover that we have inadvertently collected information from a child without the appropriate consent, we will promptly take all reasonable measures to delete that data from our systems. </p>
                                            </li>
                                            <li>
                                                <h5> How we collect your personal information </h5>
                                                <p> We collect Customer Information and Individual Information directly through forms on the Website, Mobile App or when a Merchant Administrator or other individual signs up for a Service or establishes an Account directly with us. </p>
                                                <p> We may also collect information: </p>
                                                <p> When you interact with us via our website, Chatbot or another online channel. </p>
                                                <p> When you connect with us via one of our social media platforms. </p>
                                                <p> When you contact us via email or over the phone? </p>
                                                <p> Customer Collected Information is collected by the Merchant you are connected to, including when you interact with one of the ASHOPREE Services. In most cases, ASHOPREE does not directly collect or control any Customer Collected Information. </p>
                                                <p> If you are concerned about the Customer Collected Information that has been included in any of ASHOPREE’s Services, we recommend you contact the Merchant you are affiliated with. </p>
                                            </li>
                                            <li>
                                                <h5> How we use your personal information. </h5>
                                                <ol type='I'>
                                                    <li>
                                                        <h5> Use in delivering services </h5>
                                                        <p> We will only use Personal Information for purposes related to building and providing you with great products and services and sending you a great experience. These purposes include: </p>
                                                        <p> To provide Merchants and Individuals with the goods and services they have requested. </p>
                                                        <p> To allow users to create or register and manage accounts. </p>
                                                        <p> To enable individuals to give to Merchants via a Sending or Pay Invoice account, and to administer Sending accounts, including pre-authorised recurring payments. </p>
                                                        <p> To enable us to administer accounts, including billing and dealing with payment issues. </p>
                                                        <p> To respond to requests, enquiries or complaints and other customer care related activities. </p>
                                                        <p> For administrative purposes including fraud and security checks. </p>
                                                        <p> To improve our website and Services and support the development of new products and services, including undertaking surveys and market research. </p>
                                                        <p> To generate statistics and aggregate reports for internal and external use. </p>
                                                        <p> To improve our understanding of all our Customers and our broader community, to help give all users and visitors a great experience. </p>
                                                        <p> We reserve the right to use all data collected, processed or derived by us in relation to the Services, for the purpose of industry trend and best practices reporting, statistical analysis and research relating to the development or improvement of any of our services or products. We will not publish or disclose statistical findings of individual Customer or Merchant activity. </p>
                                                        <p> We will not use your information for purposes other than described in this Policy unless we have your consent or there are specified law enforcement or public health and safety reasons or other uses required by law. </p>
                                                    </li>
                                                    <li>
                                                        <h5> Direct Marketing and Mailing List </h5>
                                                        <p> We may communicate directly with you by sending newsletters, promotions and other updates about our products and services. </p>
                                                        <p>  If you do not wish to receive marketing communications from ASHOPREE, you may unsubscribe by: </p>
                                                        <p> following the instructions in the communications sent to you; or </p>
                                                        <p> contacting us by email to privacy@ashopree.com </p>
                                                        <p> ASHOPREE does not participate in bulk email solicitations (i.e., “spam”) without your consent. </p>
                                                        <p> Your Personal Information will not be disclosed to third party marketers. We never sell, share, or otherwise use personal information for any commercial purposes outside of ASHOPREE. However, we may share aggregated anonymous information with third party advertisers, but this aggregated anonymous information cannot be matched with you personally unless you voluntarily share your Personal Information with the third-party advertisers. </p>
                                                    </li>
                                                    <li>
                                                        <h5> Other Sharing </h5>
                                                        <p> Personal data may be shared among the different members of the EXBC Inc. group (subject to compliance with any legal restrictions on cross-border transfers). </p>
                                                        <p> ASHOPREE may disclose or transfer personal information to a third party in the event of a proposed or actual purchase, sale, lease, merger, amalgamation or any other type of acquisition, disposal, transfer, conveyance or financing of all or any portion of EXBC Inc.in order for you to continue to receive the same services from the third party. </p>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <h5> How we disclose your personal information. </h5>
                                                <p> Unless you consent, we will not disclose any Customer Information or Individual or merchant Information to third parties, other than data processors or sub-processors we use as part of delivering our services. </p>
                                                <ol>
                                                    <li>
                                                        <h5> Processors and Sub-processors </h5>
                                                        <p> A list of the data processors used by us could be obtaining by emailing us at: privacy@ashopree.com </p>
                                                        <p> For all our processors and sub-processors: </p>
                                                        <p> each has agreed that it will only access and use personal information to the extent necessary to perform the functions contracted to it by us and which are necessary for us to be able to provide the Services. </p>
                                                        <p> we ensure that they will comply with all the obligations contained in this Policy either as part of the terms of service we have with them or pursuant to their commitment as Merchants that have certified as being compliant with the EU-US Privacy Shield arrangement. </p>
                                                    </li>
                                                    <li>
                                                        <h5> Optional Third-Party Services </h5>
                                                        <p> We give our Customers the option to use services that may involve third parties. This may be done via a link to another service or website and may include, as an example, links to PayPal or Stripe for online payment as part of our service. The decision to use these services is at the discretion of each Customer. </p>
                                                        <p> Although we try to only partner with reputable and trustworthy suppliers, we cannot control or be responsible for the policies of other sites we may link to, or the use of any personal information you may share with them. Please note that this Policy does not cover these other websites, and we recommend that you review the privacy policies attached to the use of those services and websites before deciding whether to proceed. </p>
                                                        <p> If you opt to use an optional third-party processor, you give that processor the right, power, and authority to act on your behalf to access and transmit your personal and other information (including Financial Information) according to terms of that third-party provider’s privacy policy. </p>
                                                        <p> If you do not want your Individual Information to be shared with third parties for example for the purposes of emailing or texting you or supporting any activity, please let the Merchant you are affiliated with know and they can disable these services for you. </p>
                                                    </li>
                                                    <li>
                                                        <h5> Financial Information </h5>
                                                        <p> When undertaking a financial transaction via our Services, for example, when sending money, adding money to your wallet or withdrawing money from your wallet, you may provide information including credit, debit or bank account details, and your name and address (“Financial Information”). ASHOPREE does not disclose Financial Information except to the appropriate banking institutions or payment processing provider in order to process a credit or debit authorization for payment, or to resolve a dispute or for other related purposes. </p>
                                                        <p> ASHOPREE does not have any access to your Financial Information inputted via third party payment processors. </p>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
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


