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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation Function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please Enter Your Name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please Enter Your Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please Enter a Valid Email Address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please Enter a Subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please Enter Your Message";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear previous errors if any

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
        <h2 className="text-white text-4xl font-bold">Let's Work Together</h2>

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
                className={`w-full border rounded-md px-4 py-3 outline-none transition duration-300 shadow-sm ${
                  errors.name
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-[#3498db] focus:shadow-md focus:ring-1 focus:ring-[#3498db]"
                }`}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
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
                className={`w-full border rounded-md px-4 py-3 outline-none transition duration-300 shadow-sm ${
                  errors.email
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-[#3498db] focus:shadow-md focus:ring-1 focus:ring-[#3498db]"
                }`}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
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
                className={`w-full border rounded-md px-4 py-3 outline-none transition duration-300 shadow-sm ${
                  errors.subject
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-[#3498db] focus:shadow-md focus:ring-1 focus:ring-[#3498db]"
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
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
                className={`w-full border rounded-md px-4 py-3 outline-none resize-none transition duration-300 shadow-sm ${
                  errors.message
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-[#3498db] focus:shadow-md focus:ring-1 focus:ring-[#3498db]"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
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
