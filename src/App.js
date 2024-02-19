import { Route, Routes } from "react-router-dom"; 
import "./App.scss";
import "./utils/styles/globals.css"
import { EstoreDashboard } from "pages/everythingestore/estoreDashboard/estore.homepage";
import { EstoreHeader } from "components/header/estoreHeader.component";
import { EStore } from "pages/everythingestore/e-store/e-store";
import { Personalstore } from "pages/everythingestore/personalstore/personalstore.page";
import { AllCategories } from "pages/everythingestore/allcategories/allcategories.page";
import { ProductDetails } from "pages/everythingestore/productdetails/product.page";
import { MyCarts } from "pages/everythingestore/mycart/mycart.page";
import { Checkout } from "pages/everythingestore/checkout/checkout.page";
import { Payment } from "pages/everythingestore/topayment/payments.page";
import { SuccessfulOrder } from "pages/everythingestore/succcessfulOrder/success.page";
import { EstoreFooter } from "components/footer/footer.component";

function App() {


// const location = useLocation();
// const pathname = location.pathname;

// let page = pathname.replace('/dashboard/','') || 'Overview';  

// console.log(pathname);


    return (
      <div className="app-container"> 
        <EstoreHeader />
          <Routes>
            <Route path="/" exact element={<EstoreDashboard title="PaySprint | Homepage" />} />
            <Route path="/estore" exact element={<EStore title="PaySprint | Estore" />} />
            <Route path="/allcategories" exact element={<AllCategories title="PaySprint | All Categories" />} />
            <Route path="/personalstore" exact element={<Personalstore title="PaySprint | Personal Store" />} />
            <Route path="/productdetails" exact element={<ProductDetails title="PaySprint | Product Details" />} />
            <Route path="/mycart" exact element={<MyCarts title="PaySprint | My Carts" />} />
            <Route path="/checkout" exact element={<Checkout title="PaySprint | Checkout" />} />
            <Route path="/payment" exact element={<Payment title="PaySprint | Payments" />} />
            <Route path="/success" exact element={<SuccessfulOrder title="PaySprint | Successfully Ordered" />} />
          </Routes>
        <EstoreFooter />
      </div>
    ); 
  
}

export default App;
