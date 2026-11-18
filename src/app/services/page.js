import { SERVICE_FAQ_LIST } from "@/constants";
import BookCta from "@/coating/BookCta";
import CoatingCompare from "@/coating/CoatingCompare";
import CoatingProcess from "@/coating/CoatingProcess";
import MobileBookBar from "@/coating/MobileBookBar";
import FAQ from "@/landing/FAQ";
import HomeOurWork from "@/landing/HomeOurWork";
import HomeTestimonials from "@/landing/HomeTestimonials";
import Advantages from "./Advantages";
import WhyBeclean from "./WhyBeclean";

export const metadata = {
  title: "Our Ceramic Coating Services | beclean Ceramic Coating Studio",
  description: "Professional ceramic coating services offering 1, 4, and 9 year protection. Enhance gloss, hydrophobic performance, and long-term paint protection.",
};

export default function ServicesPage() {
  return (
    <main>
      <CoatingCompare eyebrow="Our Services" heading="Choose your level of protection." headingAs="h1" />
      <WhyBeclean />
      <CoatingProcess intro="Our ceramic coating service was built for the highest level of ease, convenience, and craftsmanship. Here is exactly what your vehicle receives once it arrives at the studio." />
      <Advantages />
      <HomeOurWork />
      <HomeTestimonials />
      <FAQ items={SERVICE_FAQ_LIST} contactHref="/#contactSection" />
      <BookCta title="Ready to protect your car?" subtitle="From $1,000 · Same-day turnaround · Free pickup & delivery" />
      <MobileBookBar startAfter="compare" title="Ceramic Coating Services" subtitle="From $1,000 · 1, 4 & 9 year protection" />
    </main>
  );
}
