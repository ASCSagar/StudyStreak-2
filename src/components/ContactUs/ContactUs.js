import React from "react";
import { Phone, MapPin, ChevronDown } from "lucide-react";

const ContactForm = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-soft">
      <h2 className="text-2xl font-semibold mb-4 text-primary-700">
        Get in Touch
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-primary-200 rounded"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-2 border border-primary-200 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-primary-200 rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-2 border border-primary-200 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-primary-500 text-white py-2 rounded hover:bg-primary-600 transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

const ContactInfo = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-soft mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-primary-700">{title}</h2>
      {children}
    </div>
  );
};

const BranchInfo = ({ name, address }) => {
  return (
    <div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4"
    >
      <h3 className="font-semibold text-primary-600">{name}</h3>
      <p className="text-sm text-gray-600">{address}</p>
    </div>
  );
};

const ContactUs = () => {
  const [activeBranch, setActiveBranch] = React.useState(null);

  const branches = [
    {
      name: "IELTS",
    },
    {
      name: "PTE",
    },
    {
      name: "GRE",
    },
    {
      name: "GMAT",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <ContactInfo title="Main Office">
              <div className="flex items-start mb-4">
                <MapPin className="w-5 h-5 text-primary-500 mr-2 mt-1" />
                <p>
                  1st and 2nd Floor, Galav Chambers, Dairy Den Circle,
                  Sayajigunj, Vadodara, Gujarat, India - 390020
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-2" />
                <p>+91-91069 95326</p>
              </div>
            </ContactInfo>

            <ContactInfo title="Our Courses">
              {branches.map((branch, index) => (
                <div key={branch.name} className="mb-2">
                  <button
                    className="w-full text-left p-2 flex justify-between items-center bg-primary-100 hover:bg-primary-200 rounded transition duration-300"
                    onClick={() =>
                      setActiveBranch(activeBranch === index ? null : index)
                    }
                  >
                    <span>{branch.name}</span>
                  </button>
                </div>
              ))}
            </ContactInfo>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-soft">
          <h2 className="text-2xl font-semibold mb-4 text-primary-700">
            Location Map
          </h2>
          <div className="w-full aspect-w-4 aspect-h-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3691.178103895951!2d73.184352!3d22.309103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf528ca0b7af%3A0xe8357fb32b2b0e91!2sESPI%20Visa%20Consultant%20Pvt.%20Ltd%20Vadodara!5e0!3m2!1sen!2sin!4v1729833370272!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pramesh Wealth Pvt Ltd Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
