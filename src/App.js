import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import ListProduct from "./pages/ProductManager/component/ListProduct";
import ListOrder from "./pages/Staff/component/ListOrder";
import ListVoucher from "./pages/ListVoucher";
// import Basic from "./pages/Staff/ListRated";
// import TopSearch from "./pages/ProductManager/ListProduct";
import ListRated from "./pages/Staff/component/ListRated";
import ListArticle from "./pages/ListArticle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import ListPermission from "./pages/ListPermission";
import ProductManage from "./pages/ProductManager";

import ListBrand from "./pages/ProductManager/component/ListBrand";
// import Addproduct from "./pages/ProductManager/Addproduct";
import Page404 from "./pages/Page404";
import ColumnGroupingTable from "./pages/ProductManager/component/List";
import Staff from "./pages/Staff";
import WarehouseManage from "./pages/WarehouseManage";
import Addproduct from "./pages/ProductManager/component/Addproduct";
import AddProductType from "./pages/ProductManager/component/AddProductType";
import FinishedProducts from "./pages/ProductManager/component/FinishedProducts";

function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Nav />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <Switch>
              {/* <Route exact path="/" component={Home} />
              <Route path="/product-manage" component={ProductManage} />
              <Route path="/staff" component={Staff} />
              <Route exact path="/article" component={ListArticle} />
              <Route exact path="/voucher" component={ListVoucher} />
              <Route exact path="/permission" component={ListPermission} />
              <Route exact path="/product-manage/add" component={Addproduct} />
              <Route
                exact
                path="/product-manage/product-type"
                component={AddProductType}
              />
              <Route
                exact
                path="/warehouse-manage"
                component={WarehouseManage}
              />
              <Route>
                <Page404 />
              </Route> */}

              {/* <ColumnGroupingTable /> */}
              {/* <ListProduct /> */}
              {/* <ListBrand /> */}
              {/* <ListVoucher /> */}
              {/* <ListOrder /> */}
              {/* <ListArticle /> */}
              {/* <Basic /> */}
              {/* <TopSearch /> */}
              {/* <ListRated /> */}
              {/* <ListPermission /> */}
              {/* <Addproduct /> */}
              {/* <AddProductType /> */}
              <FinishedProducts />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
