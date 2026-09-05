import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d6e6e 0%, #1f9d8f 100%)",
          color: "#ffffff",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: -4,
          fontFamily: "sans-serif",
        }}
      >
        JA
      </div>
    ),
    { ...size }
  );
}
