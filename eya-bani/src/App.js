import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/User/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./Components/User/Loading";
import { useSelector } from "react-redux";
import Detail from "./Components/Product/Detail";
import ProductList from "./Components/Product/ProductList";
import Contact from "./Components/Contact";
import Footer from "./Shared/Footer";
import LoginRegister from "./Components/User/LoginRegister";
import NavBar from "./Shared/NavBar";
import { useEffect, useState } from "react";
import AddProduct from "./Components/Product/addProduct";
import EditProduct from "./Components/Product/editproduct";
import React from "react";
import Allabout from "./Components/Allabout";
import Order from "./Components/order/Order";
import Newcollection from "./Components/Product/Newcollection";
import Myshops from "./Components/shops/Myshops";

function App() {
  const load = useSelector((state) => state.userReducer.load);

  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem("theme", newIsDarkMode ? "dark" : "light");
  };
  const token = localStorage.getItem("token");
  // When your app loads
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);
  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <NavBar toggleTheme={toggleTheme} />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={load ? <Loading /> : <Profile />} />
          <Route path="/auth" element={<LoginRegister />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct/:_id" element={<EditProduct />} />
          <Route path="/Productlist" element={<ProductList />} />
          <Route path="/Details/:_id" element={<Detail />} />
          <Route path="/about" element={<Allabout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/newcollection" element={<Newcollection />} />
          <Route path="/myshops" element={<Myshops />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
