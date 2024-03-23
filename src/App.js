import { Route, Routes } from "react-router-dom"; 
import "./App.scss";
import "./utils/styles/globals.css"
import { EstoreDashboard } from "pages/estoreDashboard/estore.homepage";
import { EstoreHeader } from "components/header/estoreHeader.component";
import { EStore } from "pages/e-store/e-store";
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

function App() {

    return (
      <div className="app-container"> 
        <EstoreHeader />
          <Routes>
            <Route path="/" exact element={<EstoreDashboard title="PaySprint | Homepage" />} />
            <Route path="/estore" exact element={<EStore title="PaySprint | Estore" />} />
            <Route path="/allcategories" exact element={<AllCategories title="PaySprint | All Categories" />} />
            <Route path="/personalstore" exact element={<Personalstore title="PaySprint | Personal Store" />} />
            <Route path="/productdetails/:productCode" exact element={<ProductDetails title="PaySprint | Product Details" />} />
            <Route path="/mycart" exact element={<MyCarts title="PaySprint | My Carts" />} />
            <Route path="/checkout" exact element={<Checkout title="PaySprint | Checkout" />} />
            <Route path="/payment" exact element={<Payment title="PaySprint | Payments" />} />
            <Route path="/success" exact element={<SuccessfulOrder title="PaySprint | Successfully Ordered" />} />
            <Route path="/messages" exact element={<Messages title="PaySprint | Messages" />} />
            <Route path="/services" exact element={<ServiceDetails title="PaySprint | Service Details" />} />
            <Route path="/pricing" exact element={<Pricing title="PaySprint | Plans & Pricing" />} />
            <Route path="/gallery" exact element={<Gallery title="PaySprint | Gallery & Media" />} />
            <Route path="/referral-partner" exact element={<ReferralPartner title="PaySprint | Referral Partner" />} />
          </Routes>
        <EstoreFooter />
      </div>
    ); 
  
}

export default App;
