import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "home";
  const name = searchParams.get("name") || "HMS BENEFIT STATE";
  const displacement = searchParams.get("displacement") || "£334,000,000,000";
  const crew = searchParams.get("crew") || "5.5m claimants + 12.7m pensioners";

  if (type === "constituency") {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px",
            width: "100%",
            height: "100%",
            backgroundColor: "#0a0e17",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", fontSize: 20, color: "#67e8f9", marginBottom: 20 }}>
            VESSEL ASSESSMENT
          </div>
          <div style={{ display: "flex", fontSize: 42, color: "#e8e6e3", marginBottom: 30, fontWeight: 700 }}>
            HMS {name.toUpperCase()}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", fontSize: 24, color: "#22d3ee" }}>
              Annual Displacement: {displacement}
            </div>
            <div style={{ display: "flex", fontSize: 20, color: "#e8e6e3" }}>
              Crew: {crew}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 16, color: "#e8e6e380", marginTop: 40, fontStyle: "italic" }}>
            &ldquo;What&apos;s your HMS?&rdquo;
          </div>
          <div style={{ display: "flex", fontSize: 14, color: "#e8e6e340", marginTop: 20 }}>
            hmsbenefitstate.co.uk
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  // Default: homepage OG image
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0e17",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 48, color: "#e8e6e3", fontWeight: 700, marginBottom: 30 }}>
          HMS BENEFIT STATE
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", fontSize: 22, color: "#22d3ee" }}>
            Displacement: £334,000,000,000
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#e8e6e3" }}>
            Crew: 5.5m claimants + 12.7m pensioners
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#e8e6e3" }}>
            Speed: +£117bn/year
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#e8e6e3" }}>
            Armament: None
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#e8e6e3" }}>
            Status: Permanently alongside
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 14, color: "#e8e6e340", marginTop: 40 }}>
          hmsbenefitstate.co.uk
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
