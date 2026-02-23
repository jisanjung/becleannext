import WarrantyTabs from "./WarrantyTabs";

export const metadata = {
  title: "Warranty Information | beclean Ceramic Coating Studio",
  description: "Learn about beclean's warranty coverage for our ceramic coating installations. Find the terms and conditions for your 4 and 9 year ceramic coating.",
};
export default function WarrantyPage() {
  return (
    <main className="wrapper">
        <WarrantyTabs></WarrantyTabs>
    </main>
  );
}