export const metadata = {
  title: "Bryn Mawr Ceramic Coating Services | beclean Ceramic Coating Studio",
  description: "Bryn Mawr ceramic coating services with professional installation, extreme gloss, and long-term paint protection. Free pickup and delivery within 50 miles.",
};

import Location from "@/location/Location";

export default function LocationServer() {
  return <Location
    location='Bryn Mawr'
    heroImgPath='/location/bryn_mawr.jpg'
  />
}