import { Banknote, BrainCircuit, Network, Link2, type LucideIcon } from "lucide-react";
import finance from "@/assets/sh-finance.jpg";
import cooperative from "@/assets/sh-cooperative.jpg";
import agribusiness from "@/assets/sh-agribusiness.jpg";
import producer from "@/assets/sh-producer.jpg";
import supply from "@/assets/sh-supply.jpg";
import tech from "@/assets/sh-tech.jpg";

export const COMPANY = {
  name: "Shamba Records",
  email: "info@shambarecords.com",
  website: "www.shambarecords.com",
  country: "Kenya",
  tagline: "Technology · Finance · Innovation",
};

export type Capability = {
  slug: string;
  title: string;
  short: string;
  body: string;
  icon: LucideIcon;
  points: string[];
};

export const CAPABILITIES: Capability[] = [
  {
    slug: "fintech",
    title: "Financial Technology",
    short: "Digital lending, financial infrastructure, embedded finance and accessible financial services.",
    body: "Embedded fintech rails that automate mobile money payouts, trade factoring and closed-loop loan recovery — so capital can move safely through verified transaction flows.",
    icon: Banknote,
    points: ["Digital lending", "Embedded finance", "Mobile money payouts", "Closed-loop recovery"],
  },
  {
    slug: "ai-data",
    title: "Artificial Intelligence & Data",
    short: "Intelligent insights, predictive analytics, data intelligence and AI-powered decision support.",
    body: "An AI credit engine that turns transaction and harvest history into alternative credit scores, and climate intelligence that translates satellite and soil data into actionable guidance.",
    icon: BrainCircuit,
    points: ["Alternative credit scoring", "Predictive analytics", "Climate intelligence", "Decision support"],
  },
  {
    slug: "infrastructure",
    title: "Digital Infrastructure",
    short: "Connected platforms, enterprise systems, integrations and scalable digital solutions.",
    body: "Enterprise platforms, web portals and USSD & SMS access that connect organisations to the people they serve — on any phone, with or without a smartphone.",
    icon: Network,
    points: ["Enterprise platforms", "Integrations & APIs", "Web portals", "USSD & SMS access"],
  },
  {
    slug: "blockchain",
    title: "Blockchain & Traceability",
    short: "Transparent digital records, supply-chain visibility and trusted data infrastructure.",
    body: "Immutable records from origin to export that support provenance, compliance requirements such as EUDR and trust between trading partners.",
    icon: Link2,
    points: ["Immutable records", "Supply-chain visibility", "Provenance", "Compliance readiness"],
  },
];

export type Product = {
  slug: string;
  name: string;
  area: string;
  summary: string;
  description: string;
  capability: Capability["slug"];
  tone: "light" | "dark" | "ivory";
};

export const PRODUCTS: Product[] = [
  {
    slug: "shamba-connect",
    name: "Shamba Connect",
    area: "Enterprise and cooperative management",
    summary: "The digital operating system for cooperatives, aggregators and agribusinesses.",
    description:
      "Shamba Connect is the management engine for cooperatives, aggregators and agribusinesses — streamlining member onboarding, performance tracking and payment integration, and connecting smallholders, processors and exporters into a single data-powered ecosystem.",
    capability: "infrastructure",
    tone: "dark",
  },
  {
    slug: "microvault",
    name: "MicroVault",
    area: "Digital lending and financial infrastructure",
    summary: "Digital credit infrastructure that transforms verified data into lending pools.",
    description:
      "MicroVault is digital credit infrastructure that transforms verified data into lending pools, helping financial institutions deploy credit safely through verified transaction flows.",
    capability: "fintech",
    tone: "light",
  },
  {
    slug: "cash-boost",
    name: "Cash Boost",
    area: "Agricultural financing",
    summary: "Fast-track input financing and working capital, powered by real performance data.",
    description:
      "Shamba Cash Boost uses actual farm performance — not bank history — to unlock fast, fair and transparent microloans for input financing and working capital, powered by intelligent credit scoring.",
    capability: "fintech",
    tone: "ivory",
  },
  {
    slug: "tracexpert",
    name: "TraceXpert",
    area: "Blockchain-powered traceability",
    summary: "Tamper-proof, farm-to-fork provenance for export-ready supply chains.",
    description:
      "TraceXpert uses blockchain to track produce from the farm to global markets, providing verified, tamper-proof traceability of origin, safety and sustainability and replacing paper trails.",
    capability: "blockchain",
    tone: "light",
  },
  {
    slug: "smartseason",
    name: "SmartSeason",
    area: "Field monitoring and intelligence",
    summary: "AI-powered agronomic advisory in local languages.",
    description:
      "SmartSeason delivers personalised insights on when to plant, irrigate, fertilise and harvest, based on weather, soil and satellite data — with advisory available in local languages.",
    capability: "ai-data",
    tone: "ivory",
  },
  {
    slug: "shamba-shield",
    name: "Shamba Shield",
    area: "Digital insurance",
    summary: "Data-driven protection for crops, livestock, equipment and income.",
    description:
      "Shamba Shield is a digital insurance platform covering crops, livestock, equipment and income, backed by verified records so claims can be processed quickly, transparently and fairly.",
    capability: "fintech",
    tone: "dark",
  },
  {
    slug: "vetcare",
    name: "VetCare+",
    area: "Veterinary technology",
    summary: "AI-driven animal health with connected veterinary support.",
    description:
      "VetCare+ uses AI to monitor livestock health, detect early risks and connect farmers to veterinary support.",
    capability: "ai-data",
    tone: "light",
  },
  {
    slug: "carbongrow",
    name: "CarbonGrow",
    area: "Sustainability and carbon markets",
    summary: "Connecting regenerative practices to verified carbon markets.",
    description:
      "CarbonGrow enables farms practising agroforestry and regenerative agriculture to sequester carbon and access verified carbon credit markets, with transparent tracking.",
    capability: "blockchain",
    tone: "ivory",
  },
];

