import React, { useState, useId } from 'react';
import { ScreenType } from '../types';

export interface QuickPriceEstimatorProps {
  onOpenBooking: (serviceId?: string, cityId?: string) => void;
  onNavigate?: (screen: ScreenType) => void;
  variant?: 'card' | 'embedded' | 'standalone';
}

export type PropertySize = '1bhk' | '2bhk' | '3bhk' | '4bhk' | 'villa';
export type ServiceTypeKey =
  | 'home-deep-clean'
  | 'post-construction'
  | 'kitchen-degrease'
  | 'bathroom-scrub'
  | 'sofa-carpet'
  | 'pest-control';

interface SizingData {
  label: string;
  shortLabel: string;
  typicalSqft: string;
  defaultBaths: number;
  defaultBalconies: number;
  description: string;
}

interface ServicePricingConfig {
  name: string;
  icon: string;
  badge: string;
  summary: string;
  rates: Record<
    PropertySize,
    {
      min: number;
      max: number;
      duration: string;
      crew: string;
    }
  >;
  keyEquip: string;
}

const PROPERTY_SIZES: Record<PropertySize, SizingData> = {
  '1bhk': {
    label: '1 BHK Apartment',
    shortLabel: '1 BHK',
    typicalSqft: '500 – 750 sq.ft',
    defaultBaths: 1,
    defaultBalconies: 1,
    description: '1 Bed · 1 Bath · Living & Kitchen',
  },
  '2bhk': {
    label: '2 BHK Apartment',
    shortLabel: '2 BHK',
    typicalSqft: '800 – 1,200 sq.ft',
    defaultBaths: 2,
    defaultBalconies: 1,
    description: '2 Beds · 2 Baths · Living, Kitchen & Balcony',
  },
  '3bhk': {
    label: '3 BHK Apartment',
    shortLabel: '3 BHK',
    typicalSqft: '1,250 – 1,800 sq.ft',
    defaultBaths: 3,
    defaultBalconies: 2,
    description: '3 Beds · 3 Baths · Dining, Utility & 2 Balconies',
  },
  '4bhk': {
    label: '4 BHK / Duplex',
    shortLabel: '4 BHK',
    typicalSqft: '1,850 – 2,600 sq.ft',
    defaultBaths: 4,
    defaultBalconies: 3,
    description: '4 Beds · 4 Baths · Multi-Balcony / Duplex',
  },
  'villa': {
    label: 'Independent Villa',
    shortLabel: 'Villa',
    typicalSqft: '2,800 – 4,500+ sq.ft',
    defaultBaths: 5,
    defaultBalconies: 3,
    description: 'G+1 / G+2 Floors · Porch, Terrace & Grounds',
  },
};

