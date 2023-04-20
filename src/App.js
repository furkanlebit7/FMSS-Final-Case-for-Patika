import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative z-10 p-5  md:px-10 flex flex-col min-h-screen ease-in-out duration-300 transition-all bg-bgLightColor dark:text-white  dark:bg-bgDarkColor deneme ">
      <Header />
      <div className="flex-1 container mx-auto my-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
