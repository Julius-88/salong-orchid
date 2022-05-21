import Modal from "./modal";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <footer className="flex items-center justify-center font-bold  ">
      <div className="text-sm px-4 md:text-base">
        <button
          className="openModalBtn font-bold "
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Questions? Click Here!
        </button>
        {openModal && <Modal closeModal={setOpenModal}> </Modal>}
        <p className="font-normal text-sm ">
          &#169;{" "}
          {/* <Link href="#">
            <a target="_blank" rel="noopener noreferrer"> */}
          2022 Salong Orchid
          {/* </a>
          </Link>{" "} */}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
