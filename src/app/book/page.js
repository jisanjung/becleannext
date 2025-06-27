/**
 * page.js must be a server side component in order to have custom metadata
 * hence why we are importing BookWrapper
*/

export const metadata = {
  title: "Book a Ceramic Coating Appointment | beclean",
  description: "Book your ceramic coating now. Get expert-level shine, 8-year protection, with free pickup & delivery. See the difference of ceramic coatings only at beclean.",
};

import BookWrapper from "./BookWrapper";

export default function BookServer() {
    return <BookWrapper/>;
}
