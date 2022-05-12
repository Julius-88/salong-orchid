import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <section className="flex items-center flex-col justify-between p-2 text main-nav font-semibold">
        <h1>Salong Orchid</h1>
        <div className="flex">
          <div className="mr-3 hover:drop-shadow-xl ">
            <Link href={"/"}>
              <a>
                <Image
                  src="/facebook.png"
                  alt="facebook logo"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </div>
          <div className="mr-3 hover:drop-shadow-xl ">
            <Link href={"/"}>
              <a>
                <Image
                  src="/snapchat.png"
                  alt="snapchat logo"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </div>
          <div className="hover:drop-shadow-xl ">
            <Link href={"/"}>
              <a>
                <Image
                  src="/instagram.png"
                  alt="instagram logo"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <nav className="text-center space-x-2 text-xl italic">
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
