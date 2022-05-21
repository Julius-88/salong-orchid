import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Salong Orchid</title>
        <meta name="keywords" content="makeup,stylist,make-up,smink," />
      </Head>
      <section className="font-bold text-center p-20">
        <p>Welcome to Salong Orchid</p>
        <br />
        <p>
          My name is Sara and I am a newly graduated hair and makeup stylist
        </p>
        <br />
        <p>
          I continuously work on my skills and different techniques and will
          always do my best to not only reach my clients expectations but to
          exceed them!
        </p>
        <br />
        <p>
          Please browse my website to see what I have to offer and dont hesitate
          to contact me if you have any questions
        </p>
        <br />
        <section className="grid grid-cols-1 px-3 md:grid-cols-3 pt-20 pb-16 gap-2 md:gap-20 2xl:gap-20">
          <div className="grid justify-items-center">
            <Link href="/themes/wedding">
              <a>
                <div>
                  <Image
                    src="/previewWedding.jpg"
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
          <div className="grid justify-items-center">
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
          </div>
          <div className="grid justify-items-center">
            <Link href="/themes/halloween">
              <a>
                <Image
                  src="/previewHalloween.jpg"
                  alt="a picture of a woman with halloween makeup"
                  width={200}
                  height={250}
                  className="rounded object-cover"
                ></Image>
              </a>
            </Link>
            <p className="cursor-default">Halloween</p>
          </div>
          <div className="grid justify-items-center">
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
          </div>
          <div className="grid justify-items-center">
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
          </div>
          <div className="grid justify-items-center">
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
          </div>
          <div className="grid justify-items-center">
            <Link href="/themes/makeup">
              <a>
                <Image
                  src="/midsummerMakeupTwo.jpg"
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
      </section>
    </>
  );
}
