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
import { TermsOfUse } from "./pages/termsOfUse/terms";
// import { NotFound404 } from "pages/404/notFound";
import { Community } from "pages/community/community";
import { AskQuestions } from "pages/askQuestions/askquestions";
import { Search } from "pages/search/search";
import { Contact } from "pages/contact/contact";
import { Login } from "pages/login/login";
import AuthProvider from "hook/AuthProvider";
import { SignupPage } from "pages/signup/signup.component";
import { SignupFormContextProvider } from "context/signup-form.context";
import { SignupMerchantPage } from "pages/signupformerchant/signup_merchant.component";
import PrivateRoute from "router/route";
import { PrivacyPolicy } from "pages/privacyPolicy/privacy";
import { RegisteredStore } from "pages/registeredStore/registered.page";
import { MyOrders } from "pages/myorders/myorders.page";
import { MyWishlist } from "pages/mywishlist/wishlist.page";
import { Reward } from "pages/reward/reward.page";
import { StoreLocation } from "pages/storeLocation/storeLocation.page";

function App() {

    return (
      <div className="app-container"> 

        <AuthProvider>
          <EstoreHeader />

          <Routes>
            <Route path="/" exact element={<EstoreDashboard title="aShopree | Homepage" />} />
            <Route path="/onlinestore" exact element={<OnlineStore title="aShopree | Online Store" />} />
            <Route path="/allcategories" exact element={<AllCategories title="aShopree | All Categories" />} />
            <Route path="/merchant-store/:id" exact element={<Personalstore title="aShopree | Merchant Store" />} />
            <Route path="/productdetails/:productCode" exact element={<ProductDetails title="aShopree | Product Details" />} />

            <Route element={<PrivateRoute />}>
              <Route path="/mycart" exact element={<MyCarts title="aShopree | My Carts" />} />
              <Route path="/checkout" exact element={<Checkout title="aShopree | Checkout" />} />
              <Route path="/payment" exact element={<Payment title="aShopree | Payments" />} />
              <Route path="/messages" exact element={<Messages title="aShopree | Messages" />} />
              <Route path="/community" exact element={<Community title="aShopree | Community " />} />
              <Route path="/myorders" exact element={<MyOrders title="aShopree | My Orders " />} />
              <Route path="/mywishlist" exact element={<MyWishlist title="aShopree | My Wishlists " />} />
              <Route path="/myshoppings" exact element={<Reward title="aShopree | My Shoppings " />} />
              <Route path="/store-location" exact element={<StoreLocation title="aShopree | My Shoppings " />} />
            </Route>

            

            <Route path="/success" exact element={<SuccessfulOrder title="aShopree | Successfully Ordered" />} />

            <Route path="/services/:id" exact element={<ServiceDetails title="aShopree | Service Details" />} />
            <Route path="/pricing" exact element={<Pricing title="aShopree | Plans & Pricing" />} />
            <Route path="/gallery" exact element={<Gallery title="aShopree | Gallery & Media" />} />
            <Route path="/referral-partner" exact element={<ReferralPartner title="aShopree | Referral Partner" />} />
            <Route path="/terms-of-use" exact element={<TermsOfUse title="aShopree | Terms Of Use" />} />
            <Route path="/askquestions" exact element={<AskQuestions title="aShopree | Ask Questions " />} />
            <Route path='/search' exact element={<Search title="aShopree | Searched Items" />} />
            <Route path='/contact' exact element={<Contact title="aShopree | Contact Us" />} />
            <Route path='/login' exact element={<Login title="aShopree | Login" />} />  
            <Route path="/register" exact element={ <SignupFormContextProvider> <SignupPage title="aShopree | Register" /> </SignupFormContextProvider>} />
            <Route path="/merchant-register" exact element={ <SignupFormContextProvider> <SignupMerchantPage title="aShopree | Merchant Registration" /> </SignupFormContextProvider>} />
            <Route path="/privacy-policy" exact element={<PrivacyPolicy title="aShopree | Privacy Policy" />} />
            <Route path="/registered-stores" exact element={<RegisteredStore title="aShopree | Registered Stores" />} />
            {/* <Route path='*' exact={true} element={<NotFound404 title={"aShopree | 404 Not Found"} />} /> */}
          </Routes>
        </AuthProvider>
          
        <EstoreFooter />
      </div>
    ); 
  
}

export default App;
