/**
 * page.js must be a server side component in order to have custom metadata
 * hence why we are importing Service
*/

export const metadata = {
  title: "Our Ceramic Coating Services | beclean Ceramic Coating Studio",
  description: "Professional ceramic coating services offering 1, 4, and 9 year protection. Enhance gloss, hydrophobic performance, and long-term paint protection.",
};

import Service from "./Service";

export default function ServiceServer() {
    return <Service/>
}
