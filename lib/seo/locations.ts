export type Location = {
  slug: string
  city: string
  county: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  image: string
  intro: string[]
  climate: string
  neighborhoods: string[]
  localNotes: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}

export const LOCATIONS: Location[] = [
  {
    slug: "los-angeles",
    city: "Los Angeles",
    county: "Los Angeles County",
    metaTitle: "Landscaping & Hardscaping in Los Angeles, CA",
    metaDescription:
      "Licensed landscaping and hardscaping crews in Los Angeles. Paver patios, retaining walls, outdoor kitchens, turf, and drought-tolerant design. Free estimates across LA.",
    keywords: [
      "landscaping los angeles",
      "hardscaping los angeles",
      "paver patio los angeles",
      "backyard remodel la",
      "artificial turf los angeles",
    ],
    image: "/california/los-angeles-skyline.png",
    intro: [
      "Los Angeles backyards range from compact hillside lots in the canyons to sprawling flat yards in the Valley, and each calls for a different approach to hardscaping and planting. Our vetted LA crews design outdoor spaces that make the most of the city's year-round outdoor climate.",
      "From drought-tolerant front yards in response to LADWP water rules to entertaining patios and outdoor kitchens on the Westside, we match Los Angeles homeowners with licensed crews who know the local soils, slopes, and permitting.",
    ],
    climate: "Hot, dry summers and mild winters make LA ideal for drought-tolerant landscaping, artificial turf, and year-round outdoor living spaces. Hillside lots often need retaining walls and drainage.",
    neighborhoods: [
      "Sherman Oaks",
      "Studio City",
      "Pasadena-adjacent foothills",
      "West LA & Brentwood",
      "Silver Lake & Los Feliz",
      "San Fernando Valley",
      "Hollywood Hills",
      "South Bay",
    ],
    localNotes: [
      { title: "Water-wise is the norm", description: "LADWP rebates and watering restrictions make turf and drought-tolerant design especially valuable here." },
      { title: "Hillside expertise", description: "Canyon and foothill lots frequently need engineered retaining walls and serious drainage." },
      { title: "Permit know-how", description: "LA permitting varies by area, our licensed crews handle it for walls, drainage, and utilities." },
    ],
    faqs: [
      {
        question: "Do you offer landscaping services across all of Los Angeles?",
        answer:
          "Yes. We match homeowners with licensed crews throughout the LA area, from the San Fernando Valley to the Westside, South Bay, and the foothill communities.",
      },
      {
        question: "Are there rebates for replacing my lawn in Los Angeles?",
        answer:
          "LADWP and regional programs frequently offer turf-replacement and water-efficiency rebates. We help you check what's currently available before you start.",
      },
    ],
  },
  {
    slug: "san-diego",
    city: "San Diego",
    county: "San Diego County",
    metaTitle: "Landscaping & Hardscaping in San Diego, CA",
    metaDescription:
      "Licensed landscaping and hardscaping crews in San Diego. Paver patios, retaining walls, outdoor kitchens, turf, and coastal drought-tolerant design. Free estimates.",
    keywords: [
      "landscaping san diego",
      "hardscaping san diego",
      "paver patio san diego",
      "artificial turf san diego",
      "backyard design san diego",
    ],
    image: "/california/san-diego-homes.png",
    intro: [
      "San Diego's near-perfect climate makes outdoor living a year-round priority, and its coastal-to-inland range means everything from salt-tolerant planting near the coast to full sun designs inland. Our San Diego crews build hardscapes and landscapes tuned to each microclimate.",
      "Whether you're in a coastal community dealing with wind and salt air or an inland neighborhood with hot summers, we match you with licensed crews experienced in San Diego soils, slopes, and water-wise design.",
    ],
    climate: "A mild, dry Mediterranean climate makes San Diego ideal for outdoor kitchens, pools, and low-water landscaping. Coastal areas need salt- and wind-tolerant plants; inland areas run hotter.",
    neighborhoods: [
      "La Jolla",
      "Encinitas & North County coastal",
      "Carmel Valley",
      "Chula Vista",
      "Poway",
      "Escondido",
      "Point Loma",
      "El Cajon",
    ],
    localNotes: [
      { title: "Coastal vs. inland design", description: "Coastal yards need salt-tolerant planting; inland yards benefit from shade and heat-smart hardscape." },
      { title: "Outdoor living all year", description: "The climate justifies investment in outdoor kitchens, fire features, and pool surrounds." },
      { title: "Water-conscious planting", description: "Drought-tolerant and native designs perform beautifully and conserve water countywide." },
    ],
    faqs: [
      {
        question: "Do you serve both coastal and inland San Diego?",
        answer:
          "Yes. We match homeowners with licensed crews from the coast through North County and inland communities like Poway, Escondido, and El Cajon.",
      },
      {
        question: "What plants work best near the San Diego coast?",
        answer:
          "Salt- and wind-tolerant species like succulents, coastal natives, and ornamental grasses do well near the water. We build the palette around your exact exposure.",
      },
    ],
  },
  {
    slug: "long-beach",
    city: "Long Beach",
    county: "Los Angeles County",
    metaTitle: "Landscaping & Hardscaping in Long Beach, CA",
    metaDescription:
      "Licensed landscaping and hardscaping crews in Long Beach. Paver patios, outdoor kitchens, turf, retaining walls, and coastal drought-tolerant design. Free estimates.",
    keywords: [
      "landscaping long beach",
      "hardscaping long beach",
      "paver patio long beach",
      "artificial turf long beach",
      "backyard remodel long beach",
    ],
    image: "/california/los-angeles-skyline.png",
    intro: [
      "Long Beach blends coastal breezes with classic Southern California lots, and its established neighborhoods often feature smaller, well-defined yards that reward smart hardscape design. Our Long Beach crews maximize compact spaces with patios, turf, and low-water planting.",
      "From historic districts to waterfront homes, we match Long Beach homeowners with licensed crews who understand coastal conditions and the character of the city's neighborhoods.",
    ],
    climate: "Coastal Long Beach enjoys mild temperatures and sea breezes year-round, favoring salt-tolerant planting, compact paver patios, and low-water landscaping.",
    neighborhoods: [
      "Belmont Shore",
      "Naples",
      "Bixby Knolls",
      "Los Altos",
      "California Heights",
      "Alamitos Beach",
      "East Long Beach",
      "Bluff Park",
    ],
    localNotes: [
      { title: "Small-lot specialists", description: "Many Long Beach yards are compact, we design layouts that feel bigger and work harder." },
      { title: "Coastal-ready materials", description: "We recommend finishes and plants that hold up to salt air and sea breeze." },
      { title: "Neighborhood character", description: "Designs respect the historic and coastal character of Long Beach districts." },
    ],
    faqs: [
      {
        question: "Can you design for small Long Beach backyards?",
        answer:
          "Absolutely. Compact yards are a specialty, smart layouts, multi-use hardscape, and the right planting make small Long Beach lots feel open and functional.",
      },
      {
        question: "Do coastal conditions affect material choices in Long Beach?",
        answer:
          "Yes. Salt air favors certain pavers, sealers, and salt-tolerant plants. Our crews choose materials suited to Long Beach's coastal environment.",
      },
    ],
  },
  {
    slug: "riverside",
    city: "Riverside",
    county: "Riverside County",
    metaTitle: "Landscaping & Hardscaping in Riverside, CA",
    metaDescription:
      "Licensed landscaping and hardscaping crews in Riverside. Paver patios, retaining walls, outdoor kitchens, turf, and heat-smart drought-tolerant design. Free estimates.",
    keywords: [
      "landscaping riverside ca",
      "hardscaping riverside",
      "paver patio riverside",
      "artificial turf riverside",
      "backyard design riverside",
    ],
    image: "/california/san-francisco-houses.png",
    intro: [
      "Riverside's hot inland summers make heat-smart landscaping and shade-focused hardscape design essential. Our Riverside crews build outdoor spaces that stay usable in the heat, shade structures, cool decking, and drought-tolerant planting that thrives in the Inland Empire.",
      "With larger lots common in the area, Riverside homeowners often invest in full backyard transformations. We match you with licensed crews who understand the region's heat, soils, and water needs.",
    ],
    climate: "Riverside sees hot, dry summers and cool winters. Heat-tolerant plants, shade structures, cool paver surfaces, and efficient irrigation are key to comfortable inland yards.",
    neighborhoods: [
      "Canyon Crest",
      "Wood Streets",
      "Orangecrest",
      "Victoria",
      "Mission Grove",
      "Hawarden Hills",
      "La Sierra",
      "Downtown Riverside",
    ],
    localNotes: [
      { title: "Heat-smart design", description: "Shade structures, cooler decking, and heat-tolerant plants keep inland yards usable in summer." },
      { title: "Room to build", description: "Larger Inland Empire lots suit full transformations with pools, kitchens, and lawns." },
      { title: "Efficient irrigation", description: "Smart drip systems keep drought-tolerant planting thriving through hot months." },
    ],
    faqs: [
      {
        question: "What landscaping handles Riverside's heat best?",
        answer:
          "Heat- and drought-tolerant plants, shade structures like pergolas, and cooler paver or stone surfaces make inland yards comfortable. Efficient drip irrigation is essential.",
      },
      {
        question: "Do you handle large backyard projects in Riverside?",
        answer:
          "Yes. Riverside's larger lots are well suited to full transformations, and we match homeowners with licensed crews for multi-element projects.",
      },
    ],
  },
  {
    slug: "anaheim",
    city: "Anaheim",
    county: "Orange County",
    metaTitle: "Landscaping & Hardscaping in Anaheim, CA",
    metaDescription:
      "Licensed landscaping and hardscaping crews in Anaheim. Paver patios, outdoor kitchens, retaining walls, turf, and drought-tolerant design. Free estimates in Orange County.",
    keywords: [
      "landscaping anaheim",
      "hardscaping anaheim",
      "paver patio anaheim",
      "artificial turf anaheim",
      "backyard remodel orange county",
    ],
    image: "/california/san-diego-homes.png",
    intro: [
      "Anaheim's Orange County setting combines warm, sunny weather with a mix of established and newer neighborhoods. Our Anaheim crews build entertaining-focused backyards, patios, outdoor kitchens, and turf, that take full advantage of the OC climate.",
      "From the hills to the flatlands, we match Anaheim homeowners with licensed crews experienced in Orange County soils, HOA requirements, and water-wise design.",
    ],
    climate: "Warm, sunny, and dry most of the year, Anaheim is ideal for outdoor kitchens, turf, pools, and drought-tolerant landscaping with efficient irrigation.",
    neighborhoods: [
      "Anaheim Hills",
      "Platinum Triangle",
      "West Anaheim",
      "The Colony historic district",
      "Anaheim Resort area",
      "East Anaheim",
      "Yorba Linda-adjacent",
      "Downtown Anaheim",
    ],
    localNotes: [
      { title: "HOA-aware design", description: "Many OC communities have HOA rules, we design to meet guidelines and keep approvals smooth." },
      { title: "Entertaining focus", description: "The climate rewards outdoor kitchens, fire features, and pool surrounds." },
      { title: "Hillside options", description: "Anaheim Hills lots may need retaining walls and drainage, which our crews handle." },
    ],
    faqs: [
      {
        question: "Do you work with HOA requirements in Anaheim?",
        answer:
          "Yes. Many Orange County communities have HOA design rules. Our crews design projects to meet guidelines and can help with the approval documentation.",
      },
      {
        question: "What's popular for Anaheim backyards?",
        answer:
          "Outdoor kitchens, paver patios, pool surrounds, and drought-tolerant planting are especially popular given the warm, sunny OC climate.",
      },
    ],
  },
  {
    slug: "irvine",
    city: "Irvine",
    county: "Orange County",
    metaTitle: "Landscaping & Hardscaping in Irvine, CA",
    metaDescription:
      "Licensed landscaping and hardscaping crews in Irvine. Paver patios, outdoor kitchens, turf, and clean modern drought-tolerant design. Free estimates in Orange County.",
    keywords: [
      "landscaping irvine",
      "hardscaping irvine",
      "paver patio irvine",
      "artificial turf irvine",
      "modern backyard design irvine",
    ],
    image: "/california/san-diego-homes.png",
    intro: [
      "Irvine's master-planned communities favor clean, modern, and low-maintenance outdoor design, and its HOAs often have specific standards. Our Irvine crews specialize in polished, water-wise backyards that fit the city's contemporary aesthetic and community guidelines.",
      "From efficient turf lawns to sleek paver patios and modern planting, we match Irvine homeowners with licensed crews experienced in the area's HOA approvals and design expectations.",
    ],
    climate: "Mild and sunny year-round, Irvine suits low-maintenance modern landscapes, artificial turf, clean paver hardscape, and drought-tolerant planting.",
    neighborhoods: [
      "Woodbridge",
      "Turtle Rock",
      "Northwood",
      "University Park",
      "Great Park Neighborhoods",
      "Quail Hill",
      "Portola Springs",
      "Cypress Village",
    ],
    localNotes: [
      { title: "Modern, low-maintenance", description: "Clean lines, turf, and structured planting fit Irvine's contemporary communities." },
      { title: "HOA approvals", description: "We design to master-planned community standards and help with submittals." },
      { title: "Water-wise by default", description: "Efficient irrigation and drought-tolerant palettes keep yards green and compliant." },
    ],
    faqs: [
      {
        question: "Can you design within Irvine HOA guidelines?",
        answer:
          "Yes. Irvine's master-planned communities have design standards, and our crews build to meet them and assist with the approval process.",
      },
      {
        question: "What style works best in Irvine?",
        answer:
          "Clean, modern, low-maintenance designs, structured paver hardscape, turf, and drought-tolerant planting, fit Irvine's contemporary neighborhoods well.",
      },
    ],
  },
  {
    slug: "santa-ana",
    city: "Santa Ana",
    county: "Orange County",
    metaTitle: "Landscaping & Hardscaping in Santa Ana, CA",
    metaDescription:
      "Licensed landscaping and hardscaping crews in Santa Ana. Paver patios, turf, retaining walls, and drought-tolerant design for OC homes. Free estimates.",
    keywords: [
      "landscaping santa ana",
      "hardscaping santa ana",
      "paver patio santa ana",
      "artificial turf santa ana",
      "backyard design santa ana",
    ],
    image: "/california/los-angeles-skyline.png",
    intro: [
      "Santa Ana's established Orange County neighborhoods feature classic lots that benefit from thoughtful hardscape and water-wise updates. Our Santa Ana crews refresh older yards with durable patios, efficient turf, and drought-tolerant planting.",
      "From historic districts to newer developments, we match Santa Ana homeowners with licensed crews who deliver quality hardscaping and landscaping at fair value.",
    ],
    climate: "Warm and dry most of the year, Santa Ana favors low-water landscaping, durable paver hardscape, and shade-conscious design for summer comfort.",
    neighborhoods: [
      "Floral Park",
      "French Park",
      "Washington Square",
      "West Floral Park",
      "South Coast Metro",
      "Park Santiago",
      "Wilshire Square",
      "Downtown Santa Ana",
    ],
    localNotes: [
      { title: "Refresh established yards", description: "Older Santa Ana lots gain the most from updated hardscape and low-water planting." },
      { title: "Value-focused quality", description: "We match homeowners with crews that deliver durable results at fair value." },
      { title: "Historic district care", description: "Designs respect the character of Santa Ana's historic neighborhoods." },
    ],
    faqs: [
      {
        question: "Do you update older yards in Santa Ana?",
        answer:
          "Yes. Refreshing established Santa Ana yards with new patios, turf, and drought-tolerant planting is one of our most common projects.",
      },
      {
        question: "What lowers water use in a Santa Ana yard?",
        answer:
          "Replacing thirsty lawn with turf or drought-tolerant planting, plus efficient drip irrigation, dramatically cuts outdoor water use in the warm OC climate.",
      },
    ],
  },
  {
    slug: "pasadena",
    city: "Pasadena",
    county: "Los Angeles County",
    metaTitle: "Landscaping & Hardscaping in Pasadena, CA",
    metaDescription:
      "Licensed landscaping and hardscaping crews in Pasadena. Craftsman-appropriate patios, stone walls, drought-tolerant gardens, and turf. Free estimates in the foothills.",
    keywords: [
      "landscaping pasadena",
      "hardscaping pasadena",
      "paver patio pasadena",
      "stone wall pasadena",
      "drought tolerant garden pasadena",
    ],
    image: "/california/san-francisco-houses.png",
    intro: [
      "Pasadena's historic Craftsman and Spanish homes and its foothill setting call for landscaping that honors architectural character while handling slopes and seasonal runoff. Our Pasadena crews build natural stone hardscape, classic gardens, and drought-tolerant designs that fit the city's heritage.",
      "From the foothills to the historic districts, we match Pasadena homeowners with licensed crews experienced in period-appropriate materials, retaining walls, and water-wise planting.",
    ],
    climate: "Foothill Pasadena has hot summers, cool winters, and heavier seasonal rain runoff, favoring stone hardscape, drainage, and drought-tolerant heritage-style gardens.",
    neighborhoods: [
      "Bungalow Heaven",
      "Madison Heights",
      "San Rafael Hills",
      "Linda Vista",
      "Hastings Ranch",
      "Historic Highlands",
      "Orange Heights",
      "Playhouse District",
    ],
    localNotes: [
      { title: "Period-appropriate materials", description: "Natural stone and classic detailing suit Pasadena's Craftsman and Spanish homes." },
      { title: "Foothill drainage", description: "Foothill lots need serious drainage and often retaining walls for seasonal runoff." },
      { title: "Heritage gardens", description: "Drought-tolerant designs can still feel lush and traditional to match the architecture." },
    ],
    faqs: [
      {
        question: "Can landscaping match my historic Pasadena home?",
        answer:
          "Yes. We use period-appropriate materials like natural stone and classic planting schemes so hardscape and gardens complement Craftsman, Spanish, and historic homes.",
      },
      {
        question: "Do Pasadena foothill lots need drainage work?",
        answer:
          "Often yes. Foothill properties can see significant seasonal runoff, so retaining walls and drainage are frequently part of a Pasadena project.",
      },
    ],
  },
]

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug)
}

export const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug)
