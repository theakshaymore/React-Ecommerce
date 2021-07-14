import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import AdminRoutes from "./auth/helper/AdminRoutes";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/UpdateCategory";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import AboutUs from "./core/AboutUs";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Route path="/about" exact component={AboutUs}></Route>
        <PrivateRoutes
          path="/user/dashboard"
          exact
          component={UserDashBoard}
        ></PrivateRoutes>
        <AdminRoutes
          path="/admin/dashboard"
          exact
          component={AdminDashBoard}
        ></AdminRoutes>
        <AdminRoutes
          path="/admin/create/category"
          exact
          component={AddCategory}
        ></AdminRoutes>
        <AdminRoutes
          path="/admin/categories"
          exact
          component={ManageCategories}
        ></AdminRoutes>
        <AdminRoutes
          path="/admin/create/product"
          exact
          component={AddProduct}
        ></AdminRoutes>
        <AdminRoutes
          path="/admin/products"
          exact
          component={ManageProducts}
        ></AdminRoutes>
        <AdminRoutes
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        ></AdminRoutes>
        <AdminRoutes
          path="/admin/category/update/:categoryId"
          exact
          component={UpdateCategory}
        ></AdminRoutes>
        <AdminRoutes
          path="/admin/orders"
          exact
          component={Orders}
        ></AdminRoutes>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
