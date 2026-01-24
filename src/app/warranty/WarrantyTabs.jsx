"use client";

import { useState } from "react";

const WARRANTY_VERSIONS = [
  {
    id: "6 Year Warranty",
    label: "6 Year Warranty",
    title: "BeClean Six (6) Year Limited Warranty",
    subtitle: "Applicable to BeClean Ceramic Coating Installation Only",
   sections: [
      {
        heading: null,
        body: [
          "This Limited Warranty applies exclusively to the installation of BeClean Ceramic Coating and covers defects in workmanship when the service is performed and maintained in accordance with BeClean’s published guidelines. The warranty is valid for a period of six (6) years from the date of installation for the original purchaser (“Warranty Period”).",
          "BeClean’s published guidelines include, but are not limited to, the instructions and standards outlined in official user manuals, maintenance guides, and service communications.",
          "Please Note: All claims made under this Six-Year Limited Warranty are subject to the terms and conditions set forth herein. By scheduling and completing the ceramic coating installation, both BeClean and the purchaser acknowledge and accept these terms."
        ]
      },
      {
        heading: "LIMITED SERVICE WARRANTY",
        body: [
          "BeClean Solutions L.L.C. (the “Company”) expressly warrants to the owner that, for a period of six (6) years from the date of installation (the “Warranty Period”), the Company will cover the vehicle’s paint finish against oxidation, loss of gloss, UV damage, and color fading, solely as a result of defects in workmanship during the ceramic coating installation. This Limited Warranty only applies to the Company’s installations.",
          "The Company will, at its option, remove or replace the installed coating without charge, or refund the cost of the service, if the coating fails or does not perform as warranted solely due to installation within the Warranty Period, subject to the exclusions set forth in this Limited Warranty. If the Company elects to replace the coating, it will remove and reapply the coating to areas determined by the Company in its sole discretion. The Company will provide all labor associated with the service.",
          "The refund of the service cost or reapplication of the defective coating are the exclusive remedies for all services covered under this Limited Service Warranty. During the Warranty Period, the Company’s obligation shall be limited to repair or replacement of only the specific areas affected by installation defects.",
          "Any reapplication shall remain subject to the original Warranty Period, and will not extend or restart the Warranty Period.",
          "To obtain coverage, you must provide proof of service, a copy of the original receipt, and a detailed description of the purported defect. For service, you must notify the Company in writing, providing your name, phone number, address, installation address (if different), product information, and the nature of the defect."
        ]
      },
      {
        heading: "WHAT IS COVERED UNDER THIS WARRANTY?",
        body: [
          "This warranty exclusively covers the ceramic coating installation on the vehicle. The Warranty Period begins on the date of vehicle drop-off and extends for six (6) years. This warranty is non-transferable and does not apply to subsequent owners."
        ]
      },
      {
        heading: "DISCLAIMER OF WARRANTIES",
        body: [
          "THIS LIMITED WARRANTY DOES NOT COVER DEFECTS CAUSED BY:",
          "Improper maintenance methods, including use of automatic car washes or incorrect washing techniques.",
          "Physical or cosmetic damage such as scratches, dents, bird droppings, tree sap, chemical fallout, spray paint, chips, residue, or pre-existing clear coat defects unless directly caused by improper installation.",
          "Installations performed on products with visible defects at the time of service.",
          "Washing the vehicle within the initial 7-day curing period.",
          "Neglect or failure to regularly wash the vehicle. Hand washing is strongly recommended; touchless washes are acceptable. Tunnel-style washes void the warranty.",
          "Water spotting caused by failure to properly dry the vehicle.",
          "Damage or failures associated with non-BeClean products or materials.",
          "Damage caused by collision, vandalism, fire, hail, flood, stones, surface rust, rail dust, overspray, or manufacturer defects.",
          "Failure to retreat repaired areas after bodywork within 30 days (owner’s expense).",
          "Reapplication fees resulting from accidents (owner or insurer responsibility).",
          "Transfer of vehicle ownership.",
          "Non-compliance with Company guidelines, including chemical abuse, thermal shock, or misuse.",
          "Areas not re-coated after paint or body repair."
        ]
      },
      {
        heading: "ACTIONS THAT VOID THIS WARRANTY",
        body: [
          "The warranty will be voided if:",
          "(a) The coating is polished or buffed after installation.",
          "(b) The vehicle is washed within 7 days of application.",
          "(c) A detailing spray is not used after washing.",
          "(d) Improper drying methods are used.",
          "(e) Regular maintenance and washing are neglected."
        ]
      },
      {
        heading: "CERAMIC COATING MAINTENANCE",
        body: [
          "Wash every two (2) weeks or approximately 650 miles.",
          "Hand washing preferred; touchless washes acceptable occasionally.",
          "Always dry with a towel and/or blower.",
          "Use a drying aid or spray sealant.",
          "Remove contaminants such as bird droppings promptly.",
          "Use automotive shampoos only.",
          "For diminished hydrophobicity, use rejuvenating shampoos.",
          "Harsher environments may require more frequent maintenance."
        ]
      },
      {
        heading: "WARRANTY IN THE EVENT OF AN ACCIDENT",
        body: [
          "Damage caused by accidents is not covered. Reapplication may be eligible through insurance. Notify your insurer and schedule reapplication using any settlement funds."
        ]
      },
      {
        heading: "CONDITIONS FOR A WARRANTY CLAIM",
        body: [
          "If a defect arises due to improper installation within the Warranty Period, BeClean will reapply the coating at no charge or issue a refund."
        ]
      },
      {
        heading: "POST-INSTALLATION PRECAUTIONS",
        body: [
          "Do not wash the vehicle within 7 days.",
          "Remove sap or droppings immediately using provided products.",
          "Report installation-related concerns within 7 days. After that, the warranty covers performance only.",
          "The coating must not be polished or buffed by the customer."
        ]
      },
      {
        heading: "ANNUAL INSPECTIONS",
        body: [
          "Annual inspections are required to maintain warranty coverage. Inspections must be completed within 30 days before or after each anniversary of installation. Failure to complete inspections voids the warranty.",
          "Inspection fees (wash, decontamination, topper application, etc.) are the owner’s responsibility.",
          "Keep proof of all inspections for any warranty-related claims."
        ]
      },
      {
        heading: "CONSUMER LAW NOTICE",
        body: [
          "This Limited Warranty gives you specific legal rights, and you may also have other rights which vary by state, country, or province. Nothing in this Limited Warranty is intended to exclude, limit, or suspend any rights you have under applicable consumer protection laws. Where local law provides greater protection to you, such rights shall prevail."
        ]
      },
      {
        heading: "LIMITATION OF IMPLIED WARRANTIES",
        body: [
          "To the extent permitted by applicable law, any implied warranties, including implied warranties of merchantability and fitness for a particular purpose, are limited in duration to the duration of this express Limited Warranty. Some jurisdictions do not permit limitations on the duration of implied warranties; if such laws apply, the limitations above may not apply to you."
        ]
      },
      {
        heading: "LIMITATION OF LIABILITY",
        body: [
          "TO THE MAXIMUM EXTENT PERMITTED BY LAW, BECLEAN’S LIABILITY FOR ANY CLAIM ARISING UNDER THIS LIMITED WARRANTY IS LIMITED EXCLUSIVELY TO, AT BECLEAN’S OPTION, (A) REAPPLICATION OF THE CERAMIC COATING, (B) REPLACEMENT OF THE CERAMIC COATING, OR (C) REFUND OF THE ORIGINAL SERVICE PRICE PAID.",
          "BECLEAN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF USE, LOSS OF VALUE, LOSS OF PROFITS, LOSS OF REVENUE, DIMINUTION OF VEHICLE VALUE, OR COSTS OF RECOVERING OR REPLACING DATA.",
          "SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES; IN SUCH JURISDICTIONS, BECLEAN’S LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW."
        ]
      },
      {
        heading: "PUBLISHED GUIDELINES — DEFINED",
        body: [
          "“BeClean’s published guidelines” include all instructions, manuals, maintenance guides, service bulletins, care instructions, and any updates published on BeClean’s official website or provided in writing at the time of installation. It is the owner’s responsibility to follow such guidelines to maintain warranty coverage."
        ]
      },
      {
        heading: "NO MODIFICATION",
        body: [
          "No BeClean employee, dealer, agent, or representative is authorized to modify, alter, or extend this Limited Warranty. Any attempt to alter this Limited Warranty without BeClean’s prior written consent is void and unenforceable."
        ]
      },
      {
        heading: "GOVERNING LAW",
        body: [
          "This Limited Warranty shall be governed by and construed in accordance with the laws of the State of Pennsylvania, without regard to its conflict-of-laws principles. Where required by applicable law, certain terms shall be interpreted to provide the minimum protections required by that jurisdiction."
        ]
      },
      {
        heading: "CONTACT INFORMATION",
        body: [
          "BeClean Solutions L.L.C.",
          "Address: 225 Sumner Court Harleysville PA 19438",
          "Phone: (267) 409-6913",
          "Website address: www.becleandetailing.com",
          "Email address: support@becleandetailing.com"
        ]
      }
    ]
  },
  {
    id: "Lifetime Warranty",
    label: "Lifetime Warranty",
    title: "BeClean Lifetime Limited Warranty",
    subtitle: "Applicable to BeClean Ceramic Coating Installation Only",
   sections: [
      {
        heading: null,
        body: [
          "This Limited Warranty applies exclusively to the installation of BeClean Ceramic Coating and covers defects in workmanship when the service is performed and maintained in accordance with BeClean’s published guidelines. The warranty is valid for the lifetime of vehicle ownership from the date of installation for the original purchaser (“Warranty Period”).",
          "BeClean’s published guidelines include, but are not limited to, the instructions and standards outlined in official user manuals, maintenance guides, and service communications.",
          "Please Note: All claims made under this Lifetime Limited Warranty are subject to the terms and conditions set forth herein. By scheduling and completing the ceramic coating installation, both BeClean and the purchaser acknowledge and accept these terms."
        ]
      },
      {
        heading: "LIMITED SERVICE WARRANTY",
        body: [
          "BeClean Solutions L.L.C. (the “Company”) expressly warrants to the owner that, for a period of six (6) years from the date of installation (the “Warranty Period”), the Company will cover the vehicle’s paint finish against oxidation, loss of gloss, UV damage, and color fading, solely as a result of defects in workmanship during the ceramic coating installation. This Limited Warranty only applies to the Company’s installations.",
          "The Company will, at its option, remove or replace the installed coating without charge, or refund the cost of the service, if the coating fails or does not perform as warranted solely due to installation within the Warranty Period, subject to the exclusions set forth in this Limited Warranty. If the Company elects to replace the coating, it will remove and reapply the coating to areas determined by the Company in its sole discretion. The Company will provide all labor associated with the service.",
          "The refund of the service cost or reapplication of the defective coating are the exclusive remedies for all services covered under this Limited Service Warranty. During the Warranty Period, the Company’s obligation shall be limited to repair or replacement of only the specific areas affected by installation defects.",
          "Any reapplication shall remain subject to the original Warranty Period, and will not extend or restart the Warranty Period.",
          "To obtain coverage, you must provide proof of service, a copy of the original receipt, and a detailed description of the purported defect. For service, you must notify the Company in writing, providing your name, phone number, address, installation address (if different), product information, and the nature of the defect."
        ]
      },
      {
        heading: "WHAT IS COVERED UNDER THIS WARRANTY?",
        body: [
          "This warranty exclusively covers the ceramic coating installation on the vehicle. The Warranty Period begins on the date of vehicle drop-off and extends for the lifetime of vehicle ownership. This warranty is non-transferable and does not apply to subsequent owners."
        ]
      },
      {
        heading: "DISCLAIMER OF WARRANTIES",
        body: [
          "THIS LIMITED WARRANTY DOES NOT COVER DEFECTS CAUSED BY:",
          "Improper maintenance methods, including use of automatic car washes or incorrect washing techniques.",
          "Physical or cosmetic damage such as scratches, dents, bird droppings, tree sap, chemical fallout, spray paint, chips, residue, or pre-existing clear coat defects unless directly caused by improper installation.",
          "Installations performed on products with visible defects at the time of service.",
          "Washing the vehicle within the initial 7-day curing period.",
          "Neglect or failure to regularly wash the vehicle. Hand washing is strongly recommended; touchless washes are acceptable. Tunnel-style washes void the warranty.",
          "Water spotting caused by failure to properly dry the vehicle.",
          "Damage or failures associated with non-BeClean products or materials.",
          "Damage caused by collision, vandalism, fire, hail, flood, stones, surface rust, rail dust, overspray, or manufacturer defects.",
          "Failure to retreat repaired areas after bodywork within 30 days (owner’s expense).",
          "Reapplication fees resulting from accidents (owner or insurer responsibility).",
          "Transfer of vehicle ownership.",
          "Non-compliance with Company guidelines, including chemical abuse, thermal shock, or misuse.",
          "Areas not re-coated after paint or body repair."
        ]
      },
      {
        heading: "ACTIONS THAT VOID THIS WARRANTY",
        body: [
          "The warranty will be voided if:",
          "(a) The coating is polished or buffed after installation.",
          "(b) The vehicle is washed within 7 days of application.",
          "(c) A detailing spray is not used after washing.",
          "(d) Improper drying methods are used.",
          "(e) Regular maintenance and washing are neglected."
        ]
      },
      {
        heading: "CERAMIC COATING MAINTENANCE",
        body: [
          "Wash every two (2) weeks or approximately 650 miles.",
          "Hand washing preferred; touchless washes acceptable occasionally.",
          "Always dry with a towel and/or blower.",
          "Use a drying aid or spray sealant.",
          "Remove contaminants such as bird droppings promptly.",
          "Use automotive shampoos only.",
          "For diminished hydrophobicity, use rejuvenating shampoos.",
          "Harsher environments may require more frequent maintenance."
        ]
      },
      {
        heading: "WARRANTY IN THE EVENT OF AN ACCIDENT",
        body: [
          "Damage caused by accidents is not covered. Reapplication may be eligible through insurance. Notify your insurer and schedule reapplication using any settlement funds."
        ]
      },
      {
        heading: "CONDITIONS FOR A WARRANTY CLAIM",
        body: [
          "If a defect arises due to improper installation within the Warranty Period, BeClean will reapply the coating at no charge or issue a refund."
        ]
      },
      {
        heading: "POST-INSTALLATION PRECAUTIONS",
        body: [
          "Do not wash the vehicle within 7 days.",
          "Remove sap or droppings immediately using provided products.",
          "Report installation-related concerns within 7 days. After that, the warranty covers performance only.",
          "The coating must not be polished or buffed by the customer."
        ]
      },
      {
        heading: "ANNUAL INSPECTIONS",
        body: [
          "Annual inspections are required to maintain warranty coverage. Inspections must be completed within 30 days before or after each anniversary of installation. Failure to complete inspections voids the warranty.",
          "Inspection fees (wash, decontamination, topper application, etc.) are the owner’s responsibility.",
          "Keep proof of all inspections for any warranty-related claims."
        ]
      },
      {
        heading: "CONSUMER LAW NOTICE",
        body: [
          "This Limited Warranty gives you specific legal rights, and you may also have other rights which vary by state, country, or province. Nothing in this Limited Warranty is intended to exclude, limit, or suspend any rights you have under applicable consumer protection laws. Where local law provides greater protection to you, such rights shall prevail."
        ]
      },
      {
        heading: "LIMITATION OF IMPLIED WARRANTIES",
        body: [
          "To the extent permitted by applicable law, any implied warranties, including implied warranties of merchantability and fitness for a particular purpose, are limited in duration to the duration of this express Limited Warranty. Some jurisdictions do not permit limitations on the duration of implied warranties; if such laws apply, the limitations above may not apply to you."
        ]
      },
      {
        heading: "LIMITATION OF LIABILITY",
        body: [
          "TO THE MAXIMUM EXTENT PERMITTED BY LAW, BECLEAN’S LIABILITY FOR ANY CLAIM ARISING UNDER THIS LIMITED WARRANTY IS LIMITED EXCLUSIVELY TO, AT BECLEAN’S OPTION, (A) REAPPLICATION OF THE CERAMIC COATING, (B) REPLACEMENT OF THE CERAMIC COATING, OR (C) REFUND OF THE ORIGINAL SERVICE PRICE PAID.",
          "BECLEAN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF USE, LOSS OF VALUE, LOSS OF PROFITS, LOSS OF REVENUE, DIMINUTION OF VEHICLE VALUE, OR COSTS OF RECOVERING OR REPLACING DATA.",
          "SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES; IN SUCH JURISDICTIONS, BECLEAN’S LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW."
        ]
      },
      {
        heading: "PUBLISHED GUIDELINES — DEFINED",
        body: [
          "“BeClean’s published guidelines” include all instructions, manuals, maintenance guides, service bulletins, care instructions, and any updates published on BeClean’s official website or provided in writing at the time of installation. It is the owner’s responsibility to follow such guidelines to maintain warranty coverage."
        ]
      },
      {
        heading: "NO MODIFICATION",
        body: [
          "No BeClean employee, dealer, agent, or representative is authorized to modify, alter, or extend this Limited Warranty. Any attempt to alter this Limited Warranty without BeClean’s prior written consent is void and unenforceable."
        ]
      },
      {
        heading: "GOVERNING LAW",
        body: [
          "This Limited Warranty shall be governed by and construed in accordance with the laws of the State of Pennsylvania, without regard to its conflict-of-laws principles. Where required by applicable law, certain terms shall be interpreted to provide the minimum protections required by that jurisdiction."
        ]
      },
      {
        heading: "CONTACT INFORMATION",
        body: [
          "BeClean Solutions L.L.C.",
          "Address: 225 Sumner Court Harleysville PA 19438",
          "Phone: (267) 409-6913",
          "Website address: www.becleandetailing.com",
          "Email address: support@becleandetailing.com"
        ]
      }
    ]
  },
];

