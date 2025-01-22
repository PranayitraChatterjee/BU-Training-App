import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/styles/index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import TaskManager from "./pages/Task Manager";
import Page404 from "./pages/Page404";
import Navbar from "./components/Navbar";
import userflow from 'userflow.js'


const App = () => {

  userflow.init('ct_umwlhw7dundt5palvciagxjh6y')
  userflow.identify('Pranay_Test_User_id', {
    name: 'Pranay_Test_User',
    email: 'pranay_test_userflow.com',
    signed_up_at: '2025-01-22T20:00:00Z'
  })

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="/taskmanager" element={<TaskManager />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
