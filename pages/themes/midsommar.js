import Image from "next/dist/client/image";

const Easter = () => {
  return (
    <>
      <section className=" font-bold text-purple-500 text-center  flex flex-col items-center py-10 px-10 midsummer">
        <section className="flex flex-col items-start">
          <span className=" text-sm md:text-base lg:text-xl bg-pink-200 ">
            Examples of Makeup Styles
          </span>
          <div className="horizontal-scroll md:auto-cols-fr ">
            <figure>
              {" "}
              <Image
                src="/midsummerMakeup.jpg"
                alt="Example of a makeup style"
                width={250}
                height={400}
                className="object-fill"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/midsummerMakeupThree.jpg"
                alt="Example of a makeup style"
                width={250}
                height={400}
                className="object-fill"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/midsummerMakeupTwo.jpg"
                alt="Example of a makeup style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
          </div>
        </section>

        <section className="flex flex-col items-start pb-10">
          <span className=" text-sm md:text-base lg:text-xl pt-5">
            <span className="bg-pink-200">Example of Nail Styles </span>
          </span>
          <div className="horizontal-scroll md:auto-cols-fr  ">
            <figure>
              {" "}
              <Image
                src="/midsummerNails.jpg"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/midsummerNailsOne.jpg"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/midsummerNailsTwo.jpg"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/midsummerNailsThree.jpg"
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

export default Easter;
