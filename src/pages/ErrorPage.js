export default function ErrorPage() {
  return (
    <div className="flex">
      <img src={require("../assets/images/notFound.png")} />
      <div className="font-dokdo">
        <p className="text-3xl">
          Wrong page you have come hmm? Fear not! Show you the way, the force
          will!
        </p>
      </div>
    </div>
  );
}
