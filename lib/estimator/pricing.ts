import { SERVICES, type Service } from "@/lib/seo/services"

/**
 * Cost Estimator pricing engine.
 *
 * All numbers live here. Base low/high ranges come from lib/seo/services.ts so
 * the estimator, service pages, and guides never disagree. Tweak tiers,
 * scopes, or regional multipliers below without touching any UI.
 */

export type MeasureKind = "sqft" | "wallface" | "project"
export type Tier = "good" | "better" | "best"
export type Scope = "small" | "medium" | "large"

export type EstimatorProject = {
  /** Matches SERVICES[].slug */
  slug: string
  label: string
  /** Value written to the survey funnel's `projectType` field */
  surveyValue: string
  measure: MeasureKind
  /** For sqft/wallface projects */
  size?: { min: number; max: number; step: number; default: number; unitLabel: string }
  /** Human descriptions for the three scopes of a per-project service */
  scopes?: Record<Scope, string>
  /** Human descriptions for each finish tier */
  tiers: Record<Tier, string>
}

export const PROJECTS: EstimatorProject[] = [
  {
    slug: "paver-patios",
    label: "Paver Patio or Driveway",
    surveyValue: "patio-driveway",
    measure: "sqft",
    size: { min: 100, max: 2500, step: 25, default: 400, unitLabel: "sq ft" },
    tiers: {
      good: "Standard concrete pavers, simple pattern",
      better: "Premium concrete or travertine, borders and banding",
      best: "Natural stone or porcelain, custom patterns and steps",
    },
  },
  {
    slug: "artificial-turf",
    label: "Artificial Turf Lawn",
    surveyValue: "turf",
    measure: "sqft",
    size: { min: 100, max: 5000, step: 50, default: 600, unitLabel: "sq ft" },
    tiers: {
      good: "Standard residential turf on a draining base",
      better: "Premium realistic blades, pet-friendly infill",
      best: "Top-tier turf with cooling infill or a putting green",
    },
  },
  {
    slug: "retaining-walls",
    label: "Retaining Wall or Terracing",
    surveyValue: "retaining-wall",
    measure: "wallface",
    size: { min: 20, max: 800, step: 10, default: 120, unitLabel: "sq ft of wall face" },
    tiers: {
      good: "Segmental block, under 4 ft, simple drainage",
      better: "Block with stone veneer or caps, geogrid reinforcement",
      best: "Natural stone or engineered wall with terracing and steps",
    },
  },
  {
    slug: "outdoor-kitchens",
    label: "Outdoor Kitchen or Fire Feature",
    surveyValue: "outdoor-kitchen",
    measure: "project",
    scopes: {
      small: "Built-in BBQ island or a gas fire pit",
      medium: "Island with fridge, counters, and a fire pit",
      large: "Full kitchen with bar, pizza oven, and fireplace",
    },
    tiers: {
      good: "Stucco finish, standard appliances, tile counters",
      better: "Stone veneer, mid-range appliances, granite counters",
      best: "Premium masonry, pro appliances, porcelain or quartzite",
    },
  },
  {
    slug: "pools-water-features",
    label: "Pool Deck or Water Feature",
    surveyValue: "pool-water",
    measure: "project",
    scopes: {
      small: "Paver pool deck refresh or a single water feature",
      medium: "Full deck with coping and a waterfall or spillway",
      large: "Resort-style surround with spa, features, and planting",
    },
    tiers: {
      good: "Concrete pavers, standard coping",
      better: "Travertine or porcelain, upgraded coping and lighting",
      best: "Natural stone, sheer descents, full lighting and planting",
    },
  },
  {
    slug: "landscape-design-planting",
    label: "Full Landscape Design & Planting",
    surveyValue: "full-landscape",
    measure: "project",
    scopes: {
      small: "Front yard refresh with drought-tolerant planting",
      medium: "Front and back planting with drip irrigation",
      large: "Complete redesign with hardscape tie-ins and lighting",
    },
    tiers: {
      good: "1-gallon plants, mulch, basic drip",
      better: "5-gallon plants, decorative gravel, smart controller",
      best: "Specimen trees, boulders, custom design plans",
    },
  },
  {
    slug: "landscape-lighting",
    label: "Landscape Lighting",
    surveyValue: "landscape-lighting",
    measure: "project",
    scopes: {
      small: "Path and entry lighting, up to 10 fixtures",
      medium: "Front and back, 10 to 25 fixtures",
      large: "Whole-property design, 25+ fixtures",
    },
    tiers: {
      good: "Standard LED fixtures and transformer",
      better: "Brass fixtures, dimming, and zoning",
      best: "Architectural-grade fixtures with smart control",
    },
  },
  {
    slug: "drainage-grading",
    label: "Drainage & Grading",
    surveyValue: "drainage",
    measure: "project",
    scopes: {
      small: "French drain or downspout routing for one problem area",
      medium: "Yard regrading with multiple drains and catch basins",
      large: "Whole-property drainage plan with dry wells or sumps",
    },
    tiers: {
      good: "Standard pipe and gravel, basic surface grading",
      better: "Catch basins, channel drains, and laser grading",
      best: "Engineered system with dry wells and permeable surfaces",
    },
  },
]

/** Fraction bands of the service's low..high range each finish tier occupies. */
const TIER_BANDS: Record<Tier, [number, number]> = {
  good: [0, 0.38],
  better: [0.3, 0.68],
  best: [0.62, 1],
}

/** Fraction bands for per-project scopes. */
const SCOPE_BANDS: Record<Scope, [number, number]> = {
  small: [0, 0.34],
  medium: [0.33, 0.67],
  large: [0.66, 1],
}

/** Finish tier nudges a per-project scope up or down. */
const PROJECT_TIER_MULT: Record<Tier, number> = { good: 0.9, better: 1, best: 1.15 }

