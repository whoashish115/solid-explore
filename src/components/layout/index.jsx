'use client'
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "./Preloader";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col ">
    <Preloader />
      <Header /> 
      <main className="flex-grow h-full mx-auto  flex flex-col justify-start w-full ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;