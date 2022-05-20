import Image from "next/dist/client/image";

const Wedding = () => {
  return (
    <>
      <section className=" font-bold text-purple-500 text-center  flex flex-col items-center py-10 px-10">
        <section className="flex flex-col items-start">
          <span className=" text-sm md:text-base lg:text-xl ">
            Examples of Makeup Styles
          </span>
          <div className="horizontal-scroll md:auto-cols-fr ">
            <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </figure>
          </div>
        </section>
        <section className="flex flex-col items-start">
          <span className=" text-sm md:text-base lg:text-xl pt-5 ">
            Examples of Hairstyles
          </span>
          <div className="horizontal-scroll md:auto-cols-fr">
            <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
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
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </figure>

            <figure>
              {" "}
              <Image
                src="/previewNaglar.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </figure>
          </div>
        </section>
      </section>
    </>
  );
};

export default Wedding;
