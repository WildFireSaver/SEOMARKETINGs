import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const runtime = "nodejs"
export const alt = "Consult & Build CA – Southern California Landscaping & Hardscaping"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const GREEN = "#2b7a45"
const SLATE = "#0b1220"

export default async function OpengraphImage() {
  // Satori cannot resolve relative URLs, so the brand mark is inlined as a
  // data URI read straight from the filesystem at render time.
  const logo = await readFile(join(process.cwd(), "public", "consult-and-build-logo.png"))
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: `linear-gradient(135deg, ${SLATE} 0%, #16233a 100%)`,
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <img
          src={logoSrc}
          alt=""
          width={84}
          height={84}
          style={{ borderRadius: 42, background: "#ffffff", objectFit: "contain" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#ffffff" }}>Consult &amp; Build CA</div>
          <div style={{ fontSize: 19, color: "#94a3b8" }}>Licensed &amp; Insured · Southern California</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div
          style={{
            fontSize: 66,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            maxWidth: 940,
          }}
        >
          Your dream backyard, built by licensed California crews
        </div>
        <div style={{ fontSize: 27, color: "#cbd5e1", maxWidth: 900, lineHeight: 1.4 }}>
          Paver patios · Retaining walls · Outdoor kitchens · Pools · Artificial turf
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            background: GREEN,
            color: "#ffffff",
            fontSize: 24,
            fontWeight: 600,
            padding: "16px 34px",
            borderRadius: 10,
            display: "flex",
          }}
        >
          Free, no-obligation estimate
        </div>
        <div style={{ fontSize: 23, color: "#94a3b8", display: "flex" }}>consultbuildca.com</div>
      </div>
    </div>,
    size,
  )
}
