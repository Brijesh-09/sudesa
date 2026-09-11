
export type ProjectCategory = 'Residential' | 'Commercial' | 'Office';

export interface Project {
  slug: string;
  number: string;
  name: string;
  category: ProjectCategory;
  location: string;
  image: string;
  gallery: string[];
  intro: string;
  narrative: string;
  approach: string;
  materialPalette: string[];
  details: {
    type: string;
    location: string;
    scope: string;
    status: string;
  };
  //keyFeatures: { label: string; value: string }[];
  closingStatement: string;
}

export const projects: Project[] = [
  {
    slug: 'luxury-residence-mumbai',
    number: '01',
    name: 'Luxury Residence',
    category: 'Residential',
    location: 'Mumbai, India',
    image: '/projects/jogeshwari/IMG_3445.jpg',

    gallery: [
      '/projects/jogeshwari/IMG_3445.jpg',
      '/projects/jogeshwari/IMG_3446.jpg',
      '/projects/jogeshwari/IMG_3447.jpg',
      '/projects/jogeshwari/IMG_3458.jpg',
      '/projects/jogeshwari/IMG_3462.jpg',
      '/projects/jogeshwari/IMG_3471.jpg',
      '/projects/jogeshwari/IMG_3472.jpg',
      '/projects/jogeshwari/IMG_3524.jpg',
      '/projects/jogeshwari/IMG_3539.jpg',
    ],
    intro:
      'A private residence conceived as a quiet study in proportion, light and material restraint — where every surface is intentional and every detail earns its place.',
    narrative:
      'Every element was designed to create a dialogue between form, material and everyday living. The architecture was guided by a desire to let natural light shape the experience of each room, with volumes arranged to flow intuitively from one space to the next.',
    approach:
      'The design direction favours a restrained material palette of warm oak, honed stone and brushed brass, allowing texture and natural light to carry the composition. Furnishings were selected for their quiet presence — sculptural without competing with the architecture.',
    materialPalette: ['Honed Travertine', 'Warm Oak', 'Brushed Brass', 'Linen', 'Smoked Glass'],
    details: {
      type: 'Private Residence',
      location: 'Mumbai, India',
      scope: 'Full Interior Design & Execution',
      status: 'Completed',
    },
    // keyFeatures: [
    //   { label: 'Area', value: '4,200 sq ft' },
    //   { label: 'Rooms', value: 'Living, Dining, 3 Bedrooms, Study' },
    //   { label: 'Ceiling Height', value: '11 ft throughout' },
    //   { label: 'Natural Light', value: 'South-facing, floor-to-ceiling glazing' },
    //   { label: 'Custom Joinery', value: 'Oak wardrobe systems, integrated bar unit' },
    //   { label: 'Smart Home', value: 'Lighting, climate & shading automation' },
    // ],
    closingStatement:
      'A residence that resists trends — designed to feel as considered in twenty years as it does on the first day.',
  },
  {
    slug: 'executive-office-mumbai',
    number: '02',
    name: 'Executive Office',
    category: 'Office',
    location: 'Mumbai, India',
    image: '/projects/kalbedevi-office/IMG_3341.jpg',

    gallery: [
      '/projects/kalbedevi-office/IMG_3341.jpg',
      '/projects/kalbedevi-office/IMG_3342.jpg',
      '/projects/kalbedevi-office/IMG_3343.jpg',
      '/projects/kalbedevi-office/IMG_3344.jpg',
      '/projects/kalbedevi-office/IMG_3359.jpg',
      '/projects/kalbedevi-office/IMG_3361.jpg',
      // '/projects/kalbedevi-office/IMG_3472.jpg',
      // '/projects/kalbedevi-office/IMG_3524.jpg',
      // '/projects/kalbedevi-office/IMG_3539.jpg',
    ],
    intro:
      'A corporate headquarters designed to communicate quiet authority — balancing the demands of a modern workplace with the warmth of a considered interior.',
    narrative:
      'The workspace was planned around the way people actually move and collaborate. Private offices, open workstations and meeting rooms are connected by a clear spatial logic, while material transitions mark the shift between focused and collaborative zones.',
    approach:
      'A palette of dark walnut, blackened steel and soft acoustic panels establishes a focused, professional atmosphere. Lighting was layered to support both screen-based work and in-person collaboration, with controlled daylight integrated throughout.',
    materialPalette: ['Blackened Steel', 'Dark Walnut', 'Acoustic Felt', 'Cast Glass', 'Leather'],
    details: {
      type: ' Executive Office',
      location: 'Mumbai, India',
      scope: 'Interior Design, Fit-out & Procurement',
      status: 'Completed',
    },
    // keyFeatures: [
    //   { label: 'Area', value: '18,000 sq ft' },
    //   { label: 'Workstations', value: '120 desks across 3 floors' },
    //   { label: 'Meeting Rooms', value: '8 rooms, 2 boardrooms, 4 pods' },
    //   { label: 'Acoustic Design', value: 'Felt panel systems, double-glazed partitions' },
    //   { label: 'Lighting', value: 'Task-tunable LED, circadian programming' },
    //   { label: 'Collaboration Zones', value: '2 lounges, 1 town-hall stair' },
    // ],
    closingStatement:
      'An office that performs as precisely as the business it houses — built for focus, built for longevity.',
  },
  {
    slug: 'contemporary-residence-santacruz-west',
    number: '03',
    name: 'Contemporary Residence',
    category: 'Residential',
    location: 'Mumbai, India',
    image: '/projects/santacruze-west/IMG_3043.jpg',

    gallery: [
      '/projects/santacruze-west/IMG_2955.jpg',
      '/projects/santacruze-west/IMG_2956.jpg',
      '/projects/santacruze-west/IMG_3036.jpg',
      '/projects/santacruze-west/IMG_3037.jpg',
      '/projects/santacruze-west/IMG_3038.jpg',
      '/projects/santacruze-west/IMG_3039.jpg',
      '/projects/santacruze-west/IMG_3040.jpg',
      '/projects/santacruze-west/IMG_3041.jpg',
      '/projects/santacruze-west/IMG_3042.jpg',
    ],
    intro:
      'A contemporary family home where clean architectural lines meet the warmth of natural materials — designed for living, not just for looking.',
    narrative:
      'The brief called for a home that felt generous and calm, able to absorb the rhythm of daily family life while remaining composed for entertaining. The plan opens toward the garden, drawing greenery deep into the interior.',
    approach:
      'Natural lime plaster, oak joinery and large-format stone create a tonal, tactile environment. The furniture is low and grounded, with soft textiles introduced to temper the architectural precision.',
    materialPalette: ['Lime Plaster', 'Oak Joinery', 'Travertine', 'Wool', 'Rattan'],
    details: {
      type: 'Family Residence',
      location: 'Mumbai India',
      scope: 'Architecture & Interior Design',
      status: 'Completed',
    },
    // keyFeatures: [
    //   { label: 'Area', value: '3,800 sq ft' },
    //   { label: 'Layout', value: 'Open-plan living, garden-oriented' },
    //   { label: 'Indoor-Outdoor', value: 'Sliding glass walls to terrace' },
    //   { label: 'Materials', value: 'Lime plaster, oak joinery, travertine' },
    //   { label: 'Sustainability', value: 'Passive cooling, rainwater harvesting' },
    //   { label: 'Furniture', value: 'Custom low-profile, rattan accents' },
    // ],
    closingStatement:
      'A home designed around the way a family actually lives — generous, calm and built to endure.',
  },
  {
    slug: 'premium-residence-mumbai',
    number: '04',
    name: 'Premium Commercial Space',
    category: 'Residential',
    location: 'Mumbai, India',
    image: '/projects/borivali-1/IMG_3898.JPG',

    gallery: [
      '/projects/borivali-1/IMG_3898.JPG',
      '/projects/borivali-1/IMG_3899.JPG',
      '/projects/borivali-1/IMG_3901.JPG',
      '/projects/borivali-1/IMG_3902.JPG',
      '/projects/borivali-1/IMG_3905.JPG',
      '/projects/borivali-1/IMG_3908.JPG',
      '/projects/borivali-1/IMG_3934.JPG',
      '/projects/borivali-1/IMG_3935.JPG',
      '/projects/borivali-1/IMG_3965.JPG',
      '/projects/borivali-1/IMG_3967.JPG',
      '/projects/borivali-1/IMG_3968.JPG',
      '/projects/borivali-1/IMG_3970.JPG',
      '/projects/borivali-1/IMG_3971.JPG',
      '/projects/borivali-1/IMG_4062.JPG',
      '/projects/borivali-1/IMG_4064.JPG',
      '/projects/borivali-1/IMG_4065.JPG',
    ],
    intro:
      'A flagship commercial interior built to elevate the brand it houses — where retail experience, material quality and spatial flow are treated as one.',
    narrative:
      'The design treats the commercial floor as a sequence of experiences, guiding visitors through a considered journey from entrance to display. Lighting and material palettes shift subtly to mark each zone.',
    approach:
      'A refined palette of book-matched stone, fluted glass and bronze accents creates a sense of permanence and quality. Custom display elements were designed and detailed in-house to maintain complete control over the finished result.',
    materialPalette: ['Book-matched Marble', 'Fluted Glass', 'Bronze', 'Leather', 'Microcement'],
    details: {
      type: 'Flagship Retail',
      location: 'Mumbai, India',
      scope: 'Concept, Design & Turnkey Execution',
      status: 'Completed',
    },
    // keyFeatures: [
    //   { label: 'Area', value: '6,500 sq ft' },
    //   { label: 'Zones', value: 'Entrance, display, fitting, VIP lounge' },
    //   { label: 'Display', value: 'Custom bronze vitrines, cast-glass shelving' },
    //   { label: 'Lighting', value: 'Track + cove, museum-grade CRI' },
    //   { label: 'Materials', value: 'Book-matched marble, fluted glass, bronze' },
    //   { label: 'Brand Integration', value: 'Wayfinding, signage, packaging' },
    // ],
    closingStatement:
      'A commercial space that performs as a brand asset — refined, durable and unmistakably considered.',
  },
  {
    slug: 'Comfortable-Home-Panvel',
    number: '05',
    name: 'Comfortable Home',
    category: 'Residential',
    location: 'Panvel, India',
    image: '/projects/panvel/panvel-1.jpeg',

    gallery: [
      '/projects/panvel/panvel-2.jpeg',
      '/projects/panvel/panvel-3.jpeg',
      '/projects/panvel/panvel-4.jpeg',
      '/projects/panvel/panvel-5.jpeg',
      '/projects/panvel/panvel-6.jpeg',
    ],
    intro:
      'A flagship commercial interior built to elevate the brand it houses — where retail experience, material quality and spatial flow are treated as one.',
    narrative:
      'The design treats the commercial floor as a sequence of experiences, guiding visitors through a considered journey from entrance to display. Lighting and material palettes shift subtly to mark each zone.',
    approach:
      'A refined palette of book-matched stone, fluted glass and bronze accents creates a sense of permanence and quality. Custom display elements were designed and detailed in-house to maintain complete control over the finished result.',
    materialPalette: ['Book-matched Marble', 'Fluted Glass', 'Bronze', 'Leather', 'Microcement'],
    details: {
      type: 'Flagship Retail',
      location: 'Panvel, India',
      scope: 'Concept, Design & Turnkey Execution',
      status: 'Completed',
    },
    // keyFeatures: [
    //   { label: 'Area', value: '6,500 sq ft' },
    //   { label: 'Zones', value: 'Entrance, display, fitting, VIP lounge' },
    //   { label: 'Display', value: 'Custom bronze vitrines, cast-glass shelving' },
    //   { label: 'Lighting', value: 'Track + cove, museum-grade CRI' },
    //   { label: 'Materials', value: 'Book-matched marble, fluted glass, bronze' },
    //   { label: 'Brand Integration', value: 'Wayfinding, signage, packaging' },
    // ]
    // ,
    closingStatement:
      'A commercial space that performs as a brand asset — refined, durable and unmistakably considered.',
  },
];

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Residential',
  'Office',
  'Commercial',
];

