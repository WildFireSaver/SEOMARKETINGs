export type GuideSection = { heading: string; body: string[] }

export type Guide = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  category: string
  datePublished: string
  dateModified?: string
  readMinutes: number
  image: string
  excerpt: string
  intro: string[]
  keyTakeaways: string[]
  sections: GuideSection[]
  faqs: { question: string; answer: string }[]
  relatedServiceSlugs: string[]
}

export const GUIDES: Guide[] = [
  {
    slug: "paver-patio-cost-california",
    title: "How Much Does a Paver Patio Cost in California? (2026 Guide)",
    metaTitle: "How Much Does a Paver Patio Cost in California? 2026 Price Guide",
    metaDescription:
      "A detailed 2026 breakdown of paver patio costs in California: price per square foot, material comparisons, what drives cost, and how to budget. From licensed SoCal hardscapers.",
    keywords: [
      "paver patio cost california",
      "cost of pavers per square foot",
      "patio installation cost",
      "paver vs concrete cost",
      "backyard patio budget",
    ],
    category: "Cost Guides",
    datePublished: "2026-01-15",
    dateModified: "2026-08-01",
    readMinutes: 8,
    image: "/projects/paver-patio.png",
    excerpt:
      "What a paver patio really costs in California in 2026, broken down by material, size, and the site factors that move your quote up or down.",
    intro: [
      "A paver patio is one of the highest-value outdoor upgrades a California homeowner can make, but quotes can vary wildly. Understanding what drives the price helps you budget realistically and spot a quote that's too good to be true.",
      "This guide breaks down real 2026 pricing for Southern California, from the per-square-foot range to the specific factors that push a project toward the high or low end.",
    ],
    keyTakeaways: [
      "Most California paver patios run $15 to $40 per square foot installed.",
      "Material choice is the single biggest cost lever, concrete pavers are cheapest, natural stone the priciest.",
      "The base and drainage work you can't see often decides whether a patio lasts 5 years or 30.",
      "A 400 sq ft patio commonly lands between $6,000 and $16,000 depending on choices.",
    ],
    sections: [
      {
        heading: "Average paver patio cost per square foot",
        body: [
          "In Southern California, professionally installed paver patios typically cost between $15 and $40 per square foot in 2026. The low end reflects standard concrete pavers on a straightforward, easy-access site. The high end reflects natural stone, intricate patterns, or sites that need significant base and drainage work.",
          "As a rough benchmark, a 400-square-foot patio, a common size for a usable entertaining space, usually falls between $6,000 and $16,000 installed.",
        ],
      },
      {
        heading: "Cost by paver material",
        body: [
          "Concrete pavers are the most popular and affordable option, offering huge variety in color and shape. Natural stone like travertine and flagstone costs more but delivers a premium, one-of-a-kind look and stays cooler underfoot. Porcelain pavers sit in the middle to upper range and resist stains and fading extremely well.",
          "Material typically accounts for 30 to 50 percent of the total, so upgrading from concrete to natural stone can meaningfully change your budget.",
        ],
      },
      {
        heading: "What drives the rest of the cost",
        body: [
          "Labor and site prep make up the balance. Excavation depth, the amount of base material, drainage requirements, and access to the work area all matter. A backyard that a machine can reach costs less than one where every wheelbarrow is hand-hauled through a narrow side gate.",
          "Patterns and borders add labor through extra cuts. And if your site needs grading, a retaining wall, or drainage to manage runoff, those are separate line items that can add thousands.",
        ],
      },
      {
        heading: "Why the base matters more than the pavers",
        body: [
          "The most important part of a paver patio is the part you never see. A properly compacted aggregate base and bedding layer is what keeps pavers from sinking, heaving, and separating over time. Cutting corners here is how a cheap patio fails within a few years.",
          "When comparing quotes, ask exactly how deep the base will be and how it's compacted. A slightly higher quote with a proper engineered base is almost always the better long-term value.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a paver patio cheaper than concrete?",
        answer:
          "Poured concrete is usually cheaper up front. Pavers cost more initially but are individually replaceable and don't crack the way concrete does, so they often cost less over their lifetime.",
      },
      {
        question: "How much does a 500 sq ft paver patio cost in California?",
        answer:
          "A 500-square-foot patio typically runs about $7,500 to $20,000 installed, depending on material, pattern, and site conditions.",
      },
      {
        question: "Does a paver patio add home value?",
        answer:
          "Yes. Quality hardscaping consistently ranks among the higher-return outdoor improvements and boosts a home's usable living space and curb appeal.",
      },
    ],
    relatedServiceSlugs: ["paver-patios", "drainage-grading", "retaining-walls"],
  },
  {
    slug: "artificial-turf-vs-natural-grass",
    title: "Artificial Turf vs. Natural Grass in Southern California",
    metaTitle: "Artificial Turf vs. Natural Grass in Southern California: Full Comparison",
    metaDescription:
      "Artificial turf vs. real grass for SoCal yards: cost, water savings, maintenance, heat, pets, and lifespan compared, plus when each makes sense. From licensed installers.",
    keywords: [
      "artificial turf vs grass",
      "synthetic grass pros and cons",
      "turf water savings california",
      "fake grass cost vs real",
      "lawn replacement southern california",
    ],
    category: "Comparisons",
    datePublished: "2026-02-10",
    dateModified: "2026-08-01",
    readMinutes: 7,
    image: "/projects/artificial-turf.png",
    excerpt:
      "A clear-eyed comparison of artificial turf and natural grass for Southern California yards, cost, water, maintenance, heat, and lifespan.",
    intro: [
      "With ongoing water restrictions and rising costs, more Southern California homeowners are weighing artificial turf against a traditional lawn. Both have real advantages, and the right choice depends on how you use your yard, your budget horizon, and your priorities.",
      "This guide compares the two honestly across the factors that matter most in the SoCal climate.",
    ],
    keyTakeaways: [
      "Turf costs more up front but eliminates watering, mowing, and fertilizing.",
      "A typical SoCal lawn uses thousands of gallons of water per year that turf saves.",
      "Turf can run warm in peak summer sun; quality products and infill reduce this.",
      "Natural grass is cooler and cheaper to install but demands ongoing water and labor.",
    ],
    sections: [
      {
        heading: "Upfront cost",
        body: [
          "Natural grass is far cheaper to install, sod or seed plus soil prep is a fraction of turf's cost. Artificial turf runs roughly $8 to $20 per square foot installed in Southern California because of the base work, materials, and labor involved.",
          "The math changes over time: turf has almost no recurring cost, while a lawn keeps costing you in water, mowing, and inputs every month.",
        ],
      },
      {
        heading: "Water and maintenance",
        body: [
          "This is where turf shines in SoCal. A natural lawn can consume thousands of gallons of water per year and needs weekly mowing, periodic fertilizing, and reseeding. Turf needs none of that, just occasional rinsing and brushing.",
          "For homeowners facing watering restrictions or high water bills, the elimination of irrigation is often the deciding factor, and many water districts offer rebates for making the switch.",
        ],
      },
      {
        heading: "Heat, pets, and feel",
        body: [
          "Natural grass stays cooler in direct sun and feels soft underfoot. Artificial turf can heat up during peak summer afternoons, though heat-resistant products, lighter infills, and a quick rinse mitigate this. Modern turf feels remarkably realistic.",
          "For pet owners, draining pet turf with antimicrobial infill is easy to clean and stays green regardless of pet traffic, an area where real lawns often struggle.",
        ],
      },
      {
        heading: "Which should you choose?",
        body: [
          "Choose turf if you want to eliminate water use and maintenance, have heavy foot or pet traffic, or want a lawn that looks perfect year-round. Choose natural grass if you prioritize the coolest, softest surface, a lower upfront cost, and don't mind ongoing water and care.",
          "Many SoCal homeowners land on a hybrid: turf in high-use or hard-to-water areas and drought-tolerant planting elsewhere.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does artificial turf save money long term?",
        answer:
          "For most SoCal homeowners, yes. The higher install cost is offset over time by eliminating water, mowing, and fertilizing, and turf can qualify for water-district rebates.",
      },
      {
        question: "How long does artificial turf last?",
        answer:
          "Quality turf installed on a proper base typically lasts 15 to 20 years, making its lifetime cost competitive with maintaining a natural lawn.",
      },
      {
        question: "Is turf bad for the environment?",
        answer:
          "It's a trade-off. Turf saves large amounts of water and eliminates fertilizer and mower emissions, but it isn't a living habitat. Pairing turf with drought-tolerant planting balances both concerns.",
      },
    ],
    relatedServiceSlugs: ["artificial-turf", "landscape-design-planting"],
  },
  {
    slug: "retaining-wall-cost-guide",
    title: "Retaining Wall Cost Guide for Southern California",
    metaTitle: "Retaining Wall Cost Guide (2026) for Southern California Homeowners",
    metaDescription:
      "How much a retaining wall costs in Southern California by material and height, when you need engineering and permits, and what drives the price. From licensed crews.",
    keywords: [
      "retaining wall cost",
      "retaining wall price per foot",
      "block wall cost california",
      "when do you need a permit retaining wall",
      "hillside retaining wall",
    ],
    category: "Cost Guides",
    datePublished: "2026-03-05",
    dateModified: "2026-08-01",
    readMinutes: 7,
    image: "/projects/retaining-wall.png",
    excerpt:
      "What retaining walls cost in Southern California by material and height, plus when engineering and permits come into play.",
    intro: [
      "Retaining walls are among the most valuable, and most misunderstood, hardscape projects for Southern California's hillside and sloped lots. Cost depends heavily on height, material, and the drainage and engineering the site requires.",
      "This guide explains what actually drives retaining wall pricing so you can budget with confidence.",
    ],
    keyTakeaways: [
      "Expect roughly $40 to $120 per square foot of wall face in SoCal.",
      "Walls over 3 to 4 feet usually require engineering and a permit.",
      "Drainage is not optional, it's the number one reason walls fail.",
      "Material and height are the biggest cost drivers.",
    ],
    sections: [
      {
        heading: "Cost by wall face square footage",
        body: [
          "Retaining walls are typically priced by the square footage of the wall face (height times length). In Southern California, that runs about $40 to $120 per square foot depending on material and complexity.",
          "A 4-foot-tall, 30-foot-long wall (120 sq ft of face) might range from roughly $5,000 to $14,000+ once engineering, drainage, and finishing are included.",
        ],
      },
      {
        heading: "Cost by material",
        body: [
          "Segmental concrete block is the most cost-effective and versatile choice. Natural stone and stacked stone cost more for the premium look. Poured concrete walls fall in the mid-to-upper range and can be finished with veneer.",
          "Taller walls also need more reinforcement, geogrid, deeper footings, and more drainage, which raises the per-square-foot cost as height increases.",
        ],
      },
      {
        heading: "When you need engineering and permits",
        body: [
          "Most California jurisdictions require a permit and engineered drawings for walls taller than 3 to 4 feet, or any wall retaining a surcharge like a slope, driveway, or structure above it. These requirements exist for safety, an under-built wall can fail catastrophically.",
          "Licensed crews handle the engineering and permitting, which adds cost but is essential for a wall that's safe and legal.",
        ],
      },
      {
        heading: "Why drainage decides everything",
        body: [
          "The number one cause of retaining wall failure is water pressure building behind the wall. A proper wall includes gravel backfill, a perforated drain pipe, and weep holes or outlets to relieve that pressure.",
          "Never accept a retaining wall quote that doesn't specify drainage. It's the difference between a wall that lasts decades and one that bulges or topples after a wet winter.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a retaining wall cost in California?",
        answer:
          "Most Southern California retaining walls cost $40 to $120 per square foot of wall face. Height, material, drainage, and engineering are the main cost drivers.",
      },
      {
        question: "Do I need a permit for a retaining wall?",
        answer:
          "Usually for walls over 3 to 4 feet, or any wall holding back a slope or structure. Requirements vary by city, licensed crews confirm and pull permits as needed.",
      },
      {
        question: "What makes retaining walls fail?",
        answer:
          "Poor or missing drainage. Water builds pressure behind the wall and pushes it over. Proper gravel backfill and drain pipe prevent this.",
      },
    ],
    relatedServiceSlugs: ["retaining-walls", "drainage-grading"],
  },
  {
    slug: "drought-tolerant-landscaping-ideas",
    title: "Drought-Tolerant Landscaping Ideas for Southern California",
    metaTitle: "Drought-Tolerant Landscaping Ideas for Southern California Yards",
    metaDescription:
      "Water-wise landscaping ideas for SoCal: best low-water plants, design layouts, rebates, and how to keep a drought-tolerant yard looking lush. From licensed designers.",
    keywords: [
      "drought tolerant landscaping",
      "low water plants southern california",
      "xeriscaping ideas",
      "water wise garden",
      "california native plants",
    ],
    category: "Design Ideas",
    datePublished: "2026-04-12",
    dateModified: "2026-08-01",
    readMinutes: 8,
    image: "/projects/garden-lighting.png",
    excerpt:
      "Practical, good-looking ways to build a low-water yard in Southern California, plant picks, layouts, and rebate tips.",
    intro: [
      "Drought-tolerant landscaping has moved from a compromise to the preferred look across Southern California. Done well, a water-wise yard is lush, colorful, and low-maintenance, not a field of gravel and cactus.",
      "Here are practical ideas and plant choices for building a beautiful low-water landscape that thrives in the SoCal climate.",
    ],
    keyTakeaways: [
      "Group plants by water needs (hydrozoning) for efficiency and health.",
      "Mix textures and bloom times so the yard looks full year-round.",
      "Mulch and drip irrigation are essential for establishing low-water plants.",
      "Many SoCal water districts offer rebates for lawn conversion.",
    ],
    sections: [
      {
        heading: "Start with the right plants",
        body: [
          "The backbone of a SoCal water-wise yard is a palette of proven performers: salvias, lavender, agaves, aloes, ornamental grasses, rosemary, manzanita, and ceanothus, plus many California natives. These thrive on little water once established and provide color, structure, and habitat.",
          "Mixing evergreen structure plants with seasonal bloomers keeps the yard interesting across the year rather than peaking for a few weeks.",
        ],
      },
      {
        heading: "Design with hydrozoning",
        body: [
          "Group plants with similar water needs together, a technique called hydrozoning. This lets you irrigate efficiently, giving thirstier accent areas a bit more water while the bulk of the yard gets very little.",
          "It also keeps plants healthier, since you're not over- or under-watering species with mismatched needs on the same valve.",
        ],
      },
      {
        heading: "Use mulch, gravel, and hardscape",
        body: [
          "Mulch is your best friend in a drought-tolerant yard: it holds soil moisture, suppresses weeds, and moderates soil temperature. Decomposed granite, gravel, and boulders add texture and pathways while using zero water.",
          "Pairing planting with paver patios, dry creek beds, and stone accents creates a designed look that reduces the planted (and watered) area.",
        ],
      },
      {
        heading: "Irrigation and rebates",
        body: [
          "Even drought-tolerant plants need efficient water to establish. Drip irrigation on a smart controller delivers water precisely to roots and can dramatically cut usage, and often qualifies for rebates.",
          "Many Southern California water agencies offer turf-replacement and water-efficiency rebates. Check current programs before you start, they can offset a meaningful chunk of the project.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best low-water plant for SoCal?",
        answer:
          "There's no single best, but salvias, agaves, lavender, and ornamental grasses are reliable, attractive performers. California natives like manzanita and ceanothus are excellent too.",
      },
      {
        question: "Does drought-tolerant mean cactus and gravel?",
        answer:
          "Not at all. A well-designed water-wise yard is lush and colorful, using layered planting, textures, and bloom times. Gravel and stone are accents, not the whole look.",
      },
      {
        question: "Can I get a rebate for a drought-tolerant yard?",
        answer:
          "Often yes. Many SoCal water districts offer rebates for replacing lawn with low-water landscaping or installing efficient irrigation. Programs change, so check current offerings.",
      },
    ],
    relatedServiceSlugs: ["landscape-design-planting", "artificial-turf"],
  },
  {
    slug: "outdoor-kitchen-planning-guide",
    title: "Outdoor Kitchen Planning Guide for SoCal Backyards",
    metaTitle: "Outdoor Kitchen Planning Guide for Southern California Backyards",
    metaDescription:
      "How to plan an outdoor kitchen in Southern California: layout, appliances, utilities, materials, permits, and budget. A step-by-step guide from licensed builders.",
    keywords: [
      "outdoor kitchen planning",
      "bbq island design",
      "outdoor kitchen cost",
      "outdoor kitchen layout",
      "backyard kitchen ideas",
    ],
    category: "Design Ideas",
    datePublished: "2026-05-20",
    dateModified: "2026-08-01",
    readMinutes: 7,
    image: "/projects/outdoor-kitchen.png",
    excerpt:
      "Everything to plan before building an outdoor kitchen in SoCal, layout, appliances, utilities, materials, and budget.",
    intro: [
      "An outdoor kitchen is one of the best uses of Southern California's year-round climate, but a great one starts with planning, not appliance shopping. Getting the layout, utilities, and materials right up front saves money and regret.",
      "This guide walks through the decisions to make before construction begins.",
    ],
    keyTakeaways: [
      "Plan the layout around how you cook and host, not just the grill.",
      "Utilities (gas, electrical, water) are the hidden cost, plan them early.",
      "Choose weather- and UV-resistant materials for SoCal sun.",
      "Budgets range from about $8,000 for a basic island to $45,000+ for a full kitchen.",
    ],
    sections: [
      {
        heading: "Nail down the layout first",
        body: [
          "Start with how you actually entertain. Do you want bar seating so guests gather while you cook? A separate prep zone? Room for a pizza oven or smoker? Sketch the work triangle, grill, prep, and storage, before picking finishes.",
          "Consider traffic flow from the house, prevailing wind (so smoke doesn't blow at seating), and shade for summer afternoons.",
        ],
      },
      {
        heading: "Plan utilities early",
        body: [
          "Gas, electrical, and water runs are the part homeowners underestimate. Running a gas line to a fire feature and grill, power for lighting and refrigeration, and water for a sink all require planning and often permits.",
          "Deciding appliance locations early means these lines are stubbed in the right places before masonry goes up, avoiding costly rework.",
        ],
      },
      {
        heading: "Choose the right materials",
        body: [
          "SoCal sun is hard on outdoor surfaces. Granite and porcelain countertops resist UV and heat best; quartz can fade outdoors. For the island structure, masonry with stone or tile veneer holds up far better than lightweight prefab in the long run.",
          "Pick appliances rated for outdoor use, indoor units fail quickly when exposed to the elements.",
        ],
      },
      {
        heading: "Set a realistic budget",
        body: [
          "A basic built-in BBQ island starts around $8,000. Add premium appliances, a bar with refrigeration, a fire feature, and quality counters, and a full outdoor kitchen can reach $45,000 or more.",
          "Utilities, permits, and any surrounding hardscape (the patio it sits on) should be in your budget from the start, not treated as surprises later.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does an outdoor kitchen cost in California?",
        answer:
          "A basic BBQ island starts around $8,000, while a full outdoor kitchen with premium appliances, counters, and a fire feature can reach $45,000 or more.",
      },
      {
        question: "Do outdoor kitchens need permits?",
        answer:
          "The masonry island often doesn't, but gas, electrical, and plumbing work typically require permits and inspection. Licensed crews handle this to code.",
      },
      {
        question: "What countertop is best for an outdoor kitchen?",
        answer:
          "Granite and porcelain handle sun and heat best. Quartz can fade in direct UV. Choose based on your sun exposure and maintenance preference.",
      },
    ],
    relatedServiceSlugs: ["outdoor-kitchens", "paver-patios"],
  },
  {
    slug: "best-time-to-landscape-southern-california",
    title: "The Best Time to Landscape in Southern California",
    metaTitle: "The Best Time to Landscape in Southern California (Season Guide)",
    metaDescription:
      "When to plant, build hardscape, and start landscaping projects in Southern California for the best results and value. A season-by-season guide from licensed pros.",
    keywords: [
      "best time to landscape california",
      "when to plant southern california",
      "landscaping season",
      "when to build a patio",
      "fall planting california",
    ],
    category: "Guides",
    datePublished: "2026-06-18",
    dateModified: "2026-08-01",
    readMinutes: 6,
    image: "/projects/landscape-hero.png",
    excerpt:
      "A season-by-season look at when to plant, build, and start projects in Southern California for the best results.",
    intro: [
      "Southern California's mild climate means you can landscape almost year-round, but timing still matters for plant health, project scheduling, and getting the best value. Knowing the rhythm of the seasons helps you plan smart.",
      "Here's how the SoCal year breaks down for landscaping and hardscaping projects.",
    ],
    keyTakeaways: [
      "Fall is the best time to plant, roots establish before summer heat.",
      "Hardscaping (patios, walls) can be built year-round in SoCal.",
      "Winter rains are the time to fix drainage issues.",
      "Booking in the off-season can mean better scheduling and value.",
    ],
    sections: [
      {
        heading: "Fall: the best time to plant",
        body: [
          "Fall is prime planting season in Southern California. Cooler air and the coming winter rains let new plants establish roots without the stress of summer heat. Plant in fall and you'll have stronger, more drought-ready plants by the following summer.",
          "It's the ideal window for lawn conversions, drought-tolerant planting, and new garden installs.",
        ],
      },
      {
        heading: "Winter: build hardscape and fix drainage",
        body: [
          "SoCal's mild winters are great for hardscape construction, patios, walls, and outdoor kitchens can be built comfortably. Winter is also when drainage problems reveal themselves, so it's the perfect time to diagnose and fix where water pools and runs.",
          "Contractors often have more availability in winter, which can mean better scheduling.",
        ],
      },
      {
        heading: "Spring: everything at once",
        body: [
          "Spring is the busiest landscaping season as everyone wants their yard ready for summer. It's a great time for planting and projects, but demand is high, so book early to secure your preferred crew and timeline.",
          "Spring planting works well with attentive watering to get plants through their first summer.",
        ],
      },
      {
        heading: "Summer: build, but plant carefully",
        body: [
          "Summer is fine for hardscaping and building, but it's the toughest time to plant, new plants need careful, consistent watering to survive the heat. If you plant in summer, focus on heat-tolerant species and diligent establishment watering.",
          "It's also a good time to plan and design so you're ready to plant in fall.",
        ],
      },
    ],
    faqs: [
      {
        question: "When is the best time to plant in Southern California?",
        answer:
          "Fall is ideal. Cooler temperatures and winter rains help plants establish roots before summer heat, producing stronger, more drought-ready landscaping.",
      },
      {
        question: "Can you build a patio in winter in SoCal?",
        answer:
          "Yes. Southern California's mild winters are well suited to hardscape construction, and contractors often have better availability in the off-season.",
      },
      {
        question: "Is it bad to landscape in summer?",
        answer:
          "Hardscaping is fine year-round. Planting in summer is harder because of heat stress, so it requires heat-tolerant plants and careful watering, or wait for fall.",
      },
    ],
    relatedServiceSlugs: ["landscape-design-planting", "paver-patios", "drainage-grading"],
  },
]

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug)
}

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug)
