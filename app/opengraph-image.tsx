import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const alt = "Consult & Build CA – Southern California Landscaping & Hardscaping"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const GREEN = "#2b7a45"
const SLATE = "#0b1220"

export default function OpengraphImage() {
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
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            background: GREEN,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 34,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          CB
        </div>
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
