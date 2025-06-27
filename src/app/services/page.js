/**
 * page.js must be a server side component in order to have custom metadata
 * hence why we are importing Service
*/

export const metadata = {
  title: "test services | beclean",
  description: "services description",
};

import Service from "./Service";

export default function ServiceServer() {
    return <Service/>
}
