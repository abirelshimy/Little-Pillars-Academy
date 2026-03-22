import Image from "next/image";
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SITE, CONTACT, SOCIAL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={56}
                height={56}
                className="rounded-full bg-white p-0.5 mb-3"
              />
              <span className="font-heading text-xl font-bold block">{SITE.name}</span>
              <p className="text-white/60 text-sm mt-2">
                A program of{" "}
                <a
                  href={SITE.masjidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  Masjid Jafar
                </a>{" "}
                (Al-Rahmah Community Center)
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-gold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              {CONTACT.phones.map((p) => (
                <li key={p.number} className="flex items-start gap-2 text-white/70">
                  <FaPhone className="mt-1 text-gold shrink-0" size={12} />
                  <span>
                    {p.name}
                    <br />
                    <a href={`tel:${p.number.replace(/[^+\d]/g, "")}`} className="hover:text-gold transition-colors">
                      {p.number}
                    </a>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-2 text-white/70">
                <FaEnvelope className="text-gold shrink-0" size={12} />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-heading font-bold text-gold mb-4">Location</h3>
            <div className="flex items-start gap-2 text-white/70 text-sm">
              <FaMapMarkerAlt className="mt-1 text-gold shrink-0" size={12} />
              <div>
                <span>{CONTACT.address}</span>
                <p className="mt-2">{SITE.hours}</p>
                <a
                  href={SITE.masjidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light text-sm transition-colors underline underline-offset-2 mt-1 inline-block"
                >
                  Visit Masjid Jafar
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/50 text-xs">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved. A program of Masjid Jafar (Al-Rahmah Community Center).
        </div>
      </div>
    </footer>
  );
}
