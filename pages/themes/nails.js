import Image from "next/dist/client/image";

const Hair = () => {
  return (
    <>
      <section className=" font-bold text-purple-500 text-center px-10">
        <section className="  pb-20 pt-2 ">
          <span className=" text-sm md:text-base lg:text-xl ">
            Examples of Nail Styles
          </span>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 pt-5">
            <figure>
              {" "}
              <Image
                src="/easterNailsOne.jfif"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/easterNailsTwo.jfif"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/easterNailsThree.jfif"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/easterNailsFour.jfif"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/halloweenNails.jfif"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/halloweenNailsOne.jfif"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/halloweenNailsTwo.jfif"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/midsummerNails.jfif"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/midsummerNailsOne.jfif"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/midsummerNailsTwo.jfif"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/midsummerNailsThree.jfif"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/weddingNails.jpg"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/weddingNailsOne.jpg"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/weddingNailsTwo.jpg"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hair;
