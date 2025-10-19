import Referral from "@/app/referral/Referral";
import { AFFILIATE_BOOKING_LINK_MAPPING } from "@/constants";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Affiliate VIP Ceramic Coating | beclean",
    description: "Exclusive ceramic coating services offered only at beclean. 8 year protection, free pickup & delivery, signature aftercare kit, plus 30-day guarantee.",
};

const Affiliate = async ({ params }) => {

    const { slug } = await params;
    const slugIsNotNumeric = isNaN(Number(slug));

    if (slugIsNotNumeric || !(slug in AFFILIATE_BOOKING_LINK_MAPPING)) {
        return notFound();
    }

  return (
    <main>
        <Referral slug={slug}/>
    </main>
  )
}

export default Affiliate;