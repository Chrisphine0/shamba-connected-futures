/**
 * CMS-ready insight structure. Content is adapted from Shamba Records' own
 * company write-up — replace or extend from a CMS when one is connected.
 */
export type Insight = {
  slug: string;
  title: string;
  category: "Fintech" | "Technology" | "Agricultural innovation" | "Digital transformation" | "Perspectives";
  excerpt: string;
  readTime: string;
  body: { heading?: string; text: string }[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "de-risking-the-producer",
    title: "De-risking the producer: building resilience in an era of uncertainty",
    category: "Perspectives",
    excerpt:
      "Why data, finance and insurance must work together to move smallholders from vulnerability to viability.",
    readTime: "5 min read",
    body: [
      {
        text: "For decades, Africa's smallholder farmers have faced the harshest consequences of climate change — unpredictable rains, drought, floods, pest outbreaks, rising input costs and market instability — often without the tools to respond.",
      },
      {
        heading: "The gap",
        text: "Many farmers in Sub-Saharan Africa operate without insurance, access to credit or data-driven decision tools, and significant shares of harvests are lost after production due to inefficiencies and climate-induced shocks.",
      },
      {
        heading: "A connected response",
        text: "Our approach links verified records to credit scoring, insurance and advisory. When a producer's data is trusted, lenders and insurers can price risk more fairly — and producers can plan, invest and recover with greater confidence.",
      },
    ],
  },
  {
    slug: "records-as-collateral",
    title: "From records to collateral: how data unlocks finance",
    category: "Fintech",
    excerpt:
      "Alternative credit scoring turns everyday transaction and harvest history into a foundation for responsible lending.",
    readTime: "4 min read",
    body: [
      {
        text: "Traditional lending relies on bank history and physical collateral — two things many producers and small enterprises do not have. Yet they generate valuable data every season.",
      },
      {
        heading: "Alternative credit",
        text: "An AI credit engine can analyse harvest history, regional trends and historical performance to produce alternative credit scores that help financial institutions lend to customers previously invisible to formal finance.",
      },
      {
        heading: "Closing the loop",
        text: "Embedded repayment aligned to production cycles, and payments routed through verified transaction flows, help lenders deploy capital safely while borrowers repay when they earn.",
      },
    ],
  },
  {
    slug: "traceability-and-trust",
    title: "Traceability and trust in global trade",
    category: "Technology",
    excerpt:
      "Why tamper-proof records are becoming a passport to premium and regulated markets.",
    readTime: "4 min read",
    body: [
      {
        text: "International buyers increasingly demand proof of origin, safety and sustainability. Regulations such as the EU Deforestation Regulation (EUDR) are raising the bar for every link in the chain.",
      },
      {
        heading: "Immutable records",
        text: "Blockchain-backed traceability creates records from the farm gate to export that cannot be quietly altered, replacing fragile paper trails with verifiable digital evidence.",
      },
      {
        heading: "Value for every participant",
        text: "Producers gain access to premium buyers, exporters reduce compliance risk and buyers gain confidence — trust becomes something the whole chain can share.",
      },
    ],
  },
];

export const insightBySlug = (slug: string) => INSIGHTS.find((i) => i.slug === slug);
