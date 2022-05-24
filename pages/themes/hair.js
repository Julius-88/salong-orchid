import Image from "next/dist/client/image";
import Head from "next/head";

const Hair = () => {
  return (
    <>
      <Head>
        <title>Hair | Salong Orchid | Stylist Stockholm </title>
        <meta name="author" content="Julius Alamarvdashti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Här kan du se exempel på hårstilar som jag har gjort | Here you can see examples of hairstyles that I have done."
        />
      </Head>
      <section className=" font-bold text-purple-500 text-center px-10 nails-hair">
        <section className="  pb-20 pt-2 ">
          <span className=" text-sm md:text-base lg:text-xl bg-pink-200 rounded p-1 ">
            Examples of Hair Styles
          </span>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 pt-5">
            <figure>
              {" "}
              <Image
                src="/previewHair.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/weddingHair.jpeg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/weddingHairOne.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/weddingHairTwo.jpg"
                alt="Example of a hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
            <figure>
              {" "}
              <Image
                src="/weddingHairThree.jpg"
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

export default Hair;
