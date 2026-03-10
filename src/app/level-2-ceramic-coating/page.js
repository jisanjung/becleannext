/**
 * page.js must be a server side component in order to have custom metadata
 * hence why we are importing Service
*/

export const metadata = {
  title: "Level 2 Ceramic Coating Service: 4 Year Protection | beclean Ceramic Coating Studio",
  description: "Our level 2 ceramic coating service showcases 4 year durability rating while sporting all around ceramic coating performance. Excellent for all vehicles.",
};

import Service from "./Service";

export default function ServiceServer() {
    return <Service/>
}
