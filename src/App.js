import { Route, Routes } from "react-router-dom"; 
import "./App.scss";
import "./utils/styles/globals.css"
import { EstoreDashboard } from "pages/estoreDashboard/estore.homepage";
import { EstoreHeader } from "components/header/estoreHeader.component";
import { OnlineStore } from "pages/onlinestore/onlinestore";
import { Personalstore } from "pages/personalstore/personalstore.page";
import { AllCategories } from "pages/allcategories/allcategories.page";
import { ProductDetails } from "pages/productdetails/product.page";
import { MyCarts } from "pages/mycart/mycart.page";
import { Checkout } from "pages/checkout/checkout.page";
import { Payment } from "pages/topayment/payments.page";
import { SuccessfulOrder } from "pages/succcessfulOrder/success.page";
import { EstoreFooter } from "components/footer/footer.component";
import { Messages } from "pages/messages/messages.page";
import { ServiceDetails } from "pages/servicesdetails/service.page";
import { Pricing } from "pages/pricing/pricing";
import { Gallery } from "pages/gallery/gallery";
import { ReferralPartner } from "pages/referralpartner/referralpartner";
import { TermsAndPrivacy } from "pages/termsAndPrivacy/terms"; 
import { NotFound404 } from "pages/404/notFound";
import { Community } from "pages/community/community";
import { AskQuestions } from "pages/askQuestions/askquestions";
import { Search } from "pages/search/search";
import { Contact } from "pages/contact/contact";
import AuthProvider from "hook/AuthProvider";
import { Login } from "pages/login/login";

function App() {

    return (
      <div className="app-container"> 
        <EstoreHeader />

        <AuthProvider>
          <Routes>
            <Route path="/" exact element={<EstoreDashboard title="Ashopree | Homepage" />} />
            <Route path="/onlinestore" exact element={<OnlineStore title="Ashopree | Estore" />} />
            <Route path="/allcategories" exact element={<AllCategories title="Ashopree | All Categories" />} />
            <Route path="/merchant-store/:id" exact element={<Personalstore title="Ashopree | Merchant Store" />} />
            <Route path="/productdetails/:productCode" exact element={<ProductDetails title="Ashopree | Product Details" />} />
            <Route path="/mycart" exact element={<MyCarts title="Ashopree | My Carts" />} />
            <Route path="/checkout" exact element={<Checkout title="Ashopree | Checkout" />} />
            <Route path="/payment" exact element={<Payment title="Ashopree | Payments" />} />
            <Route path="/success" exact element={<SuccessfulOrder title="Ashopree | Successfully Ordered" />} />
            <Route path="/messages" exact element={<Messages title="Ashopree | Messages" />} />
            <Route path="/services/:id" exact element={<ServiceDetails title="Ashopree | Service Details" />} />
            <Route path="/pricing" exact element={<Pricing title="Ashopree | Plans & Pricing" />} />
            <Route path="/gallery" exact element={<Gallery title="Ashopree | Gallery & Media" />} />
            <Route path="/referral-partner" exact element={<ReferralPartner title="Ashopree | Referral Partner" />} />
            <Route path="/terms-of-use" exact element={<TermsAndPrivacy title="Ashopree | Terms Of Use" />} />
            <Route path="/community" exact element={<Community title="Ashopree | Community " />} />
            <Route path="/askquestions" exact element={<AskQuestions title="Ashopree | Ask Questions " />} />
            <Route path='/search' exact element={<Search title="Ashopree | Searched Items" />} />
            <Route path='/contact' exact element={<Contact title="Ashopree | Contact Us" />} />
            <Route path='/login' exact element={<Login title="Ashopree | Login" />} />
            <Route path='*' exact={true} element={<NotFound404 title={"Ashopree | 404 Not Found"} />} />
          </Routes>
        </AuthProvider>
          
        <EstoreFooter />
      </div>
    ); 
  
}

export default App;
