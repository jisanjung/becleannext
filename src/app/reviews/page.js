import BookCta from "@/coating/BookCta";
import CoatingCompare from "@/coating/CoatingCompare";
import MobileBookBar from "@/coating/MobileBookBar";
import HomeOurWork from "@/landing/HomeOurWork";
import ReviewGrid from "./ReviewGrid";
import { REVIEWS } from "./reviewList";

export const metadata = {
  title: "Our Reviews | beclean Ceramic Coating Studio",
  description: "Read from a list of our ceramic coating clients and their testimonials. Listen to what our clients have to say about how exceptional our services truly are.",
};

export default function ReviewsPage() {
  return (
    <main>
      <section className="section bg-mist">
        <div className="container-x">
          <div id="top" className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Reviews</span>
              <h1 className="heading mt-3">What our clients say.</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                Real reviews from real clients, straight from Google. See what they have to say about their
                experience with beclean. Tap any review to read it full size.
              </p>
            </div>
            <div className="shrink-0 self-start rounded-2xl bg-white px-6 py-4 ring-1 ring-black/5 md:self-auto">
              <span className="text-xl tracking-[0.15em] text-[#FDCF0A]" aria-hidden>★★★★★</span>
              <p className="mt-1 text-sm font-semibold text-ink">5-star reviews on Google</p>
              <p className="text-sm text-ink/60">{REVIEWS.length} shown below</p>
            </div>
          </div>

          <ReviewGrid />
        </div>
      </section>

      <CoatingCompare eyebrow="Join Them" heading="Choose your level of protection." />
      <HomeOurWork />
      <BookCta title="Ready to be our next review?" subtitle="From $1,000 · Same-day turnaround · Free pickup & delivery" />
      <MobileBookBar title="Ceramic Coating" subtitle="From $1,000 · 1, 4 & 9 year protection" />
    </main>
  );
}
