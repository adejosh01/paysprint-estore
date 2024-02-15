import { Footer } from "components/footer/footer.component";
import { Header } from "components/header/header.component";
import { SignupFormContextProvider } from "context/signup-form.context";
import { AboutPage } from "pages/about/about.page";
import { ContactPage } from "pages/contact/contact.page";
import { Dashboard } from "pages/dashboard/dashboard.component";
import { HomePage } from "pages/home/home.page";
import { PricePage } from "pages/price/price.page";
import { SigninPage } from "pages/signin/siginin.page";
import { SignupPage } from "pages/signup/signup.component";
import { VerifyPage } from "pages/verify/verify.component";
import { Route, Routes } from "react-router-dom"; 
import "./App.scss";
import Home from "pages/dashboard2/page";
import { useLocation } from 'react-router-dom';
import WalletPage from "pages/dashboard2/wallet/wallet.page";
import TransactionPage from "pages/dashboard2/transactions/transaction.page";
import ServicesPage from "pages/dashboard2/services/services.page";
import PromotionsPage from "pages/dashboard2/promotions/promotions.page";
import SettingsPage from "pages/dashboard2/settings/settings.page";
import ProfilePage from "pages/dashboard2/profile/profile.page";
import { MerchantHomePage } from "./pages/everythingmerchant/merchant/home.page";
import { EstoreDashboard } from "pages/everythingestore/estoreDashboard/estore.homepage";
import { EstoreHeader } from "components/estore/header/estoreHeader.component";
import { EStore } from "pages/everythingestore/e-store/e-store";
import { Personalstore } from "pages/everythingestore/personalstore/personalstore.page";
import { AllCategories } from "pages/everythingestore/allcategories/allcategories.page";
import { ProductDetails } from "pages/everythingestore/productdetails/product.page";
import { MyCarts } from "pages/everythingestore/mycart/mycart.page";
import { Checkout } from "pages/everythingestore/checkout/checkout.page";
import { Payment } from "pages/everythingestore/topayment/payments.page";
import { SuccessfulOrder } from "pages/everythingestore/succcessfulOrder/success.page";

