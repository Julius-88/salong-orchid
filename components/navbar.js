import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <section className="flex items-center flex-col justify-between p-2 text main-nav font-semibold">
        <h1>Salong Orchid</h1>
        <div className="flex">
          <div className="mr-3">
            <Image
              src="/facebook.png"
              alt="facebook logo"
              width={50}
              height={50}
            />
          </div>
          <div className="mr-3">
            <Image
              src="/snapchat.png"
              alt="snapchat logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <Image
              src="/instagram.png"
              alt="instagram logo"
              width={50}
              height={50}
            />
          </div>
        </div>
      </section>
      <nav className="text-center space-x-2 text-xl italic">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/themes">
          <a>Theme</a>
        </Link>
        <Link href="/prices">
          <a>Prices</a>
        </Link>
        <Link href="/booking">
          <a>Book</a>
        </Link>
      </nav>
    </>
  );
};
export default Navbar;