export const services = [
  'Residential Interiors',
  'Commercial Interiors',
  'Office Spaces',
  'Turnkey Solutions',
  'Procurement',
  'Contractor Coordination',
  'On-Site Supervision',
  'Floor Plans',
  '3D Visualizations',
  'Lighting Design',
  'Surface Finishes',
  'Custom Millwork',
  'Textile Curation',
  'Furniture Curation',
  'Art Advisory',
  'E-Design Services',
];

export const serviceImages: Record<string, string> = {
  'Residential Interiors':
    'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'Commercial Interiors':
    'https://images.pexels.com/photos/13068365/pexels-photo-13068365.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'Office Spaces':
    'https://images.pexels.com/photos/7534208/pexels-photo-7534208.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'Turnkey Solutions':
    'https://images.pexels.com/photos/35021550/pexels-photo-35021550.jpeg?auto=compress&cs=tinysrgb&w=1200',
  Procurement:
    'https://images.pexels.com/photos/14615701/pexels-photo-14615701.png?auto=compress&cs=tinysrgb&w=1200',
  'Contractor Coordination':
    'https://images.pexels.com/photos/6568689/pexels-photo-6568689.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'On-Site Supervision':
    'https://images.pexels.com/photos/6615222/pexels-photo-6615222.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'Floor Plans':
    'https://images.pexels.com/photos/9616958/pexels-photo-9616958.jpeg?auto=compress&cs=tinysrgb&w=1200',
  '3D Visualizations':
    'https://images.pexels.com/photos/9618125/pexels-photo-9618125.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'Lighting Design':
    'https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'Surface Finishes':
    'https://images.pexels.com/photos/8122356/pexels-photo-8122356.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'Custom Millwork':
    'https://images.pexels.com/photos/20705886/pexels-photo-20705886.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'Textile Curation':
    'https://images.pexels.com/photos/5598277/pexels-photo-5598277.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'Furniture Curation':
    'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'Art Advisory':
    'https://images.pexels.com/photos/17343570/pexels-photo-17343570.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'E-Design Services':
    'https://images.pexels.com/photos/12441654/pexels-photo-12441654.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      "Understanding the client's lifestyle, requirements and aspirations.",
  },
  {
    number: '02',
    title: 'Concept',
    description: 'Developing the overall spatial and visual direction.',
  },
  {
    number: '03',
    title: 'Detail',
    description: 'Refining materials, lighting, furniture and finishes.',
  },
  {
    number: '04',
    title: 'Execute',
    description:
      'Coordinating procurement, contractors and on-site execution.',
  },
  {
    number: '05',
    title: 'Deliver',
    description:
      'Bringing every detail together into a finished, refined space.',
  },
];

