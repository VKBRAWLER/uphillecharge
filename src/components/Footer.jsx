import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import {
  FiPhone,
  FiMail,
} from "react-icons/fi";

import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#0A0D26] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-16">

          {/* Company Info */}

          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="logo"
                className="w-10 h-10 object-contain"
              />

              <h3 className="text-white text-2xl font-bold">
                Uphill Echarge
              </h3>
            </div>

            <p className="text-white/60 leading-relaxed mb-8">
              Driving the future of sustainable mobility with
              smart EV charging solutions designed for speed,
              convenience and reliability.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#95FF00] hover:text-black transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#95FF00] hover:text-black transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#95FF00] hover:text-black transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#95FF00] hover:text-black transition-all duration-300"
              >
                <FaTwitter />
              </a>

            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#home"
                  className="text-white/60 hover:text-[#95FF00] transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-white/60 hover:text-[#95FF00] transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#purpose"
                  className="text-white/60 hover:text-[#95FF00] transition"
                >
                  Our Purpose
                </a>
              </li>

              <li>
                <a
                  href="#locations"
                  className="text-white/60 hover:text-[#95FF00] transition"
                >
                  Charging Stations
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-white/60 hover:text-[#95FF00] transition"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          

          {/* Contact Info */}

          {/* Contact Info */}

<div className="w-full">
  <h3 className="text-white text-xl font-semibold mb-6">
    Contact Info
  </h3>

  <div className="space-y-5">

    {/* Phone */}

    <a
      href="tel:+919876543210"
      className="flex items-start gap-3 group"
    >
      <FiPhone
        size={20}
        className="text-[#95FF00] mt-1 shrink-0"
      />

      <span className="text-white/60 group-hover:text-[#95FF00] transition">
        +91 98765 43210
      </span>
    </a>

    {/* Email */}

    <a
      href="mailto:support@uphillecharge.com"
      className="flex items-start gap-3 group"
    >
      <FiMail
        size={20}
        className="text-[#95FF00] mt-1 shrink-0"
      />

      <span className="text-white/60 break-all group-hover:text-[#95FF00] transition">
        support@uphillecharge.com
      </span>
    </a>

    {/* Location */}

    <a
      href="https://maps.google.com/?q=Haldwani,Uttarakhand,India"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 group"
    >
      <IoLocationOutline
        size={22}
        className="text-[#95FF00] mt-1 shrink-0"
      />

      <span className="text-white/60 group-hover:text-[#95FF00] transition">
        Haldwani, Uttarakhand, India
      </span>
    </a>

  </div>
</div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-white/10 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-white/40 text-sm text-center md:text-left">
              © 2026 Uphill Echarge. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">

              <a
                href="#"
                className="text-white/40 text-sm hover:text-[#95FF00] transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-white/40 text-sm hover:text-[#95FF00] transition"
              >
                Terms & Conditions
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;