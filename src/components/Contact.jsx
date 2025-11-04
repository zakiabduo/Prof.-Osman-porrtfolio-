
import React, { useState } from "react";
 
import contact from '../assets/contact.jpg'
import {
  User,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Globe,
  CheckCircle2,
} from "lucide-react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    whatsapp: "",
    website: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formObject = {
      access_key: "c9ce6bf4-156a-4eb0-ab43-c4e304df4978", // Web3Forms API key
      subject: "New Contact Form Message from Portfolio",
      ...formData,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formObject),
    });

    const result = await response.json();
    if (result.success) {
      setIsSent(true);
      setFormData({
        name: "",
        email: "",
        address: "",
        whatsapp: "",
        website: "",
        message: "",
      });
    } else {
      alert("Failed to send message. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 px-2 flex flex-col md:flex-row justify-center items-center gap-10"
    >
      {/* Left Side Image */}
      <div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 w-full flex justify-center"
      >
        <img
          src={contact}
          alt="Contact us"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Side Form */}
      <div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-8"
      >
       

        {isSent ? (
          <div className="text-center py-10">
            <CheckCircle2 className="text-green-500 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-700">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-500 mt-2">
              Thank you for reaching out.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two-column grid for input fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                  <User className="text-indigo-500 mr-3" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                  <Mail className="text-indigo-500 mr-3" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                  <MapPin className="text-indigo-500 mr-3" size={20} />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your Address"
                    required
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                  <Phone className="text-indigo-500 mr-3" size={20} />
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="WhatsApp Number"
                    required
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website / Portfolio Link
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                  <Globe className="text-indigo-500 mr-3" size={20} />
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="yourwebsite.com"
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Message (Full width) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <div className="flex items-start border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                <MessageSquare className="text-indigo-500 mr-3 mt-1" size={20} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  required
                  rows="5"
                  className="w-full outline-none bg-transparent resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white py-3 rounded-lg font-medium transition ${
                isSubmitting
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
