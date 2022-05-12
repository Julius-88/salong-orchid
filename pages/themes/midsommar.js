import Link from "next/link";
import Image from "next/dist/client/image";
import BookHere, { BackButtons } from "../../components/buttons";

const Midsommar = () => {
  return (
    <>
      <section className=" font-bold text-center py-5 px-10 wedding">
        <div className="horizontal-scroll pt-2 2xl:pt-20 md:auto-cols-fr  ">
          <Link href={"/themes"}>
            <a className="hover:drop-shadow-xl">
              {" "}
              <Image src="/bh-1.jpg" alt="#" width={200} height={200}></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a className="hover:drop-shadow-xl">
              {" "}
              <Image src="/bh-2.jpg" alt="#" width={200} height={200}></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a className="hover:drop-shadow-xl">
              {" "}
              <Image src="/bh-3.jpg" alt="#" width={200} height={200}></Image>
            </a>
          </Link>
        </div>
        <p>Hair</p>

        <div className="horizontal-scroll pt-2  2xl:pt-8 md:auto-cols-fr  ">
          <Link href={"/themes"}>
            <a className="hover:drop-shadow-xl">
              {" "}
              <Image src="/bs-1.jpg" alt="#" width={200} height={200}></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a className="hover:drop-shadow-xl">
              {" "}
              <Image src="/bs-2.jpg" alt="#" width={200} height={200}></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a className="hover:drop-shadow-xl">
              {" "}
              <Image src="/bs-3.jpg" alt="#" width={200} height={200}></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a className="hover:drop-shadow-xl">
              {" "}
              <Image src="/bs-4.jpg" alt="#" width={200} height={200}></Image>
            </a>
          </Link>
        </div>
        <p>Makeup</p>
        <div className="horizontal-scroll pt-2 2xl:pt-24  md:auto-cols-fr ">
          <Link href={"/themes"}>
            <a className="hover:drop-shadow-xl">
              {" "}
              <Image src="/bn-1.jpg" alt="#" width={200} height={200}></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a className="hover:drop-shadow-xl">
              {" "}
              <Image src="/bn-2.jpg" alt="#" width={200} height={200}></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a className="hover:drop-shadow-xl">
              {" "}
              <Image src="/bn-3.jpg" alt="#" width={200} height={200}></Image>
            </a>
          </Link>
        </div>
        <p className="text-sm md:text-base ">Nails</p>
        <div className="grid justify-evenly grid-flow-col text-xs gap-2 pt-1 md:pt-7 lg:pt-5 xl:pt-4 xl:text-base 2xl:text 2xl:pt-28 ">
          <BackButtons /> <BookHere />
        </div>
      </section>
    </>
  );
};

export default Midsommar;
