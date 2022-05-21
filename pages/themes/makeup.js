import Image from "next/dist/client/image";

const Makeup = () => {
  return (
    <>
      <section className=" font-bold text-purple-500 text-center px-10">
        <section className="  pb-20 pt-2 ">
          <span className=" text-sm md:text-base lg:text-xl ">
            Examples of Makeup Styles
          </span>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 pt-5">
            <figure>
              {" "}
              <Image
                src="/easterMakeup.jpeg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/easterMakeupOne.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/easterMakeupTwo.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/halloweenMakeup.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/halloweenMakeupTwo.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/halloweenMakeupThree.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/halloweenMakeupFour.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/halloweenMakeupFive.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/midsummerMakeupTwo.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/weddingMakeup.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/weddingMakeupOne.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/weddingMakeupTwo.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/weddingMakeupThree.jpg"
                alt="Example of a hair style"
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

export default Makeup;
