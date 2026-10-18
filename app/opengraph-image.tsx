import { ImageResponse } from "next/og";
export const alt =
  "Adarsh Kumar — Software, data systems, and intelligent applications";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f7f8f3",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        color: "#192d25",
      }}
    >
      <div style={{ fontSize: 25, letterSpacing: 4 }}>
        PADIGELA ADARSH KUMAR
      </div>
      <div
        style={{ fontSize: 75, lineHeight: 1.1, marginTop: 65, maxWidth: 1000 }}
      >
        Building reliable software, data systems, and intelligent applications.
      </div>
      <div style={{ fontSize: 24, marginTop: 50, color: "#426c58" }}>
        SOFTWARE ENGINEER / PORTFOLIO
      </div>
    </div>,
    size,
  );
}
