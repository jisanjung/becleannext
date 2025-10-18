import { AFFILIATE_BOOKING_LINK_MAPPING } from "@/constants";

export const metadata = {
    title: "Affiliate VIP Ceramic Coating | beclean",
    description: "Exclusive ceramic coating services offered only at beclean. 8 year protection, free pickup & delivery, signature aftercare kit, plus 30-day guarantee.",
};

const Affiliate = async ({ params }) => {

    const { slug } = await params;
    const slugIsNotNumeric = isNaN(Number(slug));

    if (slugIsNotNumeric && !(slug in AFFILIATE_BOOKING_LINK_MAPPING)) {
        return <div>"{slug}" not found</div>
    }

  return (
    <div>Affiliate link: {AFFILIATE_BOOKING_LINK_MAPPING[slug]}</div>
  )
}

export default Affiliate;