import React, { useState } from "react";

const ModalContent = ({ setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (
      new Date(formData.dob).toLocaleDateString() >
      new Date().toLocaleDateString()
    ) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
    if (formData.phone.length != 10 || isNaN(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    setFormData({ username: "", email: "", dob: "", phone: "" });
    setIsModalOpen(false);
  }

  return (
    <div className="modal-content">
      <h2>Fill Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          required
        />
        <label htmlFor="">Email Address:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="">Phone Number:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <label htmlFor="">Date of Birth:</label>
        <input
          type="date"
          placeholder="dd/mm/yyyy"
          name="dob"
          id="dob"
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          required
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ModalContent;
