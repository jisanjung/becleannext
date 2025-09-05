'use client';

import '../globals.css';

const Privacy = ({ className }) => {
  return (
    <div className={`privacy-policy wrapper px-4 md:px-10 pb-24 ${className}`}>
      <h1>PRIVACY POLICY</h1>
      <p><strong>Last updated: September 01, 2025</strong></p>

      <p>
        This Privacy Policy explains how <strong>__________</strong> ("Company," "we," "us," or "our")
        collects, uses, and discloses your information when you visit our website{" "}
        <a href="https://becleandetailing.com" target="_blank" rel="noopener noreferrer">
          https://becleandetailing.com
        </a>.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address, phone number, and any
        details you provide through contact forms, service bookings, or other interactions with our
        website.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and maintain our services</li>
        <li>To improve customer experience</li>
        <li>To send important updates or promotional communications</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>Cookies and Tracking</h2>
      <p>
        We may use cookies and similar technologies to track website activity and improve user
        experience. For more details, please see our{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>Sharing of Information</h2>
      <p>
        We do not sell or rent your personal information. We may share information with trusted third
        parties who help us operate our services or when required by law.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal information. To exercise these
        rights, please contact us at{" "}
        <a href="mailto:info@becleandetailing.com">info@becleandetailing.com</a>.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page
        with an updated revision date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:info@becleandetailing.com">info@becleandetailing.com</a>.
      </p>

      <style jsx>{`
        .privacy-policy {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        h2 {
          font-size: 1.25rem;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
        }
        p {
          margin: 0.75rem 0;
        }
        ul {
          padding-left: 1.5rem;
          list-style-type: disc;
        }
        a {
          color: #0070f3;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

export default Privacy