import { Instagram, Github, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Xubo.id
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Layanan profesional untuk membangun website impian Anda. Dari
              desain hingga development, kami siap mewujudkan visi digital Anda
              dengan teknologi terdepan.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-green-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-green-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-green-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-green-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="font-medium text-white">Email:</span>
                <br />
                <a
                  href="mailto:hello@xubo.id"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  rayssankn@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">WhatsApp:</span>
                <br />
                <a
                  href="https://wa.me/6281234567890"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Xubo.id. All rights reserved. Built By
            ❤️ Koreoxy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
