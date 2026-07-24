import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import MagneticButton from './MagneticButton'
import { CONTACT_INFO, SOCIALS } from '../constants/links'

function Field({ label, type = 'text', name, textarea }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <label className="block">
      <span className="font-secondary text-xs uppercase tracking-[0.2em] text-mist-500">
        {label}
      </span>
      <Tag
        type={type}
        name={name}
        rows={textarea ? 5 : undefined}
        required
        className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-white/70 outline-none py-3 text-white placeholder:text-mist-600 transition-colors resize-none"
        placeholder={textarea ? 'Tell me a little about the project...' : ''}
      />
    </label>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Have a project in mind? Let&rsquo;s talk."
          description="I usually reply within a day. No forms that vanish into the void."
        />

        <div className="mt-16 grid md:grid-cols-[1fr_1.2fr] gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <p className="font-secondary text-xs uppercase tracking-[0.2em] text-mist-500">
                Email
              </p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                data-cursor="hover"
                className="font-display text-xl md:text-2xl text-white hover:text-mist-300 transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
            <div>
              <p className="font-secondary text-xs uppercase tracking-[0.2em] text-mist-500">
                Phone
              </p>
              <p className="font-display text-xl md:text-2xl text-white">{CONTACT_INFO.phone}</p>
            </div>
            <div>
              <p className="font-secondary text-xs uppercase tracking-[0.2em] text-mist-500">
                Location
              </p>
              <p className="font-display text-xl md:text-2xl text-white">
                {CONTACT_INFO.location}
              </p>
            </div>
            <div className="flex gap-5 pt-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  data-cursor="hover"
                  className="font-secondary text-sm text-mist-400 hover:text-white transition-colors border-b border-transparent hover:border-white/60"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <Field label="Message" name="message" textarea />

            <MagneticButton className="mt-2" onClick={handleSubmit}>
              {sent ? 'Message Sent' : 'Send Message'}
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
