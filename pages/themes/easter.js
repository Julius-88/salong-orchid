import Image from "next/dist/client/image";
import Head from "next/head";

const Easter = () => {
  return (
    <>
      <Head>
        <title>Easter Theme | Salong Orchid | Stylist Stockholm </title>
        <meta name="author" content="Julius Alamarvdashti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Här kan du se olika exempel på nagel-, hår- och sminkstilar med påsk tema som jag har gjort | Here you can see different examples of easter themed nail,hair and makeup styles that I have done."
        />
      </Head>
      <section className=" font-bold text-purple-500 text-center  flex flex-col items-center py-10 px-10 easter">
        <section className="flex flex-col items-start">
          <span className=" text-sm md:text-base lg:text-xl bg-pink-200 ">
            Examples of Makeup Styles
          </span>
          <div className="horizontal-scroll md:auto-cols-fr ">
            <figure>
              {" "}
              <Image
                src="/easterMakeup.jpeg"
                alt="Example of a makeup style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/easterMakeupOne.jpg"
                alt="Example of a makeup style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/easterMakeupTwo.jpg"
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
                src="/easterNails.jpg"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/easterNailsOne.jpg"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/easterNailsTwo.jpg"
                alt="Example of a nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/easterNailsThree.jpg"
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
