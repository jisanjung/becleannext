/**
 * page.js must be a server side component in order to have custom metadata
 * hence why we are importing Service
*/

export const metadata = {
  title: "8 - Year Ceramic Coating Services | beclean",
  description: "8 - year ceramic coating services showcases all - around ceramic coating performance while having one of the highest durability ratings on the market.",
};

import Service from "./Service";

export default function ServiceServer() {
    return <Service/>
}
