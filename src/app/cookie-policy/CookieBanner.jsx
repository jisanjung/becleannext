import '../globals.css';

const CookieBanner = ({ className }) => {
  return (
    <div className={`${className} cookie-policy wrapper px-4 md:px-10 pb-24`}>
      {/* Logo */}
      <span className="logo" />

      {/* Title */}
      <div data-custom-class="body">
        <div>
          <h1 data-custom-class="title">COOKIE POLICY</h1>
        </div>
        <div>
          <span data-custom-class="subtitle">
            <strong>Last updated September 01, 2025</strong>
          </span>
        </div>

        <br />

        {/* Body */}
        <div>
          <p data-custom-class="body_text">
            This Cookie Policy explains how <strong>__________</strong> ("Company," "we," "us," and "our") uses cookies
            and similar technologies to recognize you when you visit our website at{" "}
            <a href="https://becleandetailing.com" target="_blank" rel="noopener noreferrer" data-custom-class="link">
              https://becleandetailing.com
            </a>{" "}
            ("Website"). It explains what these technologies are and why we use them, as well as your rights to control
            our use of them.
          </p>

          <p data-custom-class="body_text">
            In some cases we may use cookies to collect personal information, or that becomes personal information if we
            combine it with other information.
          </p>

          <h2 data-custom-class="heading_1">What are cookies?</h2>
          <p data-custom-class="body_text">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
            as well as to provide reporting information.
          </p>

          <h2 data-custom-class="heading_1">Why do we use cookies?</h2>
          <p data-custom-class="body_text">
            We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons
            in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies.
            Other cookies also enable us to track and target the interests of our users to enhance the experience on our
            Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other
            purposes. This is described in more detail below.
          </p>

          <h2 data-custom-class="heading_1">How can I control cookies?</h2>
          <p data-custom-class="body_text">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by
            setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select
            which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly
            necessary to provide you with services.
          </p>

          <p data-custom-class="body_text">
            The Cookie Consent Manager can be found in the notification banner and on our Website. If you choose to
            reject cookies, you may still use our Website though your access to some functionality and areas of our
            Website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
          </p>

          <h3 data-custom-class="heading_2">Analytics and customization cookies:</h3>
          <p data-custom-class="body_text">
            These cookies collect information that is used either in aggregate form to help us understand how our
            Website is being used or how effective our marketing campaigns are, or to help us customize our Website for
            you.
          </p>

          {/* Example cookie table */}
          <section data-custom-class="body_text" className="cookie-table">
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>_ga_#</td>
                  </tr>
                  <tr>
                    <th>Purpose:</th>
                    <td>
                      Used to distinguish individual users by means of designation of a randomly generated number as
                      client identifier, which allows calculation of visits and sessions
                    </td>
                  </tr>
                  <tr>
                    <th>Provider:</th>
                    <td>.becleandetailing.com</td>
                  </tr>
                  <tr>
                    <th>Service:</th>
                    <td>
                      Google Analytics{" "}
                      <a
                        href="https://business.safety.google/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-custom-class="link"
                      >
                        View Service Privacy Policy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Type:</th>
                    <td>http_cookie</td>
                  </tr>
                  <tr>
                    <th>Expires in:</th>
                    <td>1 year 1 month 4 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      {/* Scoped CSS for Next.js */}
      <style jsx>{`
        [data-custom-class='body'],
        [data-custom-class='body'] * {
          background: transparent !important;
        }
        [data-custom-class='title'],
        [data-custom-class='title'] * {
          font-family: Arial, sans-serif !important;
          font-size: 26px !important;
          color: #000 !important;
        }
        [data-custom-class='subtitle'],
        [data-custom-class='subtitle'] * {
          font-family: Arial, sans-serif !important;
          color: #595959 !important;
          font-size: 14px !important;
        }
        [data-custom-class='heading_1'],
        [data-custom-class='heading_1'] * {
          font-family: Arial, sans-serif !important;
          font-size: 19px !important;
          color: #000 !important;
        }
        [data-custom-class='heading_2'],
        [data-custom-class='heading_2'] * {
          font-family: Arial, sans-serif !important;
          font-size: 17px !important;
          color: #000 !important;
        }
        [data-custom-class='body_text'],
        [data-custom-class='body_text'] * {
          color: #595959 !important;
          font-size: 14px !important;
          font-family: Arial, sans-serif !important;
        }
        [data-custom-class='link'],
        [data-custom-class='link'] * {
          color: #3030f1 !important;
          font-size: 14px !important;
          font-family: Arial, sans-serif !important;
          word-break: break-word !important;
        }
        .logo {
          display: block;
          margin: 0 auto 3.125rem;
          width: 11.125rem;
          height: 2.375rem;
          background: url('data:image/svg+xml;base64,...') center no-repeat;
        }
        .cookie-table {
          width: 100%;
          border: 1px solid #e6e6e6;
          margin: 0 0 10px;
          border-radius: 3px;
        }
        .cookie-table div {
          padding: 8px 13px;
          border-bottom: 1px solid #e6e6e6;
        }
        .cookie-table th {
          text-align: right;
          color: #19243c;
          min-width: 80px;
          font-weight: normal;
          font-family: Roboto, Arial, sans-serif;
          font-size: 12px;
        }
        .cookie-table td {
          display: inline-block;
          margin-left: 5px;
          color: #8b93a7;
          word-break: break-all;
          font-family: Roboto, Arial, sans-serif;
          font-size: 12px;
        }
      `}</style>
    </div>
  )
}

export default CookieBanner