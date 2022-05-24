import Image from "next/dist/client/image";
import Head from "next/head";

const Halloween = () => {
  return (
    <>
      <Head>
        <title>Halloween Theme | Salong Orchid | Stylist Stockholm </title>
        <meta name="author" content="Julius Alamarvdashti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Här kan du se olika exempel på nagel-, hår- och sminkstilar med halloween tema som jag har gjort | Here you can see different examples of halloween themed nail,hair and makeup styles that I have done."
        />
      </Head>
      <section className=" font-bold text-purple-500 text-center  flex flex-col items-center py-10 px-10 halloween">
        <section className="flex flex-col items-start">
          <span className=" text-sm md:text-base lg:text-xl bg-pink-200 rounded p-1">
            Examples of Makeup Styles
          </span>
          <div className="horizontal-scroll md:auto-cols-fr ">
            <figure>
              {" "}
              <Image
                src="/halloweenMakeup.jpg"
                alt="Example of a makeup style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/halloweenMakeupTwo.jpg"
                alt="Example of a makeup style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/halloweenMakeupThree.jpg"
                alt="Example of a makeup style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/halloweenMakeupFour.jpg"
                alt="Example of a makeup style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/halloweenMakeupFive.jpg"
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
            <span className="bg-pink-200 rounded p-1">
              {" "}
              Example of Nail Styles
            </span>
          </span>
          <div className="horizontal-scroll md:auto-cols-fr  ">
            <figure>
              {" "}
              <Image
                src="/halloweenNails.jpg"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/halloweenNailsOne.jpg"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/halloweenNailsTwo.jpg"
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

export default Halloween;
