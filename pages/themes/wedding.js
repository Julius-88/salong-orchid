import Image from "next/dist/client/image";
import Head from "next/head";

const Wedding = () => {
  return (
    <>
      <Head>
        <title>Wedding Theme | Salong Orchid | Stylist Stockholm </title>
        <meta name="author" content="Julius Alamarvdashti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Här kan du se olika exempel på nagel-, hår- och sminkstilar för bröllop som jag har gjort | Here you can see different examples of wedding themed nail,hair and makeup styles that I have done."
        />
      </Head>
      <section className=" font-bold text-purple-500 text-center  flex flex-col items-center h-full wedding">
        <section className="flex flex-col items-start">
          <span className=" text-sm md:text-base lg:text-xl bg-pink-200 rounded p-1 ">
            Examples of Hairstyles
          </span>
          <div className="horizontal-scroll md:auto-cols-fr">
            <figure>
              {" "}
              <Image
                src="/weddingHair.jpeg"
                alt="Example of a wedding hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            {/* <figure>
              {" "}
              <Image
                src="/weddingHairOne.jpg"
                alt="Example of a wedding hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure> */}

            {/* <figure>
              {" "}
              <Image
                src="/weddingHairTwo.jpg"
                alt="Example of a wedding hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure> */}

            {/* <figure>
              {" "}
              <Image
                src="/weddingHairThree.jpg"
                alt="Example of a wedding hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure> */}
          </div>
        </section>
        {/* <section className="flex flex-col items-start">
          <span className=" text-sm md:text-base lg:text-xl pt-5  ">
            <span className="bg-pink-200 rounded p-1">
              Examples of Makeup Styles
            </span>
          </span>
          <div className="horizontal-scroll md:auto-cols-fr">
            <figure>
              {" "}
              <Image
                src="/weddingMakeup.jpg"
                alt="Example of a wedding makeup style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/weddingMakeupOne.jpg"
                alt="Example of a wedding makeup style"
                width={250}
                height={400}
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/weddingMakeupTwo.jpg"
                alt="Example of a wedding makeup style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/weddingMakeupThree.jpg"
                alt="Example of a wedding makeup style"
                width={250}
                height={400}
              ></Image>
            </figure>
          </div>
        </section> */}
        {/* <section className="flex flex-col items-start pb-10">
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
                src="/weddingNails.jpg"
                alt="Example of a wedding nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/weddingNailsOne.jpg"
                alt="Example of a wedding nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/weddingNailsTwo.jpg"
                alt="Example of a wedding nail style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            
          </div>
        </section> */}
      </section>
    </>
  );
};

export default Wedding;
