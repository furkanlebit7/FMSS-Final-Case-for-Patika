import { useState } from "react";
import Background from "./components/Background";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative z-10 p-5">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
