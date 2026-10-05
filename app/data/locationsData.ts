export interface LocationInfo {
  id: string;
  name: string;
  area: string;
  tagline: string;
  address: string;
  city: string;
  pincode: string;
  landmark: string;
  phone: string;
  alternatePhone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  features: string[];
  metroStation: string;
  parking: string;
  isFlagship: boolean;
  mapEmbedUrl: string;
}

export const CHENNAI_LOCATIONS: LocationInfo[] = [
  {
    id: 'nungambakkam',
    name: 'Melt Café & Roastery Flagship',
    area: 'Nungambakkam',
    tagline: 'The Original Chocolaterie & Espresso Lab',
    address: '18/4, Khader Nawaz Khan Road, Nungambakkam',
    city: 'Chennai',
    pincode: '600006',
    landmark: 'Opposite Taj Coromandel Lane, Next to Cinnamon Boutique',
    phone: '+91 44 4892 1100',
    alternatePhone: '+91 98401 23456',
    email: 'knk@meltcafe.in',
    hours: {
      weekdays: '8:00 AM – 11:30 PM',
      weekends: '8:00 AM – 12:00 Midnight'
    },
    features: [
      'Artisanal Roastery Counter & Live Brew Bar',
      'Valet Parking Available',
      'High-Speed Wi-Fi & Work Booths',
      'Private Tasting Room for Gatherings',
      'Acoustic Live Jazz Evenings (Fri & Sat)'
    ],
    metroStation: 'AG-DMS & Thousand Lights Metro (1.2 km)',
    parking: 'Complimentary Valet at Main Gate',
    isFlagship: true,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Khader+Nawaz+Khan+Road+Nungambakkam+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'besant-nagar',
    name: 'Melt By The Bay',
    area: 'Besant Nagar',
    tagline: 'Sea Breeze Melts, Gelato & Sunset Brews',
    address: '32, 4th Main Road, Elliot\'s Beach Promenade, Besant Nagar',
    city: 'Chennai',
    pincode: '600090',
    landmark: '2 Mins Walk from Besant Nagar Beach Police Booth',
    phone: '+91 44 4892 2200',
    alternatePhone: '+91 98401 78910',
    email: 'bay@meltcafe.in',
    hours: {
      weekdays: '7:30 AM – 11:00 PM',
      weekends: '7:00 AM – 11:30 PM (Early Sunrise Coffee)'
    },
    features: [
      'Breezy Outdoor Alfresco Garden Patio',
      'Pet Friendly Seating with Water Bowls',
      'Artisanal Gelato & Waffle Cart',
      'Cyclist & Morning Runner Friendly Bar',
      'Sunset Coffee Flights'
    ],
    metroStation: 'Kasturba Nagar MRTS (2.4 km)',
    parking: 'Dedicated Beachside Parking Stalls',
    isFlagship: false,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Elliot+Beach+Besant+Nagar+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
];
