import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Nomatch from "./components/Nomatch";
import Products from "./components/Products";
import FeaturesProduct from "./components/FeaturesProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import AppBarNew from "./components/AppBarNew";
import {Profile} from "./components/Profile";
import {AuthProvider} from './components/auth'
import Login from './components/Login'
import { RequiredAuth } from "./components/RequiredAuth";

function App() {
  return (
    <AuthProvider>
      <AppBarNew />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Order" element={<Order />} />
        <Route path="*" element={<Nomatch />} />
        <Route path="Products" element={<Products />}>
          <Route index element={<FeaturesProduct />} />
          <Route path="featured" element={<FeaturesProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="Profile" element={<RequiredAuth ><Profile /></RequiredAuth>} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
