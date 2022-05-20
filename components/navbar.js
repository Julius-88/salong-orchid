import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <section className="flex items-center flex-col justify-between p-2 text main-nav font-semibold">
        <h1>Salong Orchid</h1>
        <div className="flex social ">
          <div
            className="socialButton"
            onClick={() => {
              alert("Coming soon!");
            }}
          >
            <Link href={"#"}>
              <a className=" socialText flex justify-items-center flex-col ">
                <Image
                  className="icon"
                  src="/facebook.png"
                  alt="facebook logo"
                  width={50}
                  height={50}
                />
                <span>Facebook</span>
              </a>
            </Link>
          </div>
          <div
            className="socialButton "
            onClick={() => {
              alert("Coming soon!");
            }}
          >
            <Link href={"#"}>
              <a className=" socialText flex justify-items-center flex-col ">
                <Image
                  className="icon"
                  src="/snapchat.png"
                  alt="snapchat logo"
                  width={50}
                  height={50}
                />
                <span>Snapchat</span>
              </a>
            </Link>
          </div>
          <div
            className="socialButton "
            onClick={() => {
              alert("Coming soon!");
            }}
          >
            <Link href={"#"}>
              <a className=" socialText flex justify-items-center flex-col ">
                <Image
                  className="icon"
                  src="/instagram.png"
                  alt="instagram logo"
                  width={50}
                  height={50}
                />
                <span>Instagram</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <nav className="text-center font-bold space-x-2 text-xl italic ">
        <Link href="/">
          <a className="hover:underline decoration-fuchsia-300">Home</a>
        </Link>
        <Link href="/themes">
          <a className="hover:underline decoration-fuchsia-300">Catalog</a>
        </Link>
        <Link href="/prices">
          <a className="hover:underline decoration-fuchsia-300">Prices</a>
        </Link>
        <Link href="/booking">
          <a className="hover:underline decoration-fuchsia-300">Book</a>
        </Link>
      </nav>
    </>
  );
};
export default Navbar;
