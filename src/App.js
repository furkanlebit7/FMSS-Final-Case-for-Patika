import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative z-10 p-5 px-10 flex flex-col justify-between h-screen w-screen dark:bg-bgDarkColor ease-in-out duration-300 transition-all bg-bgLightColor">
      <Header />
      <div className="flex-1 container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