function App() {


const location = useLocation();
const pathname = location.pathname;

// let page = pathname.replace('/dashboard/','') || 'Overview';  

// console.log(pathname);

  if (pathname === '/dashboard') {
    return ( 
      <div className="app-container"> 
          <Routes>
            {/* <DashboardHeader /> */}

            <Route
                path="/dashboard"
                exact
                element={<Home title="PaySprint | Dashboard" />}
              />
          </Routes>
      </div>
    );
  } else if (pathname === '/dashboard/wallet') {
      return (
        <div className="app-container">
          <Routes>
            <Route
              path="/dashboard/wallet"
              exact
              element={<WalletPage title="PaySprint | Wallet" />}
            />
          </Routes>
        </div>
      )
  } else if (pathname === '/dashboard/transactions') {
    return (
      <div className="app-container">
        <Routes>
            <Route
              path="/dashboard/transactions"
              exact
              element={<TransactionPage title="PaySprint | Transactions" />}
            />
        </Routes>
      </div>
    )
  } else if (pathname === '/dashboard/services') {
    return (
      <div className="app-container">
        <Routes>
          <Route
              path="/dashboard/services"
              exact
              element={<ServicesPage title="PaySprint | Services" />}
            />
        </Routes>
      </div>
    )
  } else if (pathname === '/dashboard/promotions') {
    return (
      <div className="app-container">
        <Routes>
            <Route
              path="/dashboard/promotions"
              exact
              element={<PromotionsPage title="PaySprint | Promotions" />}
            />
        </Routes>
      </div>
    )
  }  else if (pathname === '/dashboard/settings') {
    return (
      <div className="app-container">
          <Routes>
              <Route
                path="/dashboard/settings"
                exact
                element={<SettingsPage title="PaySprint | Settings" />}
              />
          </Routes>
      </div>
    )
  } else if (pathname === '/dashboard/profile') {
    return (
      <div className="app-container">
          <Routes>
              <Route
                path="/dashboard/profile"
                exact
                element={<ProfilePage title="PaySprint | Profile" />}
              />
          </Routes>
      </div>
    )
  } else if (pathname === '/estore-dashboard') {
    return (
      <div className="app-container">
        <EstoreHeader />
          <Routes>
              <Route
                path="/estore-dashboard"
                exact
                element={<EstoreDashboard title="PaySprint | Estore Dashboard" />}
              />
            
          </Routes>
          <Footer />
      </div>
    )
  } else if (pathname === '/e-store') {
    return (
      <div className="app-container">
        <EstoreHeader />
          <Routes>
          <Route
                path="/e-store"
                exact
                element={<EStore title="PaySprint | E-store" />}
              />
            
          </Routes>
          <Footer />
      </div>
    )
  } else if (pathname === '/personalstore') {
    return (
      <div className="app-container">
        <EstoreHeader />
          <Routes>
          <Route
                path="/personalstore"
                exact
                element={<Personalstore title="PaySprint | Personal Store" />}
              />
            
          </Routes>
          <Footer />
      </div>
    )
  } else if (pathname === '/allcategories') {
    return (
      <div className="app-container">
        <EstoreHeader />
          <Routes>
          <Route
                path="/allcategories"
                exact
                element={<AllCategories title="PaySprint | All Categories" />}
              />
            
          </Routes>
          <Footer />
      </div>
    )
  } else if (pathname === '/productdetails') {
    return (
      <div className="app-container">
        <EstoreHeader />
          <Routes>
          <Route
                path="/productdetails"
                exact
                element={<ProductDetails title="PaySprint | Product Details" />}
              />
            
          </Routes>
          <Footer />
      </div>
    )
  } else if (pathname === '/mycart') {
    return (
      <div className="app-container">
        <EstoreHeader />
          <Routes>
          <Route
                path="/mycart"
                exact
                element={<MyCarts title="PaySprint | My Carts" />}
              />
            
          </Routes>
          <Footer />
      </div>
    )
  } else if (pathname === '/checkout') {
    return (
      <div className="app-container">
        <EstoreHeader />
          <Routes>
          <Route
                path="/checkout"
                exact
                element={<Checkout title="PaySprint | Checkout" />}
              />
            
          </Routes>
          <Footer />
      </div>
    )
  } else if (pathname === '/topayment') {
    return (
      <div className="app-container">
        <EstoreHeader />
          <Routes>
          <Route
                path="/topayment"
                exact
                element={<Payment title="PaySprint | Payments" />}
              />
            
          </Routes>
          <Footer />
      </div>
    )
  } else if (pathname === '/success') {
    return (
      <div className="app-container">
        <EstoreHeader />
          <Routes>
          <Route
                path="/success"
                exact
                element={<SuccessfulOrder title="PaySprint | Successful Order" />}
              />
            
          </Routes>
          <Footer />
      </div>
    )
  } else { 

    return (
      <div className="app-container"> 
        <Header />
          <Routes>
            <Route
              path="/"
              exact
              element={<HomePage title="PaySprint | Homepage" />}
            />
            <Route
              path="/about"
              exact
              element={<AboutPage title="PaySprint | About Us" />}
            />
            <Route
              path="/contact"
              exact
              element={<ContactPage title="PaySprint | Contact Us" />}
            />

            <Route
              path="/signup"
              exact
              element={
                <SignupFormContextProvider>
                  <SignupPage title="PaySprint | Sign Up" />
                </SignupFormContextProvider>
              }
            />

            <Route
              path="/signin"
              exact
              element={<SigninPage title="PaySprint | Sign In" />}
            />
            <Route
              path="/pricing"
              exact
              element={<PricePage title="PaySprint | Pricing" />}
            />
            <Route
              path="/verify"
              exact
              element={<VerifyPage title="PaySprint | Verify OTP" />}
            />
            <Route
              path="/dashboard"
              exact
              element={<Dashboard title="PaySprint | Dashboard" />}
            />
            <Route
              path="/dashboard/wallet"
              exact
              element={<WalletPage title="PaySprint | Wallet" />}
            />
            <Route
              path="/merchant"
              exact
              element={<MerchantHomePage title="PaySprint | Merchant HomePage" />}
            />

          </Routes>
        <Footer />
      </div>
    ); 
  }



}

export default App;
