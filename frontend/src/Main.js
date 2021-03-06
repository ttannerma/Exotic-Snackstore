import React, { Component } from 'react';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Navigation from './components/static/navigation-bar/Navigation';
import Body from './components/dynamic/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/static/About';
import Contact from './components/static/Contact';
import Admin from './components/static/Admin/Admin';
import UserManager from './components/static/Admin/UserManager';
import ProductManager from './components/static/Admin/ProductManager';
import Search from './components/dynamic/Search';
import ItemPage from './components/dynamic/ItemPage';
import Login from './components/static/Login/Login';
import Logout from './components/static/Login/Logout';
import Signup from './components/static/signup/Signup';
import ShoppingCartLogo from './components/dynamic/ShoppingCartLogo';
import ShoppingCartPage from './components/dynamic/ShoppingCartPage';
import DeliveryPaymentPage from './components/dynamic/DeliveryPaymentPage';
import { UserProvider } from './user-context'; 
import { ProductProvider} from './product-context';
import { ShoppingCartProvider } from './shoppingcart-context';
import AddNewConsumer from './components/static/Admin/AddNewConsumer';
import OrderReviewPage from './components/dynamic/OrderReviewPage'
import OrderSuccess from './components/dynamic/OrderSuccess'
import OrderManager from './components/static/Admin/OrderManager';
import PrivateRoute from './components/static/PrivateRoute';
import NotFound from './components/dynamic/NotFound';
import  ShowInfoManager  from './components/static/Admin/ShowInfoManager';


class Main extends Component {
  render() {
    return(
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <div className="head">
            <Header/>
            <Navigation/>
          </div>
          <UserProvider>
          <ShoppingCartProvider>
          <ProductProvider>
              <div className="container">
                <div className="content-shell">
                <ShoppingCartLogo />
                  <Switch>
                    <Route exact path ="/" component={Body}></Route>
                    <Route exact path ="/home" component={Body}></Route>
                    <Route exact path ="/login" component={Login}></Route>
                    <Route exact path ="/logout" component={Logout}></Route>
                    <Route exact path ="/signup" component ={Signup}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <PrivateRoute exact path="/admin" component={Admin}></PrivateRoute>
                    <PrivateRoute exact path="/admin/users" component={UserManager}></PrivateRoute>
                    <PrivateRoute exact path="/admin/products" component={ProductManager}></PrivateRoute>
                    <PrivateRoute exact path="/admin/products/add-new" component={AddNewConsumer}></PrivateRoute>
                    <PrivateRoute exact path="/admin/orders" component={OrderManager}></PrivateRoute>
                    <PrivateRoute exact path="/admin/orders/:id" component={ShowInfoManager}></PrivateRoute>
                    <Route exact path="/cart" component={ShoppingCartPage}></Route>
                    <Route exact path="/cart/payment-and-delivery" component={DeliveryPaymentPage}></Route>
                    <Route exact path="/search/:searchVal" component={Search}></Route>
                    <Route exact path="/categories/:searchVal" component={Search}></Route>
                    <Route exact path="/countries/:searchVal" component={Search}></Route>
                    <Route exact path="/products/:productName" component={ItemPage}></Route>
                    <Route exact path="/cart/order-review" component={OrderReviewPage}></Route>
                    <Route exact path="/order-success" component={OrderSuccess}></Route>
                    <Route exact path="/notfound" component={NotFound}></Route>
                  </Switch>
                </div>
                <Footer/>
              </div>
            </ProductProvider>
          </ShoppingCartProvider>
          </UserProvider>
        </Router>
    )
  }
}

export default Main;