export type Industry = {
  slug: string;
  title: string;
  short: string;
  image: string;
  challenges: string[];
  help: string;
  products: Product["slug"][];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "financial-institutions",
    title: "Financial Institutions & Capital Providers",
    short: "Data and rails to deploy credit, insurance and capital with confidence.",
    image: finance,
    challenges: [
      "Limited data on borrowers who sit outside formal finance",
      "High cost of reaching and servicing dispersed customers",
      "Difficulty monitoring and recovering loans",
    ],
    help: "Alternative credit scoring, verified transaction flows and embedded repayment make it possible to lend and insure where data was previously missing.",
    products: ["microvault", "cash-boost", "shamba-shield"],
  },
  {
    slug: "cooperatives",
    title: "Cooperatives & Membership Organisations",
    short: "Digital tools to manage members, payments and performance.",
    image: cooperative,
    challenges: [
      "Paper-based member records and delayed payments",
      "Limited visibility of collections and quality",
      "Weak links to finance and premium buyers",
    ],
    help: "A single digital system for onboarding, records, payments and reporting — connecting members to finance, inputs and markets.",
    products: ["shamba-connect", "cash-boost", "tracexpert"],
  },
  {
    slug: "agribusinesses",
    title: "Agribusinesses & Enterprises",
    short: "Connected operations from sourcing to processing.",
    image: agribusiness,
    challenges: [
      "Fragmented supplier data across value chains",
      "Unpredictable supply volumes and quality",
      "Growing reporting and compliance demands",
    ],
    help: "Integrated platforms that digitise supplier networks, forecast supply and generate trusted records for partners and regulators.",
    products: ["shamba-connect", "tracexpert", "smartseason"],
  },
  {
    slug: "producers",
    title: "Farmers & Producers",
    short: "Access to information, finance, insurance and markets — on any phone.",
    image: producer,
    challenges: [
      "Limited access to credit and insurance",
      "Climate shocks, pests and post-harvest losses",
      "Distance from fair and premium markets",
    ],
    help: "Mobile, USSD and SMS access to advisory, financing, insurance and buyers, so producers can turn their records into opportunity.",
    products: ["cash-boost", "smartseason", "vetcare", "shamba-shield"],
  },
  {
    slug: "supply-chains",
    title: "Buyers, Exporters & Supply Chains",
    short: "Verified provenance and visibility from origin to market.",
    image: supply,
    challenges: [
      "Proving origin and sustainability to international buyers",
      "Meeting regulations such as EUDR",
      "Paper trails that are slow and easy to lose",
    ],
    help: "Blockchain-backed traceability that creates tamper-proof records from farm gate to export.",
    products: ["tracexpert", "carbongrow", "shamba-connect"],
  },
  {
    slug: "partners",
    title: "Technology & Development Partners",
    short: "Infrastructure to scale programmes and measure impact.",
    image: tech,
    challenges: [
      "Reaching communities at scale",
      "Measuring and reporting programme outcomes",
      "Building sustainable delivery channels",
    ],
    help: "Shared digital infrastructure and data that help partners deliver programmes, integrate services and track outcomes.",
    products: ["shamba-connect", "smartseason", "carbongrow"],
  },
];

/** Figures as published in the Shamba Records 2025 company write-up. */
export const IMPACT_STATS = [
  { value: "250,000+", label: "Active producers" },
  { value: "30%+", label: "Productivity gains" },
  { value: "50%", label: "Loss reduction" },
  { value: "6.5M+", label: "Farmer pathway via KALRO MOU" },
];

export const PARTNER_TYPES = [
  { name: "KALRO", detail: "MOU unlocking a pathway to 6.5 million farmers across Kenya." },
  { name: "Financial institutions", detail: "Deploying credit safely through verified transaction flows." },
  { name: "Cooperatives & CBOs", detail: "Extending reach to farming communities." },
  { name: "Agrovets & input dealers", detail: "Ensuring access to genuine, certified products." },
  { name: "Veterinary networks", detail: "Delivering timely animal health support." },
  { name: "Exporters & offtakers", detail: "Connecting producers to premium markets." },
];

export const productBySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