const SERVICE_CONFIGS: Record<ServiceTypeKey, ServicePricingConfig> = {
  'home-deep-clean': {
    name: 'Complete Home Deep Cleaning',
    icon: 'home_work',
    badge: 'Most Popular',
    summary: 'Machine floor buffing, acid-free bathroom descaling, balcony jet wash & glass pane polishing.',
    rates: {
      '1bhk': { min: 3200, max: 3700, duration: '4 – 5 Hours', crew: '3 Specialists' },
      '2bhk': { min: 4200, max: 4800, duration: '5 – 6 Hours', crew: '3 – 4 Specialists' },
      '3bhk': { min: 5200, max: 5900, duration: '6 – 7 Hours', crew: '4 Specialists + 1 Supervisor' },
      '4bhk': { min: 6700, max: 7600, duration: '7 – 8 Hours', crew: '5 Specialists + 1 Supervisor' },
      'villa': { min: 9200, max: 10800, duration: '8 – 10 Hours', crew: '6 Specialists + 1 Supervisor' },
    },
    keyEquip: 'Taski Ergodisc Rotary Scrubber + Kärcher WD3 Vacuum + Diversey R2/R9',
  },
  'post-construction': {
    name: 'Post-Construction & Move-In',
    icon: 'construction',
    badge: 'Heavy Duty',
    summary: 'Cement slurry peeling, paint splatter dissolution, UPVC slider track suction & fine gypsum dust wipe.',
    rates: {
      '1bhk': { min: 4800, max: 5500, duration: '5 – 7 Hours', crew: '4 Industrial Techs' },
      '2bhk': { min: 6200, max: 7200, duration: '7 – 9 Hours', crew: '5 Industrial Techs' },
      '3bhk': { min: 8200, max: 9400, duration: '8 – 10 Hours', crew: '6 Industrial Techs + 1 Lead' },
      '4bhk': { min: 10500, max: 12200, duration: '9 – 11 Hours', crew: '7 Industrial Techs + 1 Lead' },
      'villa': { min: 14500, max: 17000, duration: 'Full Day (10h)', crew: '8+ Industrial Handover Team' },
    },
    keyEquip: 'Nilfisk 3-motor Dust Extractor + Hard Floor Stripping Pads + Mortar Solvents',
  },
  'kitchen-degrease': {
    name: 'Kitchen Degreasing & Chimney',
    icon: 'countertops',
    badge: 'Food Safe',
    summary: 'Baffle filter immersion tank degreasing, gas burner descaling, tile backsplash scrub & countertop buffing.',
    rates: {
      '1bhk': { min: 1499, max: 1899, duration: '2 – 3 Hours', crew: '2 Kitchen Specialists' },
      '2bhk': { min: 1799, max: 2299, duration: '2.5 – 3.5 Hours', crew: '2 Kitchen Specialists' },
      '3bhk': { min: 2199, max: 2799, duration: '3 – 4 Hours', crew: '2 – 3 Kitchen Specialists' },
      '4bhk': { min: 2699, max: 3399, duration: '3.5 – 4.5 Hours', crew: '3 Kitchen Specialists' },
      'villa': { min: 3299, max: 4299, duration: '4 – 5 Hours', crew: '3 – 4 Kitchen Specialists' },
    },
    keyEquip: '140°C High-Pressure Steam Wand + Diversey Suma D9 Degreaser',
  },
  'bathroom-scrub': {
    name: 'Bathroom Intense Descaling',
    icon: 'shower',
    badge: 'Zero Acid',
    summary: 'Hard-water borewell calcium stain removal, shower glass scaling reversal & CP mirror chrome polishing.',
    rates: {
      '1bhk': { min: 799, max: 999, duration: '1.5 – 2 Hours', crew: '1 – 2 Sanitization Pros' },
      '2bhk': { min: 1499, max: 1799, duration: '2.5 – 3 Hours', crew: '2 Sanitization Pros' },
      '3bhk': { min: 1999, max: 2499, duration: '3.5 – 4 Hours', crew: '2 – 3 Sanitization Pros' },
      '4bhk': { min: 2499, max: 3199, duration: '4 – 5 Hours', crew: '3 Sanitization Pros' },
      'villa': { min: 3299, max: 4299, duration: '5 – 6 Hours', crew: '3 – 4 Sanitization Pros' },
    },
    keyEquip: 'Rotary Grout Scrubber + Diversey Taski R1/R9 Non-Corrosive Descaler',
  },
  'sofa-carpet': {
    name: 'Sofa & Fabric Upholstery',
    icon: 'chair',
    badge: 'Deep Injection',
    summary: 'Foam injection to break down sweat salts & food spills, followed by 220 mbar moisture extraction.',
    rates: {
      '1bhk': { min: 1199, max: 1499, duration: '1.5 – 2 Hours', crew: '2 Fabric Specialists' },
      '2bhk': { min: 1899, max: 2299, duration: '2 – 2.5 Hours', crew: '2 Fabric Specialists' },
      '3bhk': { min: 2599, max: 3199, duration: '2.5 – 3 Hours', crew: '2 Fabric Specialists' },
      '4bhk': { min: 3299, max: 3999, duration: '3 – 4 Hours', crew: '2 – 3 Fabric Specialists' },
      'villa': { min: 4499, max: 5499, duration: '4 – 5 Hours', crew: '3 Fabric Specialists' },
    },
    keyEquip: 'Kärcher Puzzi 10/1 Extraction Machine + Taski Tapi Extract Neutral Shampoo',
  },
  'pest-control': {
    name: 'Pest Shield & Mite Extraction',
    icon: 'pest_control',
    badge: '90-Day Warranty',
    summary: 'Bayer Maxforce odorless cockroach gel dots inside cabinets + UV-C vibratory suction on mattresses.',
    rates: {
      '1bhk': { min: 999, max: 1299, duration: '1.5 Hours', crew: '1 Certified Exterminator' },
      '2bhk': { min: 1199, max: 1499, duration: '2 Hours', crew: '1 Certified Exterminator' },
      '3bhk': { min: 1599, max: 1999, duration: '2 – 2.5 Hours', crew: '2 Certified Exterminators' },
      '4bhk': { min: 1999, max: 2499, duration: '2.5 – 3 Hours', crew: '2 Certified Exterminators' },
      'villa': { min: 2699, max: 3499, duration: '3 – 4 Hours', crew: '2 Certified Exterminators' },
    },
    keyEquip: 'Raycop UV-C Anti-Mite Vac + Bayer Maxforce Gel Applicator',
  },
};

