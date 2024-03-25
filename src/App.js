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

function App() {

    return (
      <div className="app-container"> 
        <EstoreHeader />
          <Routes>
            <Route path="/" exact element={<EstoreDashboard title="Ashopree | Homepage" />} />
            <Route path="/onlinestore" exact element={<OnlineStore title="Ashopree | Estore" />} />
            <Route path="/allcategories" exact element={<AllCategories title="Ashopree | All Categories" />} />
            <Route path="/personalstore" exact element={<Personalstore title="Ashopree | Personal Store" />} />
            <Route path="/productdetails/:productCode" exact element={<ProductDetails title="Ashopree | Product Details" />} />
            <Route path="/mycart" exact element={<MyCarts title="Ashopree | My Carts" />} />
            <Route path="/checkout" exact element={<Checkout title="Ashopree | Checkout" />} />
            <Route path="/payment" exact element={<Payment title="Ashopree | Payments" />} />
            <Route path="/success" exact element={<SuccessfulOrder title="Ashopree | Successfully Ordered" />} />
            <Route path="/messages" exact element={<Messages title="Ashopree | Messages" />} />
            <Route path="/services" exact element={<ServiceDetails title="Ashopree | Service Details" />} />
            <Route path="/pricing" exact element={<Pricing title="Ashopree | Plans & Pricing" />} />
            <Route path="/gallery" exact element={<Gallery title="Ashopree | Gallery & Media" />} />
            <Route path="/referral-partner" exact element={<ReferralPartner title="Ashopree | Referral Partner" />} />
            <Route path="/terms-of-use" exact element={<TermsAndPrivacy title="Ashopree | Terms Of Use" />} />
          </Routes>
        <EstoreFooter />
      </div>
    ); 
  
}

export default App;
