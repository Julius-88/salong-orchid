import Image from "next/dist/client/image";

const Hair = () => {
  return (
    <>
      <section className=" font-bold text-purple-500 text-center px-10">
        <section className="  pb-20 pt-2 ">
          <span className=" text-sm md:text-base lg:text-xl ">
            Examples of Hairstyles
          </span>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 pt-5">
            <figure>
              {" "}
              <Image
                src="/weddingHair.jpg"
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

export default Hair;
