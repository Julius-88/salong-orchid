import Image from "next/dist/client/image";

const Easter = () => {
  return (
    <>
      <section className=" font-bold text-purple-500 text-center  flex flex-col items-center py-10 px-10">
        <section className="flex flex-col items-start">
          <span className=" text-sm md:text-base lg:text-xl ">
            Examples of Makeup
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
            Example of Nails{" "}
          </span>
          <div className="horizontal-scroll md:auto-cols-fr  ">
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
          </div>
        </section>
      </section>
    </>
  );
};

export default Easter;
