import Modal from "./modal";
import { useState } from "react";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <footer className="grid grid-cols-2 justify-items-center items-center font-bold ">
      <div className="text-xs px-4 md:text-base">
        <p>Questions? Contact me</p>
        <p className="text-blue-500">
          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Click Here!
          </button>
        </p>
        {openModal && <Modal closeModal={setOpenModal}> </Modal>}
      </div>
      <div>
        <button className="font-bold button">Book Here</button>
      </div>
    </footer>
  );
};
export default Footer;
