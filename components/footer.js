import Modal from "./modal";
import { useState } from "react";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <footer className="flex items-center justify-center font-bold  ">
      <div className="text-sm px-4 md:text-base">
        <button
          className="openModalBtn "
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Questions? Contact me
        </button>
        {openModal && <Modal closeModal={setOpenModal}> </Modal>}
      </div>
    </footer>
  );
};
export default Footer;
