'use client'

import React, { useState } from 'react'
import './styles/contact.css';
import content from '../content.json';

const Contact = ({ className }) => {

    const [preferredContactMethod, setPreferredContactMethod] = useState('');

    const { form, imgFilePath, title } = content.home.contactSection;

  return (
    <section id="contactSection" className={`${className}`}>
        <div className="container lg:flex lg:items-center">
            <div id="contactBanner">
                <h2 className="title-sm text-center">{title}</h2>
                <div id="logoBanner">
                    <img src={imgFilePath} alt='beclean logo banner'/>
                </div>
            </div>
            <form
            action="https://formspree.io/f/myzgpqlg"
            method="POST"
            >
            <input type="text" placeholder={form.placeholders.name} name="Name" className="textbox" required/>
            <select id="contactPreference" name="Preference" className="textbox" required
                defaultValue=''
                onChange={(e) => setPreferredContactMethod(e.target.value)}
            >
                <option value="" disabled>{form.placeholders.contactPreference}</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
            </select>
            <input type="email" name="Email" placeholder={form.placeholders.email}
                className={`textbox ${preferredContactMethod === 'Email' ? 'block' : 'hidden'}`} 
                id="textboxEmail"
            />
            <input type="tel" placeholder="Enter Phone" name={form.placeholders.phone}
                className={`textbox ${preferredContactMethod === 'Phone' ? 'block' : 'hidden'}`} 
                id="textboxPhone"
            />
            <textarea placeholder={form.placeholders.messageBox} name="Message" className="textbox" rows="7"></textarea>
            <button type="submit" className="button">Submit</button>
            </form>
        </div>
      </section>
  )
}

export default Contact