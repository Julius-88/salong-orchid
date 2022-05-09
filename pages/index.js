import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Salong Orchid</title>
        <meta name="keywords" content="makeup,stylist,make-up,smink," />
      </Head>
      <div>
        <Image
          src="/bröllop-orchid.jpeg"
          alt="#"
          width={128}
          height={78}
        ></Image>
        <h1 className="font-bold underline text-center pt-20">Landing Page</h1>
      </div>
    </>
  );
}
