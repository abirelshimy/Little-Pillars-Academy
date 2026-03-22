import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { SITE, CONTACT } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact & Registration"
          subtitle="Ready to give your child a strong start? We'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-cream-dark h-full">
              <h3 className="font-heading font-bold text-purple text-xl mb-6">Get in Touch</h3>

              <div className="space-y-5">
                {CONTACT.phones.map((p) => (
                  <div key={p.number} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                      <FaPhone className="text-purple" size={14} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                      <a
                        href={`tel:${p.number.replace(/[^+\d]/g, "")}`}
                        className="text-teal text-sm hover:underline"
                      >
                        {p.number}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-purple" size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Email</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-teal text-sm hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-purple" size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600 text-sm">{CONTACT.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <FaClock className="text-purple" size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Hours</p>
                    <p className="text-gray-600 text-sm">{SITE.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={SITE.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gold hover:bg-gold-dark text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-0.5"
                >
                  Register Now
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-dark h-full min-h-[400px]">
              <iframe
                title="Masjid Jafar Location"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${CONTACT.mapQuery}`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
