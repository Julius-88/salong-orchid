import Image from "next/dist/client/image";

const Hair = () => {
  return (
    <>
      <section className=" font-bold text-purple-500 text-center px-10 nails-hair">
        <section className="  pb-20 pt-2 ">
          <span className=" text-sm md:text-base lg:text-xl ">
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
