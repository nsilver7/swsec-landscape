import { useState } from "react";
import data from "./data.js";

// ---------------------------------------------------------------------------
// Color mappings
// ---------------------------------------------------------------------------

const categoryColors = {
  "U.S. Government / NIST": "#1e3a5f",
  OpenSSF: "#1a3c34",
  OWASP: "#3b1f54",
  "CNCF / Cloud-Native": "#1e3548",
  "EU / International": "#4a1c2a",
  "Linux Foundation / Standards": "#1e2e3a",
  "Industry / Meta-Frameworks": "#3a2e1e",
};

const typeColors = {
  Framework: "#3b82f6",
  Standard: "#8b5cf6",
  "Standard / Format": "#8b5cf6",
  Guidance: "#10b981",
  "Policy / Mandate": "#ef4444",
  Regulation: "#ef4444",
  Certification: "#f59e0b",
  Attestation: "#f97316",
  Tool: "#06b6d4",
  "Tool / Benchmark": "#06b6d4",
  "Framework / Tool": "#0ea5e9",
  "Maturity Model": "#ec4899",
  "Meta-Framework": "#a855f7",
};

const audienceColors = {
  Producers: { bg: "#0d3b66", text: "#7ec8e3" },
  Consumers: { bg: "#1b4332", text: "#95d5b2" },
  "Producers / Consumers": { bg: "#3d2c5e", text: "#c8b6ff" },
  All: { bg: "#4a3728", text: "#ddb892" },
  "All manufacturers selling in EU": { bg: "#6b2737", text: "#f4a3b5" },
  "Governance / Risk": { bg: "#2d3a4a", text: "#a2c4e0" },
  "Federal agencies & suppliers": { bg: "#4a3728", text: "#ddb892" },
  "Developers / Suppliers / Customers": { bg: "#3d2c5e", text: "#c8b6ff" },
  "Cloud-native teams": { bg: "#1b4332", text: "#95d5b2" },
  "DoD contractors": { bg: "#2d3a4a", text: "#a2c4e0" },
  "Federal software suppliers": { bg: "#4a3728", text: "#ddb892" },
  Maintainers: { bg: "#0d3b66", text: "#7ec8e3" },
  "Consumers / Maintainers": { bg: "#1b4332", text: "#95d5b2" },
  "Consumers / Security teams": { bg: "#1b4332", text: "#95d5b2" },
  Distributors: { bg: "#0d3b66", text: "#7ec8e3" },
  "Essential & important entities": { bg: "#6b2737", text: "#f4a3b5" },
  "AI system providers": { bg: "#3d2c5e", text: "#c8b6ff" },
  "Legal / Compliance": { bg: "#2d3a4a", text: "#a2c4e0" },
  "Security leadership": { bg: "#2d3a4a", text: "#a2c4e0" },
  "Platform / DevOps teams": { bg: "#2a3f2a", text: "#8fbc8f" },	
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const categories = [...new Set(data.map((d) => d.category))];

export default function App() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? data : data.filter((d) => d.category === filter);

  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
        background: "#0a0e14",
        color: "#c5cdd9",
        minHeight: "100vh",
        padding: "24px 16px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 28 }}>
          <h1
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#e6edf3",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Software Supply Chain Security
          </h1>
          <p
            style={{
              fontSize: 12,
              color: "#6b7b8d",
              margin: "4px 0 16px",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            Frameworks · Standards · Regulations · Tools
          </p>

          {/* Filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setExpandedRow(null);
                }}
                style={{
                  padding: "5px 12px",
                  fontSize: 11,
                  fontFamily: "inherit",
                  border:
                    filter === cat
                      ? "1px solid #58a6ff"
                      : "1px solid #1e2a3a",
                  borderRadius: 4,
                  background: filter === cat ? "#12243a" : "transparent",
                  color: filter === cat ? "#58a6ff" : "#6b7b8d",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            fontSize: 11,
            color: "#4a5568",
            marginBottom: 8,
            textAlign: "right",
          }}
        >
          {filtered.length} item{filtered.length !== 1 ? "s" : ""} · click row
          to expand
        </div>

        {/* ── Table ──────────────────────────────────────────────────────── */}
        <div
          style={{
            border: "1px solid #1a2332",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {/* Column headers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 90px 110px 1fr",
              padding: "10px 16px",
              background: "#0f1620",
              borderBottom: "1px solid #1a2332",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#4a5c6e",
              fontWeight: 600,
            }}
          >
            <span>Name</span>
            <span>Type</span>
            <span>Audience</span>
            <span>Focus</span>
          </div>

          {/* Rows */}
          {filtered.map((item, i) => {
            const isExpanded = expandedRow === i;
            const catColor = categoryColors[item.category] || "#1a2332";
            const prevCategory = i > 0 ? filtered[i - 1].category : null;
            const showCategoryHeader = item.category !== prevCategory;

            return (
              <div key={`${item.category}-${item.name}`}>
                {/* Category divider */}
                {showCategoryHeader && (
                  <div
                    style={{
                      padding: "8px 16px",
                      background: catColor,
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#8899aa",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      borderTop: i > 0 ? "1px solid #1a2332" : "none",
                    }}
                  >
                    {item.category}
                  </div>
                )}

                {/* Row */}
                <div
                  onClick={() => setExpandedRow(isExpanded ? null : i)}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 90px 110px 1fr",
                    padding: "10px 16px",
                    borderTop: "1px solid #111a24",
                    cursor: "pointer",
                    background: isExpanded ? "#111a24" : "transparent",
                    transition: "background 0.12s",
                    alignItems: "start",
                  }}
                  onMouseEnter={(e) => {
                    if (!isExpanded)
                      e.currentTarget.style.background = "#0c1218";
                  }}
                  onMouseLeave={(e) => {
                    if (!isExpanded)
                      e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#e6edf3",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.name}
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: 10,
                        padding: "2px 7px",
                        borderRadius: 3,
                        background:
                          (typeColors[item.type] || "#666") + "22",
                        color: typeColors[item.type] || "#999",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.type}
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: 10,
                        padding: "2px 7px",
                        borderRadius: 3,
                        background:
                          (audienceColors[item.audience]?.bg || "#333") +
                          "cc",
                        color:
                          audienceColors[item.audience]?.text || "#aaa",
                        fontWeight: 500,
                        lineHeight: 1.6,
                        display: "inline",
                      }}
                    >
                      {item.audience}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#8899aa",
                      lineHeight: 1.45,
                    }}
                  >
                    {item.focus}
                  </div>
                </div>

                {/* Expanded detail */}
                {isExpanded && (
                  <div
                    style={{
                      padding: "12px 16px 14px",
                      background: "#0c1420",
                      borderTop: "1px solid #15202d",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px 24px",
                      fontSize: 11,
                    }}
                  >
                    <div>
                      <span
                        style={{
                          color: "#4a5c6e",
                          fontSize: 10,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Full Name
                      </span>
                      <div style={{ color: "#a0b0c0", marginTop: 2 }}>
                        {item.fullName}
                      </div>
                    </div>
                    <div>
                      <span
                        style={{
                          color: "#4a5c6e",
                          fontSize: 10,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Status
                      </span>
                      <div style={{ color: "#a0b0c0", marginTop: 2 }}>
                        {item.status}
                      </div>
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <span
                        style={{
                          color: "#4a5c6e",
                          fontSize: 10,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Notes
                      </span>
                      <div
                        style={{
                          color: "#a0b0c0",
                          marginTop: 2,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.notes}
                      </div>
                    </div>
                    {item.url && (
                      <div style={{ gridColumn: "1 / -1" }}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#58a6ff",
                            fontSize: 11,
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.textDecoration = "underline")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.textDecoration = "none")
                          }
                        >
                          {item.url} ↗
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Relationship Map ───────────────────────────────────────────── */}
        <div
          style={{
            marginTop: 20,
            padding: "14px 16px",
            background: "#0c1218",
            borderRadius: 8,
            border: "1px solid #1a2332",
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: "#4a5c6e",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 10,
              fontWeight: 600,
            }}
          >
            Relationship Map
          </div>
          <div style={{ fontSize: 11, color: "#6b7b8d", lineHeight: 1.7 }}>
            <span style={{ color: "#8899aa" }}>Producing software →</span>{" "}
            SLSA + SSDF + in-toto/Sigstore + CycloneDX/SPDX
            <br />
            <span style={{ color: "#8899aa" }}>Consuming software →</span>{" "}
            S2C2F + SCVS + Scorecard + GUAC + NIST 800-161
            <br />
            <span style={{ color: "#8899aa" }}>
              Regulatory compliance →
            </span>{" "}
            EU CRA + NIS2 + AI Act + EO 14028/SSDF + CMMC
            <br />
            <span style={{ color: "#8899aa" }}>
              Cross-cutting reference →
            </span>{" "}
            P-SSCRM (maps across 10 frameworks)
          </div>
        </div>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: 12,
            fontSize: 10,
            color: "#2d3a4a",
            textAlign: "center",
          }}
        >
          Compiled May 2026 ·{" "}
          <a
            href="https://github.com/nsilver7/swsec-landscape"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3a4a5a", textDecoration: "none" }}
          >
            Contribute on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
