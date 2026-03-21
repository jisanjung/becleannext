export const metadata = {
  title: "Collegeville Ceramic Coating Services | beclean Ceramic Coating Studio",
  description: "Collegeville ceramic coating services with professional installation, extreme gloss, and long-term paint protection. Free pickup and delivery within 50 miles.",
};

import Location from "@/location/Location";

export default function LocationServer() {
  return <Location
    location='Collegeville'
    heroImgPath='/location/collegeville.jpg'
  />
}