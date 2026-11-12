'use client'

import React, { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

const inputClass =
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/40 transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15'
const labelClass = 'mb-2 block text-sm font-medium text-ink'

const Contact = () => {
  const [preferredContactMethod, setPreferredContactMethod] = useState('');

  return (
    <section id="contactSection" className="section bg-white">
      <div className="container-x">
        <div className="grid overflow-hidden rounded-3xl bg-mist lg:grid-cols-[1fr_1.3fr]">
          {/* Intro */}
          <div className="flex flex-col justify-between gap-10 bg-ink p-8 text-white md:p-12">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 className="heading mt-3">Questions?</h2>
              <p className="mt-5 max-w-sm leading-relaxed text-white/70">
                Send us a message and we’ll get back to you with everything you need to know.
              </p>
            </div>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-white/50">Call or text</span>
                <a href="tel:+12674096913" className="text-lg font-semibold hover:text-brand">(267) 409-6913</a>
              </li>
              <li>
                <span className="block text-white/50">Email</span>
                <a href="mailto:becleancars@gmail.com" className="text-lg font-semibold hover:text-brand">becleancars@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form
            action="https://formspree.io/f/myzgpqlg"
            method="POST"
            className="space-y-5 p-8 md:p-12"
          >
            <div>
              <label htmlFor="contactName" className={labelClass}>Name</label>
              <input id="contactName" type="text" placeholder="Your name" name="Name" className={inputClass} required />
            </div>
            <div>
              <label htmlFor="contactPreference" className={labelClass}>Preferred method of contact</label>
              <div className="relative">
                <select
                  id="contactPreference"
                  name="Preference"
                  className={`${inputClass} appearance-none pr-12 ${preferredContactMethod ? '' : '!text-ink/40'}`}
                  required
                  defaultValue=''
                  onChange={(e) => setPreferredContactMethod(e.target.value)}
                >
                  <option value="" disabled>Select one</option>
                  <option value="Email" className="text-ink">Email</option>
                  <option value="Phone" className="text-ink">Phone</option>
                </select>
                <IoChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/60" />
              </div>
            </div>
            {preferredContactMethod === 'Email' && (
              <div>
                <label htmlFor="textboxEmail" className={labelClass}>Email</label>
                <input id="textboxEmail" type="email" name="Email" placeholder="you@example.com" className={inputClass} required />
              </div>
            )}
            {preferredContactMethod === 'Phone' && (
              <div>
                <label htmlFor="textboxPhone" className={labelClass}>Phone</label>
                <input id="textboxPhone" type="tel" name="Phone" placeholder="(555) 555-5555" className={inputClass} required />
              </div>
            )}
            <div>
              <label htmlFor="contactMessage" className={labelClass}>How can we help?</label>
              <textarea id="contactMessage" placeholder="Tell us about your car and what you’re looking for" name="Message" className={inputClass} rows="5"></textarea>
            </div>
            <button type="submit" className="btn w-full sm:w-auto">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
