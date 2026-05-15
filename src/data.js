// ============================================================================
// SOFTWARE SUPPLY CHAIN SECURITY FRAMEWORKS — DATA
// ============================================================================
// To add an entry: copy an existing object, fill in the fields, and place it
// under the appropriate category comment. Open a PR — the site rebuilds on merge.
//
// Fields:
//   category  — Group header in the table (must match an existing category or
//               add a new one with a matching color in App.jsx)
//   name      — Short display name shown in the table row
//   fullName  — Expanded name shown on row expand
//   type      — One of: Framework, Standard, Standard / Format, Guidance,
//               Policy / Mandate, Regulation, Certification, Attestation,
//               Tool, Tool / Benchmark, Framework / Tool, Maturity Model,
//               Meta-Framework
//   audience  — Primary intended audience
//   focus     — One-liner on what it covers (shown in the main table)
//   status    — Current version / date / lifecycle status
//   notes     — Extra context shown on expand
//   url       — (optional) Canonical link to the framework
// ============================================================================

const data = [
  // ==========================================================================
  // U.S. Government / NIST
  // ==========================================================================
  {
    category: "U.S. Government / NIST",
    name: "NIST SP 800-218 (SSDF)",
    fullName: "Secure Software Development Framework v1.1",
    type: "Framework",
    audience: "Producers",
    focus: "Secure development lifecycle practices across 4 pillars: Prepare (PO), Protect (PS), Produce (PW), Respond (RV)",
    status: "Final v1.1 (Feb 2022); Draft v1.2 (Dec 2025)",
    notes:
      "Basis for federal software attestation under OMB M-22-18. Maps to EO 14028. SP 800-218A extends to GenAI.",
    url: "https://csrc.nist.gov/pubs/sp/800/218/final",
  },
  {
    category: "U.S. Government / NIST",
    name: "NIST SP 800-161 Rev. 1",
    fullName: "Cybersecurity Supply Chain Risk Management (C-SCRM)",
    type: "Framework",
    audience: "Governance / Risk",
    focus: "Enterprise-level C-SCRM: strategy, policies, risk assessments for third-party products & services",
    status: "Final (May 2022, updated Nov 2024)",
    notes:
      "Three-tier maturity model (foundational → sustaining → enhancing). Required for GSA OASIS+ (J-3).",
    url: "https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final",
  },
  {
    category: "U.S. Government / NIST",
    name: "EO 14028",
    fullName: "Executive Order on Improving the Nation's Cybersecurity",
    type: "Policy / Mandate",
    audience: "Federal agencies & suppliers",
    focus: "Mandates SBOM, secure development attestation, zero trust, incident sharing for federal software",
    status: "Signed May 2021; OMB M-26-05 (Jan 2026) shifted to risk-based model",
    notes:
      "Catalyst for SSDF, NTIA SBOM minimums, CISA attestation forms, and downstream guidance.",
    url: "https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity",
  },
  {
    category: "U.S. Government / NIST",
    name: "CISA/NSA/ODNI ESF Series",
    fullName:
      "Enduring Security Framework — Securing the Software Supply Chain",
    type: "Guidance",
    audience: "Developers / Suppliers / Customers",
    focus: "Three-part best practices: developers (Aug 2022), suppliers (Oct 2022), customers (Nov 2022), plus SBOM consumption (Nov 2023)",
    status: "Published 2022–2023",
    notes:
      "Practical, role-specific guidance. Complements SSDF and SBOM standards.",
    url: "https://www.cisa.gov/resources-tools/resources/securing-software-supply-chain-recommended-practices-guide-customers-and",
  },
  {
    category: "U.S. Government / NIST",
    name: "NTIA / CISA SBOM Minimum Elements",
    fullName: "Minimum Elements for a Software Bill of Materials",
    type: "Standard",
    audience: "Producers / Consumers",
    focus: "Defines baseline SBOM data fields, automation support, and practices. Accepted formats: SPDX, CycloneDX, SWID",
    status: "NTIA v1 (Jul 2021); CISA 2025 draft update (Aug 2025)",
    notes:
      "2025 update adds clarity on depth, delivery, and vulnerability correlation.",
    url: "https://www.ntia.gov/report/2021/minimum-elements-software-bill-materials-sbom",
  },
  {
    category: "U.S. Government / NIST",
    name: "CMMC 2.0",
    fullName: "Cybersecurity Maturity Model Certification",
    type: "Certification",
    audience: "DoD contractors",
    focus: "Tiered cybersecurity requirements (Levels 1–3) for handling CUI in defense supply chain",
    status: "Final rule Dec 2024; phased rollout through 2028",
    notes:
      "Subcomponent of broader U.S. C-SCRM. Aligns with NIST SP 800-171.",
  },
  {
    category: "U.S. Government / NIST",
    name: "CISA Secure Software Self-Attestation",
    fullName: "Secure Software Development Attestation Common Form",
    type: "Attestation",
    audience: "Federal software suppliers",
    focus: "Self-attestation that software was developed per SSDF practices",
    status: "Active; OMB M-26-05 shifted to risk-based approach (Jan 2026)",
    notes:
      "Legally significant declaration. Subset of SSDF tasks (23 of 32).",
    url: "https://www.cisa.gov/secure-software-attestation-form",
  },

  // ==========================================================================
  // OpenSSF
  // ==========================================================================
  {
    category: "OpenSSF",
    name: "SLSA",
    fullName: "Supply-chain Levels for Software Artifacts",
    type: "Framework",
    audience: "Producers",
    focus: "Build integrity & provenance. 4 levels (L0–L3) in the build track covering provenance, signing, and isolation",
    status: "v1.0 (Apr 2023); active development",
    notes:
      "Producer-focused. Complements S2C2F (consumer-focused). L1 = basic provenance, L3 = hardened/isolated builds.",
    url: "https://slsa.dev/",
  },
  {
    category: "OpenSSF",
    name: "S2C2F",
    fullName: "Secure Supply Chain Consumption Framework",
    type: "Framework",
    audience: "Consumers",
    focus: "8 practices for secure OSS ingestion: Ingest, Scan, Inventory, Update, Audit, Enforce, Rebuild, Fix. 4 maturity levels.",
    status: "Contributed by Microsoft (2022); active in OpenSSF",
    notes:
      "Consumer-focused complement to SLSA. Maps to 6 other supply chain specs. Threat-based risk reduction approach.",
    url: "https://github.com/ossf/s2c2f",
  },
  {
    category: "OpenSSF",
    name: "OpenSSF Scorecard",
    fullName: "OpenSSF Scorecard",
    type: "Tool / Benchmark",
    audience: "Consumers / Maintainers",
    focus: "Automated security health checks for open source projects (branch protection, CI, fuzzing, pinned deps, etc.)",
    status: "Active; covers 1M+ projects",
    notes:
      "Referenced by CISA. Used by Microsoft OSPO at scale. GitHub Action available for CI integration.",
    url: "https://scorecard.dev/",
  },
  {
    category: "OpenSSF",
    name: "OpenSSF Security Baseline",
    fullName: "OpenSSF Security Baseline",
    type: "Standard",
    audience: "Maintainers",
    focus: "Minimum security bar for open source projects — standards-based criteria for baseline posture",
    status: "Active development (2025+)",
    notes:
      "Simpler than Scorecard; designed as the floor rather than a scoring system.",
    url: "https://openssf.org/",
  },
  {
    category: "OpenSSF",
    name: "Best Practices Badge",
    fullName: "OpenSSF Best Practices Badge Program",
    type: "Certification",
    audience: "Maintainers",
    focus: "Self-certification (Passing/Silver/Gold) covering source, change control, reporting, quality, security, analysis",
    status: "Active",
    notes: "Tiered badge system. Signals project maturity to consumers.",
    url: "https://www.bestpractices.dev/",
  },

  // ==========================================================================
  // OWASP
  // ==========================================================================
  {
    category: "OWASP",
    name: "OWASP SCVS",
    fullName: "Software Component Verification Standard",
    type: "Standard",
    audience: "Producers / Consumers",
    focus: "6 control families: Inventory, SBOM, Build Environment, Package Mgmt, Component Analysis, Pedigree & Provenance. 3 levels.",
    status: "v1.0 (2020); active",
    notes:
      "Adopted in full by NIST SSDF. Includes BOM Maturity Model for SBOM quality assessment.",
    url: "https://scvs.owasp.org/",
  },
  {
    category: "OWASP",
    name: "CycloneDX (ECMA-424)",
    fullName: "OWASP CycloneDX SBOM Standard",
    type: "Standard / Format",
    audience: "All",
    focus: "Full-stack BOM standard: SBOM, SaaSBOM, HBOM, VEX, CBOM, AI/ML-BOM. XML, JSON, Protobuf formats.",
    status: "v1.6 current; Ecma International TC54",
    notes:
      "Security-practitioner-authored. 5 quality dimensions: breadth, depth, lifecycles, techniques, confidence.",
    url: "https://cyclonedx.org/",
  },
  {
    category: "OWASP",
    name: "OWASP SAMM",
    fullName: "Software Assurance Maturity Model",
    type: "Maturity Model",
    audience: "Security leadership",
    focus: "Prescriptive maturity model across 5 business functions: Governance, Design, Implementation, Verification, Operations. 3 maturity levels per practice.",
    status: "v2.0 (2020); active",
    notes:
      "Prescriptive complement to BSIMM (descriptive). Implementation practice covers secure build & dependency management. Free self-assessment tooling (SAMM Toolbox). Maps well to SSDF.",
    url: "https://owaspsamm.org/",
  },

  // ==========================================================================
  // CNCF / Cloud-Native
  // ==========================================================================
  {
    category: "CNCF / Cloud-Native",
    name: "CNCF SSC Best Practices v2",
    fullName: "CNCF Software Supply Chain Best Practices",
    type: "Guidance",
    audience: "Cloud-native teams",
    focus: "4 principles (Trust, Automation, Clarity, Mutual Auth) with practical cloud-native implementation guidance",
    status: "v2 refreshed 2025",
    notes:
      "Persona-driven. References Sigstore, in-toto, SLSA, TUF, GUAC. Includes 'software factory' model.",
    url: "https://tag-security.cncf.io/community/working-groups/supply-chain-security/supply-chain-security-paper-v2/sscbpv2/",
  },
  {
    category: "CNCF / Cloud-Native",
    name: "Sigstore",
    fullName: "Sigstore (Cosign, Fulcio, Rekor)",
    type: "Tool",
    audience: "Producers",
    focus: "Keyless signing, verification, and transparency logging for software artifacts. Eliminates long-term key management.",
    status: "Graduated (CNCF); production-ready",
    notes:
      "Fulcio (CA), Rekor (transparency log), Cosign (container signing). Foundation for SLSA provenance.",
    url: "https://www.sigstore.dev/",
  },
  {
    category: "CNCF / Cloud-Native",
    name: "in-toto",
    fullName: "in-toto Supply Chain Framework",
    type: "Framework / Tool",
    audience: "Producers",
    focus: "Cryptographic attestation of every step in the SDLC. Verifies authorized entities executed steps in correct order.",
    status: "CNCF Graduated (Apr 2025)",
    notes:
      "Used by SolarWinds (post-breach), Lockheed Martin. Integrates with Sigstore, SLSA, GUAC.",
    url: "https://in-toto.io/",
  },
  {
    category: "CNCF / Cloud-Native",
    name: "TUF",
    fullName: "The Update Framework",
    type: "Framework",
    audience: "Distributors",
    focus: "Secures software update/distribution systems against rollback, freeze, mix-and-match, and key compromise attacks",
    status: "CNCF Graduated",
    notes:
      "Used by Sigstore as root of trust. Also adopted by Docker, Python (PEP 458), Rust (crates.io).",
    url: "https://theupdateframework.io/",
  },
  {
    category: "CNCF / Cloud-Native",
    name: "GUAC",
    fullName: "Graph for Understanding Artifact Composition",
    type: "Tool",
    audience: "Consumers / Security teams",
    focus: "Aggregates SBOMs, in-toto attestations, vulnerability data into a queryable graph for supply chain observability",
    status: "OpenSSF incubating",
    notes:
      "Enables 'what is affected?' queries during incidents (e.g., Log4j-style response).",
    url: "https://guac.sh/",
  },

  // ==========================================================================
  // EU / International Regulations
  // ==========================================================================
  {
    category: "EU / International",
    name: "EU Cyber Resilience Act (CRA)",
    fullName: "Regulation (EU) 2024/2847",
    type: "Regulation",
    audience: "All manufacturers selling in EU",
    focus: "Mandatory secure-by-design, lifecycle vulnerability handling, SBOM documentation (10yr retention), 24hr exploit reporting",
    status: "In force Dec 2024; reporting Sep 2026; full compliance Dec 2027",
    notes:
      "First horizontal EU cybersecurity regulation for digital products. CE marking required. Heavy fines for non-compliance.",
    url: "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act",
  },
  {
    category: "EU / International",
    name: "EU NIS2 Directive",
    fullName: "Directive (EU) 2022/2555",
    type: "Regulation",
    audience: "Essential & important entities",
    focus: "Cybersecurity risk management, incident reporting, and supply chain security obligations",
    status: "In force Jan 2023; member state transposition ongoing",
    notes:
      "Broader than CRA (covers organizational security). Mandates supply chain risk assessment.",
  },
  {
    category: "EU / International",
    name: "EU AI Act",
    fullName: "Regulation (EU) 2024/1689",
    type: "Regulation",
    audience: "AI system providers",
    focus: "Technical documentation, dataset governance, model training transparency. Aligns with AIBOM specs.",
    status: "Main application Aug 2026",
    notes:
      "High-risk AI providers must document software components. SPDX 3.0 AIBOM satisfies 13/14 Annex IV requirements.",
  },
  {
    category: "EU / International",
    name: "ISO/IEC 27036",
    fullName: "Information Security for Supplier Relationships",
    type: "Standard",
    audience: "Governance / Risk",
    focus: "Supply chain information security within the ISO 27001 ISMS ecosystem",
    status: "Active",
    notes:
      "Part of ISO 27001 family. Covers acquirer-supplier relationships and cloud services.",
  },
  {
    category: "EU / International",
    name: "OpenChain (ISO/IEC 5230)",
    fullName: "OpenChain — OSS License Compliance",
    type: "Standard",
    audience: "Legal / Compliance",
    focus: "Open source license compliance processes",
    status: "ISO standard",
    notes:
      "Linux Foundation hosted. Companion: ISO/IEC 18974 for OSS security assurance.",
    url: "https://www.openchainproject.org/",
  },

  // ==========================================================================
  // Linux Foundation / Standards Bodies
  // ==========================================================================
  {
    category: "Linux Foundation / Standards",
    name: "SPDX (ISO/IEC 5962)",
    fullName: "Software Package Data Exchange",
    type: "Standard / Format",
    audience: "All",
    focus: "SBOM format emphasizing license compliance + security. SPDX 3.0 adds AI BOM and expanded profiles.",
    status: "ISO standard; SPDX 3.0 active",
    notes:
      "Linux Foundation hosted. Strong in license compliance. SPDX 3.0 AIBOM covers 13/14 EU AI Act Annex IV items.",
    url: "https://spdx.dev/",
  },

  // ==========================================================================
  // Industry / Meta-Frameworks
  // ==========================================================================
  {
    category: "Industry / Meta-Frameworks",
    name: "P-SSCRM",
    fullName: "Proactive Software Supply Chain Risk Management Framework",
    type: "Meta-Framework",
    audience: "All",
    focus: "Synthesizes 10 frameworks into 4 groups (Governance, Product, Environment, Deployment) with unified task mapping",
    status: "Published 2024 (academic)",
    notes:
      "Maps SSDF, SLSA, S2C2F, SCVS, CNCF SSC, Scorecard, BSIMM, CISA attestation, NIST 800-161. Best Rosetta Stone available.",
    url: "https://arxiv.org/abs/2404.12300",
  },
  {
    category: "Industry / Meta-Frameworks",
    name: "BSIMM",
    fullName: "Building Security In Maturity Model",
    type: "Maturity Model",
    audience: "Security leadership",
    focus: "Descriptive (not prescriptive) measurement of observed software security practices across organizations",
    status: "v14+ (annual updates)",
    notes:
      "Benchmarking tool. Useful for comparing your program against industry peers.",
    url: "https://www.bsimm.com/",
  },
  {
    category: "Industry / Meta-Frameworks",
    name: "SAFECode",
    fullName: "Software Assurance Forum for Excellence in Code",
    type: "Guidance",
    audience: "Producers",
    focus: "Industry consortium guidance on secure development, third-party component management, and vulnerability handling",
    status: "Active",
    notes: "Referenced by NIST SSDF as a source framework.",
    url: "https://safecode.org/",
  },
];

export default data;
