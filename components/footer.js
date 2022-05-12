import Link from "next/dist/client/link";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 justify-items-center items-center font-bold ">
      <div className="text-xs px-4 md:text-base">
        <p>Questions? Contact me</p>
        <p className="text-blue-500">
          <Link href={"/"}>
            <a> salongorchid@gmail.com</a>
          </Link>
        </p>
      </div>
      <div>
        <button className="font-bold button">Book Here</button>
      </div>
    </footer>
  );
};
export default Footer;
