import { ServiceItem, CityHub, Testimonial, FAQ, Booking } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'home-deep-clean',
    name: 'Complete Residential Deep Cleaning',
    category: 'Home Cleaning',
    shortDesc: 'Full top-to-bottom scrub down: cobweb removal, fans, balcony jet washing, multi-surface window glass wiping, tile floor buffing, and hospital-grade touchpoint sanitization.',
    fullDesc: 'Our flagship residential deep cleaning treatment. A complete team of 3 to 5 trained professionals with industrial single-disc rotary scrubbers, wet & dry high-suction vacuums, and steam generators transforms every square foot of your living space.',
    startingPrice: 3499,
    unit: '1 BHK',
    duration: '5 - 7 Hours',
    teamSize: '3 - 4 Specialists + 1 Supervisor',
    icon: 'home_work',
    featured: true,
    popularTag: 'MOST POPULAR',
    inclusions: [
      'Tile floor buffing & machine grout scrubbing',
      'Balcony pressurized water jet wash',
      'Glass polishing & window slider track suction',
      'Fan, chandelier & light fixture dry dusting',
      'Wall spot grease & handprint wipe down',
      'Hospital-grade disinfectant touchpoint misting',
      'Switchboards & electrical panel outer sanitization',
      'Full wardrobe exterior de-dusting'
    ],
    equipment: ['Kärcher WD3 Wet & Dry Vacuum', 'Taski Ergodisc 165 Floor Scrubber', 'High-Rise Telescopic Glass Wands', 'Microfiber Color-Coded Cloths'],
    chemicalType: 'Diversey R2/R9, Neutral pH Eco-Surfactants (Pet & Baby Safe)',
    variants: [
      { name: '1 BHK Apartment', price: 3499, description: 'Up to 700 sq.ft, 1 Bath, 1 Balcony' },
      { name: '2 BHK Apartment', price: 4499, description: 'Up to 1200 sq.ft, 2 Baths, 2 Balconies' },
      { name: '3 BHK Apartment', price: 5499, description: 'Up to 1800 sq.ft, 3 Baths, 2-3 Balconies' },
      { name: '4 BHK / Duplex', price: 6999, description: 'Up to 2600 sq.ft, 4 Baths, Multi-Balcony' },
      { name: 'Luxury Villa (4000+ sq.ft)', price: 9499, description: 'Independent villa full exterior & interior restoration' }
    ]
  },
  {
    id: 'sofa-carpet',
    name: 'Sofa & Upholstery Shampooing',
    category: 'Fabric Care',
    shortDesc: 'Three-stage injection-extraction method. Dissolves beverage spills, bodily oils, dust mites, and stubborn odor without soaking fabrics.',
    fullDesc: 'Industrial upholstery extraction brings fabric richness back. We inject foaming neutral-pH shampoo deep into cushion batting to encapsulate sweat salts, grime, and food stains, instantly extracting 95% of fluid under 220 mbar vacuum pressure.',
    startingPrice: 699,
    unit: 'Per Seat',
    duration: '1.5 - 3 Hours',
    teamSize: '2 Fabric Specialists',
    icon: 'chair',
    featured: true,
    inclusions: [
      'Deep fiber foam injection & agitation',
      'High-suction turbine fluid extraction',
      'Fabric stain pre-treatment (tea, coffee, oil)',
      'Under-cushion dust vacuuming',
      'Fabric deodorizing & anti-fungal rinse',
      'Complimentary armrest & headrest sanitization'
    ],
    equipment: ['Kärcher Puzzi 10/1 Injection-Extraction Machine', 'Soft Horsehair Bristle Scrubbers'],
    chemicalType: 'Taski Tapi Extract & Tapi Spot 2 (Fabric Safe)',
    variants: [
      { name: '3-Seater Fabric Sofa', price: 1299, description: 'Complete front, back & side extraction' },
      { name: '5-Seater / L-Shape Sofa', price: 1999, description: 'Sectional deep clean + free cushions' },
      { name: '7-Seater Royal Sectional', price: 2699, description: 'Full lounge suite revival' },
      { name: 'Dining Chairs (Set of 6)', price: 1199, description: 'Seat cushion & backrest extraction' },
      { name: 'Living Room Area Rug (5x7)', price: 999, description: 'Wool / synthetic high-pile deep wash' }
    ]
  },
  {
    id: 'kitchen-degrease',
    name: 'Kitchen Degreasing & Chimney',
    category: 'Specialized',
    shortDesc: 'Dissolves baked-on Indian spice oils, grease encrusted chimney filters, gas burner grime, tile backsplashes, and under-sink sanitation.',
    fullDesc: 'Formulated specifically for Indian culinary grease (turmeric, mustard vapor, burnt oil). We dismantle chimney baffle filters and submerge them in hot degreasing tanks, descaling exhaust chambers, quartz slabs, backsplashes, and cabinetry.',
    startingPrice: 1799,
    unit: 'Complete Kitchen',
    duration: '2.5 - 4 Hours',
    teamSize: '2 Kitchen Specialists',
    icon: 'countertops',
    featured: true,
    inclusions: [
      'Baffle / mesh filter chemical degreasing bath',
      'Chimney hood internal grease scraping & polish',
      'Gas hob & burner descaling & nozzle wipe',
      'Backsplash tile & grout scrub',
      'Cabinet exterior & handle degreasing',
      'Granite / quartz countertop restoration',
      'Under-sink anti-bacterial scrub & drain flush'
    ],
    equipment: ['High-Pressure Steam Jet (140°C)', 'Degreaser Immersion Baths', 'Non-Scratch Nylon Pads'],
    chemicalType: 'Diversey Suma D9 Heavy Duty Oven & Degreaser (Food Contact Safe)',
    variants: [
      { name: 'Standard Modular Kitchen', price: 1799, description: 'Up to 100 sq.ft kitchen with chimney' },
      { name: 'Large Island Kitchen', price: 2499, description: 'Large kitchen with dual chimneys & pantry' },
      { name: 'Kitchen + Internal Cabinets', price: 2999, description: 'Complete empty cabinet interior wash' }
    ]
  },
  {
    id: 'bathroom-scrub',
    name: 'Bathroom Intense Descaling',
    category: 'Sanitization',
    shortDesc: 'Eradicates stubborn hard-water calcification, soap scum, grout discoloration, and chrome tap oxidation to hospital-standard hygiene.',
    fullDesc: 'South Indian borewell and tap water causes heavy white calcium carbonate buildup on glass partitions and dark tiles. We utilize non-corrosive descalers that dissolve minerals without eroding tile enamel or chrome plating.',
    startingPrice: 799,
    unit: 'Per Bathroom',
    duration: '1.5 - 2 Hours / Bath',
    teamSize: '1 - 2 Sanitation Specialists',
    icon: 'shower',
    featured: true,
    inclusions: [
      'Glass shower enclosure calcium scale eradication',
      'Wall tile hard-water stain scrubbing',
      'Western commode internal & rim sanitization',
      'Washbasin & mirror streak-free polishing',
      'Chrome CP tap & shower head shine buffing',
      'Exhaust fan & geyser outer de-dusting',
      'Drain anti-odor enzymic flush'
    ],
    equipment: ['Rotary Corner Scrubbers', 'Silicone Squeegees', 'High-Temperature Steam Wand'],
    chemicalType: 'Diversey Taski R1 & R9 Descaling Formulations',
    variants: [
      { name: '1 Bathroom Scrub', price: 799, description: 'Complete descaling & mirror polish' },
      { name: '2 Bathrooms Combo', price: 1499, description: 'Master + Guest bathroom intensive clean' },
      { name: '3 Bathrooms Package', price: 1999, description: 'All home bathrooms sanitized & sealed' },
      { name: '4 Bathrooms Full Villa', price: 2499, description: 'Comprehensive multi-floor bathrooms' }
    ]
  },
  {
    id: 'pest-control',
    name: 'Pest Shield & Mattress Clean',
    category: 'Protection',
    shortDesc: 'Eliminate dust mites, dead skin cells, and allergens. Combined with odorless herbal gel anti-cockroach and anti-termite barrier protection.',
    fullDesc: 'A dual-action sanitation service. High-frequency UV-C vibratory vacuums extract bedbugs and microscopic mites from mattresses, paired with German Bayer odorless gel application inside kitchen cabinets and electrical corners.',
    startingPrice: 1199,
    unit: 'Full Home',
    duration: '1.5 - 2.5 Hours',
    teamSize: '1 Certified Exterminator + Tech',
    icon: 'pest_control',
    featured: true,
    inclusions: [
      'King / Queen mattress UV-C vibratory suction',
      'Odorless Bayer Maxforce cockroach gel dots',
      'Drain line insecticide spraying for roach nymphs',
      'Window mesh & crevice barrier treatment',
      'Bedbug heat spray (optional add-on)',
      '90-Day no-cockroach re-service warranty'
    ],
    equipment: ['Raycop UV-C Anti-Mite Vac', 'Precision Gel Applicator Guns'],
    chemicalType: 'Bayer Maxforce Forte Gel (Non-toxic to humans & pets)',
    variants: [
      { name: '1 - 2 BHK Pest Shield', price: 1199, description: 'Full home gel + 1 Mattress suction' },
      { name: '3 - 4 BHK Pest Shield', price: 1699, description: 'Full home gel + 2 Mattresses suction' },
      { name: 'Villa Complete Shield', price: 2499, description: 'Interior + perimeter drain barrier' }
    ]
  },
  {
    id: 'post-construction',
    name: 'Post-Construction Deep Cleanup',
    category: 'Heavy Industrial',
    shortDesc: 'Specialized removal of paint splatters, dried cement slurry, silicone adhesives, and fine gypsum plaster dust from new and renovated homes.',
    fullDesc: 'After renovation, fine drywall silica and cement grit settle deep into window tracks and tile porosities. We use industrial 3-motor vacuums, single-blade scrapers, and floor polishers to prepare homes for immediate move-in.',
    startingPrice: 6499,
    unit: '2 BHK',
    duration: '7 - 10 Hours',
    teamSize: '5 - 6 Heavy Cleanup Crew',
    icon: 'construction',
    inclusions: [
      'Paint drip removal from marble, granite, tiles',
      'Cement splash peeling from UPVC window frames',
      'Plaster dust extraction from AC vents & ducts',
      'Silicone adhesive residue dissolution',
      'High-gloss rotary buffing of entire flooring',
      'Woodwork interior vacuuming of sawdust'
    ],
    equipment: ['Nilfisk Industrial Dust Extractor', 'Floor Stripping Pads', 'Safety Scrapers'],
    chemicalType: 'Biodegradable Paint & Mortar Dissolvers',
    variants: [
      { name: '2 BHK Post-Work Clean', price: 6499, description: 'Paint & plaster removal up to 1200 sq.ft' },
      { name: '3 BHK Post-Work Clean', price: 8499, description: 'Complete floor restoration up to 1800 sq.ft' },
      { name: 'Villa Post-Work Clean', price: 12999, description: 'Multi-story comprehensive handover' }
    ]
  },
  {
    id: 'commercial-office',
    name: 'Commercial & Office Facility Care',
    category: 'Corporate B2B',
    shortDesc: 'Structured AMC corporate sanitization, cubicle workstation hygiene, server room dust clearance, and cafeteria deep degreasing.',
    fullDesc: 'Trusted by IT corridors in Hitec City, Gachibowli, Benz Circle, and Vizag. We provide after-hours or weekend sanitization that keeps enterprise workplaces germ-free, fresh, and compliant with health & safety audits.',
    startingPrice: 4999,
    unit: '1,000 sq.ft',
    duration: 'Custom Schedule',
    teamSize: 'Dedicated Shift Supervisor + Crew',
    icon: 'apartment',
    inclusions: [
      'High-touch workstation & monitor sanitizing',
      'Carpet tile low-moisture dry-foam wash',
      'Pantry & water dispenser descaling',
      'Restroom deep disinfection & odor control',
      'Meeting room glass partition streak-free wipe',
      'Monthly AMC reports & GST input invoices'
    ],
    equipment: ['Hospital-Grade Cold Foggers', 'Taski Carpet Cleaners', 'HEPA Air Purifying Vacuums'],
    chemicalType: 'EPA-Registered Disinfectant Liquids',
    variants: [
      { name: 'Start-up Hub (Up to 1,500 sq.ft)', price: 4999, description: 'One-time weekend deep sanitize' },
      { name: 'Mid Enterprise (Up to 5,000 sq.ft)', price: 12499, description: 'Full floor comprehensive scrub' },
      { name: 'Annual AMC Maintenance', price: 19999, description: 'Monthly scheduled maintenance plan' }
    ]
  },
  {
    id: 'marble-polish',
    name: 'Italian Marble Crystallization & Buffing',
    category: 'Floor Restoration',
    shortDesc: 'Diamond pad grinding, chemical crystallization, and carnauba wax seal for Italian, Bottochino, and Indian marble floors.',
    fullDesc: 'Revives dull, scratched, or etched marble to a mirror-like reflective sheen. We execute 5-stage diamond resin grit polishing followed by fluorosilicate crystallization to seal natural stone pores.',
    startingPrice: 35,
    unit: 'Per sq.ft',
    duration: '1 - 2 Days',
    teamSize: '2 Master Stone Polishers',
    icon: 'diamond',
    inclusions: [
      'Surface scratch grinding with #400 - #3000 grit pads',
      'Grout line chemical bleaching & re-filling',
      'Klindex / Bellinzoni Italian crystallization spray',
      'High-speed buffing for wet-look reflection',
      'Hydrophobic stone pore impregnation'
    ],
    equipment: ['Klindex Levighetor 640 Stone Grinder', 'Horsehair Diamond Buffing Pads'],
    chemicalType: 'Bellinzoni K2 / K3 Italian Crystallizer',
    variants: [
      { name: 'Living & Dining Area (500 sq.ft)', price: 17500, description: 'Mirror polish & crystallization' },
      { name: 'Entire 3BHK Home (1200 sq.ft)', price: 38400, description: 'Complete marble restoration' }
    ]
  }
];

