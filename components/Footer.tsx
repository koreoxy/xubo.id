import { Instagram, Github, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-secondary text-brand-navy border-t border-brand-navy/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-body">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-extrabold text-brand-navy font-heading mb-4 tracking-tight">
              Xubo.id
            </h2>
            <p className="text-brand-navy/80 mb-6 max-w-md text-sm leading-relaxed">
              Layanan profesional untuk membangun website impian Anda. Dari
              desain hingga development, kami siap mewujudkan visi digital Anda
              dengan teknologi terdepan dan pendekatan minimalis.
            </p>
            <div className="flex space-x-3">
              {[
                { href: "https://www.instagram.com/xubo.id", icon: <Instagram size={20} /> },
                { href: "https://github.com/koreoxy", icon: <Github size={20} /> },
                { href: "mailto:rayssankn@gmail.com", icon: <Mail size={20} /> },
                { href: "https://wa.me/6285175086144", icon: <MessageCircle size={20} /> },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-navy/70 hover:text-brand-navy transition-all duration-250 p-2.5 rounded-lg bg-brand-navy/5 hover:bg-brand-navy/10 hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy mb-4 font-heading">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm font-semibold">
              {[
                { href: "/#home", label: "Home" },
                { href: "/#services", label: "Services" },
                { href: "/#projects", label: "Projects" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-navy/70 hover:text-brand-navy transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy mb-4 font-heading">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="font-bold text-brand-navy/50 uppercase text-xs tracking-wider">Email</span>
                <br />
                <a
                  href="mailto:rayssankn@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-navy hover:text-brand-navy-light transition-colors duration-200"
                >
                  rayssankn@gmail.com
                </a>
              </li>
              <li>
                <span className="font-bold text-brand-navy/50 uppercase text-xs tracking-wider">WhatsApp</span>
                <br />
                <a
                  href="https://wa.me/6285175086144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-navy hover:text-brand-navy-light transition-colors duration-200"
                >
                  +62 851-7508-6144
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-navy/8 mt-8 pt-8 text-center text-xs text-brand-navy/50 font-semibold">
          <p>
            © {new Date().getFullYear()} Xubo.id. All rights reserved. Built By
            ❤️ Koreoxy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
