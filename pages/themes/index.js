import Link from "next/dist/client/link";
import Image from "next/dist/client/image";

const Themes = () => {
  return (
    <section className="grid grid-cols-2 px-3 md:grid-cols-3 pt-20 pb-16 gap-2 md:gap-20 2xl:gap-20">
      <div className="grid justify-items-center">
        <Link href="/themes/wedding">
          <a>
            <div>
              <Image
                src="/previewWedding.jpg"
                alt="a before and after picture of a bride"
                width={200}
                height={200}
                className="rounded"
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
              height={200}
              className="rounded"
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
              height={200}
              className="rounded"
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
              height={200}
              className="rounded"
            ></Image>
          </a>
        </Link>
        <p className="cursor-default">Midsummer</p>
      </div>
      <div className="grid justify-items-center">
        <Link href="/themes/nails">
          <a>
            <Image
              src="/previewNaglar.jpg"
              alt="a picture of a set of painted nails"
              width={200}
              height={200}
              className="rounded"
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
              height={200}
              className="rounded"
            ></Image>
          </a>
        </Link>
        <p className="cursor-default">Hair</p>
      </div>
    </section>
  );
};
export default Themes;
