import React, { useEffect } from "react";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  //   useEffect(() => {
  //     const handleOutsideClick = (e) => {
  //       console.log(e.target.tagName, e.target.className);
  //       if (isModalOpen && e.target.className != "modal-content") {
  //         setIsModalOpen(false);
  //         console.log("inside there");
  //       }
  //     };
  //     document.body.addEventListener("click", handleOutsideClick);
  //     return () => removeEventListener("click", handleOutsideClick);
  //   }, []);

  return <>{isModalOpen && <div className="modal">{children}</div>}</>;
};

export default Modal;
