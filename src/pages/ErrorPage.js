// PACKAGES
import { Link } from "react-router-dom";
//ICONS
import { BsArrowRight } from "react-icons/bs";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-full mt-20">
      <img
        src={require("../assets/images/notFound.png")}
        className="h-40 md:h-60 lg:h-72"
        alt="error"
      />
      <div className="font-dokdo">
        <p className="lg:text-5xl sm:text-3xl text-xl mb-5 sm:mb-10 md:mb-20">
          Wrong page you have come hmm?
          <br /> Fear not! <br /> Show you the way, the force will!
        </p>
        <Link to="/" className="underline text-sm lg:text-lg flex items-center">
          Go to Home Page <BsArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
