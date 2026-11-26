import BookCta from "@/coating/BookCta";
import CoatingCompare from "@/coating/CoatingCompare";
import MobileBookBar from "@/coating/MobileBookBar";
import HomeTestimonials from "@/landing/HomeTestimonials";
import Gallery from "./Gallery";

export const metadata = {
  title: "Our Work | beclean Ceramic Coating Studio",
  description: "Real ceramic coating results, not AI slop. beclean Ceramic Coating Studio delivers supreme gloss and long-term paint protection near Harleysville, PA.",
};

export default function OurWorkPage() {
  return (
    <main>
      <section className="section bg-white">
        <div className="container-x">
          <div id="top" className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Work</span>
              <h1 className="heading mt-3">Real cars. Real results.</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                Every car below was ceramic coated in our studio. No renders and no AI, just the gloss our clients
                drive home with. Tap any car to see more photos. Yours might be next.
              </p>
            </div>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/70 md:flex-col md:items-end md:gap-y-1.5">
              <li className="flex items-center gap-2">
                <span className="text-[#FDCF0A]" aria-hidden>★★★★★</span> 5-star rated
              </li>
              <li>One car per day</li>
              <li>Same-day turnaround</li>
            </ul>
          </div>

          <Gallery />
        </div>
      </section>

      <HomeTestimonials />
      <CoatingCompare eyebrow="Get the Look" heading="Choose your level of protection." />
      <BookCta title="Want your car in the gallery?" subtitle="From $1,000 · Same-day turnaround · Free pickup & delivery" />
      <MobileBookBar title="Ceramic Coating" subtitle="From $1,000 · 1, 4 & 9 year protection" />
    </main>
  );
}
