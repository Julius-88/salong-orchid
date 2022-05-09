import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div>
        <h1 className="font-bold underline text-center pt-20">Navbar</h1>
      </div>
      <nav className="text-center space-x-2 text-xl">
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
