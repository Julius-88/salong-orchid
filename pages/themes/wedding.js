import Image from "next/dist/client/image";

const Wedding = () => {
  return (
    <>
      <section className=" font-bold text-purple-500 text-center  flex flex-col items-center py-10 px-10">
        <section className="flex flex-col items-start">
          <span className=" text-sm md:text-base lg:text-xl ">
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

            <figure>
              {" "}
              <Image
                src="/weddingHairOne.jpg"
                alt="Example of a wedding hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/weddingHairTwo.jpg"
                alt="Example of a wedding hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/weddingHairThree.jpg"
                alt="Example of a wedding hair style"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure>
          </div>
        </section>
        <section className="flex flex-col items-start">
          <span className=" text-sm md:text-base lg:text-xl pt-5 ">
            Examples of Makeup Styles
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
        </section>
        <section className="flex flex-col items-start pb-10">
          <span className=" text-sm md:text-base lg:text-xl pt-5">
            Example of Nail Styles{" "}
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

            {/* <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={250}
                height={400}
                className="object-cover"
              ></Image>
            </figure> */}
          </div>
        </section>
      </section>
    </>
  );
};

export default Wedding;
