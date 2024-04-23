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
            <Route path="/" exact element={<EstoreDashboard title="aShopree | Homepage" />} />
            <Route path="/onlinestore" exact element={<OnlineStore title="aShopree | Estore" />} />
            <Route path="/allcategories" exact element={<AllCategories title="aShopree | All Categories" />} />
            <Route path="/merchant-store/:id" exact element={<Personalstore title="aShopree | Merchant Store" />} />
            <Route path="/productdetails/:productCode" exact element={<ProductDetails title="aShopree | Product Details" />} />
            <Route path="/mycart" exact element={<MyCarts title="aShopree | My Carts" />} />
            <Route path="/checkout" exact element={<Checkout title="aShopree | Checkout" />} />
            <Route path="/payment" exact element={<Payment title="aShopree | Payments" />} />
            <Route path="/success" exact element={<SuccessfulOrder title="aShopree | Successfully Ordered" />} />
            <Route path="/messages" exact element={<Messages title="aShopree | Messages" />} />
            <Route path="/services/:id" exact element={<ServiceDetails title="aShopree | Service Details" />} />
            <Route path="/pricing" exact element={<Pricing title="aShopree | Plans & Pricing" />} />
            <Route path="/gallery" exact element={<Gallery title="aShopree | Gallery & Media" />} />
            <Route path="/referral-partner" exact element={<ReferralPartner title="aShopree | Referral Partner" />} />
            <Route path="/terms-of-use" exact element={<TermsAndPrivacy title="aShopree | Terms Of Use" />} />
            <Route path="/community" exact element={<Community title="aShopree | Community " />} />
            <Route path="/askquestions" exact element={<AskQuestions title="aShopree | Ask Questions " />} />
            <Route path='/search' exact element={<Search title="aShopree | Searched Items" />} />
            <Route path='/contact' exact element={<Contact title="aShopree | Contact Us" />} />
            <Route path='/login' exact element={<Login title="aShopree | Login" />} />  
            <Route path='*' exact={true} element={<NotFound404 title={"aShopree | 404 Not Found"} />} />
          </Routes>
        </AuthProvider>
          
        <EstoreFooter />
      </div>
    ); 
  
}

export default App;
