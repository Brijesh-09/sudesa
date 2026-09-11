import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { studioInfo } from '@/data/content';

interface ContactPageProps {
  onNavigate: (to: string) => void;
}

export default function ContactPage({ onNavigate: _onNavigate }: ContactPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    projectSize: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: studioInfo.phone,
      href: `tel:${studioInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: studioInfo.email,
      href: `mailto:${studioInfo.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: studioInfo.location,
      href: undefined,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: studioInfo.whatsapp,
      href: `https://wa.me/${studioInfo.whatsapp.replace(/[^\d]/g, '')}`,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: studioInfo.instagram,
      href: studioInfo.instagramUrl,
    },
  ];

  const inputClass =
    'w-full border-b border-cream-400/20 bg-transparent py-3 text-cream-100 placeholder:text-muted focus:border-gold-500 focus:outline-none transition-colors duration-500';

  const labelClass = 'block mb-2 label-meta-muted';

  return (
    <>
      {/* Hero */}
      <section className="bg-ink-950 px-6 pt-40 pb-20 lg:px-12 lg:pt-48 lg:pb-28">
        <div className="mx-auto max-w-9xl">
          <div className="reveal mb-8 flex items-center gap-3">
            <span className="gold-line" />
            <span className="label-meta">Enquiries</span>
          </div>
          <h1 className="reveal reveal-delay-1 font-serif text-5xl leading-[1.05] text-cream-100 lg:text-8xl">
            Begin Your Project
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg font-light leading-relaxed text-cream-400">
            Tell us about your space and your vision. We'll respond within two
            business days to discuss how Sudesa Interiors can bring your project
            to life.
          </p>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="bg-ink-950 px-6 pb-28 lg:px-12 lg:pb-40">
        <div className="mx-auto max-w-9xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="reveal flex min-h-[400px] flex-col items-center justify-center border border-cream-400/10 px-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-500">
                    <Check size={28} strokeWidth={1.5} className="text-gold-500" />
                  </div>
                  <h2 className="mt-8 font-serif text-3xl text-cream-100 lg:text-4xl">
                    Enquiry Received
                  </h2>
                  <p className="mt-4 max-w-md text-base font-light leading-relaxed text-cream-400">
                    Thank you for reaching out. A member of our studio will be
                    in touch within two business days to discuss your project.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: '',
                        location: '',
                        projectSize: '',
                        message: '',
                      });
                    }}
                    className="mt-8 btn-outline"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="reveal space-y-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className={labelClass}>
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" disabled className="bg-ink-900">
                          Select type
                        </option>
                        <option value="Residential" className="bg-ink-900">
                          Residential
                        </option>
                        <option value="Commercial" className="bg-ink-900">
                          Commercial
                        </option>
                        <option value="Office" className="bg-ink-900">
                          Office
                        </option>
                        <option value="Other" className="bg-ink-900">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <label htmlFor="location" className={labelClass}>
                        Location
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={form.location}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="City, Country"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectSize" className={labelClass}>
                        Approximate Project Size
                      </label>
                      <input
                        id="projectSize"
                        name="projectSize"
                        type="text"
                        value={form.projectSize}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="e.g. 2,000 sq ft"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your project, timeline and vision..."
                    />
                  </div>

                  <button type="submit" className="btn-gold group">
                    Send Enquiry
                    <ArrowRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-5">
              <div className="reveal reveal-delay-1 border-l border-cream-400/10 pl-8">
                <div className="mb-8 flex items-center gap-3">
                  <span className="gold-line" />
                  <span className="label-meta">Studio Details</span>
                </div>

                <ul className="space-y-8">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label}>
                        <div className="flex items-start gap-4">
                          <Icon
                            size={18}
                            strokeWidth={1.5}
                            className="mt-0.5 text-gold-500"
                          />
                          <div>
                            <p className="label-meta-muted">{item.label}</p>
                            {item.href ? (
                              <a
                                href={item.href}
                                target={
                                  item.href.startsWith('http') ? '_blank' : undefined
                                }
                                rel={
                                  item.href.startsWith('http')
                                    ? 'noopener noreferrer'
                                    : undefined
                                }
                                className="mt-1 block text-sm text-cream-100 transition-colors duration-500 hover:text-gold-500"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="mt-1 text-sm text-cream-100">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-12 border-t border-cream-400/10 pt-8">
                  <p className="font-serif text-xl font-light italic leading-relaxed text-cream-400">
                    "Every space is conceived as a balance of structure,
                    material, light and function."
                  </p>
                  <p className="mt-4 label-meta">— {studioInfo.founder}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
