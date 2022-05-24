import Image from "next/dist/client/image";
import Head from "next/head";

const Makeup = () => {
  return (
    <>
      <Head>
        <title>Makeup | Salong Orchid | Stylist Stockholm </title>
        <meta name="author" content="Julius Alamarvdashti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Här kan du se exempel på smink som jag har gjort. | Here you can see examples of makeup that I have done."
        />
      </Head>
      <section className=" font-bold text-purple-500 text-center px-10 nails-hair">
        <section className="  pb-20 pt-2 ">
          <span className=" text-sm md:text-base lg:text-xl bg-pink-200 rounded p-1">
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
            <figure>
              {" "}
              <Image
                src="/smokeyEye.jpeg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/smokeyEyeOne.jpeg"
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
