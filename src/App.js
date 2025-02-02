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
import { MyFavouriteStores } from "pages/myAshopree/myFavouriteStores/favouritestores.page";
import { Myashopree } from "pages/myAshopree/myashopree.page";
import { StoreLocation } from "pages/myAshopree/storeLocation/storeLocation.page";
import { GetStarted } from "pages/getstarted/getstarted";
import { CommunityPost } from "pages/community/commuinity-post";
import { TrackOrders } from "pages/myAshopree/trackOrders/trackOrders.page";
import { MyReviews } from "pages/myAshopree/myReviews/reviews.page";
import { MyPurchaseHistory } from "pages/myAshopree/purchaseHistory/purchasehistory";
import { MyWishlist } from "pages/mywishlist/wishlist.page";
import { StoreLocationProfile } from "pages/myAshopree/storeLocationProfile/storeLocationProfile.page";

function App() {

    return (
      <div className="app-container"> 

        <AuthProvider>
          <EstoreHeader />

          <Routes>
            <Route path="/" exact element={<EstoreDashboard title="aShopree | Homepage" />} />
            <Route path="/stores" exact element={<OnlineStore title="aShopree | Online Store" />} />
            <Route path="/allcategories" exact element={<AllCategories title="aShopree | All Categories" />} />
            <Route path="/merchant-store/:id" exact element={<Personalstore title="aShopree | Merchant Store" />} />
            <Route path="/productdetails/:productCode" exact element={<ProductDetails title="aShopree | Product Details" />} />

            <Route element={<PrivateRoute />}>
              <Route path="/mycart" exact element={<MyCarts title="aShopree | My Carts" />} />
              <Route path="/checkout" exact element={<Checkout title="aShopree | Checkout" />} />
              <Route path="/payment" exact element={<Payment title="aShopree | Payments" />} />
              <Route path="/messages" exact element={<Messages title="aShopree | Messages" />} />
              {/* <Route path="/community" exact element={<Community title="aShopree | Community " />} />
              <Route path="/community/post" exact element={<CommunityPost title="aShopree | Community - Post Thread" />} /> */}
              <Route path="/favourite-stores" exact element={<MyFavouriteStores title="aShopree | My Favourite Stores " />} />
              <Route path="/wishlist" exact element={<MyWishlist title="aShopree | My Wishlists " />} />
              <Route path="/myashopree" exact element={<Myashopree title="aShopree | My aShopree " />} />
              <Route path="/store-location" exact element={<StoreLocation title="aShopree | My Stores Location " />} />
              <Route path="/track-orders" exact element={<TrackOrders title="aShopree | Track Orders " />} />
              <Route path="/reviews" exact element={<MyReviews title="aShopree | My Reviews " />} />
              <Route path="/purchase-history" exact element={<MyPurchaseHistory title="aShopree | My Purchase History " />} />
              <Route path="/store-location-profile" exact element={<StoreLocationProfile title="aShopree | My Stores Location Profile " />} />
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
            <Route path="/get-started" exact element={<GetStarted title="aShopree | Get Started" />} />
            {/* <Route path='*' exact={true} element={<NotFound404 title={"aShopree | 404 Not Found"} />} /> */}
          </Routes>
        </AuthProvider>
          
        <EstoreFooter />
      </div>
    ); 
  
}

export default App;
