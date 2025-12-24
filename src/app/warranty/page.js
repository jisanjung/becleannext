import WarrantyTabs from "./WarrantyTabs";

export const metadata = {
  title: "warranty | beclean",
  description: "warranty.",
};
export default function WarrantyPage() {
  return (
    <main className="wrapper">
        <WarrantyTabs></WarrantyTabs>
    </main>
  );
}