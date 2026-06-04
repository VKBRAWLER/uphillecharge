import React, { useState } from "react";

const Partners = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);

  const partners = [
    "VOLT MOTORS",
    "ZEON LOGISTICS",
    "URBAN GRID",
    "ECO RIDE",
  ];

  return (
    <>
      <section id="partners" className="min-h-screen text-white flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full text-center">

          {/* Heading */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-24">
            Power Your Business with Uphill
          </h1>

          {/* Partner Logos */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {partners.map((partner) => (
              <div
                key={partner}
                className="
                  text-gray-400
                  font-bold
                  text-lg
                  md:text-xl
                  tracking-wide
                  hover:text-white
                  transition
                  duration-300
                "
              >
                {partner}
              </div>
            ))}
          </div>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            {/* Become Partner */}

            <button
              onClick={() =>
                (window.location.href =
                  "mailto:support@uphillecharge.com?subject=Partnership Inquiry")
              }
              className="
                bg-[#0A66D1]
                hover:bg-[#0957b3]
                transition
                px-12
                py-5
                rounded-full
                text-lg
                md:text-xl
                font-semibold
                min-w-[250px]
              "
            >
              Become a Partner
            </button>

            {/* Contact Sales */}

            <button
              onClick={() => setShowContactOptions(true)}
              className="
                bg-[#2A2B30]
                border
                border-[#4B4C52]
                hover:bg-[#34353b]
                transition
                px-12
                py-5
                rounded-full
                text-lg
                md:text-xl
                font-semibold
                min-w-[250px]
              "
            >
              Contact Sales
            </button>

          </div>
        </div>
      </section>

      {/* Contact Sales Modal */}

      {showContactOptions && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-[#11142D] border border-white/10 rounded-3xl p-8 w-full max-w-md">

            <h2 className="text-white text-2xl font-bold text-center mb-6">
              Contact Sales
            </h2>

            <p className="text-white/60 text-center mb-8">
              Choose how you would like to contact our sales team.
            </p>

            <div className="flex flex-col gap-4">

              {/* Call */}

              <button
                onClick={() => {
                  window.location.href = "tel:+919876543210";
                  setShowContactOptions(false);
                }}
                className="
                  bg-[#95FF00]
                  text-black
                  py-4
                  rounded-xl
                  font-semibold
                  hover:opacity-90
                  transition
                "
              >
                Call Sales Team
              </button>

              {/* Email */}

              <button
                onClick={() => {
                  window.location.href =
                    "mailto:support@uphillecharge.com?subject=Sales Inquiry";
                  setShowContactOptions(false);
                }}
                className="
                  bg-[#0A66D1]
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  hover:bg-[#0957b3]
                  transition
                "
              >
                Email Sales Team
              </button>

              {/* Cancel */}

              <button
                onClick={() => setShowContactOptions(false)}
                className="
                  border
                  border-white/10
                  py-4
                  rounded-xl
                  text-white
                  hover:bg-white/5
                  transition
                "
              >
                Cancel
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Partners;