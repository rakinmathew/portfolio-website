import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(formData);

  //   setSubmitted(true);

  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await emailjs.send("service_uaxhui7", "k178wmee", formData, {
  //       publicKey: "X8PS_VVjTmZy2zDkp",
  //     });
  //     alert("Message sent successfully! Thank You for Contacting me.");
  //     console.log("SUCCESS:", formData);
  //   } catch (error) {
  //     console.error("Emailjs Error:", error);

  //     alert("Failed to send message. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(false);
    setLoading(true);

    try {
      await emailjs.send("service_uaxhui7", "template_si5cimg", formData, {
        publicKey: "_xCbhRLu3N_wPpxz3",
      });

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#2c4054] px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-white text-4xl font-bold">Let's Work Together</h1>

        <div className="w-16 h-1 bg-[#3498db] mx-auto mt-4"></div>

        <p className="text-gray-300 mt-4">
          Have a project or opportunity in mind? Let's talk.
        </p>
      </div>

      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
        {/* Left side column */}
        <div className="text-white">
          <h3 className="font-semibold text-2xl mb-4">Get In Touch</h3>
          <p className="text-gray-300 leading-7 mb-8">
            I'm always open to discussing new projects, freelance opportunities,
            web development work, or potential collaborations.
          </p>

          {/* Email  */}

          <div className="mt-8">
            <h4 className="font-semibold text-[#3498db]"> Email:</h4>

            <p className="text-gray-300 mt-1">
              rakinmathewkizhakkekuttu@gmail.com
            </p>
          </div>

          {/* Phone Number */}

          <div className="mt-8">
            <h4 className="font-semibold text-[#3498db]"> Phone:</h4>

            <p className="text-gray-300 mt-1">+91 8943986499</p>
          </div>

          {/* Location */}

          <div className="mt-8">
            <h4 className="font-semibold text-[#3498db]"> Location:</h4>

            <p className="text-gray-300 mt-1">Kottayam, Kerala, India</p>
          </div>
        </div>

        {/* Right side column */}

        <div>
          {/* Form data */}
          <form
            onSubmit={handleSubmit}
            className="bg-white  rounded-xl p-6 md:p-8 shadow-xl"
          >
            {/* Name Input */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#3498db] transition duration-300 shadow-sm focus:shadow-md focus:ring-1 focus:ring-[#3498db]"
              />
            </div>

            {/* Email Input */}

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#3498db] transition duration-300 shadow-sm focus:shadow-md focus:ring-1 focus:ring-[#3498db]"
              />
            </div>

            {/* Subject Input */}

            <div className="mb-5">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Write your subject...."
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#3498db] transition duration-300 shadow-sm focus:shadow-md focus:ring-1 focus:ring-[#3498db]"
              />
            </div>

            {/* Message Input */}

            <div className="mb-5">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message...."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none resize-none focus:border-[#3498db] transition duration-300 shadow-sm focus:shadow-md focus:ring-1 focus:ring-[#3498db]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3498db] text-white font-medium py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Success message */}

          {submitted && (
            <div className="mt-5 p-4 rounded-md bg-green-50 border border-green-200">
              <p className="text-green-600 text-center font-medium">
                ✓ Thank you! Your message has been sent successfully.
              </p>
              <p className="text-green-600 text-center text-sm mt-2">
                I'll get back to you as soon as possible.
              </p>
            </div>
          )}

          {/* <pre className="text-white mt-6">
            {JSON.stringify(formData, null, 2)}
          </pre> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