export const CITIES_DATA: CityHub[] = [
  {
    id: 'hyderabad',
    name: 'Hyderabad & Secunderabad',
    state: 'Telangana',
    estYear: 2017,
    teamsCount: 12,
    statusBadge: '12 TEAMS ON ROAD',
    supervisorName: 'K. Vamsi Krishna',
    phone: '+91 97037 21616',
    coverageAreas: [
      'Gachibowli', 'Hitec City', 'Madhapur', 'Kondapur', 'Jubilee Hills', 
      'Banjara Hills', 'Kukatpally', 'Miyapur', 'Manikonda', 'Financial District', 
      'Nanakramguda', 'Tellapur', 'Secunderabad Cantt', 'Uppal', 'Attapur'
    ],
    depotAddress: 'Plot 42, Silicon Valley, Near Cyber Towers, Madhapur, Hyderabad 500081'
  },
  {
    id: 'vijayawada',
    name: 'Vijayawada',
    state: 'Andhra Pradesh',
    estYear: 2019,
    teamsCount: 6,
    statusBadge: '6 TEAMS ON ROAD',
    supervisorName: 'Ch. Satish Babu',
    phone: '+91 97037 21616',
    coverageAreas: [
      'Benz Circle', 'Bhavanipuram', 'Currency Nagar', 'Moghalrajpuram', 
      'Auto Nagar', 'Kanuru', 'Poranki', 'Tadepalle', 'One Town', 
      'Governorpet', 'Gunadala', 'Payakapuram'
    ],
    depotAddress: 'D.No 40-1-65, MG Road, Opposite DV Manor, Benz Circle, Vijayawada 520010'
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam (Vizag)',
    state: 'Andhra Pradesh',
    estYear: 2020,
    teamsCount: 5,
    statusBadge: '5 TEAMS ON ROAD',
    supervisorName: 'P. Rajesh Naidu',
    phone: '+91 97037 21616',
    coverageAreas: [
      'MVP Colony', 'Rushikonda', 'Madhurawada', 'Siripuram', 'Gajuwaka', 
      'Dwaraka Nagar', 'Seethammadhara', 'Yendada', 'PM Palem', 
      'Waltair Uplands', 'Pendurthi', 'Sujatha Nagar'
    ],
    depotAddress: 'Flat 302, Sea Breeze Heights, Sector 6, MVP Colony, Visakhapatnam 530017'
  },
  {
    id: 'guntur',
    name: 'Guntur',
    state: 'Andhra Pradesh',
    estYear: 2021,
    teamsCount: 4,
    statusBadge: '4 TEAMS ON ROAD',
    supervisorName: 'G. Suresh Kumar',
    phone: '+91 97037 21616',
    coverageAreas: [
      'Lakshmipuram', 'Brodipet', 'Arundelpet', 'Syamala Nagar', 
      'Amaravathi Road', 'Pattabhipuram', 'Gujjanagundla', 'Nallapadu', 
      'Vidya Nagar', 'Chandramouli Nagar'
    ],
    depotAddress: 'Shop 8, Commercial Complex, 4/1 Brodipet, Guntur 522002'
  },
  {
    id: 'rajahmundry',
    name: 'Rajahmundry',
    state: 'Andhra Pradesh',
    estYear: 2022,
    teamsCount: 3,
    statusBadge: '3 TEAMS ON ROAD',
    supervisorName: 'T. Rama Rao',
    phone: '+91 97037 21616',
    coverageAreas: [
      'Danavaipeta', 'Morampudi', 'Prakash Nagar', 'Aryapuram', 
      'Lalacheruvu', 'Dowleswaram Corridor', 'Diwancheruvu', 'AV Appa Rao Road'
    ],
    depotAddress: 'Near Godavari Bund Road, Danavaipeta, Rajahmundry 533103'
  },
  {
    id: 'kakinada',
    name: 'Kakinada',
    state: 'Andhra Pradesh',
    estYear: 2023,
    teamsCount: 3,
    statusBadge: '3 TEAMS ON ROAD',
    supervisorName: 'M. Anand Vardhan',
    phone: '+91 97037 21616',
    coverageAreas: [
      'Srinagar', 'Bhanugudi Junction', 'Ramaraopeta', 'Suryaraopeta', 
      'Madhavapatnam', 'Sarpavaram', 'Gaigolupadu', 'Cinema Road'
    ],
    depotAddress: 'Main Road, Adjacent to Bhanugudi Junction, Kakinada 533003'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Kumar Varma',
    location: 'Gachibowli, Hyderabad',
    city: 'hyderabad',
    service: 'Residential Deep Cleaning',
    rating: 5,
    review: 'Got our 3BHK deep cleaned before housewarming in Gachibowli. The crew spent nearly 7 hours. Balcony tiles, chimney, and bathroom glass partitions look as good as showroom condition. Will definitely hire again.',
    date: '14 Sep 2026',
    initials: 'KV'
  },
  {
    id: 't-2',
    name: 'Anshuman Kumar',
    location: 'Benz Circle, Vijayawada',
    city: 'vijayawada',
    service: 'Sofa & Upholstery Shampooing',
    rating: 5,
    review: 'Our grey fabric L-shaped sectional couch had water rings and juice stains from kids. The steam extraction cleaned it thoroughly and within 3 hours it was completely dry. Smells amazingly fresh!',
    date: '08 Sep 2026',
    initials: 'AK'
  },
  {
    id: 't-3',
    name: 'Mahesh Reddy',
    location: 'Madhurawada, Vizag',
    city: 'visakhapatnam',
    service: 'Bathroom Intense Descaling',
    rating: 5,
    review: 'Booked their bathroom intense descaling in Vizag. Ground water in our locality left hard white salt crust on all black granite tiles and chrome fixtures. The crew erased every trace. Super punctual!',
    date: '02 Sep 2026',
    initials: 'MR'
  },
  {
    id: 't-4',
    name: 'Sowmya Lakshmi',
    location: 'Brodipet, Guntur',
    city: 'guntur',
    service: 'Post-Construction Cleanup',
    rating: 5,
    review: 'Post construction cleaning at our new duplex in Guntur was spotless. Cement splashes on window frames and paint drips on Italian marble floors were removed without a single scratch.',
    date: '28 Aug 2026',
    initials: 'SL'
  },
  {
    id: 't-5',
    name: 'Prasad Raju',
    location: 'Danavaipeta, Rajahmundry',
    city: 'rajahmundry',
    service: 'Kitchen Degreasing',
    rating: 5,
    review: 'Our chimney was dripping sticky yellow oil onto the stove. Goklean4u technicians soaked the filters in their chemical tank and steam-blasted the blower. It works like brand new with zero noise.',
    date: '21 Aug 2026',
    initials: 'PR'
  },
  {
    id: 't-6',
    name: 'Deepika Rao',
    location: 'Srinagar, Kakinada',
    city: 'kakinada',
    service: 'Residential Deep Cleaning',
    rating: 5,
    review: 'Very professional team in Kakinada. Uniformed, polite, and they brought all heavy machines including vacuum and floor scrubber. The supervisor did a proper walkthrough before taking payment.',
    date: '17 Aug 2026',
    initials: 'DR'
  }
];

