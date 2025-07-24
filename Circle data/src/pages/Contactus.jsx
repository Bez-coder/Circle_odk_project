import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#203e7c] m-15">Contact Us</h1>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
        Reach out for any questions, support, or collaboration. We’d love to hear from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <form className="space-y-6 bg-gray-100 p-6 rounded-xl shadow-md">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203e7c]"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203e7c]"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              placeholder="Your message"
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203e7c]"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#203e7c] text-white px-6 py-2 rounded hover:bg-[#1b3364] transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Map */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-[#203e7c] mb-2">Contact Details</h2>
            <p>Email: <a href="mailto:info@example.com" className="text-blue-600">info@example.com</a></p>
            <p>Phone: <a href="tel:+251912345678" className="text-blue-600">+251 912 345 678</a></p>
            <p>Location: Dembel City Center, Addis Ababa</p>
            <div className="mt-4">
              <h3 className="font-semibold">Follow us</h3>
              <div className="flex gap-4 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-md h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126100.72077288943!2d38.627096216406244!3d9.004544000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b039c25bc1%3A0x941677a8f60160fe!2sDembel%20City%20Center!5e0!3m2!1sen!2set!4v1752773189255!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
