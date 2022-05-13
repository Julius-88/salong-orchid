import Image from "next/dist/client/image";
import BookHere, { BackButtons } from "../../components/buttons";

const Midsommar = () => {
  return (
    <>
      <section className=" font-bold text-purple-500 text-center py-24 px-10 midsommar">
        <div className="horizontal-scroll pt-16 xl:pt-5 2xl:pt-8 md:auto-cols-fr  ">
          <figure>
            {" "}
            <Image src="/ms-1.jpg" alt="#" width={200} height={200}></Image>
          </figure>

          <figure>
            {" "}
            <Image src="/ms-2.jpg" alt="#" width={200} height={200}></Image>
          </figure>

          <figure>
            {" "}
            <Image src="/ms-3.jpg" alt="#" width={200} height={200}></Image>
          </figure>
        </div>
        <p className=" text-sm md:text-base lg:text-xl">Makeup</p>
        <div className="horizontal-scroll pt-14 2xl:pt-32  md:auto-cols-fr ">
          <figure>
            {" "}
            <Image src="/mn-1.jfif" alt="#" width={200} height={200}></Image>
          </figure>

          <figure>
            {" "}
            <Image src="/mn-2.jfif" alt="#" width={200} height={200}></Image>
          </figure>

          <figure>
            {" "}
            <Image src="/mn-3.jfif" alt="#" width={200} height={200}></Image>
          </figure>
          <figure>
            {" "}
            <Image src="/mn-4.jfif" alt="#" width={200} height={200}></Image>
          </figure>
        </div>
        <p className="text-sm md:text-base lg:text-xl ">Nails</p>
        <div className="grid justify-evenly grid-flow-col text-xs gap-2 pt-1 md:pt-7 lg:pt-5 xl:pt-10 lg:text-base xl:text-lg 2xl:pt-28 ">
          <BackButtons /> <BookHere />
        </div>
      </section>
    </>
  );
};

export default Midsommar;
