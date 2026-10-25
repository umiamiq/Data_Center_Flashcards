// Generated from the Data Center Site Selection Glossary.
const CARDS = [
 {
  "id": 0,
  "term": "Hyperscaler",
  "def": "A company operating cloud and AI infrastructure at massive scale, with in-house land, energy, and development teams. Usually means AWS, Microsoft, Google, Meta, and increasingly Oracle.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 1,
  "term": "AI lab",
  "def": "A frontier model developer (OpenAI, Anthropic, xAI). Historically got compute through a hyperscaler partner; increasingly contracts capacity directly or through JV structures.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 2,
  "term": "Neocloud",
  "def": "A GPU-focused cloud provider (CoreWeave, Crusoe, Lambda, Nebius). Narrow service set, aggressive timelines, weaker balance sheets than hyperscalers, so tenant credit is a live underwriting question.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 3,
  "term": "Offtaker / tenant",
  "def": "The party that signs the lease or takes the capacity. \"Who's the tenant?\" determines credit, delivery model, and site requirements.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 4,
  "term": "Colo (colocation)",
  "def": "A data center where the customer owns the servers and the operator provides space, power, cooling, security, and connectivity.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 5,
  "term": "Retail colo",
  "def": "Small, many-tenant colo (cabinets, cages, kW scale), priced at a premium per kW on shorter terms. The real product is often interconnection. Equinix is the archetype.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 6,
  "term": "Wholesale colo",
  "def": "Large, few-tenant colo (whole halls or buildings, MW scale) on long leases at lower $/kW. Hyperscale development is wholesale at the extreme.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 7,
  "term": "Interconnection (network sense)",
  "def": "Direct physical connections between networks inside a colo building (cross-connects, meet-me rooms). Not to be confused with utility interconnection.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 8,
  "term": "Self-build",
  "def": "The hyperscaler buys land and builds on its own balance sheet.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 9,
  "term": "Powered land",
  "def": "Entitled acreage bundled with a secured, credible power path. Often sold or JV'd by developers, landowners, or utilities.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 10,
  "term": "Powered shell",
  "def": "Developer delivers the building envelope with power to the building; tenant fits out the MEP to its own spec. Hyperscalers often prefer this because they self-perform MEP.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 11,
  "term": "Build-to-suit (BTS) / turnkey",
  "def": "Developer delivers a fully fitted, commissioned data hall to the tenant's requirements, usually on a 10–15 year triple-net lease. Neoclouds often need this.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 12,
  "term": "Spec development",
  "def": "Building without a signed tenant. Equity-heavy and hard to finance; mainly done in deep, proven markets like Northern Virginia.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 13,
  "term": "Pre-lease",
  "def": "A lease signed before construction or delivery. The single most important de-risking event for a developer.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 14,
  "term": "Triple-net (NNN) lease",
  "def": "Tenant pays rent plus taxes, insurance, and maintenance.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 15,
  "term": "Critical IT load",
  "def": "The power consumed by the IT equipment itself. Deals are quoted in MW of critical IT, not square feet.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 16,
  "term": "Utility / gross load",
  "def": "Total power drawn from the grid: critical IT plus cooling, house load, and losses. Always larger than critical IT.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 17,
  "term": "MW haircut",
  "def": "The reduction from interconnected (gross) MW to usable critical IT MW once cooling, overhead, and redundancy are accounted for. Mixing up gross and IT MW in an interview is a tell.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 18,
  "term": "PUE (Power Usage Effectiveness)",
  "def": "Total facility power ÷ IT power. 1.0 is theoretical perfection; lower is better.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 19,
  "term": "WUE (Water Usage Effectiveness)",
  "def": "Water used per unit of IT energy (L/kWh).",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 20,
  "term": "Campus",
  "def": "Multiple data center buildings on one site, phased in increments (often 50–100 MW per building) toward hundreds of MW or multiple GW.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 21,
  "term": "Data hall",
  "def": "The room inside a building that holds server racks.",
  "section": "Market Structure and Players",
  "sub": null
 },
 {
  "id": 22,
  "term": "$/MW",
  "def": "The standard unit for development cost and, increasingly, land value. AI-grade builds run eight figures per MW of critical IT before servers.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 23,
  "term": "Per-MW land pricing",
  "def": "Valuing land by the power it can deliver rather than by acreage. An acre with a utility commitment is a different product from one without.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 24,
  "term": "Speed-to-power / time-to-power",
  "def": "How fast a site can be energized. Often the dominant value driver, outweighing land cost.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 25,
  "term": "Underwrite",
  "def": "To analyze and price the risk of a deal before committing capital.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 26,
  "term": "Credit / credit quality",
  "def": "The tenant's financial strength. Investment-grade (hyperscaler) vs. sub-investment-grade (many neoclouds).",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 27,
  "term": "Credit-tenant lease financing",
  "def": "Lenders underwrite the tenant's credit rather than the developer's, so a strong lease unlocks cheap, high-leverage debt.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 28,
  "term": "Credit enhancement",
  "def": "Measures that shore up a weaker tenant: parent guarantees, letters of credit (LCs), or a hyperscaler backstop.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 29,
  "term": "LTC (Loan-to-Cost)",
  "def": "Share of total project cost funded by debt. Higher with a strong pre-lease.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 30,
  "term": "Spread",
  "def": "The interest premium over a benchmark rate. Tighter for stronger credit.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 31,
  "term": "Construction loan",
  "def": "Short-term debt funding the build.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 32,
  "term": "Stabilization",
  "def": "The point when a delivered building is leased and generating rent.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 33,
  "term": "Take-out / permanent financing",
  "def": "Longer-term debt that refinances the construction loan after stabilization.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 34,
  "term": "ABS / CMBS",
  "def": "Asset-backed / commercial mortgage-backed securities. Bonds backed by pooled lease cash flows; a major capital source for data centers.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 35,
  "term": "Cap rate",
  "def": "Net operating income ÷ asset value. Low cap rates mean high valuations; stabilized hyperscale-leased assets trade at low cap rates.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 36,
  "term": "Capital recycling",
  "def": "Selling stabilized assets to infrastructure funds and redeploying the proceeds into new development.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 37,
  "term": "Rent commencement",
  "def": "When rent starts, usually at delivery of a commissioned, energized building, not at lease signing.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 38,
  "term": "JV (Joint Venture)",
  "def": "A shared-ownership entity. In current hyperscale deals, typically an infrastructure fund owns the majority and the hyperscaler a minority stake.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 39,
  "term": "Off-balance-sheet financing",
  "def": "Structuring so the project's debt sits in the JV/SPV, not on the hyperscaler's own balance sheet.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 40,
  "term": "SPV (Special Purpose Vehicle) / conduit financing",
  "def": "A standalone entity that issues debt for one project, passing proceeds through. Separates project risk from the sponsor.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 41,
  "term": "RVG (Residual Value Guarantee)",
  "def": "A promise by the tenant to cover any shortfall if the asset's value falls below an agreed floor when the lease ends. Makes short-term leases financeable.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 42,
  "term": "Capex",
  "def": "Capital expenditures. For hyperscalers, mainly servers, data centers, and network.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 43,
  "term": "Finance lease",
  "def": "A lease accounted for like an asset purchase; hyperscaler capex guidance often includes principal payments on these.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 44,
  "term": "FID (Final Investment Decision)",
  "def": "The formal go decision to commit full capital to a project.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 45,
  "term": "LOI (Letter of Intent)",
  "def": "Non-binding agreement outlining deal terms before definitive contracts.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 46,
  "term": "Option (land option)",
  "def": "The right, but not the obligation, to buy land at agreed terms within a window. Cheap control while diligence runs.",
  "section": "Deal Economics and Finance",
  "sub": null
 },
 {
  "id": 47,
  "term": "IOU (Investor-Owned Utility)",
  "def": "A private, shareholder-owned utility (Dominion, AEP, Entergy, Oncor, Georgia Power).",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 48,
  "term": "Co-op (electric cooperative)",
  "def": "A member-owned utility, often rural.",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 49,
  "term": "Muni (municipal utility)",
  "def": "A city-owned utility.",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 50,
  "term": "Vertically integrated utility",
  "def": "Owns generation, transmission, and distribution and plans all three. Common in the Southeast, where there's no RTO.",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 51,
  "term": "ISO (Independent System Operator) / RTO (Regional Transmission Organization)",
  "def": "Nonprofit grid operators running wholesale markets and regional transmission planning. They don't own the wires. Used near-interchangeably as \"ISO/RTO.\"",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 52,
  "term": "PJM",
  "def": "RTO for the Mid-Atlantic and parts of the Midwest, including Northern Virginia and Ohio. Tight capacity market.",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 53,
  "term": "ERCOT",
  "def": "ISO for most of Texas. Not synchronously connected to the rest of the grid, so largely outside FERC jurisdiction; regulated by the Texas PUC.",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 54,
  "term": "MISO",
  "def": "RTO for the Midwest and parts of the South (including Louisiana).",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 55,
  "term": "SPP",
  "def": "Southwest Power Pool, the RTO for the Plains.",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 56,
  "term": "CAISO / NYISO / ISO-NE",
  "def": "ISOs for California, New York, and New England.",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 57,
  "term": "FERC",
  "def": "Federal Energy Regulatory Commission. Regulates interstate transmission and wholesale markets.",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 58,
  "term": "PUC / PSC",
  "def": "State Public Utility (or Service) Commission. Approves rates, tariffs, and new utility generation and transmission. Examples: PUCO (Ohio), LPSC (Louisiana), PUCT (Texas).",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 59,
  "term": "Docket",
  "def": "A numbered regulatory proceeding at a PUC or FERC. A key public intelligence source.",
  "section": "Power and the Grid",
  "sub": "Entities and regulators"
 },
 {
  "id": 60,
  "term": "Transmission",
  "def": "High-voltage lines (generally 69 kV+) moving bulk power. Hyperscale campuses connect at transmission voltage.",
  "section": "Power and the Grid",
  "sub": "Grid infrastructure"
 },
 {
  "id": 61,
  "term": "Distribution",
  "def": "Lower-voltage lines delivering to homes and businesses. Can't carry hyperscale loads.",
  "section": "Power and the Grid",
  "sub": "Grid infrastructure"
 },
 {
  "id": 62,
  "term": "kV (kilovolt)",
  "def": "Voltage unit. Hyperscale screening filters for 138 kV and above, ideally 230 kV or 345 kV+.",
  "section": "Power and the Grid",
  "sub": "Grid infrastructure"
 },
 {
  "id": 63,
  "term": "Substation",
  "def": "Facility that steps voltage up or down. Campuses usually build their own on-site substation.",
  "section": "Power and the Grid",
  "sub": "Grid infrastructure"
 },
 {
  "id": 64,
  "term": "Breaker bay / position",
  "def": "A slot in a substation for a circuit. Unused bays on satellite imagery are a rough proxy for spare capacity.",
  "section": "Power and the Grid",
  "sub": "Grid infrastructure"
 },
 {
  "id": 65,
  "term": "Switchyard",
  "def": "The high-voltage switching equipment at a substation or plant.",
  "section": "Power and the Grid",
  "sub": "Grid infrastructure"
 },
 {
  "id": 66,
  "term": "Headroom",
  "def": "Spare capacity on a line or substation. \"A line on a map is not capacity.\"",
  "section": "Power and the Grid",
  "sub": "Grid infrastructure"
 },
 {
  "id": 67,
  "term": "Load inquiry",
  "def": "The formal request to a utility stating MW, ramp, and target date. Starts the study process; increasingly carries fees and credibility costs.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 68,
  "term": "System impact study / facilities study",
  "def": "Utility (and RTO) studies of what breaks when the load connects and what upgrades are needed.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 69,
  "term": "Load letter / will-serve letter",
  "def": "Utility statement of what it can serve, when, and on what conditions. Firmness varies widely; read the conditions.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 70,
  "term": "ESA (Electric Service Agreement)",
  "def": "The binding contract for capacity, ramp, deposits, upgrade cost responsibility, and minimum demand obligations.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 71,
  "term": "Energization",
  "def": "The date power actually flows.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 72,
  "term": "Load ramp",
  "def": "Schedule by which capacity becomes available (e.g., 50 MW year one, stepping up). Building phasing must match it.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 73,
  "term": "Large-load tariff",
  "def": "A special rate structure for very large customers like data centers, often with financial commitments to deter speculative requests.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 74,
  "term": "Minimum demand charge / take-or-pay",
  "def": "Paying for a set share of contracted capacity whether used or not (e.g., AEP Ohio's 85% data center tariff).",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 75,
  "term": "CIAC (Contribution in Aid of Construction)",
  "def": "Customer payment toward utility upgrades built for them.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 76,
  "term": "Security deposit / collateral",
  "def": "Financial backing the utility requires before building for a large load.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 77,
  "term": "Assignability",
  "def": "Whether a power commitment can transfer to a new owner. ESAs aren't recorded on the deed, so this is a key diligence item.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 78,
  "term": "Interconnection queue",
  "def": "The backlog of projects waiting to connect. The famous multi-year queues are mostly generation; load interconnection is a separate, newly formalizing process.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 79,
  "term": "Deliverability constraint",
  "def": "The wires and substations can't physically carry the load. Fixed by transmission upgrades on a multi-year timeline. Curtailment doesn't help.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 80,
  "term": "Resource adequacy constraint",
  "def": "The region lacks enough generation to serve the load reliably at peak. A supply problem; curtailment can help.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 81,
  "term": "Capacity market",
  "def": "An RTO market (e.g., PJM's) paying generators to be available at peak. Spiking prices signal resource adequacy stress.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 82,
  "term": "Reserve margin",
  "def": "Generation capacity above expected peak demand.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 83,
  "term": "Power-ready / clean power story",
  "def": "The desktop picture of a site's power looks strong. Not the same as a confirmed will-serve or ESA.",
  "section": "Power and the Grid",
  "sub": "Getting power"
 },
 {
  "id": 84,
  "term": "Firm service",
  "def": "Uninterrupted, 24/7 power. What hyperscale tenants require.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 85,
  "term": "Non-firm / curtailable / interruptible service",
  "def": "Power that can be cut during grid stress, in exchange for faster connection.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 86,
  "term": "Flexible load / flexible interconnection",
  "def": "Agreeing to curtail during rare peaks to connect sooner. Best suited to training workloads.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 87,
  "term": "Demand response (DR)",
  "def": "Programs paying customers to reduce load when the grid is stressed.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 88,
  "term": "4CP (Four Coincident Peak)",
  "def": "ERCOT transmission cost allocation based on load during the four summer monthly peaks. Large flexible loads curtail during those intervals to avoid charges; bitcoin miners are the classic example.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 89,
  "term": "BTM (Behind-the-Meter)",
  "def": "Generation on the customer's side of the utility meter, serving the site directly.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 90,
  "term": "Bridge power",
  "def": "Temporary on-site generation used until the grid connection arrives; afterward it becomes backup or is removed.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 91,
  "term": "Islanded / off-grid campus",
  "def": "Running entirely on on-site generation. You become your own utility.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 92,
  "term": "Co-location (power sense)",
  "def": "Building next to a power plant (often nuclear) and taking power directly. Fast in theory, but contested by regulators over cost-shifting and grid reliability.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 93,
  "term": "Reciprocating engines (RICE)",
  "def": "Large gas-fired piston engines. Faster to procure and modular; common for bridge power.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 94,
  "term": "Aeroderivative turbine",
  "def": "Jet-engine-derived gas turbine. Smaller, quick-start, often mobile.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 95,
  "term": "Frame turbine",
  "def": "Large industrial gas turbine. Efficient at scale but with multi-year lead times.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 96,
  "term": "Fuel cell",
  "def": "Electrochemical generation (e.g., Bloom), often natural-gas-fueled. Modular, quieter, easier to permit.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 97,
  "term": "BESS (Battery Energy Storage System)",
  "def": "Grid-scale batteries used for firming, peak shaving, or covering curtailment hours.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 98,
  "term": "Gas lateral",
  "def": "A pipeline spur from a main line to the site.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 99,
  "term": "Firm transport",
  "def": "Contracted, guaranteed pipeline capacity for gas delivery. Needed for reliable on-site generation.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 100,
  "term": "PPA (Power Purchase Agreement)",
  "def": "A contract to buy power from a generator. A physical PPA delivers electrons; a virtual (financial) PPA only settles financially. \"We'll do a PPA\" is not a power strategy.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 101,
  "term": "Additionality",
  "def": "Whether a clean energy purchase causes new generation to be built.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 102,
  "term": "24/7 CFE (Carbon-Free Energy)",
  "def": "Matching consumption with clean generation hour by hour, rather than annually.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 103,
  "term": "SMR (Small Modular Reactor)",
  "def": "Factory-built nuclear reactors. Real commitments, but a 2030s story, not speed-to-power.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 104,
  "term": "Uprate",
  "def": "Increasing an existing power plant's output.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 105,
  "term": "Restart",
  "def": "Bringing a retired plant (e.g., nuclear) back online.",
  "section": "Power and the Grid",
  "sub": "Workarounds when the grid says \"not yet\""
 },
 {
  "id": 106,
  "term": "Funnel",
  "def": "Market selection → macro screen → shortlist → diligence. Eliminate as cheaply as possible at each stage.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 107,
  "term": "Macro screen",
  "def": "Programmatic GIS overlay across a whole market, applied to thousands of parcels.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 108,
  "term": "Desktop screen / desktop diligence",
  "def": "Analysis done from data and imagery before fieldwork. Cheap, fast, and the first pass.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 109,
  "term": "Detailed diligence",
  "def": "Field studies (surveys, borings, delineations) once a site is shortlisted. Expensive.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 110,
  "term": "Fatal flaw",
  "def": "A single issue that disqualifies a site regardless of its other merits. Find them early and cheaply.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 111,
  "term": "Acreage per MW",
  "def": "Rough heuristic of about 1 acre per MW of critical IT; varies with typology, cooling, and setbacks.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 112,
  "term": "Net usable acreage",
  "def": "Gross acreage minus floodplain, wetlands, setbacks, and easements.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 113,
  "term": "Long-haul fiber",
  "def": "Intercity fiber routes, typically along rail, highway, and pipeline rights-of-way.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 114,
  "term": "Diverse paths / route diversity",
  "def": "Multiple physically separate fiber entries, so one cut can't isolate the campus.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 115,
  "term": "Last mile / fiber lateral",
  "def": "The spur from a fiber route to the site. Can be a six-figure build.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 116,
  "term": "Latency",
  "def": "Network delay. Critical for inference and cloud; largely irrelevant for training.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 117,
  "term": "Geotech (geotechnical)",
  "def": "Soil and subsurface conditions affecting foundations.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 118,
  "term": "Borings",
  "def": "Soil samples drilled during a geotech investigation.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 119,
  "term": "Bearing capacity",
  "def": "How much load soil can support.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 120,
  "term": "Karst",
  "def": "Limestone terrain prone to sinkholes. Adds major foundation cost or kills sites.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 121,
  "term": "GPR (Ground-Penetrating Radar)",
  "def": "Subsurface imaging, used in karst studies.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 122,
  "term": "FEMA flood zones",
  "def": "Zone AE is the 100-year floodplain (1% annual chance), usually disqualifying. Shaded Zone X is the 500-year floodplain (0.2% annual chance), usually workable with mitigation.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 123,
  "term": "NWI (National Wetlands Inventory)",
  "def": "Federal wetland mapping, used in desktop screens.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 124,
  "term": "Jurisdictional wetland",
  "def": "A wetland under federal Clean Water Act authority. Triggers Army Corps permitting.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 125,
  "term": "Section 404 permit",
  "def": "Clean Water Act permit for filling wetlands and waters, issued by the Army Corps of Engineers.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 126,
  "term": "Wetland delineation",
  "def": "Fieldwork by a qualified wetland scientist to map wetland boundaries precisely.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 127,
  "term": "Phase I ESA (Environmental Site Assessment)",
  "def": "Standard desktop and site review for contamination history. A different \"ESA\" from the Electric Service Agreement; context tells you which.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 128,
  "term": "ALTA survey",
  "def": "A detailed boundary and title survey standard used in commercial real estate.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 129,
  "term": "Title commitment",
  "def": "Insurer's report on ownership, liens, and encumbrances.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 130,
  "term": "Easement",
  "def": "A recorded right for someone else to use part of a property (e.g., a transmission line). Eats usable acreage.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 131,
  "term": "Memorandum of option",
  "def": "A recorded notice that someone holds an option on a property. A public signal of who's controlling land.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 132,
  "term": "Water rights / water availability",
  "def": "Access to sufficient water for cooling. A rising flashpoint in drought-prone markets.",
  "section": "Site Screening and Diligence",
  "sub": null
 },
 {
  "id": 133,
  "term": "HIFLD (Homeland Infrastructure Foundation-Level Data)",
  "def": "Free federal GIS data, including transmission lines and substations.",
  "section": "Site Screening and Diligence",
  "sub": "Data sources"
 },
 {
  "id": 134,
  "term": "EIA (Energy Information Administration)",
  "def": "Federal energy data, including grid and generator datasets.",
  "section": "Site Screening and Diligence",
  "sub": "Data sources"
 },
 {
  "id": 135,
  "term": "OpenInfraMap",
  "def": "Public visualization of OpenStreetMap power and telecom infrastructure.",
  "section": "Site Screening and Diligence",
  "sub": "Data sources"
 },
 {
  "id": 136,
  "term": "RTEP (PJM Regional Transmission Expansion Plan) / MTEP (MISO Transmission Expansion Plan)",
  "def": "RTO planning documents revealing planned upgrades and constrained areas.",
  "section": "Site Screening and Diligence",
  "sub": "Data sources"
 },
 {
  "id": 137,
  "term": "Desktop power study / power-flow (load-flow) analysis",
  "def": "Consultant modeling of grid headroom at specific substations before engaging the utility.",
  "section": "Site Screening and Diligence",
  "sub": "Data sources"
 },
 {
  "id": 138,
  "term": "Entitlements",
  "def": "The land-use approvals needed to build (zoning, site plan, permits).",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 139,
  "term": "By-right",
  "def": "Use is permitted outright in the zoning district; approval is staff-level and technical, with no discretionary vote.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 140,
  "term": "SUP / CUP (Special-Use / Conditional-Use Permit)",
  "def": "Discretionary approval requiring a public hearing and a vote. Political risk.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 141,
  "term": "Site plan review",
  "def": "Technical review of a proposed site layout against code.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 142,
  "term": "Overlay district / data center ordinance",
  "def": "Zoning rules layered on top of base zoning, increasingly used to restrict or condition data centers.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 143,
  "term": "Moratorium",
  "def": "A temporary freeze on new applications, often 6–12 months while a jurisdiction studies impacts.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 144,
  "term": "Vested rights",
  "def": "The legal protection a project gains once properly permitted and substantially underway, so new ordinances can't retroactively kill it. Varies a lot by state.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 145,
  "term": "Cutoff / pipeline provision",
  "def": "Moratorium language setting which applications are grandfathered; often dated to when the moratorium was proposed, to block last-minute rushes.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 146,
  "term": "Complete application",
  "def": "An application meeting all filing requirements. Incomplete filings are a common basis for denying vesting.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 147,
  "term": "PUD (Planned Unit Development)",
  "def": "A negotiated, site-specific zoning approval.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 148,
  "term": "Economic development incentives",
  "def": "Tax and other inducements to attract projects.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 149,
  "term": "Sales/use tax exemption",
  "def": "Exemption on servers and equipment. Often the largest incentive because server refreshes recur every few years.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 150,
  "term": "Property tax abatement",
  "def": "Temporary reduction of property taxes.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 151,
  "term": "PILOT (Payment in Lieu of Taxes)",
  "def": "A negotiated payment replacing standard property taxes.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 152,
  "term": "CBA (Community Benefits Agreement)",
  "def": "A negotiated package of local commitments (funds, infrastructure, jobs) in exchange for support.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 153,
  "term": "\"Who pays\"",
  "def": "The core political objection: whether utility upgrades and new generation built for data centers raise residential bills.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 154,
  "term": "Stranded cost",
  "def": "Infrastructure built for a customer that leaves before costs are recovered, shifting the burden to other ratepayers.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 155,
  "term": "Generator testing noise / chiller noise",
  "def": "The most common acoustic complaints at hearings. Generators are tested regularly; cooling equipment runs 24/7.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 156,
  "term": "Closed-loop cooling",
  "def": "Recirculating water system with minimal ongoing withdrawal. A standard answer to water objections.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 157,
  "term": "Data Center Alley / Loudoun County",
  "def": "Northern Virginia, the world's densest data center market and the reference case for community backlash.",
  "section": "Entitlements and Community",
  "sub": null
 },
 {
  "id": 158,
  "term": "Training",
  "def": "Building an AI model. Huge synchronized GPU clusters, latency-insensitive, can pause and resume from checkpoints. Siting logic: power first.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 159,
  "term": "Inference",
  "def": "Running a trained model to answer user requests. Latency-sensitive, high uptime, can't pause. Siting logic: closer to users and network hubs.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 160,
  "term": "Cloud (traditional)",
  "def": "General-purpose computing (websites, databases, storage, enterprise apps). Mostly CPU-based, lower density.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 161,
  "term": "Cloud region / availability zone (AZ)",
  "def": "A cloud geographic area made up of multiple separate data center clusters, so one can fail without taking down service.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 162,
  "term": "Checkpointing",
  "def": "Saving a training job's state so it can pause and resume. Why training tolerates curtailment.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 163,
  "term": "Cluster / fabric",
  "def": "GPUs networked together to act as one system. Training needs tightly coupled fabrics; multi-site fabrics are emerging.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 164,
  "term": "GPU (Graphics Processing Unit)",
  "def": "The dominant AI accelerator (Nvidia).",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 165,
  "term": "TPU / Trainium / Inferentia",
  "def": "Custom AI chips from Google (TPU) and AWS (Trainium for training, Inferentia for inference).",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 166,
  "term": "H100-equivalent (H100e)",
  "def": "A common unit for comparing AI compute across chip generations.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 167,
  "term": "Rack density (kW/rack)",
  "def": "Power per server rack. Traditional cloud: single digits to about 20 kW. Current AI GPU racks: well over 100 kW, rising further. Density follows the hardware, not the workload.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 168,
  "term": "Air cooling",
  "def": "Fans and chilled air. Insufficient at AI densities.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 169,
  "term": "Direct-to-chip (DLC) liquid cooling",
  "def": "Coolant piped to cold plates on the chips. The current standard for high-density AI.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 170,
  "term": "Immersion cooling",
  "def": "Submerging hardware in dielectric fluid.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 171,
  "term": "CDU (Coolant Distribution Unit)",
  "def": "Equipment managing liquid coolant loops in a hall.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 172,
  "term": "MEP",
  "def": "Mechanical, Electrical, and Plumbing systems. The majority of data center capex.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 173,
  "term": "N / N+1 / 2N",
  "def": "Redundancy levels. N is exactly enough capacity; N+1 adds one spare component; 2N fully duplicates the systems.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 174,
  "term": "Tier (I–IV)",
  "def": "Uptime Institute reliability classification; higher tiers mean more redundancy and uptime.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 175,
  "term": "UPS (Uninterruptible Power Supply)",
  "def": "Battery systems bridging power until generators start.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 176,
  "term": "Switchgear",
  "def": "Electrical equipment that routes and protects power. Must stay above flood elevations.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 177,
  "term": "Commissioning",
  "def": "Testing all systems before handover. Rent usually commences after.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 178,
  "term": "Fungibility / flex design",
  "def": "Designing halls that can serve training or inference, and survive GPU generation changes, so the asset doesn't strand.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 179,
  "term": "Technology / obsolescence risk",
  "def": "The risk that cooling or density standards change mid-lease. Sits with whoever paid for the MEP.",
  "section": "Building and Technology",
  "sub": null
 },
 {
  "id": 180,
  "term": "Meta Compute",
  "def": "Top-level organization created January 2026, reporting to Zuckerberg, owning AI infrastructure. Stated goal: \"tens of gigawatts this decade, hundreds of gigawatts or more over time.\"",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 181,
  "term": "Santosh Janardhan",
  "def": "Head of global infrastructure; co-leads Meta Compute. Owns technical architecture, silicon, and data center construction and operations.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 182,
  "term": "Daniel Gross",
  "def": "Co-leads Meta Compute; runs long-range capacity planning, supplier partnerships, and business modeling.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 183,
  "term": "Dina Powell McCormick",
  "def": "Meta president and vice chair; partners with governments and sovereigns on financing and deploying infrastructure.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 184,
  "term": "Rachel Peterson",
  "def": "VP of data centers.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 185,
  "term": "MSL (Meta Superintelligence Labs)",
  "def": "Meta's frontier AI research org; the core internal customer for gigawatt training clusters.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 186,
  "term": "Prometheus",
  "def": "About 1 GW AI training cluster in New Albany, Ohio. Known for weatherproof tent structures (about 30 MW each) that cut deployment time dramatically, a hybrid grid-plus-on-site power strategy, and AEP Ohio's data center tariff.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 187,
  "term": "Hyperion",
  "def": "Meta's largest campus, in Richland Parish, Louisiana. Now planned at 5 GW and $50B+, roughly 3,200–3,650 acres. Powered by a 10-plant Entergy gas buildout (about 7.5 GW) plus renewables and storage Meta helps fund. Financed via the Blue Owl JV.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 188,
  "term": "Project Evest",
  "def": "Name associated with the Hyperion expansion in Entergy's Louisiana regulatory filings.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 189,
  "term": "El Paso campus",
  "def": "About 1 GW, online targeted 2028. Financed via a BlackRock JV (about $14B development cost). Gas and battery generation by NextEra. Facing local pushback on water and the tax incentive.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 190,
  "term": "Lebanon, Indiana campus",
  "def": "About 1 GW, $10B+. Template for Meta's community terms: pays full energy cost, a 20-year community energy-assistance fund, closed-loop water.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 191,
  "term": "Tents (Meta usage)",
  "def": "Rapidly deployed, hurricane-rated tent structures housing GPU clusters. Requirements narrowed to what training needs, trading conventional data center features for speed.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 192,
  "term": "AEP Ohio DCT (Data Center Tariff)",
  "def": "AEP Ohio's large-load tariff with an 85% minimum-demand commitment. Meta has an interim arrangement drawing up to 250 MW under it through 2028.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 193,
  "term": "Entergy / LPSC",
  "def": "Louisiana's utility and its regulator. Three gas plants for Hyperion approved in 2025; seven more pending. Critics flag the 15-year contract vs. a 30–40 year plant life.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 194,
  "term": "Blue Owl JV (Hyperion, \"Beignet\")",
  "def": "October 2025, about $27B. Blue Owl funds own 80%, Meta 20%. Meta manages construction and operations and leases the campus on four-year initial terms with extensions, backed by a residual value guarantee.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 195,
  "term": "BlackRock JV (El Paso)",
  "def": "2026, same 80/20 template. Meta contributed land and construction-in-progress; BlackRock contributed cash plus venture-level debt.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 196,
  "term": "Nuclear deals (TerraPower, Oklo, Vistra)",
  "def": "January 2026 agreements supporting up to 6.6 GW of new and existing clean energy by 2035. A long-game firm power strategy, not near-term speed-to-power.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 197,
  "term": "Project Splitrock",
  "def": "Meta-backed, roughly 1,077-acre campus in Howell Township, Michigan, withdrawn in December 2025 after planning commissions recommended denial. The reference case for Meta community risk.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 198,
  "term": "Zeewolde",
  "def": "Earlier Meta campus in the Netherlands abandoned after political opposition. An older precedent for the same lesson.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 199,
  "term": "\"Pays the full cost\"",
  "def": "Meta's standard public line on energy, water, and infrastructure, aimed at the \"who pays\" objection.",
  "section": "Meta-Specific",
  "sub": null
 },
 {
  "id": 200,
  "term": "Owned vs. leased / colocation strategy",
  "def": "Meta's site selection team covers both. The JV structures blur the line: Meta develops and operates, sells majority ownership to an infrastructure fund, and leases the campus back.",
  "section": "Meta-Specific",
  "sub": null
 }
];
