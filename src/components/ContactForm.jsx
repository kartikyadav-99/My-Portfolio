import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // <-- Console me dikhega
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };


 








  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-zinc-900 px-10 py-8 rounded-2xl shadow-lg w-full max-w-sm text-center animate-fadeIn">
        <h2 className="text-[1.8rem] font-bold mb-2 text-white">Contact Us</h2>
        <p className="text-white text-sm mb-6">Join us and explore the future 🚀</p>

        <form className="flex flex-col" onSubmit={(handleSubmit)}>
          <input
            type="text"
            name="name"

            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 mb-3 rounded-lg border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            name="email"
   
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 mb-3 rounded-lg border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-5 mb-3 rounded-lg border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-lime-400 to-lime-600  text-white py-3 mt-4 rounded-lg font-semibold hover:from-lime-700 hover:to-lime-400 transform hover:-translate-y-0.5 transition duration-300"
          >
            Send
          </button>
        </form>


      </div>
    </div>
  );
}

export default ContactForm
