export const metadata = {
  title: "Montgomeryville Ceramic Coating Services | beclean Ceramic Coating Studio",
  description: "Montgomeryville ceramic coating services with professional installation, extreme gloss, and long-term paint protection. Free pickup and delivery within 50 miles.",
};

import Location from "@/location/Location";

export default function LocationServer() {
  return <Location
    location='Montgomeryville'
    heroImgPath='/location/montgomeryville.jpg'
  />
}