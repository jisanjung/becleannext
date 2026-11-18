/**
 * Everything that differs between the Level 1 / 2 / 3 ceramic coating pages.
 * The page layout lives in ./CoatingPage.jsx and is shared by all three.
 */

// Shared by every level.
export const COATING_FORM_URL = 'https://docs.google.com/forms/d/1CMcB841EMiGIzINViwXbMBGX8OhA2f3Nm0kYo3S9rEU/edit';
export const CLEANING_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdd8xeXyN501FlSOvWhe-c7mibQPedlGWLX9U5ljGmf7PCYzQ/viewform';

export const HIGHLIGHTS = [
  {
    title: 'Pickup & Same-Day Delivery',
    image: '/services/driveway.jpg',
    body: 'Our complimentary vehicle pickup and guaranteed same-day delivery make the ceramic coating experience as seamless as the finish itself. From the moment we collect your vehicle, every step is executed with precision. By the end of the work day, it returns to you fully coated and ready to command attention.',
  },
  {
    title: 'Same-Day Turnaround',
    image: '/services/bmw_fast.jpg',
    body: 'Traditional ceramic coating services often take multiple days. By using the latest coating technology, refined techniques, and a strict one-car-per-day approach, we return your vehicle the same day, without compromising finish or performance.',
  },
  {
    title: 'Reserved Only for You',
    image: '/services/gift_box.JPG',
    body: 'When you book with beclean, the entire studio is reserved for your vehicle. No other cars, distractions, or compromises. Our one-car-per-day approach guarantees unmatched attention to detail and craftsmanship.',
  },
];

export const PROCESS_STEPS = [
  {
    title: 'Pickup',
    image: '/services/car_keys.jpg',
    body: 'Your ceramic coating starts with our technicians arriving at your work, business, or home. After documenting the vehicle, we head to our ceramic coating studio to kickstart your vehicle’s transformation.',
  },
  {
    title: 'Decontamination Wash & Photo Update',
    image: '/landing/exterior_detail.jpeg',
    body: 'Once your vehicle arrives at the studio, we begin the decontamination process: a wash, clay bar, and iron remover. The result is smooth, clean paint that is ready for polishing. Knowing how much you value your vehicle, we send you a photo update.',
  },
  {
    title: 'Polishing',
    image: '/services/polishing.JPG',
    body: 'Polishing is a critical step in the ceramic coating process. It creates a surgically clean surface, achieves higher shine, and removes any surface imperfections, so the paint looks its best and the coating lasts as long as possible.',
  },
  {
    title: 'Ceramic Coating Prep',
    image: '/services/app.JPG',
    body: 'After polishing, we do an additional pass with our adhesion promoter polish. It not only increases shine and smoothness, but also achieves maximum durability.',
  },
  {
    title: 'Ceramic Coating Application',
    image: '/services/ceramic_coating_application.jpg',
    body: 'We apply the ceramic coating to all painted surfaces on the vehicle, including the wheels and trim. Then we inspect the entire vehicle with our high spot detection technique to ensure full, even coverage.',
  },
  {
    title: 'Final Update & Delivery',
    image: '/services/driveway.jpg',
    imageClass: 'object-[70%_center]',
    body: 'After curing for 1 hour, the coating is ready to be delivered in all weather conditions. We send photo updates and coordinate delivery to your work, business, or home. On delivery you receive our gift box: a quick detailer and plush microfiber towel for any contamination while your car fully cures, plus your warranty information and stickers.',
  },
];

export const GIFT_BOX_CONTENTS = ['Quick Detailer', 'Ultra Plush Microfiber Towel', 'Warranty Card', 'Stickers'];

// Feature matrix for the "Compare levels" section.
export const FEATURES = [
  { key: 'windows', label: 'Windows coated' },
  { key: 'decon', label: 'Decontamination wash' },
  { key: 'correction', label: 'Paint correction' },
  { key: 'wheels', label: 'Wheel faces coated' },
  { key: 'trim', label: 'Exterior vinyl & plastics coated' },
  { key: 'lights', label: 'Headlights & taillights coated' },
  { key: 'warranty', label: 'Warranty' },
  { key: 'guarantee', label: '6 month guarantee' },
  { key: 'giftbox', label: 'Ceramic coating gift box' },
];