export const testimonials = [
  {
    quote:
      'Sudesa transformed our apartment into a space that feels both effortless and deeply personal. The attention to detail was extraordinary.',
    name: 'Private Client',
    project: 'Residential — Mumbai',
  },
  {
    quote:
      'From concept to execution, the process was seamless. Our office now reflects exactly the kind of company we are building.',
    name: 'Managing Director',
    project: 'Corporate Office — Mumbai',
  },
  {
    quote:
      'They understood our brand before we fully understood it ourselves. The retail space has become one of our strongest assets.',
    name: 'Brand Founder',
    project: 'Commercial — Pune',
  },
  {
    quote:
      'What sets Sudesa apart is their ability to listen. Every recommendation they made felt tailored to the way our family actually lives.',
    name: 'Homeowner',
    project: 'Residential — Pune',
  },
  {
    quote:
      'The level of precision in the drawings and material selection gave us complete confidence. The finished space exceeded every expectation.',
    name: 'Operations Director',
    project: 'Office — Mumbai',
  },
  {
    quote:
      'We have worked with several design firms over the years. None matched Sudesas combination of aesthetic vision and project discipline.',
    name: 'Retail Director',
    project: 'Commercial — Mumbai',
  },
];

export const achievements = [
  { label: 'Awards', value: 'Outstanding Interior Design Studio & Turnkey Execution.' },
  { label: 'Recognitions', value: 'Top Interiors India 40 under 40.' },
  //{ label: 'Publications', value: 'Achievement to be added' },
  { label: 'Notable Projects', value: 'Bhoomi Simana (Lalbaug)' },
  { label: 'Years of Experience', value: '7 years of Experience' },
];

