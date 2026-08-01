import { ImageResponse } from "next/og";

// Favicon metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Generates a "JA" monogram favicon on a teal gradient tile.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background: "linear-gradient(135deg, #0d6e6e 0%, #1f9d8f 100%)",
          color: "#ffffff",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: -1,
          fontFamily: "sans-serif",
        }}
      >
        JA
      </div>
    ),
    {
      ...size,
    }
  );
}
