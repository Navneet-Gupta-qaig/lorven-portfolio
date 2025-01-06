"use client";
import React, { FormEvent } from "react";

const ContactUsForm = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);
    // const response = await fetch("/api/submit", {
    //   method: "POST",
    //   body: formData,
    // });

    // // Handle response if necessary
    // const data = await response.json();
    // ...
  }
  return (
    <form className="flex flex-col  gap-4 w-full  " onSubmit={onSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        className="border border-gray-300 p-2 rounded-md"
      />
      <label htmlFor="email">Email or Phone:</label>
      <input
        type="text"
        id="email"
        className="border border-gray-300 p-2 rounded-md"
      />
      <label htmlFor="subject">Subject:</label>
      <select
        id="subject"
        name="subject"
        className="border border-gray-300 p-2 rounded-md"
      >
        <option value="Product Inquiry">Product Inquiry</option>
        <option value="Sales Inquiry">Sales Inquiry</option>
        <option value="Technical Support">Technical Support</option>
        <option value="Partnership Opportunities">
          Partnership Opportunities
        </option>
        <option value="General Inquiry">General Inquiry</option>
        <option value="Feedback/Suggestions">Feedback/Suggestions</option>
      </select>

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        rows={4}
        className="border border-gray-300 p-2 rounded-md"
      ></textarea>
      <button
        type="submit"
        className="mt-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-2xl text-md 
          hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] tracking-widest"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactUsForm;
