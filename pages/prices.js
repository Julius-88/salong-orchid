const Prices = () => {
  return (
    <section className="px-2 pt-10 flex justify-around">
      <div className=" backgroundColor w-12/12 text-sm md:text-base h-auto rounded-xl shadow-2xl py-5 ">
        <div className="pl-3">
          <h2 className="text-center font-bold pt-1">Bröllop / Wedding</h2>
          <div className="grid grid-cols-2 justify-items-center">
            <h3>Bridal Makeup</h3>
            <p>2000kr</p>
            <h3>Bridal Hair</h3>
            <p>2000kr</p>
            <h3>Bridal Nails</h3>
            <p>1000kr</p>
            <h3>Bridal Package</h3>
            <p>3500kr</p>
          </div>
        </div>
        <br />
        <h2 className="text-center font-bold">Party / Events</h2>
        <div className="grid grid-cols-2 justify-items-center">
          <h3>Party Makeup</h3>
          <p>2000kr</p>
          <h3>Party Hair</h3>
          <p>2000kr</p>
          <h3>Party Nails</h3>
          <p>1000kr</p>
          <h3>Party Package</h3>
          <p>3500kr</p>
        </div>
        <br />
        <h2 className="text-center font-bold">Theme Event</h2>
        <div className="grid grid-cols-2 justify-items-center">
          <h3>Theme Makeup</h3>
          <p>2000kr</p>
          <h3>Theme Hair</h3>
          <p>2000kr</p>
          <h3>Theme Nails</h3>
          <p>1000kr</p>
          <h3>Theme Package</h3>
          <p>3500kr</p>
        </div>
        <br />
        <div className="flex flex-col">
          <div className="grid justify-items-center items-center font-bold text-xs ">
            <p>These prices are the starting prices for the first 2h.</p>
            <p>Afterwards there is a charge of 100kr/h</p>
          </div>
          <div className="px-16 grid justify-items-center">
            <button className="button font-bold m-2 hover:bg-fuchsia-300 ">
              Book Here
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Prices;
