import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.person.name} — Software Engineer in Melbourne`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { person } = siteConfig;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0c0b0a 0%, #141210 55%, #122222 100%)",
          color: "#f4f1ec",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#5fd4d4",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #0d6e6e 0%, #1f9d8f 100%)",
              color: "#ffffff",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            JA
          </div>
          Software Engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {person.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#a39e96",
              lineHeight: 1.35,
              maxWidth: 900,
            }}
          >
            .NET · React · Next.js — Melbourne, Australia
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#d7d2ca",
          }}
        >
          <span>Full Australian work rights</span>
          <span>Available for full-time roles</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
