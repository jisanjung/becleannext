/**
 * page.js must be a server side component in order to have custom metadata
 * hence why we are importing Service
*/

export const metadata = {
  title: "Level 1 Ceramic Coating Service: 1 Year Protection | beclean Ceramic Coating Studio",
  description: "Professional 1-year ceramic coating with enhanced gloss, hydrophobic protection, and easier maintenance. True ceramic performance for daily-driven vehicles.",
};

import Service from "./Service";

export default function ServiceServer() {
    return <Service/>
}
