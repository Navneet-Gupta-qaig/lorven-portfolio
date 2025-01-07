"use client";
import React, { FormEvent } from "react";

const ContactUsForm = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log(formData);
    const webhookUrl =
      "https://script.google.com/a/macros/thequantum.ai/s/AKfycbxgCDM8zhIJR0vFrdZMYjv9EQe1BZFH6HJ4h1W8lqRS1Ex0IGZc6j-FMxm-VYL0QHJVeg/exec"; // Replace with your webhook URL

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error submitting form: ${response.statusText}`);
      }

      console.log("Form submitted successfully!");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form
      className="flex flex-col  gap-4 w-full  dark:text-black"
      onSubmit={onSubmit}
    >
      <label className="dark:text-white" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="border border-gray-300 p-2 rounded-md"
      />
      <label htmlFor="email" className="dark:text-white">
        Email or Phone:
      </label>
      <input
        type="text"
        id="email"
        className="border border-gray-300 p-2 rounded-md"
      />
      <label className="dark:text-white" htmlFor="subject">
        Subject:
      </label>
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

      <label className="dark:text-white" htmlFor="message">
        Message:
      </label>
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