export const FAQS_DATA: FAQ[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is included in a Goklean4u Home Deep Cleaning?',
    answer: 'Our complete residential deep cleaning covers mechanical floor scrubbing and buffing, tile grout cleaning, cobweb and high-ceiling dust vacuuming, fan and chandelier cleaning, switchboards, balcony water jet wash, full window glass washing and slider track vacuuming, door frame sanitization, and hospital-grade touchpoint wipe-downs. Kitchen degreasing and bathroom descaling can be bundled together for maximum value.'
  },
  {
    id: 'faq-2',
    category: 'Process',
    question: 'Do I need to supply any cleaning equipment or liquids?',
    answer: 'Not a single thing! Our team arrives fully self-sufficient with industrial vacuum cleaners, rotary floor scrubbers, pressurized steam machines, high-rise extension ladders, clean microfiber towels, and eco-certified chemicals. All we need from your side is continuous tap water and working electrical power outlets.'
  },
  {
    id: 'faq-3',
    category: 'Process',
    question: 'How long does a deep cleaning session typically take?',
    answer: 'A standard 2BHK or 3BHK home deep clean takes roughly 5 to 7 hours with a team of 3 to 4 trained technicians and a supervisor. Large independent villas (4BHK–5BHK) typically require a full 8-hour day with a 5-person crew.'
  },
  {
    id: 'faq-4',
    category: 'Chemicals',
    question: 'Are your cleaning chemicals safe for kids and pets?',
    answer: 'Yes, absolutely. We use eco-friendly, non-hazardous, neutral pH solutions from Diversey and Taski. We strictly forbid harsh hydrochloric or muriatic acids that strip bathroom glaze, release toxic choking fumes, or harm sensitive pet paws.'
  },
  {
    id: 'faq-5',
    category: 'Guarantee',
    question: 'How does the 3-Day Service Guarantee work?',
    answer: 'Customer satisfaction is our first priority. If you notice any missed spot, streak, or unsatisfactory area after the crew departs, simply notify us via WhatsApp or phone call within 72 hours. We will dispatch a senior technician to re-clean the specific area with zero arguments or additional charges.'
  },
  {
    id: 'faq-6',
    category: 'Process',
    question: 'How soon will my sofa or upholstery dry after shampooing?',
    answer: 'Because our dual-chamber extraction machine removes up to 95% of injected fluids during the cycle, sofas dry in roughly 3 to 4 hours under normal ceiling fan ventilation. No soaking wet cushions and no damp smell.'
  },
  {
    id: 'faq-7',
    category: 'Pricing',
    question: 'Can I reschedule or cancel my booking?',
    answer: 'Yes! Life happens. You can reschedule or cancel your service date without any cancellation penalty provided you notify our operations coordinator at least 4 hours before the designated start time.'
  },
  {
    id: 'faq-8',
    category: 'Pricing',
    question: 'Are there any hidden costs or travel charges?',
    answer: 'None whatsoever. The price quoted in our system or confirmed by our supervisor includes all labor, equipment, specialized solutions, and transportation within municipal city limits. There are no surprise surcharge add-ons.'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'GK4U-9824',
    serviceId: 'home-deep-clean',
    serviceName: 'Complete Residential Deep Cleaning',
    variant: '3 BHK Apartment',
    customerName: 'Rajesh Kumar',
    phone: '9848022334',
    email: 'rajesh.k@gmail.com',
    city: 'hyderabad',
    address: 'Flat 402, My Home Bhooja, Silpa Gram Craft Village, Rai Durg, Hyderabad',
    date: '2026-09-25',
    timeSlot: 'Morning (8:00 AM - 11:00 AM)',
    addons: ['Balcony Jet Wash', 'Refrigerator Interior Clean'],
    totalAmount: 5899,
    status: 'Supervisor Assigned',
    supervisorName: 'Vamsi Krishna',
    supervisorPhone: '+91 97037 21616',
    createdAt: '2026-09-22T10:30:00.000Z',
    notes: 'Please pay extra attention to the utility balcony grease stains.'
  },
  {
    id: 'GK4U-8761',
    serviceId: 'sofa-carpet',
    serviceName: 'Sofa & Upholstery Shampooing',
    variant: '5-Seater / L-Shape Sofa',
    customerName: 'Priya Sharma',
    phone: '9988776655',
    city: 'vijayawada',
    address: 'House No 12-4, Near DV Manor, Benz Circle, Vijayawada',
    date: '2026-09-24',
    timeSlot: 'Afternoon (11:00 AM - 3:00 PM)',
    addons: ['Fabric Anti-Odor Shield'],
    totalAmount: 2199,
    status: 'Confirmed',
    supervisorName: 'Satish Babu',
    supervisorPhone: '+91 97037 21616',
    createdAt: '2026-09-23T08:15:00.000Z'
  }
];