export default function WarrantyTabs() {
  const [activeId, setActiveId] = useState(WARRANTY_VERSIONS[0].id);

  const activeWarranty = WARRANTY_VERSIONS.find(
    (warranty) => warranty.id === activeId
  );

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      {/* Tabs */}
      <div className="border-b border-neutral-200 flex gap-8 overflow-x-auto">
        {WARRANTY_VERSIONS.map((version) => (
          <button
            key={version.id}
            onClick={() => setActiveId(version.id)}
            className={`relative pb-3 text-sm whitespace-nowrap transition-colors ${
              activeId === version.id
                ? "text-black font-medium"
                : "text-neutral-500 hover:text-black"
            }`}
          >
            {version.label}
            {activeId === version.id && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black" />
            )}
          </button>
        ))}
      </div>

<div className="mt-12">
  {/* Title */}
  <h1 className="text-4xl font-semibold tracking-tight">
    {activeWarranty.title}
  </h1>

  {/* Subtitle */}
  <p className="mt-2 text-neutral-800 font-medium">
    {activeWarranty.subtitle}
  </p>

  {/* Sections / Content */}
  <div className="mt-10 space-y-6 text-sm leading-relaxed text-neutral-800">
    {(activeWarranty.sections || [
      { heading: null, body: activeWarranty.content || [] },
    ]).map((section, index) => (
      <div key={index}>
        {section.heading && (
          <h2 className="text-lg font-semibold mb-2">{section.heading}</h2>
        )}
        {section.body.map((paragraph, idx) => (
          <p key={idx} className={section.heading ? "" : "uppercase font-medium"}>
            {paragraph}
          </p>
        ))}
      </div>
    ))}
  </div>
</div>
    </section>
  );
}