const CITIES = [
  { id: 'hyderabad', name: 'Hyderabad' },
  { id: 'vijayawada', name: 'Vijayawada' },
  { id: 'visakhapatnam', name: 'Visakhapatnam' },
  { id: 'guntur', name: 'Guntur' },
  { id: 'rajahmundry', name: 'Rajahmundry' },
  { id: 'kakinada', name: 'Kakinada' },
];

export const QuickPriceEstimator: React.FC<QuickPriceEstimatorProps> = ({
  onOpenBooking,
  onNavigate,
  variant = 'standalone',
}) => {
  const citySelectId = useId();
  const [propertySize, setPropertySize] = useState<PropertySize>('2bhk');
  const [serviceType, setServiceType] = useState<ServiceTypeKey>('home-deep-clean');
  const [furnishing, setFurnishing] = useState<'furnished' | 'unfurnished' | 'vacant'>('furnished');
  const [condition, setCondition] = useState<'standard' | 'deep' | 'renovation'>('standard');
  const [selectedCity, setSelectedCity] = useState<string>('hyderabad');
  const [extraBathrooms, setExtraBathrooms] = useState<number>(0);
  const [extraBalconies, setExtraBalconies] = useState<number>(0);
  const [copiedQuote, setCopiedQuote] = useState<boolean>(false);

  // Current base pricing from configuration
  const currentService = SERVICE_CONFIGS[serviceType];
  const currentSizeData = PROPERTY_SIZES[propertySize];
  const baseRate = currentService.rates[propertySize];

  // Adjust estimate calculation based on condition & extras
  let conditionMultiplierMin = 1.0;
  let conditionMultiplierMax = 1.0;

  if (condition === 'deep') {
    conditionMultiplierMin = 1.05;
    conditionMultiplierMax = 1.12;
  } else if (condition === 'renovation') {
    conditionMultiplierMin = 1.15;
    conditionMultiplierMax = 1.25;
  }

  // Furnishing adjustment
  let furnishingMultiplier = 1.0;
  if (furnishing === 'vacant') {
    furnishingMultiplier = 0.95; // 5% discount for empty homes with easy machine maneuverability
  } else if (furnishing === 'furnished') {
    furnishingMultiplier = 1.0;
  }

  // Additional rooms calculation (only applies to whole-home/bath services)
  const isFullHomeOrBath = serviceType === 'home-deep-clean' || serviceType === 'post-construction';
  const bathExtraCost = isFullHomeOrBath ? extraBathrooms * 450 : 0;
  const balconyExtraCost = isFullHomeOrBath ? extraBalconies * 350 : 0;

  const rawMin = Math.round((baseRate.min * conditionMultiplierMin * furnishingMultiplier + bathExtraCost + balconyExtraCost) / 50) * 50;
  const rawMax = Math.round((baseRate.max * conditionMultiplierMax * furnishingMultiplier + bathExtraCost + balconyExtraCost) / 50) * 50;

  const handleCopyEstimate = () => {
    const textToCopy = `GoKlean4u Quick Price Estimate:
- Property: ${currentSizeData.label} (${currentSizeData.typicalSqft})
- Service: ${currentService.name}
- Rough Price Range: ₹${rawMin.toLocaleString('en-IN')} – ₹${rawMax.toLocaleString('en-IN')}
- Estimated Duration: ${baseRate.duration}
- Crew Deployed: ${baseRate.crew}
- City: ${CITIES.find((c) => c.id === selectedCity)?.name || 'Hyderabad'}
- Condition: ${condition === 'renovation' ? 'Post-Renovation Dust' : condition === 'deep' ? 'Heavy Grime' : 'Standard Maintenance'}
Includes 100% equipment, eco-safe Diversey chemicals & 3-day reclean guarantee.`;

    navigator.clipboard?.writeText(textToCopy);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  const handleWhatsAppQuote = () => {
    const cityName = CITIES.find((c) => c.id === selectedCity)?.name || 'Hyderabad';
    const message = encodeURIComponent(
      `Hello GoKlean4u, I used your Quick Price Estimator for my *${currentSizeData.label}* in *${cityName}*.\n\n` +
      `*Service:* ${currentService.name}\n` +
      `*Estimated Range:* ₹${rawMin.toLocaleString('en-IN')} – ₹${rawMax.toLocaleString('en-IN')}\n` +
      `*Duration:* ${baseRate.duration}\n` +
      `*Furnishing:* ${furnishing}\n\n` +
      `Could you please confirm slot availability for this week?`
    );
    window.open(`https://wa.me/919703721616?text=${message}`, '_blank');
  };

  return (
    <section id="estimator" className={`w-full ${variant === 'standalone' ? 'py-12 bg-white' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">calculate</span>
              <span>Transparent Calculator</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-normal">Real-Time Cost Range</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-dark tracking-tight">
              Quick Price Estimator
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              Calculate an honest, upfront price range for your apartment or villa in seconds. No hidden equipment surcharges or surprise travel fees.
            </p>
          </div>

          {/* City Selection Selector */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-slate-50 border border-slate-200 rounded-lg p-1.5 px-3">
            <span className="material-symbols-outlined text-slate-400 text-[18px]">location_on</span>
            <label htmlFor={citySelectId} className="text-xs font-medium text-slate-500">Hub:</label>
            <select
              id={citySelectId}
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-transparent text-xs font-bold text-navy-dark focus:outline-none cursor-pointer"
            >
              {CITIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <span className="text-[10px] text-emerald-700 bg-emerald-50 font-medium px-1.5 py-0.5 rounded">
              0 Travel Fee
            </span>
          </div>
        </div>

        {/* Estimator Engine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Controls Column (7 Columns) */}
          <div className="lg:col-span-7 bg-[#f8faff] border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col gap-6">
            
            {/* 1. Property Size Selector (BHK) */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">apartment</span>
                  1. Select Property Size (BHK)
                </label>
                <span className="text-xs text-slate-500 font-medium">
                  {currentSizeData.typicalSqft}
                </span>
              </div>

              {/* Segmented BHK Selector */}
              <div className="grid grid-cols-5 gap-2">
                {(Object.keys(PROPERTY_SIZES) as PropertySize[]).map((sizeKey) => {
                  const size = PROPERTY_SIZES[sizeKey];
                  const isSelected = propertySize === sizeKey;
                  return (
                    <button
                      key={sizeKey}
                      type="button"
                      onClick={() => {
                        setPropertySize(sizeKey);
                        // Reset extra counters if scaling down
                        setExtraBathrooms(0);
                        setExtraBalconies(0);
                      }}
                      className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl text-center border transition-all ${
                        isSelected
                          ? 'bg-navy-dark text-white border-navy-dark shadow-sm scale-[1.02]'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-sm font-bold tracking-tight">
                        {size.shortLabel}
                      </span>
                      <span className={`text-[10px] hidden sm:block ${isSelected ? 'text-cyan-200' : 'text-slate-400'}`}>
                        {sizeKey === 'villa' ? '3000+ sqft' : size.typicalSqft.split('–')[0] + 'sqft'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Layout Hint */}
              <div className="mt-2 text-xs text-slate-500 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-primary">info</span>
                <span>Typical layout: {currentSizeData.description}</span>
              </div>
            </div>

            {/* 2. Service Type Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 mb-2.5">
                <span className="material-symbols-outlined text-[16px] text-primary">cleaning_services</span>
                2. Select Service Type
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(Object.keys(SERVICE_CONFIGS) as ServiceTypeKey[]).map((key) => {
                  const svc = SERVICE_CONFIGS[key];
                  const isSelected = serviceType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setServiceType(key)}
                      className={`text-left p-3 rounded-xl border transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-teal-50/70 border-primary text-navy-dark ring-1 ring-primary/40 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[20px]">{svc.icon}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold truncate block">{svc.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {svc.summary}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Refinement Toggles (Condition & Furnishing) */}
            <div className="pt-2 border-t border-slate-200 flex flex-col gap-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Property Condition */}
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1.5">
                    Property Condition
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1 rounded-lg">
                    {[
                      { id: 'standard', label: 'Regular' },
                      { id: 'deep', label: 'Heavy Grime' },
                      { id: 'renovation', label: 'Post-Paint' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setCondition(opt.id as any)}
                        className={`py-1 px-2 text-xs font-medium rounded-md transition-colors ${
                          condition === opt.id
                            ? 'bg-white text-navy-dark shadow-xs font-bold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Furnishing Status */}
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1.5">
                    Furnishing Status
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 bg-slate-100 p-1 rounded-lg">
                    {[
                      { id: 'furnished', label: 'Furnished / Occupied' },
                      { id: 'vacant', label: 'Vacant / Move-in' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFurnishing(opt.id as any)}
                        className={`py-1 px-2 text-xs font-medium rounded-md transition-colors ${
                          furnishing === opt.id
                            ? 'bg-white text-navy-dark shadow-xs font-bold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Extras (Bathrooms / Balconies) for full home deep clean */}
              {isFullHomeOrBath && (
                <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200/80">
                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-800">Add Extra Areas:</span>
                    <span className="ml-1 text-slate-500">(Beyond standard {currentSizeData.defaultBaths} baths & {currentSizeData.defaultBalconies} balcony)</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs">
                    {/* Extra Baths */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-600">+ Baths:</span>
                      <button
                        type="button"
                        onClick={() => setExtraBathrooms((b) => Math.max(0, b - 1))}
                        className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="w-4 text-center font-bold text-navy-dark">{extraBathrooms}</span>
                      <button
                        type="button"
                        onClick={() => setExtraBathrooms((b) => Math.min(3, b + 1))}
                        className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>

                    {/* Extra Balconies */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-600">+ Balconies:</span>
                      <button
                        type="button"
                        onClick={() => setExtraBalconies((b) => Math.max(0, b - 1))}
                        className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="w-4 text-center font-bold text-navy-dark">{extraBalconies}</span>
                      <button
                        type="button"
                        onClick={() => setExtraBalconies((b) => Math.min(3, b + 1))}
                        className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Output / Estimate Summary Column (5 Columns) */}
          <div className="lg:col-span-5 bg-navy-dark text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden border border-navy-dark/90">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header inside result card */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-wider text-cyan-300 font-semibold block">
                    Estimated Price Range
                  </span>
                  <span className="text-xs text-slate-300">
                    {currentSizeData.label} · {currentService.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full font-medium inline-block">
                    ✓ Price Lock Guarantee
                  </span>
                </div>
              </div>

              {/* The Big Price Range Display */}
              <div className="py-6 text-center">
                <div className="text-xs text-slate-300 mb-1">
                  Rough Range (All-inclusive of GST, Equipment & Consumables)
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
                  <span className="text-primary-light">₹{rawMin.toLocaleString('en-IN')}</span>
                  <span className="text-slate-400 text-2xl font-light">–</span>
                  <span className="text-primary-light">₹{rawMax.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-xs text-emerald-400 mt-2 font-medium flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Zero hidden surcharges on site · 3-Day Free Reclean Warranty</span>
                </div>
              </div>

              {/* Service Execution Specifications */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col gap-2.5 text-xs text-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-cyan-300">schedule</span>
                    Estimated Duration:
                  </span>
                  <span className="font-semibold text-white">{baseRate.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-cyan-300">group</span>
                    Crew Deployment:
                  </span>
                  <span className="font-semibold text-white">{baseRate.crew}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-cyan-300">pin_drop</span>
                    Service Hub:
                  </span>
                  <span className="font-semibold text-white">
                    {CITIES.find((c) => c.id === selectedCity)?.name || 'Hyderabad'} (Depot Direct)
                  </span>
                </div>

                <div className="pt-2 border-t border-white/10 text-[11px] text-slate-300 leading-relaxed">
                  <span className="text-primary-light font-medium">Included Tech: </span>
                  {currentService.keyEquip}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-2.5">
              {/* Primary Action: Book with this estimate */}
              <button
                type="button"
                onClick={() => onOpenBooking(serviceType, selectedCity)}
                className="w-full bg-primary hover:bg-primary-hover active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>Book Service at Guaranteed Price</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              {/* Secondary Utility Actions (WhatsApp & Copy) */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-medium py-2.5 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>WhatsApp Quote</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyEstimate}
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/15 font-medium py-2.5 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copiedQuote ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedQuote ? 'Copied!' : 'Copy Summary'}</span>
                </button>
              </div>

              {/* Learn More link */}
              {onNavigate && (
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('deep-cleaning');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[11px] text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>View 50-point checklist &amp; chemical data sheet</span>
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
