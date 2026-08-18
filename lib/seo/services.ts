export type ServiceFaq = { question: string; answer: string }

export type Service = {
  slug: string
  name: string
  shortName: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  h1: string
  tagline: string
  image: string
  intro: string[]
  benefits: { title: string; description: string }[]
  process: { title: string; description: string }[]
  includes: string[]
  costLow: number
  costHigh: number
  costUnit: string
  costFactors: string[]
  faqs: ServiceFaq[]
}

export const SERVICES: Service[] = [
  {
    slug: "paver-patios",
    name: "Paver Patios & Driveways",
    shortName: "Paver Patios",
    metaTitle: "Paver Patio & Driveway Installation in Southern California",
    metaDescription:
      "Custom paver patio and driveway installation across Southern California. Licensed hardscapers, permit-ready builds, and free design estimates. See costs, materials, and process.",
    keywords: [
      "paver patio installation",
      "driveway pavers southern california",
      "patio contractors near me",
      "hardscaping company",
      "interlocking pavers cost",
    ],
    h1: "Paver Patio & Driveway Installation in Southern California",
    tagline: "Durable, permit-ready paver hardscapes engineered for the SoCal climate.",
    image: "/projects/paver-patio.png",
    intro: [
      "A well-built paver patio is the foundation of an outdoor living space that lasts decades. Our vetted Southern California crews design and install interlocking concrete pavers, natural stone, porcelain, and travertine surfaces engineered on a properly compacted base so they resist shifting, cracking, and settling through hot summers and winter rains.",
      "Unlike poured concrete, paver systems flex with the ground, are individually replaceable, and add measurable resale value. Whether you want a compact entertaining patio, a sweeping driveway, or a full backyard hardscape, we match you with a licensed installer who handles design, grading, drainage, and finishing end to end.",
    ],
    benefits: [
      {
        title: "Built on an engineered base",
        description:
          "A compacted aggregate base and bedding sand layer prevent the sinking and heaving that ruin cheaper installs.",
      },
      {
        title: "Individually replaceable",
        description:
          "If a paver is ever stained or damaged, we lift and swap it, no jackhammering a full slab like concrete.",
      },
      {
        title: "Slip-resistant and cool underfoot",
        description:
          "We recommend finishes and colors suited to full-sun SoCal yards so surfaces stay comfortable in July.",
      },
      {
        title: "Adds resale value",
        description:
          "Professional hardscaping consistently ranks among the highest-return outdoor improvements at resale.",
      },
    ],
    process: [
      { title: "Design & measure", description: "We map the layout, elevations, and drainage, then confirm materials and pattern with you." },
      { title: "Excavate & grade", description: "The area is excavated to the correct depth and sloped to move water away from your home." },
      { title: "Base & compaction", description: "Layered road base is compacted in lifts to create a stable, load-rated foundation." },
      { title: "Lay & cut pavers", description: "Pavers are set in your chosen pattern, with precise cuts around edges and features." },
      { title: "Edge, sand & seal", description: "Edge restraints lock the field, polymeric sand fills joints, and optional sealer protects the finish." },
    ],
    includes: [
      "Interlocking concrete pavers",
      "Natural stone & travertine",
      "Porcelain pavers",
      "Driveway-rated systems",
      "Permeable paving",
      "Steps, borders & banding",
      "Grading & drainage integration",
      "Sealing & joint stabilization",
    ],
    costLow: 15,
    costHigh: 40,
    costUnit: "per sq ft installed",
    costFactors: [
      "Paver material (concrete vs. natural stone vs. porcelain)",
      "Base and excavation depth required for the soil",
      "Access to the work area and haul-off distance",
      "Patterns, borders, and custom cuts",
      "Drainage, grading, or retaining work involved",
    ],
    faqs: [
      {
        question: "How long does a paver patio installation take?",
        answer:
          "Most residential paver patios take 3 to 7 working days depending on square footage, base conditions, and design complexity. Larger driveways or projects with drainage work can run longer.",
      },
      {
        question: "Are pavers better than poured concrete?",
        answer:
          "For most homeowners, yes. Pavers flex with ground movement instead of cracking, are individually replaceable, and typically hold resale value better. Concrete can be cheaper up front but is costlier to repair.",
      },
      {
        question: "Do I need a permit for a paver patio in California?",
        answer:
          "Ground-level patios usually don't require a permit, but driveways, work near property lines, drainage changes, or structures often do. Our licensed crews confirm local requirements before starting.",
      },
      {
        question: "How much does a paver patio cost?",
        answer:
          "In Southern California, paver patios typically run $15 to $40 per square foot installed. Natural stone, complex patterns, and heavy base or drainage work push toward the higher end.",
      },
    ],
  },
  {
    slug: "retaining-walls",
    name: "Retaining Walls & Terracing",
    shortName: "Retaining Walls",
    metaTitle: "Retaining Wall Installation in Southern California",
    metaDescription:
      "Engineered retaining walls and hillside terracing across Southern California. Segmental block, natural stone, and poured walls with drainage. Licensed crews and free estimates.",
    keywords: [
      "retaining wall contractors",
      "retaining wall cost california",
      "hillside terracing",
      "block wall installation",
      "erosion control landscaping",
    ],
    h1: "Retaining Wall Installation & Hillside Terracing",
    tagline: "Engineered walls that hold soil, stop erosion, and unlock usable yard.",
    image: "/projects/retaining-wall.png",
    intro: [
      "Southern California's hillsides and sloped lots make retaining walls one of the most valuable hardscape investments a homeowner can make. A properly engineered wall turns an unusable slope into flat, terraced living space while protecting your home from erosion and runoff.",
      "Our licensed crews build segmental block, natural stacked stone, and poured concrete walls with the drainage, geogrid reinforcement, and footing depth each site demands. We handle engineering and permits for taller walls so the structure is safe, code-compliant, and built to outlast the hillside.",
    ],
    benefits: [
      { title: "Erosion & runoff control", description: "Walls plus proper drainage keep soil in place during heavy winter storms." },
      { title: "More usable yard", description: "Terracing a slope creates flat, functional areas for patios, lawns, or gardens." },
      { title: "Engineered for the load", description: "We size footings, reinforcement, and drainage to the actual soil and wall height." },
      { title: "Finish to match your home", description: "Choose from block, stone veneer, or poured finishes that complement your hardscape." },
    ],
    process: [
      { title: "Site & soil assessment", description: "We evaluate slope, soil, and water flow to determine wall type and reinforcement." },
      { title: "Engineering & permits", description: "Walls over code height get engineered drawings and permits handled for you." },
      { title: "Excavate & footing", description: "A compacted base or footing is prepared below grade for stability." },
      { title: "Build & reinforce", description: "Courses are set with geogrid and backfill, and drainage pipe is installed behind the wall." },
      { title: "Cap & finish", description: "Caps, veneer, or finishing are applied and the area is backfilled and graded." },
    ],
    includes: [
      "Segmental block walls",
      "Natural & stacked stone",
      "Poured concrete walls",
      "Hillside terracing",
      "Drainage & weep systems",
      "Geogrid reinforcement",
      "Wall caps & veneer",
      "Integrated steps & seating",
    ],
    costLow: 40,
    costHigh: 120,
    costUnit: "per sq ft of wall face",
    costFactors: [
      "Wall height and whether engineering is required",
      "Material (block vs. natural stone vs. poured)",
      "Drainage and backfill requirements",
      "Soil conditions and slope severity",
      "Site access for equipment and materials",
    ],
    faqs: [
      {
        question: "When does a retaining wall need a permit in California?",
        answer:
          "Most jurisdictions require a permit for walls over 3 to 4 feet, or any wall supporting a surcharge like a driveway or slope. Our crews confirm local rules and pull permits when needed.",
      },
      {
        question: "Why do retaining walls fail?",
        answer:
          "The most common cause is poor drainage. Water pressure builds behind an unreinforced or undrained wall and pushes it over. We install drainage pipe, gravel backfill, and reinforcement to prevent this.",
      },
      {
        question: "How much does a retaining wall cost?",
        answer:
          "Expect roughly $40 to $120 per square foot of wall face in Southern California. Height, engineering, material, and drainage are the biggest cost drivers.",
      },
    ],
  },
  {
    slug: "outdoor-kitchens",
    name: "Outdoor Kitchens & Fire Features",
    shortName: "Outdoor Kitchens",
    metaTitle: "Outdoor Kitchen & Fire Pit Builders in Southern California",
    metaDescription:
      "Custom outdoor kitchens, BBQ islands, fire pits, and fireplaces across Southern California. Licensed crews, gas and utility runs, and free design estimates.",
    keywords: [
      "outdoor kitchen builders",
      "bbq island installation",
      "fire pit contractors",
      "outdoor fireplace",
      "backyard entertaining space",
    ],
    h1: "Outdoor Kitchens, BBQ Islands & Fire Features",
    tagline: "Year-round entertaining spaces built for the Southern California lifestyle.",
    image: "/projects/outdoor-kitchen.png",
    intro: [
      "Southern California's climate makes outdoor cooking and gathering a year-round reality. A custom outdoor kitchen or fire feature turns your backyard into the space where everyone ends up, and it's one of the most requested upgrades our crews build.",
      "From built-in grills and pizza ovens to full bars with refrigeration, gas fire pits, and stone fireplaces, we coordinate the masonry, gas, electrical, and finish work so the whole project is handled by one licensed team.",
    ],
    benefits: [
      { title: "True year-round use", description: "SoCal weather means an outdoor kitchen earns its keep in every season." },
      { title: "Built-in, not bolt-on", description: "Masonry islands with real countertops and appliances outlast portable setups." },
      { title: "One coordinated crew", description: "Masonry, gas, and electrical are sequenced by a single licensed team." },
      { title: "Designed around how you host", description: "Layouts are planned for traffic flow, seating, and prep space." },
    ],
    process: [
      { title: "Design & layout", description: "We plan the island, appliances, seating, and utility runs around your space." },
      { title: "Utilities & permits", description: "Gas, electrical, and water lines are planned and permitted where required." },
      { title: "Build the structure", description: "The masonry island, fire feature, and base are constructed and cured." },
      { title: "Countertops & appliances", description: "Countertops are templated and set, then appliances are installed and connected." },
      { title: "Finish & test", description: "Veneer, lighting, and finishes are completed and every connection is tested." },
    ],
    includes: [
      "Built-in BBQ islands",
      "Pizza ovens & smokers",
      "Bars with refrigeration",
      "Gas fire pits",
      "Stone fireplaces",
      "Countertops (granite, quartz, concrete)",
      "Gas & electrical runs",
      "Overhead & task lighting",
    ],
    costLow: 8000,
    costHigh: 45000,
    costUnit: "per project",
    costFactors: [
      "Size of the island and number of appliances",
      "Countertop material selected",
      "Gas, electrical, and water line runs",
      "Fire feature type and finish",
      "Masonry veneer and lighting",
    ],
    faqs: [
      {
        question: "Do outdoor kitchens need permits?",
        answer:
          "The masonry island itself often doesn't, but gas lines, electrical, and any plumbing typically require permits and inspection. Our licensed crews handle this so it's done to code.",
      },
      {
        question: "What countertop holds up best outdoors?",
        answer:
          "Granite and porcelain resist sun and heat best. Quartz can fade in direct UV, and concrete offers a custom look but needs sealing. We'll recommend based on your exposure.",
      },
      {
        question: "How much does an outdoor kitchen cost?",
        answer:
          "A basic BBQ island can start around $8,000, while a full outdoor kitchen with premium appliances, counters, and a fire feature can reach $45,000 or more.",
      },
    ],
  },
  {
    slug: "pools-water-features",
    name: "Pools & Water Features",
    shortName: "Pools & Water Features",
    metaTitle: "Pool & Water Feature Landscaping in Southern California",
    metaDescription:
      "Pool decking, waterfalls, spas, and water features across Southern California. Licensed crews for paver decks, coping, and drought-tolerant poolside landscaping. Free estimates.",
    keywords: [
      "pool deck pavers",
      "water feature installation",
      "pool landscaping",
      "backyard waterfall",
      "spa and pool contractors",
    ],
    h1: "Pool Decks, Waterfalls & Poolside Landscaping",
    tagline: "Resort-style pool surrounds and water features for SoCal backyards.",
    image: "/projects/pool-waterfeature.png",
    intro: [
      "The area around your pool defines the whole backyard experience. Our crews design and build paver pool decks, stone coping, raised spas, waterfalls, and low-water poolside planting that turn a plain pool into a resort-style retreat.",
      "We focus on slip-resistant, cool-to-the-touch surfaces, proper drainage away from the pool shell, and drought-tolerant landscaping that looks lush without high water bills, all coordinated with your pool equipment and safety requirements.",
    ],
    benefits: [
      { title: "Cool, slip-resistant decks", description: "Paver and stone surfaces stay cooler underfoot and provide safe footing when wet." },
      { title: "Water features that fit", description: "Waterfalls and spillways are scaled and plumbed to complement the pool, not overpower it." },
      { title: "Low-water surrounds", description: "Drought-tolerant planting keeps the poolside lush without heavy irrigation." },
      { title: "Proper deck drainage", description: "Decks are graded and drained to protect the pool shell and your home's foundation." },
    ],
    process: [
      { title: "Design the surround", description: "We plan decking, coping, water features, and planting around your pool and equipment." },
      { title: "Prep & drainage", description: "The deck area is excavated, based, and graded for drainage away from the pool." },
      { title: "Deck & coping", description: "Pavers or stone are set with matching coping around the pool edge." },
      { title: "Water features", description: "Waterfalls, spillways, or spas are built and plumbed into the system." },
      { title: "Plant & finish", description: "Drought-tolerant planting, lighting, and finishing complete the retreat." },
    ],
    includes: [
      "Paver & stone pool decks",
      "Coping & bullnose edges",
      "Raised spas",
      "Waterfalls & spillways",
      "Sheer descents & bubblers",
      "Poolside drought-tolerant planting",
      "Deck drainage",
      "Landscape lighting",
    ],
    costLow: 12000,
    costHigh: 60000,
    costUnit: "per project",
    costFactors: [
      "Deck square footage and material",
      "Coping type and linear footage",
      "Water feature size and plumbing",
      "Drainage and grading needs",
      "Poolside planting and lighting",
    ],
    faqs: [
      {
        question: "What is the best material for a pool deck in SoCal?",
        answer:
          "Concrete pavers, travertine, and porcelain are popular because they stay cooler than plain concrete and provide slip resistance. Travertine in particular is prized for staying comfortable underfoot in full sun.",
      },
      {
        question: "Can you add a waterfall to an existing pool?",
        answer:
          "Often yes. If your pool equipment has capacity, we can add a waterfall, spillway, or spa feature and tie it into the existing circulation system. We assess feasibility during design.",
      },
      {
        question: "How much does pool decking and landscaping cost?",
        answer:
          "Pool surround projects typically range from $12,000 to $60,000+ depending on deck size, materials, water features, and planting.",
      },
    ],
  },
  {
    slug: "artificial-turf",
    name: "Artificial Turf Installation",
    shortName: "Artificial Turf",
    metaTitle: "Artificial Turf Installation in Southern California",
    metaDescription:
      "Professional artificial turf installation across Southern California. Pet-friendly, drought-proof lawns with proper base and drainage. Licensed crews and free estimates.",
    keywords: [
      "artificial turf installation",
      "synthetic grass southern california",
      "pet turf",
      "putting green installation",
      "drought lawn replacement",
    ],
    h1: "Artificial Turf & Synthetic Lawn Installation",
    tagline: "Drought-proof, always-green lawns with no mowing and no water bill.",
    image: "/projects/artificial-turf.png",
    intro: [
      "With water restrictions and rebates pushing Southern California homeowners away from thirsty lawns, professionally installed artificial turf has become one of the smartest yard investments available. Done right, it looks and feels like a lush lawn year-round with none of the watering, mowing, or fertilizing.",
      "The difference between turf that lasts 15+ years and turf that ripples and drains poorly is entirely in the base and installation. Our crews build a compacted, draining base, secure the turf, and infill it correctly, and can add pet-friendly deodorizing layers or a backyard putting green.",
    ],
    benefits: [
      { title: "Zero watering", description: "Eliminate lawn irrigation, a major cut to your summer water bill during restrictions." },
      { title: "May qualify for rebates", description: "Many SoCal water districts offer turf-replacement rebates. We help you check eligibility." },
      { title: "Pet & kid friendly", description: "Draining pet turf with antimicrobial infill stays clean and usable." },
      { title: "Always green", description: "No brown patches, mud, or seasonal dieback, it looks maintained every day." },
    ],
    process: [
      { title: "Remove & excavate", description: "Existing lawn is removed and the area is graded to the correct depth." },
      { title: "Base & compaction", description: "A draining aggregate base is laid and compacted for a stable, level surface." },
      { title: "Shape & secure", description: "Turf is cut to fit, seamed, and secured around the perimeter and seams." },
      { title: "Infill & brush", description: "Infill is spread and brushed in to support the blades and keep the turf upright." },
      { title: "Detail & clean", description: "Edges, transitions, and any pet or drainage details are finished." },
    ],
    includes: [
      "Landscape & pet turf",
      "Putting greens",
      "Play area turf",
      "Draining base systems",
      "Pet deodorizing infill",
      "Paver & border transitions",
      "Old lawn removal",
      "Rebate guidance",
    ],
    costLow: 8,
    costHigh: 20,
    costUnit: "per sq ft installed",
    costFactors: [
      "Turf grade and pile height selected",
      "Base depth and drainage required",
      "Old lawn removal and haul-off",
      "Site access and area shape",
      "Pet infill or putting-green features",
    ],
    faqs: [
      {
        question: "Does artificial turf get too hot in SoCal sun?",
        answer:
          "Turf can warm up in direct summer sun. We can recommend heat-resistant products and infills, and pairing turf with shade or a quick rinse keeps it comfortable.",
      },
      {
        question: "Is there a rebate for replacing my lawn with turf?",
        answer:
          "Many Southern California water agencies offer turf-replacement or 'cash for grass' rebates. Programs change often, so we help you check what's currently available in your district.",
      },
      {
        question: "How much does artificial turf cost installed?",
        answer:
          "Professionally installed turf typically runs $8 to $20 per square foot in Southern California, depending on turf grade, base work, and features like pet infill.",
      },
    ],
  },
  {
    slug: "landscape-design-planting",
    name: "Landscape Design & Planting",
    shortName: "Landscape Design",
    metaTitle: "Landscape Design & Drought-Tolerant Planting in Southern California",
    metaDescription:
      "Full landscape design, drought-tolerant and native planting, and irrigation across Southern California. Licensed designers and crews with free consultations.",
    keywords: [
      "landscape design southern california",
      "drought tolerant landscaping",
      "native plant landscaping",
      "xeriscaping",
      "irrigation installation",
    ],
    h1: "Landscape Design, Planting & Irrigation",
    tagline: "Water-wise, climate-appropriate landscapes designed for the SoCal seasons.",
    image: "/projects/garden-lighting.png",
    intro: [
      "Great landscaping starts with a plan that fits your site, your climate, and how you actually use your yard. Our designers create planting plans built around drought-tolerant and California-native species that thrive in Southern California's dry summers and mild winters, so your yard looks full without demanding constant water.",
      "From full front-yard redesigns to backyard gardens, we handle soil prep, planting, mulch, and efficient drip irrigation, and design for how the space will look as it matures, not just on install day.",
    ],
    benefits: [
      { title: "Designed for SoCal climate", description: "Plant palettes are chosen to thrive with minimal water once established." },
      { title: "Water-wise irrigation", description: "Drip and smart controllers deliver water efficiently and can qualify for rebates." },
      { title: "Curb appeal & value", description: "A cohesive planting design lifts curb appeal and complements your hardscape." },
      { title: "Planned for maturity", description: "We space and select plants for how they'll look in years two and three, not just day one." },
    ],
    process: [
      { title: "Consult & site analysis", description: "We assess sun, soil, drainage, and your goals for the space." },
      { title: "Design & plant plan", description: "You get a planting layout with a climate-appropriate plant palette." },
      { title: "Soil prep & irrigation", description: "Soil is amended and efficient drip irrigation is installed." },
      { title: "Plant & mulch", description: "Plants are installed to plan and beds are mulched to hold moisture." },
      { title: "Walkthrough & care plan", description: "We review a simple care and watering schedule to establish the landscape." },
    ],
    includes: [
      "Full landscape design",
      "Drought-tolerant plant palettes",
      "California-native planting",
      "Xeriscaping",
      "Drip irrigation & smart controllers",
      "Soil prep & amendment",
      "Mulch & ground cover",
      "Front & backyard redesigns",
    ],
    costLow: 5000,
    costHigh: 35000,
    costUnit: "per project",
    costFactors: [
      "Yard size and scope of the redesign",
      "Plant sizes and quantities",
      "Irrigation system and controller",
      "Soil amendment and drainage work",
      "Removal of existing landscaping",
    ],
    faqs: [
      {
        question: "What are the best low-water plants for Southern California?",
        answer:
          "Salvias, agaves, lavender, ornamental grasses, manzanita, ceanothus, and many California natives thrive here with little water once established. We build a palette around your sun and soil.",
      },
      {
        question: "When is the best time to plant in SoCal?",
        answer:
          "Fall and early winter are ideal, giving roots time to establish during the cooler, wetter months before summer heat. We can plant year-round with the right care plan.",
      },
      {
        question: "How much does landscape design and planting cost?",
        answer:
          "Planting-focused projects usually range from $5,000 to $35,000 depending on yard size, plant quantities, and irrigation.",
      },
    ],
  },
  {
    slug: "landscape-lighting",
    name: "Landscape & Outdoor Lighting",
    shortName: "Landscape Lighting",
    metaTitle: "Landscape & Outdoor Lighting Installation in Southern California",
    metaDescription:
      "Low-voltage landscape lighting, path lights, and outdoor lighting design across Southern California. Licensed crews, LED systems, and free estimates.",
    keywords: [
      "landscape lighting installation",
      "outdoor lighting design",
      "low voltage lighting",
      "path lighting",
      "led landscape lights",
    ],
    h1: "Landscape & Outdoor Lighting Installation",
    tagline: "Low-voltage LED lighting that makes your yard usable and stunning after dark.",
    image: "/projects/garden-lighting.png",
    intro: [
      "Landscape lighting is the finishing touch that lets you enjoy your yard after sunset and adds safety, security, and dramatic curb appeal. Our crews design and install low-voltage LED systems that highlight trees, walls, water features, and pathways with the right warmth and beam spread.",
      "Beyond looks, thoughtful lighting extends the hours you can use your outdoor space and improves safety on steps and walkways. We design layered schemes, path, up-lighting, wash, and accent, on efficient LED fixtures and smart timers.",
    ],
    benefits: [
      { title: "Usable after dark", description: "Lighting extends patios and gardens into the evening, year-round in SoCal." },
      { title: "Safety & security", description: "Lit steps, paths, and entries reduce trip hazards and deter intruders." },
      { title: "Energy-efficient LED", description: "Modern low-voltage LED systems sip power and last for years." },
      { title: "Layered design", description: "Path, accent, and wash lighting are combined for depth, not just brightness." },
    ],
    process: [
      { title: "Lighting design", description: "We plan fixture placement and effects around your landscape and architecture." },
      { title: "Transformer & wiring", description: "A low-voltage transformer and buried wiring are installed safely." },
      { title: "Set fixtures", description: "Path, up, and accent lights are positioned and aimed for the intended effect." },
      { title: "Program & test", description: "Timers or smart controls are set and the whole system is tested at night." },
    ],
    includes: [
      "Low-voltage LED systems",
      "Path & step lighting",
      "Tree & wall up-lighting",
      "Water feature lighting",
      "Deck & patio lighting",
      "Smart timers & controls",
      "Transformer & wiring",
      "Fixture repair & additions",
    ],
    costLow: 2500,
    costHigh: 12000,
    costUnit: "per project",
    costFactors: [
      "Number and type of fixtures",
      "Transformer size and wiring runs",
      "Smart control integration",
      "Fixture material and quality",
      "Yard size and layout complexity",
    ],
    faqs: [
      {
        question: "Is low-voltage lighting safe and efficient?",
        answer:
          "Yes. Low-voltage (12V) LED systems are safe to work around, use very little electricity, and modern LED fixtures last many years, making them the standard for residential landscape lighting.",
      },
      {
        question: "Can lighting be added to an existing landscape?",
        answer:
          "Absolutely. Landscape lighting is often added after planting and hardscaping are complete. We can design a system for an established yard with minimal disruption.",
      },
      {
        question: "How much does landscape lighting cost?",
        answer:
          "Most residential landscape lighting projects range from $2,500 to $12,000 depending on the number of fixtures, wiring, and controls.",
      },
    ],
  },
  {
    slug: "drainage-grading",
    name: "Drainage & Grading",
    shortName: "Drainage & Grading",
    metaTitle: "Yard Drainage & Grading Solutions in Southern California",
    metaDescription:
      "French drains, channel drains, and yard grading across Southern California to stop pooling, erosion, and foundation runoff. Licensed crews and free estimates.",
    keywords: [
      "yard drainage solutions",
      "french drain installation",
      "grading contractors",
      "erosion control",
      "standing water backyard",
    ],
    h1: "Yard Drainage & Grading Solutions",
    tagline: "Stop pooling, erosion, and runoff before they damage your home and landscape.",
    image: "/projects/retaining-wall.png",
    intro: [
      "Southern California's rain comes in short, intense bursts, and yards that aren't graded and drained properly end up with standing water, eroded beds, and runoff pushed toward the foundation. Drainage is the unglamorous work that protects everything else you build outdoors.",
      "Our crews diagnose where water is going and install French drains, channel drains, catch basins, dry wells, and corrective grading to route it safely away from your home and hardscape. It's the foundation that keeps patios, walls, and planting from failing prematurely.",
    ],
    benefits: [
      { title: "Protect your foundation", description: "Correct grading moves water away from the house, not toward it." },
      { title: "End standing water", description: "Drains and regrading eliminate the soggy spots that kill lawns and breed mosquitoes." },
      { title: "Stop erosion", description: "Managed runoff keeps soil, mulch, and slopes in place through winter storms." },
      { title: "Protect your hardscape", description: "Good drainage extends the life of patios, walls, and planting beds." },
    ],
    process: [
      { title: "Diagnose water flow", description: "We map where water collects and where it needs to go during a storm." },
      { title: "Plan the system", description: "The right mix of drains, basins, and grading is designed for your site." },
      { title: "Install drains", description: "French drains, channel drains, and catch basins are installed and connected." },
      { title: "Regrade & finish", description: "Surfaces are graded to slope correctly and the area is restored." },
    ],
    includes: [
      "French drains",
      "Channel & trench drains",
      "Catch basins",
      "Dry wells",
      "Downspout redirection",
      "Corrective grading",
      "Erosion control",
      "Permeable solutions",
    ],
    costLow: 1500,
    costHigh: 15000,
    costUnit: "per project",
    costFactors: [
      "Type and length of drainage installed",
      "Amount of grading or excavation",
      "Where water must be routed to",
      "Soil conditions and access",
      "Restoration of surfaces afterward",
    ],
    faqs: [
      {
        question: "Why is water pooling in my yard?",
        answer:
          "Usually it's a grading problem, the surface slopes toward a low spot or the house, or compacted soil that won't absorb water. The fix is corrective grading plus drains to carry water away.",
      },
      {
        question: "What is a French drain?",
        answer:
          "A French drain is a gravel-filled trench with a perforated pipe that collects and redirects subsurface and surface water away from problem areas to a safe outlet.",
      },
      {
        question: "How much does yard drainage cost?",
        answer:
          "Drainage projects range widely, from about $1,500 for a targeted fix to $15,000+ for whole-yard systems with extensive grading.",
      },
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug)