export const studioInfo = {
  name: 'Sudesa Interiors',
  founder: 'Punit Mishra',
  founderTitle: 'Founder & Principal Designer',
  phone: '+91 91520 75635',
  email: 'studio@sudesainteriors.com',
  location: 'Mumbai, India',
  whatsapp: '+91 91520 75635',
  instagram: '@sudesainteriors',
  instagramUrl: 'https://www.instagram.com/sudesainteriors?igsi=MWJsMjZuZ2dkM204MA==',
};

export const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Achievements', href: '/#achievements' },
  { label: 'Contact', href: '/contact' },
];

export const heroImage =
  'https://images.pexels.com/photos/28853362/pexels-photo-28853362.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const brandStatementImage =
  'https://images.pexels.com/photos/33529500/pexels-photo-33529500.jpeg?auto=compress&cs=tinysrgb&w=1600';

export const founderPortrait = '/images/punit-mishra-founder.jpeg';

export const journalImages = [
  {
    reelUrl: 'https://www.instagram.com/sudesainteriors/reel/DMVAJJCx04e/',
    preview:
      'https://scontent.cdninstagram.com/v/t51.82787-15/521588295_17943729921009989_4364674055688176685_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=GBDOIlyqbPoQ7kNvwEZPrQv&_nc_oc=AdqgizCDPxK1IAEh0b1q8gAiCiJtwsAIBqMaHGVj7Rrps4OS-bNtYvy-BAxgLoSmLts&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=J0aYQwOgmNzljO5ssDqIVg&_nc_ss=70689&oh=00_AQIUaiyBwXB_E4qpFDZ6_v1h2ZUqFqcuL6zM7z4CjMud_A&oe=6A9DF4CA',
  },
  {
    reelUrl: 'https://www.instagram.com/sudesainteriors/reel/DaN4CqZNOx-/',
    preview:
      'https://scontent.cdninstagram.com/v/t51.71878-15/730015604_3556562511160739_158145320891341641_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=jkKqdavZHi4Q7kNvwFUvHmw&_nc_oc=Adotw5ukGTmiRGPQ15lmNIBqmuSw7bnfPFRH0UHFV9cvixUcD_i4yUzYu8io4Qp2UyY&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=uSS3gRuyHBY9Z4BtAXNatA&_nc_ss=70689&oh=00_AQIxYjwEiqtPsO5tnIO4prBMycXEF7y6dRyJG6bF5tj-1w&oe=6A9E1787',
  },
  {
    reelUrl: 'https://www.instagram.com/sudesainteriors/reel/DUuV0jiCNrl/',
    preview:
      'https://scontent.cdninstagram.com/v/t51.71878-15/632040609_1546815869911313_2030954523206089201_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=hiBDeN2uvOsQ7kNvwFxzTPQ&_nc_oc=Adoz4vCN8KEx9Ue3A4MInFHRb3pXGr4zuuYtFKVwmioAyT3K3WNhnFoZmylzxuN8miI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=bNPAMHH63M1W_ja3Tna1jQ&_nc_ss=70689&oh=00_AQIoqFPZWJqGmFBUcRGgp5QbfBb0kc_jBmqlHgUbFCpEFg&oe=6A9E01DF',
  },
  {
    reelUrl: 'https://www.instagram.com/sudesainteriors/reel/DO1ZPsWjUgs/',
    preview:
      'https://scontent.cdninstagram.com/v/t51.71878-15/552480766_1338585867618801_3035243355326336054_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=vx74gY7gwfIQ7kNvwFnju_H&_nc_oc=AdqlyXSTVBE1B5SR2xzxMxNqyLxJFkiYrFD860XrXUrOO2xznY7Gj1kjfLy3q6hzK4w&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=4pk0YafQzBdNR3a5Uxk-Rg&_nc_ss=70689&oh=00_AQI7iXHQ8yNN-xXRRWT6AzPmF3BuEiVqt4kCEw164wHZyQ&oe=6A9DFB28',
  },
  {
    reelUrl: 'https://www.instagram.com/sudesainteriors/reel/DOnGOURDAXp/',
    preview:
      'https://scontent.cdninstagram.com/v/t51.71878-15/549223340_2676522226022061_7929546600723212855_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=NPhvzjQFiScQ7kNvwGSTSk9&_nc_oc=Adq3t6aMAbgTpFeVEWJy_5RKFXx09qDG5d9Wv2TQ5BvuH3K08hz5HjQOhZE9cksvMJ4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=v58_locIsXDjhAFo76rSUQ&_nc_ss=70689&oh=00_AQLM0GCWrZrIHVamr1CspS77mFaslI8ZjnKClp9WxFjRow&oe=6A9E139F',
  },
  {
    reelUrl: 'https://www.instagram.com/sudesainteriors/reel/DNnjQLkNu5E/',
    preview:
      'https://scontent.cdninstagram.com/v/t51.71878-15/537253697_1962164097869880_9090593431483494886_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=gc-IIjzfzgEQ7kNvwHbGQr8&_nc_oc=AdrvCLw1BUNDqmBL8aHV2nW_ogpg5Q_JcLzhI4eEp3ztMpBsXIZFp1Uo4OmmQb74pH8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=k456iwJ4HjB5w_fz8jx09Q&_nc_ss=70689&oh=00_AQK3cxJo85aKajLIHFdOlb9alSeWu2L_VorYGU-uQIR0JA&oe=6A9E14D9',
  },
];

export const aboutPageImages = {
  hero: 'https://images.pexels.com/photos/33529505/pexels-photo-33529505.jpeg?auto=compress&cs=tinysrgb&w=1920',
  philosophy:
    'https://images.pexels.com/photos/28456461/pexels-photo-28456461.jpeg?auto=compress&cs=tinysrgb&w=1600',
  expertise:
    'https://images.pexels.com/photos/6908371/pexels-photo-6908371.jpeg?auto=compress&cs=tinysrgb&w=1600',
  portrait: '/images/punit-mishra-founder.jpeg',
};