export const TIERS = {
  1: {
    level: 1,
    slug: 'level-1-ceramic-coating',
    name: 'Level 1 Ceramic Coating',
    years: 1,
    price: 1000,
    accent: '#43BDD5',
    tagline: 'The foundational standard of beclean.',
    summary: 'The minimum in ceramic protection.',
    heroImage: { src: '/level_1_hero.png', alt: 'Grey Mercedes-Benz G-Class', width: 1024, height: 676 },
    lineupImage: '/level_1_black_fixed.png',
    description:
      'Level 1 Ceramic Coating represents the foundational standard of beclean. It enhances gloss, depth, and surface clarity while providing composed, everyday protection. Precisely applied and intentionally restrained, it delivers a finish that feels considered, balanced, and unmistakably refined.',
    audienceHeading: 'For those who expect more.',
    audience:
      'Level 1 is for owners who want the full benefits of a professionally applied ceramic coating without unnecessary excess. It suits those who drive regularly, value consistency, and expect their car to look composed in any setting: daily, professional, or personal. Enhanced gloss, surface slickness, and hydrophobic protection make routine cleaning easier and keep the vehicle looking its best day after day.',
    includedIntro:
      'Our 1 year ceramic coating sets the baseline for what we consider acceptable protection and finish. Applied with precision, it provides all the defining advantages of ceramic coating while maintaining an intentional approach.',
    processIntro:
      'Our ceramic coating service was built for the highest level of ease, convenience, and craftsmanship. Here is exactly what your vehicle receives once it arrives at the studio.',
    features: { windows: false, decon: true, correction: true, wheels: true, trim: true, lights: true, warranty: false, guarantee: true, giftbox: true },
  },
  2: {
    level: 2,
    slug: 'level-2-ceramic-coating',
    name: 'Level 2 Ceramic Coating',
    years: 4,
    price: 1500,
    accent: '#B9BCC2',
    tagline: 'Elevated protection with uncompromising craftsmanship.',
    summary: 'The perfect harmony of performance, protection, & polish.',
    heroImage: { src: '/service_hero.png', alt: 'White Porsche 911 GT3 RS', width: 1600, height: 1067 },
    lineupImage: '/level_2_black.png',
    description:
      'Our Level 2 Ceramic Coating is an all-in-one solution designed for lasting brilliance and protection. It delivers outstanding durability, deep gloss, high slickness, and powerful hydrophobic performance, creating a resilient barrier against UV rays, road salts, chemicals, and contaminants. A refined, long-term shield that keeps your vehicle looking exceptional for years.',
    audienceHeading: 'The all-around performer.',
    audience:
      'If you’re seeking a ceramic coating that delivers across the board, this is for you. Rated for 4 years of durability, it’s designed for those who value balanced excellence: a mirror-like shine, exceptional water beading and self-cleaning, and robust protection against UV rays, chemicals, and the grind of everyday driving. Whether it’s your first ceramic coating or you simply want something proven and enduring, this is the intelligent choice for those who expect more.',
    includedIntro:
      'Our 4 year ceramic coating is designed for owners who want extended ceramic protection, structured for durability, gloss, and surface performance over years of real-world driving.',
    processIntro:
      'Lasting protection is measured not just by the coating applied, but by how your vehicle holds its finish over time. Here is exactly what your vehicle receives once it arrives at the studio.',
    features: { windows: false, decon: true, correction: true, wheels: true, trim: true, lights: true, warranty: true, guarantee: true, giftbox: true },
  },
  3: {
    level: 3,
    slug: 'level-3-ceramic-coating',
    name: 'Level 3 Ceramic Coating',
    years: 9,
    price: 3000,
    accent: '#C5B270',
    tagline: 'The pinnacle of ceramic coating performance.',
    summary: 'For those who want the best.',
    heroImage: {
      src: '/services/m4_green.png',
      alt: 'Oxford Green BMW M4',
      width: 2250,
      height: 1500,
      // The source PNG has a lot of empty space above the car.
      className: 'scale-[1.4] -translate-y-[13%]',
    },
    lineupImage: '/level_3_black.png',
    description:
      'Our Level 3 ceramic coating is the ultimate, no-compromise solution for preserving your vehicle’s beauty. Engineered for those who want the best in ceramic protection, it excels in rich gloss, ultra-slick surface, and unmatched hydrophobic performance, making every curve and contour stand out. It is also our longest rated coating.',
    audienceHeading: 'For those who accept nothing less.',
    audience:
      'If you demand nothing short of the most inclusive ceramic coating possible, Level 3 is made for you. Crafted for the owner who sees their car as a statement of excellence, it delivers a breathtaking mirror-like shine that commands attention. While perfect for all vehicles, its exceptional gloss makes it especially ideal for show cars and weekend rides. Beyond gloss, it excels in smoothness, UV and chemical resistance, water beading, and 9 year durability.',
    includedIntro:
      'Our 9 year ceramic coating is designed for owners who want the most complete ceramic protection we offer, including a dedicated glass coating for every window.',
    processIntro:
      'Lasting protection is measured not just by the coating applied, but by how your vehicle holds its finish over time. Here is exactly what your vehicle receives once it arrives at the studio.',
    features: { windows: true, decon: true, correction: true, wheels: true, trim: true, lights: true, warranty: true, guarantee: true, giftbox: true },
  },
};

export const formatPrice = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
