import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import Head from "next/head";

const Themes = () => {
  return (
    <>
      <Head>
        <title>Categories | Stylist Stockholm </title>
        <meta name="author" content="Julius Alamarvdashti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Här kan du se kategorier och diverse teman på hårstilar och smink. | Here you can see categories and various themes of hairstyles and makeup."
        />
      </Head>
      <section className="grid grid-cols-2 px-3 md:grid-cols-3 pt-20 pb-16 gap-2 md:gap-20 2xl:gap-20">
        <div className="grid justify-items-center shadow-2xl shadow-indigo-900/50">
          <Link href="/themes/wedding">
            <a>
              <div>
                <Image
                  src="/weddingHair.jpeg"
                  alt="a before and after picture of a bride"
                  width={200}
                  height={250}
                  className="rounded object-fill"
                ></Image>
              </div>
            </a>
          </Link>
          <p className="cursor-default">Wedding</p>
        </div>
        {/* <div className="grid justify-items-center shadow-2xl shadow-indigo-900/50">
          <Link href="/themes/easter">
            <a>
              <Image
                src="/previewEaster.jpg"
                alt="a picture of a child that is painted as a bunny"
                width={200}
                height={250}
                className="rounded object-fill"
              ></Image>
            </a>
          </Link>
          <p className="cursor-default">Easter</p>
        </div> */}
        <div className="grid justify-items-center shadow-2xl shadow-indigo-900/50">
          <Link href="/themes/halloween">
            <a>
              <Image
                src="/halloweenMakeup.jpg"
                alt="a picture of a woman with halloween makeup"
                width={200}
                height={250}
                className="rounded object-cover"
              ></Image>
            </a>
          </Link>
          <p className="cursor-default">Halloween</p>
        </div>
        {/* <div className="grid justify-items-center shadow-2xl shadow-indigo-900/50">
          <Link href="/themes/midsommar">
            <a>
              <Image
                src="/previewMidsummer.jpg"
                alt="a picture of a woman with midsummer makeup"
                width={200}
                height={250}
                className="rounded object-cover"
              ></Image>
            </a>
          </Link>
          <p className="cursor-default">Midsummer</p>
        </div> */}
        {/* <div className="grid justify-items-center shadow-2xl shadow-indigo-900/50">
          <Link href="/themes/nails">
            <a>
              <Image
                src="/previewNails.jpg"
                alt="a picture of a set of painted nails"
                width={200}
                height={250}
                className="rounded object-cover"
              ></Image>
            </a>
          </Link>
          <p className="cursor-default">Nails</p>
        </div> */}
        {/* <div className="grid justify-items-center shadow-2xl shadow-indigo-900/50">
          <Link href="/themes/hair">
            <a>
              <Image
                src="/previewHair.jpg"
                alt="a picture of a girl with hair styles for a wedding"
                width={200}
                height={250}
                className="rounded object-cover"
              ></Image>
            </a>
          </Link>
          <p className="cursor-default">Hair</p>
        </div> */}
        <div className="grid justify-items-center shadow-2xl shadow-indigo-900/50">
          <Link href="/themes/makeup">
            <a>
              <Image
                src="/smokeyEye.jpeg"
                alt="a picture of a girl with makeup on for midsummer"
                width={200}
                height={250}
                className="rounded object-cover"
              ></Image>
            </a>
          </Link>
          <p className="cursor-default">Makeup</p>
        </div>
      </section>
    </>
  );
};
export default Themes;
