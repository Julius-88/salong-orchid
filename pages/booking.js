import Head from "next/head";

const Booking = () => {
  return (
    <>
      <Head>
        <title>Booking | Salong Orchid | Stylist Stockholm </title>
        <meta name="author" content="Julius Alamarvdashti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Här kan du boka tid hos mig | Here you can book a session with me."
        />
      </Head>
      <section className="px-2 text-2xl pt-10 flex justify-around">
        <h1>
          There are currently no available timeslots. For any inqueries please
          contact me through the contact form at the bottom of the page
        </h1>
      </section>
      {/* <section className="bookingParent">
        <iframe
          className="bookingIframe"
          src="https://airtable.com/embed/shr4WaXoaVGABu622?backgroundColor=blue"
        ></iframe>
      </section> */}
    </>
  );
};
export default Booking;
