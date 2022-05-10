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
        <div className="horizontal-scroll pt-20 md:auto-cols-fr ">
          <Link href={"/themes"}>
            <a>
              {" "}
              <Image
                src="/preview.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a>
              {" "}
              <Image
                src="/preview.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a>
              {" "}
              <Image
                src="/preview.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a>
              {" "}
              <Image
                src="/preview.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a>
              {" "}
              <Image
                src="/preview.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </a>
          </Link>
          <Link href={"/themes"}>
            <a>
              {" "}
              <Image
                src="/preview.jpg"
                alt="#"
                width={200}
                height={200}
              ></Image>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
