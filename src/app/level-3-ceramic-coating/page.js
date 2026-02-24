/**
 * page.js must be a server side component in order to have custom metadata
 * hence why we are importing Service
*/

export const metadata = {
  title: "Level 3 Ceramic Coating Service: 9 Year Protection | beclean Ceramic Coating Studio",
  description: "Our Level 3 ceramic coating offers a 9-year durability rating with advanced gloss, protection, and long-term performance. For owners who want the highest.",
};

import Service from "./Service";

export default function ServiceServer() {
    return <Service/>
}