export type Region = {
  name: string
  multiplier: number
  /** Inclusive ZIP3 prefix ranges */
  zip3: [number, number][]
}

/**
 * California regional labor and material multipliers by ZIP prefix.
 * Statewide baseline is 1.0.
 */
export const REGIONS: Region[] = [
  { name: "Los Angeles", multiplier: 1.1, zip3: [[900, 908], [910, 918]] },
  { name: "Orange County", multiplier: 1.08, zip3: [[926, 928]] },
  { name: "San Diego", multiplier: 1.06, zip3: [[919, 921]] },
  { name: "Inland Empire", multiplier: 0.95, zip3: [[922, 925]] },
  { name: "Ventura & Santa Barbara", multiplier: 1.05, zip3: [[930, 931]] },
  { name: "Central Valley", multiplier: 0.9, zip3: [[932, 937]] },
  { name: "Bay Area", multiplier: 1.2, zip3: [[940, 951]] },
  { name: "Sacramento & Northern CA", multiplier: 0.96, zip3: [[952, 961]] },
]

export function regionForZip(zip: string): { region: Region | null; inCalifornia: boolean } {
  const clean = zip.replace(/\D/g, "")
  if (clean.length < 3) return { region: null, inCalifornia: false }
  const zip3 = Number.parseInt(clean.slice(0, 3), 10)
  const inCalifornia = zip3 >= 900 && zip3 <= 961
  const region = REGIONS.find((r) => r.zip3.some(([lo, hi]) => zip3 >= lo && zip3 <= hi)) ?? null
  return { region, inCalifornia }
}

export type EstimateInput = {
  slug: string
  size?: number
  scope?: Scope
  tier: Tier
  zip?: string
}

export type Estimate = {
  project: EstimatorProject
  service: Service
  low: number
  high: number
  /** Per-unit figures for sqft/wallface projects */
  unitLow?: number
  unitHigh?: number
  size?: number
  scope?: Scope
  tier: Tier
  regionName: string
  regionMultiplier: number
  inCalifornia: boolean
  zip: string
}

function lerp(lo: number, hi: number, t: number) {
  return lo + (hi - lo) * t
}

function roundTo(n: number, step: number) {
  return Math.round(n / step) * step
}

export function getProject(slug: string | undefined | null) {
  return PROJECTS.find((p) => p.slug === slug) ?? PROJECTS[0]
}

export function calculateEstimate(input: EstimateInput): Estimate {
  const project = getProject(input.slug)
  const service = SERVICES.find((s) => s.slug === project.slug)!
  const zip = (input.zip ?? "").replace(/\D/g, "").slice(0, 5)
  const { region, inCalifornia } = regionForZip(zip)
  const regionMultiplier = region?.multiplier ?? 1
  const regionName = region?.name ?? (zip.length === 5 ? (inCalifornia ? "California" : "Outside California") : "California average")

  const [tLo, tHi] = TIER_BANDS[input.tier]

  if (project.measure === "project") {
    const scope = input.scope ?? "medium"
    const [sLo, sHi] = SCOPE_BANDS[scope]
    const mult = PROJECT_TIER_MULT[input.tier] * regionMultiplier
    const low = lerp(service.costLow, service.costHigh, sLo) * mult
    const high = lerp(service.costLow, service.costHigh, sHi) * mult
    return {
      project,
      service,
      low: roundTo(low, 100),
      high: roundTo(high, 100),
      scope,
      tier: input.tier,
      regionName,
      regionMultiplier,
      inCalifornia,
      zip,
    }
  }

  const size = Math.max(project.size!.min, Math.min(project.size!.max, input.size ?? project.size!.default))
  const unitLow = lerp(service.costLow, service.costHigh, tLo) * regionMultiplier
  const unitHigh = lerp(service.costLow, service.costHigh, tHi) * regionMultiplier
  return {
    project,
    service,
    low: roundTo(unitLow * size, 100),
    high: roundTo(unitHigh * size, 100),
    unitLow: Math.round(unitLow * 100) / 100,
    unitHigh: Math.round(unitHigh * 100) / 100,
    size,
    tier: input.tier,
    regionName,
    regionMultiplier,
    inCalifornia,
    zip,
  }
}

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

/** Parse estimator state from URL search params (shareable links). */
export function parseEstimateParams(params: Record<string, string | string[] | undefined>): EstimateInput {
  const get = (k: string) => {
    const v = params[k]
    return Array.isArray(v) ? v[0] : v
  }
  const slug = get("p")
  const project = getProject(slug)
  const tierRaw = get("t")
  const tier: Tier = tierRaw === "good" || tierRaw === "best" ? tierRaw : "better"
  const scopeRaw = get("s")
  const scope: Scope | undefined =
    project.measure === "project"
      ? scopeRaw === "small" || scopeRaw === "large"
        ? scopeRaw
        : "medium"
      : undefined
  const sizeRaw = Number.parseInt(get("s") ?? "", 10)
  const size = project.measure !== "project" && Number.isFinite(sizeRaw) ? sizeRaw : project.size?.default
  const zip = (get("z") ?? "").replace(/\D/g, "").slice(0, 5)
  return { slug: project.slug, tier, scope, size, zip }
}

/** Serialize estimator state to a query string for shareable links. */
export function toEstimateParams(input: EstimateInput): string {
  const q = new URLSearchParams()
  q.set("p", input.slug)
  q.set("t", input.tier)
  const project = getProject(input.slug)
  if (project.measure === "project") q.set("s", input.scope ?? "medium")
  else if (input.size) q.set("s", String(input.size))
  if (input.zip && input.zip.length === 5) q.set("z", input.zip)
  return q.toString()
}
