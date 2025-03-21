import React, { useState } from "react";
import Modal from "./Modal";
import ModalContent from "./ModalContent";

const Display = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <div
      className="container"
      style={{
        backgroundColor: isModalOpen ? "lightgray" : "",
      }}
      onClick={(e) => {
        e.target.className == "container" && setIsModalOpen(false);
      }}
    >
      <h1>User Details Modal</h1>
      <button onClick={toggleModal}>Open Form</button>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ModalContent setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
};

export default Display;
