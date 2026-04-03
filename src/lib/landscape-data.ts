// =============================================================================
// Partial Reprogramming & Cellular Rejuvenation Landscape Data
// Last updated: 2026-04-03
// =============================================================================

// -----------------------------------------------------------------------------
// COMPANIES
// -----------------------------------------------------------------------------

export interface Company {
  name: string;
  founded: number;
  hq: string;
  totalFunding: string;
  keyInvestors: string[];
  approach: string;
  pipelineStatus: string;
  website: string;
  mission: string;
  status: "active" | "acquired" | "merged" | "inactive";
}

export const companies: Company[] = [
  {
    name: "Altos Labs",
    founded: 2022,
    hq: "Redwood City, CA",
    totalFunding: "$5.56B",
    keyInvestors: [
      "Yuri Milner",
      "Jeff Bezos",
      "ARCH Venture Partners",
      "8VC",
      "Mubadala Capital",
    ],
    approach:
      "In vivo partial epigenetic reprogramming using Yamanaka factors to reverse cellular aging without inducing pluripotency. Acquired Dorian Therapeutics (senotherapeutics) in May 2025.",
    pipelineStatus:
      "Preclinical/Early clinical. Extended mouse lifespan via targeted partial reprogramming (2024). Early human safety testing reportedly began August 2025.",
    website: "https://www.altoslabs.com",
    mission:
      "Transform medicine through cellular rejuvenation programming to restore cell health and resilience.",
    status: "active",
  },
  {
    name: "Retro Biosciences",
    founded: 2021,
    hq: "San Francisco, CA",
    totalFunding: "$1.18B",
    keyInvestors: [
      "Sam Altman",
      "Sandro Salsano",
      "Various VCs and sovereign wealth funds",
    ],
    approach:
      "Multi-modal longevity platform: partial reprogramming, autophagy modulation, and plasma-inspired therapies. AI-driven drug discovery for cellular rejuvenation of blood and brain cells.",
    pipelineStatus:
      "Clinical trials initiated for three drugs in 2025, including an Alzheimer's treatment (microglia replacement) entering early-stage trial in Australia. Blood stem cell therapy and metabolic caloric-restriction mimetics in development.",
    website: "https://www.retro.bio",
    mission:
      "Add 10 years to healthy human lifespan by targeting the cellular hallmarks of aging.",
    status: "active",
  },
  {
    name: "NewLimit",
    founded: 2021,
    hq: "San Francisco, CA",
    totalFunding: "$325M+",
    keyInvestors: [
      "Kleiner Perkins",
      "Founders Fund",
      "Khosla Ventures",
      "Eli Lilly",
      "Dimension Capital",
      "Nat Friedman & Daniel Gross",
    ],
    approach:
      "Epigenetic reprogramming via mRNA delivered in lipid nanoparticles to specific tissues. Uses machine learning to identify transcription factor payloads that restore youthful gene expression.",
    pipelineStatus:
      "Preclinical, approaching IND. Lead program: mRNA-based liver rejuvenation for alcohol-related liver disease. Selected lead reprogramming payload in Sept 2025. Expanding into immune cell rejuvenation and vascular endothelial cell programs. Valuation: $1.62B.",
    website: "https://www.newlimit.com",
    mission:
      "Extend human healthspan by reversing age-related epigenetic changes in targeted tissues.",
    status: "active",
  },
  {
    name: "Turn Biotechnologies",
    founded: 2018,
    hq: "Mountain View, CA",
    totalFunding: "$30.1M",
    keyInvestors: [
      "Khosla Ventures",
      "HanAll Biopharma",
      "Daewoong Pharmaceutical",
      "Formic Ventures",
      "VitaDAO",
    ],
    approach:
      "Proprietary Epigenetic Reprogramming of Age (ERA) platform using mRNA to transiently express reprogramming factors, restoring youthful cellular function without full dedifferentiation. Acquired ARMMs vesicular delivery tech in March 2025.",
    pipelineStatus:
      "Preclinical, approaching clinical. $300M licensing deal with HanAll Biopharma for ophthalmology/otology. Plans to initiate clinical trials for skin rejuvenation in 2026. Klotho Neuro acquisition LOI expired Oct 2025 (assets remain with Turn).",
    website: "https://www.turn.bio",
    mission:
      "Develop mRNA medicines that restore youthful cell function to combat age-related diseases.",
    status: "active",
  },
  {
    name: "Life Biosciences",
    founded: 2017,
    hq: "Boston, MA",
    totalFunding: "$158M+",
    keyInvestors: [
      "Alpha Wave Ventures",
      "Abundance Partners",
      "Hybridge Capital",
      "Alzheimer's Drug Discovery Foundation",
    ],
    approach:
      "Partial Epigenetic Reprogramming (PER) platform using three Yamanaka factors (OCT4, SOX2, KLF4) delivered via AAV gene therapy to restore aged/damaged cells. Acquired Iduna Therapeutics (2021).",
    pipelineStatus:
      "CLINICAL STAGE. FDA cleared IND for ER-100 in Jan 2026 -- the FIRST-EVER partial reprogramming therapy in human clinical trials. Phase 1 (NCT07290244) enrolling patients with open-angle glaucoma and NAION. MASH program in preclinical.",
    website: "https://www.lifebiosciences.com",
    mission:
      "Redefine aging by developing cellular rejuvenation therapies that reverse and prevent age-related diseases.",
    status: "active",
  },
  {
    name: "Calico (California Life Company)",
    founded: 2013,
    hq: "South San Francisco, CA",
    totalFunding: "$3.5B+ (Alphabet subsidiary + AbbVie partnership)",
    keyInvestors: [
      "Alphabet (Google)",
      "AbbVie (partnership terminated Nov 2025)",
    ],
    approach:
      "Biology of aging research across multiple modalities: small molecules, genetics, and computational biology. Focused on understanding fundamental aging biology and developing interventions for age-related diseases.",
    pipelineStatus:
      "Clinical-stage (though pivoting). Lead drug fosigotifator failed Phase II/III for ALS (Jan 2025). AbbVie partnership terminated Nov 2025 after $1B+ invested. Continuing immuno-oncology and neurodegeneration programs.",
    website: "https://www.calicolabs.com",
    mission:
      "Tackle the challenge of aging and age-related diseases to enable people to lead longer and healthier lives.",
    status: "active",
  },
  {
    name: "Shift Bioscience",
    founded: 2020,
    hq: "Cambridge, UK",
    totalFunding: "$16M",
    keyInvestors: ["BGF", "Kindred Capital", "Jonathan Milner"],
    approach:
      "AI-powered 'virtual cell' platform that models epigenetic states to identify safe, non-Yamanaka rejuvenation gene targets. Lead candidate SB000 rejuvenates epigenetic clocks by 3-10 years per month of overexpression.",
    pipelineStatus:
      "Preclinical discovery. Identified novel rejuvenation gene SB000 selectively expressed in early development. Building IP portfolio around novel gene targets. Funded through 2026.",
    website: "https://shiftbioscience.com",
    mission:
      "Use AI and cell simulation to discover safe gene-based rejuvenation therapies that go beyond Yamanaka factors.",
    status: "active",
  },
  {
    name: "YouthBio Therapeutics",
    founded: 2021,
    hq: "Seattle, WA",
    totalFunding: "Undisclosed (early-stage)",
    keyInvestors: ["MassChallenge", "RESI Innovator's Pitch"],
    approach:
      "Tissue-specific AAV gene therapy delivering partial reprogramming factors (OSKM) to targeted tissues. Lead program YB002 targets dentate gyrus neurons in hippocampus for Alzheimer's disease.",
    pipelineStatus:
      "Pre-IND. Positive FDA INTERACT meeting Sept 2025: agency confirmed bioactivity and supports path to first-in-human trial. Preclinical data shows cognitive improvement in aged mice. Aiming for clinical trials in ~3 years.",
    website: "https://youthbiotx.com",
    mission:
      "Develop tissue-specific gene therapies that partially reprogram cells to treat neurodegenerative and age-related diseases.",
    status: "active",
  },
  {
    name: "Rejuvenate Bio",
    founded: 2018,
    hq: "San Diego, CA",
    totalFunding: "$14.6M",
    keyInvestors: [
      "Kendall Capital Partners",
      "Methuselah Foundation (grant)",
    ],
    approach:
      "AAV gene therapy overexpressing longevity genes sTGFbetaR2 and FGF21 to reduce TGF-beta1 and boost FGF21 levels. Dogs-first strategy before human translation.",
    pipelineStatus:
      "Preclinical. Lead program for canine mitral valve disease (MVD) in partnership with ACKCS Club. Pipeline includes RJB-0402 (liver-directed FGF21 for metabolic diseases). Multiple canine programs before human IND.",
    website: "https://rejuvenatebio.com",
    mission:
      "Use gene therapy to treat age-related diseases, starting with man's best friend and translating to humans.",
    status: "active",
  },
  {
    name: "Conception Biosciences",
    founded: 2018,
    hq: "Berkeley, CA",
    totalFunding: "$38M",
    keyInvestors: [
      "Sam Altman",
      "Jaan Tallinn",
      "Age1",
      "Calm Ventures",
      "Gaingels",
    ],
    approach:
      "In vitro gametogenesis (IVG): converting blood-derived iPSCs into functional human egg cells using developmental biology and computational approaches. Intersects with reprogramming through iPSC generation.",
    pipelineStatus:
      "Research stage. Working on converting induced pluripotent stem cells into oocytes. Advancing through developmental biology milestones toward functional gametes.",
    website: "https://www.conception.bio",
    mission:
      "Advance the future of fertility by making human eggs from stem cells.",
    status: "active",
  },
  {
    name: "Oisin Biotechnologies",
    founded: 2016,
    hq: "Seattle, WA",
    totalFunding: "$27.5M",
    keyInvestors: [
      "AbbVie Ventures",
      "Methuselah Foundation",
      "VitaDAO",
      "Kizoo Technology Capital",
    ],
    approach:
      "Lipid nanoparticle-delivered 'suicide gene' therapy that selectively eliminates senescent cells (SENSOlytic) and unwanted fat cells (SENSOlipidic). Targets p16-positive senescent cells.",
    pipelineStatus:
      "Late preclinical. $15M Series A (July 2024) led by AbbVie Ventures. GLP tox studies initiated late 2024, IND filing planned 2025, Phase 1 target 2026. Lead programs in sarcopenia and fat reduction.",
    website: "https://www.oisinbio.com",
    mission:
      "Develop genetic medicines that target and eliminate senescent cells to combat age-related frailty and disease.",
    status: "active",
  },
  {
    name: "Iduna Therapeutics (Life Biosciences subsidiary)",
    founded: 2017,
    hq: "Boston, MA (integrated into Life Bio)",
    totalFunding: "Acquired by Life Biosciences (Sept 2021)",
    keyInvestors: ["Life Biosciences (parent)"],
    approach:
      "Epigenetic reprogramming for tissue regeneration in organs that cannot self-repair. Technology forms the core of Life Biosciences' PER platform for optic nerve and liver rejuvenation.",
    pipelineStatus:
      "Integrated into Life Biosciences pipeline. Technology underpins ER-100 program now in Phase 1 clinical trials (NCT07290244). NOT acquired by AstraZeneca -- acquired by Life Biosciences in 2021.",
    website: "https://www.lifebiosciences.com",
    mission:
      "Enable tissue regeneration through partial epigenetic reprogramming in non-regenerative organs.",
    status: "acquired",
  },
  {
    name: "Marble Therapeutics",
    founded: 2020,
    hq: "Cambridge, MA",
    totalFunding: "$15M (Seed)",
    keyInvestors: ["Cambrian Bio"],
    approach:
      "Skin-targeted AAV gene delivery for rejuvenation. Spun out from George Church's lab at Harvard. Part of the broader Church lab ecosystem of longevity-focused startups.",
    pipelineStatus:
      "Early preclinical. Developing AAV-based gene therapies for skin indications. Connected to Cambrian Bio portfolio.",
    website: "N/A (stealth)",
    mission:
      "Develop gene therapies for tissue rejuvenation using insights from George Church's aging research.",
    status: "active",
  },
  {
    name: "Gordian Biotechnology",
    founded: 2018,
    hq: "San Francisco, CA",
    totalFunding: "$60M",
    keyInvestors: [
      "The Longevity Fund",
      "Founders Fund",
      "Gigafund",
      "Fifty Years",
      "Arctica Ventures",
    ],
    approach:
      "High-throughput in vivo screening platform (Mosaic Screening + Pythia AI) that tests thousands of gene therapies simultaneously in single animals to predict clinical outcomes for age-related diseases.",
    pipelineStatus:
      "Platform validated. Proof-of-concept predicts MASH clinical outcomes with >80% accuracy. Lead programs in osteoarthritis and obesity. Pharma partnerships in development.",
    website: "https://www.gordian.bio",
    mission:
      "Discover therapies that cure age-related diseases through patient-predictive in vivo screening of gene targets.",
    status: "active",
  },
  {
    name: "AgeX Therapeutics (merged into Serina Therapeutics)",
    founded: 2017,
    hq: "Formerly Alameda, CA",
    totalFunding: "$13.16M+ (pre-merger)",
    keyInvestors: ["Juvenescence"],
    approach:
      "Pluripotent stem cell-derived therapies for age-related diseases: brown adipose tissue (AGEX-BAT1), vascular progenitor cells (AGEX-VASC1), and iTR drug platform to restore regenerative potential.",
    pipelineStatus:
      "MERGED. Completed all-stock merger with Serina Therapeutics in March 2024. Combined entity operates as Serina Therapeutics focusing on neurological diseases. Original aging pipeline may be deprioritized.",
    website: "https://www.agexinc.com",
    mission:
      "Develop regenerative therapeutics and an iTR platform to restore youthful tissue repair capacity.",
    status: "merged",
  },
  {
    name: "Loyal",
    founded: 2019,
    hq: "San Francisco, CA",
    totalFunding: "$150M+",
    keyInvestors: [
      "Andreessen Horowitz",
      "Bain Capital Ventures",
      "Khosla Ventures",
      "Valor Equity Partners",
      "First Round Capital",
    ],
    approach:
      "Developing FDA-regulated drugs to extend healthy canine lifespan by targeting metabolic dysfunction associated with aging. Uses geroscience approach (GLP-1/IGF-1 pathways).",
    pipelineStatus:
      "MOST ADVANCED in animal longevity. LOY-002 (daily oral tablet for senior dogs 10+): FDA accepted both RXE (efficacy) and TAS (safety) packages for conditional approval. STAY study: largest veterinary trial in history (1,000+ dogs, 70 clinics). On track for first FDA-approved lifespan extension drug.",
    website: "https://loyal.com",
    mission:
      "Develop the first FDA-approved drugs to extend healthy lifespan in dogs.",
    status: "active",
  },
  {
    name: "Rubedo Life Sciences",
    founded: 2018,
    hq: "Sunnyvale, CA",
    totalFunding: "$52M",
    keyInvestors: [
      "Khosla Ventures",
      "Ahren Innovation Capital",
      "Hevolution Foundation",
    ],
    approach:
      "Small-molecule senolytics engineered to selectively target and clear senescent cells responsible for chronic age-related inflammation and disease. Precision senolytic approach.",
    pipelineStatus:
      "Preclinical. $40M Series A closed April 2024. Lead candidate RLS-1496 is a topical senolytic for chronic atopic dermatitis and psoriasis. Additional lung programs in development.",
    website: "https://www.rubedolife.com",
    mission:
      "Engineer therapies that eliminate the senescent cells driving chronic age-related diseases.",
    status: "active",
  },
  {
    name: "Dorian Therapeutics (acquired by Altos Labs)",
    founded: 2019,
    hq: "Formerly New York, NY (Stanford spinout)",
    totalFunding: "Acquired by Altos Labs (May 2025)",
    keyInvestors: ["Altos Labs (acquirer)", "Previous undisclosed investors"],
    approach:
      "Small-molecule 'senoblockers' that neutralize harmful effects of senescent cells while reactivating natural repair mechanisms. Distinct from senolytics -- blocks senescence signals rather than killing cells.",
    pipelineStatus:
      "Integrated into Altos Labs. Preclinical efficacy demonstrated in models of lung fibrosis and osteoarthritis prior to acquisition.",
    website: "https://www.altoslabs.com",
    mission:
      "Develop senoblocker drugs that neutralize cellular senescence to restore tissue regeneration.",
    status: "acquired",
  },
];

// -----------------------------------------------------------------------------
// ACADEMIC LABS
// -----------------------------------------------------------------------------

export interface AcademicLab {
  institution: string;
  principalInvestigator: string;
  location: string;
  focus: string;
  keyContributions: string;
  notableConnection: string;
}

export const academicLabs: AcademicLab[] = [
  {
    institution: "Salk Institute for Biological Studies",
    principalInvestigator: "Juan Carlos Izpisua Belmonte (now at Altos Labs)",
    location: "La Jolla, CA",
    focus:
      "Pioneered in vivo partial reprogramming using cyclic OSKM expression in progeroid and naturally aged mice.",
    keyContributions:
      "First demonstration that cyclic partial reprogramming extends lifespan by 30% in progeria mice (2016). Showed rejuvenation of mitochondria and epigenetic clocks without tumor formation.",
    notableConnection:
      "Belmonte closed his Salk lab to join Altos Labs. Work forms the scientific foundation for most reprogramming companies.",
  },
  {
    institution: "Harvard Medical School / Blavatnik Institute",
    principalInvestigator: "David Sinclair",
    location: "Boston, MA",
    focus:
      "Information Theory of Aging. OSK (3-factor) gene therapy to reverse epigenetic age in specific tissues. DNA methylation clocks.",
    keyContributions:
      "REVIVER mice: restored vision in aged glaucoma mice using OSK factors (2020). Co-founded Life Biosciences, whose ER-100 became the first partial reprogramming therapy to enter human clinical trials (2026).",
    notableConnection:
      "Co-founder of Life Biosciences. Scientific advisor to multiple longevity companies. Published the 'Information Theory of Aging' framework.",
  },
  {
    institution: "Harvard Medical School / Wyss Institute",
    principalInvestigator: "George Church",
    location: "Boston, MA",
    focus:
      "Multiplex gene therapy for aging using AAV vectors delivering longevity-associated genes (FGF21, sTGFbetaR2, klotho).",
    keyContributions:
      "Demonstrated that a single AAV gene therapy cocktail can reverse multiple age-related conditions simultaneously in mice. Spawned Rejuvenate Bio, Marble Therapeutics, GC Therapeutics, and other startups.",
    notableConnection:
      "Lab has spun out 10+ companies in the longevity space. Rejuvenate Bio, Marble Therapeutics, and GC Therapeutics (raised $75M in 2024) are direct spinouts.",
  },
  {
    institution: "Stanford University",
    principalInvestigator: "Vittorio Sebastiano",
    location: "Stanford, CA",
    focus:
      "Transient reprogramming of human cells using non-integrating mRNA expression of Yamanaka factors. Rejuvenation of multiple cell types.",
    keyContributions:
      "Published landmark study showing 'dramatic rejuvenation across all hallmarks but one in all cell types tested.' Demonstrated restoration of mitochondrial efficiency and protein homeostasis in aged cells. 2025 Cell publication on reversing mesenchymal drift.",
    notableConnection:
      "Co-founder of Turn Biotechnologies. Research provides scientific basis for mRNA-based reprogramming approaches.",
  },
  {
    institution: "Babraham Institute",
    principalInvestigator: "Wolf Reik",
    location: "Cambridge, UK",
    focus:
      "Epigenetic clocks, maturation-phase reprogramming, and single-cell DNA methylation aging. Developed 'time jump' partial reprogramming protocol.",
    keyContributions:
      "Demonstrated that reprogramming 60-year-old fibroblasts to the maturation phase (then stopping) rejuvenated them to a 25-30 year-old state by transcriptome, methylome, and collagen function (2022). Developed scEpiAge single-cell epigenetic age predictor (2024).",
    notableConnection:
      "Former head of Epigenetics programme at Babraham. Research established the concept of 'maturation-phase' reprogramming distinct from full iPSC conversion.",
  },
  {
    institution: "Altos Labs (Institute of Science)",
    principalInvestigator: "Shinya Yamanaka (Scientific Advisor)",
    location: "Redwood City, CA / Cambridge, UK / San Diego, CA",
    focus:
      "Cellular rejuvenation programming. Original discoverer of OSKM factors (Nobel Prize 2012). Advises on safe therapeutic application of reprogramming.",
    keyContributions:
      "2006: Discovery of four transcription factors (Oct4, Sox2, Klf4, c-Myc) that reprogram somatic cells to pluripotent state -- the foundation of all partial reprogramming research.",
    notableConnection:
      "Nobel laureate. Senior Scientific Advisor at Altos Labs. His original iPSC discovery spawned the entire field.",
  },
];

// -----------------------------------------------------------------------------
// LONGEVITY VCs / FUNDS
// -----------------------------------------------------------------------------

export interface LongevityFund {
  name: string;
  type: string;
  aum: string;
  focus: string;
  notableInvestments: string[];
  website: string;
}

export const longevityFunds: LongevityFund[] = [
  {
    name: "Hevolution Foundation",
    type: "Non-profit Foundation (Saudi Royal Decree)",
    aum: "$400M+ deployed; $1B/year mandate",
    focus:
      "Largest dedicated healthspan funder globally. Grants (HF-GRO program: $230M for preclinical aging biology) and impact investments in aging therapeutics.",
    notableInvestments: [
      "Rubedo Life Sciences",
      "Aeovian Pharmaceuticals ($20M lead)",
      "Northwestern proteostasis ($32.4M grant)",
      "Einstein College senescence ($20M grant)",
    ],
    website: "https://hevolution.com",
  },
  {
    name: "Khosla Ventures",
    type: "Venture Capital",
    aum: "$15B+ total AUM",
    focus:
      "Most prolific longevity-focused VC by deal count. Invests across reprogramming, senolytics, and AI-driven drug discovery for aging.",
    notableInvestments: [
      "NewLimit",
      "Turn Biotechnologies",
      "Loyal",
      "Rubedo Life Sciences",
      "Oisin Biotechnologies",
    ],
    website: "https://www.khoslaventures.com",
  },
  {
    name: "The Longevity Fund",
    type: "Venture Capital (Seed/Series A)",
    aum: "$37M under management",
    focus:
      "Dedicated longevity VC. Invests in breakthrough companies targeting the biology of aging at seed and Series A stages.",
    notableInvestments: [
      "Gordian Biotechnology",
      "Loyal",
      "Spring Discovery",
    ],
    website: "https://longevity.vc",
  },
  {
    name: "ARCH Venture Partners",
    type: "Venture Capital",
    aum: "$4B+",
    focus:
      "Major life sciences VC. Led the largest single investment in longevity history with Altos Labs.",
    notableInvestments: [
      "Altos Labs ($3B founding round)",
      "Multiple biotech platforms",
    ],
    website: "https://www.archventure.com",
  },
  {
    name: "Founders Fund (Peter Thiel)",
    type: "Venture Capital",
    aum: "$11B+",
    focus:
      "Deep tech and moonshot VC with significant longevity thesis. Funds companies addressing fundamental aging biology.",
    notableInvestments: [
      "NewLimit",
      "Gordian Biotechnology",
      "Unity Biotechnology (senolytic)",
    ],
    website: "https://foundersfund.com",
  },
  {
    name: "Cambrian Bio / Apollo Ventures",
    type: "Company Builder / VC",
    aum: "Undisclosed",
    focus:
      "Longevity-focused company builder. Creates and funds portfolio companies targeting different hallmarks of aging.",
    notableInvestments: [
      "Marble Therapeutics",
      "Oviva Therapeutics",
      "Multiple aging-focused portfolio companies",
    ],
    website: "https://www.cambrianbio.com",
  },
  {
    name: "Apollo Health Ventures",
    type: "Venture Capital",
    aum: "$180M fund",
    focus:
      "Transatlantic early-stage VC focused exclusively on co-founding and investing in age-related healthcare companies.",
    notableInvestments: [
      "Multiple aging intervention companies across EU and US",
    ],
    website: "https://www.apollo.vc",
  },
  {
    name: "Kizoo Technology Capital",
    type: "Venture Capital",
    aum: "Undisclosed (17 funds)",
    focus:
      "German VC focused on rejuvenation biotechnology. Active investor in senolytic and reprogramming companies.",
    notableInvestments: [
      "Oisin Biotechnologies",
      "Repair Biotechnologies",
      "Underdog Pharmaceuticals",
    ],
    website: "https://www.kizoo.com",
  },
  {
    name: "Age1",
    type: "Venture Capital",
    aum: "Undisclosed",
    focus:
      "Dedicated longevity VC funding breakthrough companies addressing core challenges of the aging field.",
    notableInvestments: [
      "Conception Biosciences",
      "BioAge Labs ($170M Series C, 2025)",
    ],
    website: "https://age1.com",
  },
  {
    name: "Kleiner Perkins",
    type: "Venture Capital",
    aum: "$18B+",
    focus:
      "Legendary VC with growing longevity thesis. Led NewLimit's $130M Series B in 2025.",
    notableInvestments: [
      "NewLimit (Series B lead)",
      "Multiple healthtech investments",
    ],
    website: "https://www.kleinerperkins.com",
  },
  {
    name: "Methuselah Foundation / Methuselah Fund",
    type: "Non-profit / Impact Fund",
    aum: "Undisclosed",
    focus:
      "Pioneer longevity non-profit (est. 2003). Mission to make 90 the new 50 by 2030. Awards grants and prizes for aging research.",
    notableInvestments: [
      "Oisin Biotechnologies (grants)",
      "Rejuvenate Bio (grants)",
      "Organovo",
    ],
    website: "https://www.mfoundation.org",
  },
  {
    name: "LongevityTech Fund",
    type: "Venture Capital",
    aum: "Undisclosed (31 funds)",
    focus:
      "European longevity-focused VC investing across the aging intervention spectrum from biotech to digital health.",
    notableInvestments: ["Multiple early-stage longevity companies"],
    website: "https://www.longevitytech.fund",
  },
];

// -----------------------------------------------------------------------------
// CLINICAL TRIALS
// -----------------------------------------------------------------------------

export interface ClinicalTrial {
  nctId: string;
  title: string;
  sponsor: string;
  phase: string;
  status: string;
  indication: string;
  intervention: string;
  enrollmentTarget: string;
  startDate: string;
  notes: string;
}

export const clinicalTrials: ClinicalTrial[] = [
  {
    nctId: "NCT07290244",
    title:
      "Phase 1 Study of ER-100 in Optic Neuropathies (Glaucoma and NAION)",
    sponsor: "Life Biosciences",
    phase: "Phase 1 (First-in-Human)",
    status: "IND cleared by FDA, enrolling Q1 2026",
    indication:
      "Open-angle glaucoma (OAG) and non-arteritic anterior ischemic optic neuropathy (NAION)",
    intervention:
      "ER-100: AAV-delivered partial epigenetic reprogramming (OCT4, SOX2, KLF4) to retinal ganglion cells",
    enrollmentTarget: "Not yet disclosed",
    startDate: "Q1 2026",
    notes:
      "HISTORIC: First-ever partial reprogramming therapy to enter human clinical trials. Based on David Sinclair's REVIVER mouse work at Harvard. Safety, tolerability, immune response, and visual assessments.",
  },
  {
    nctId: "Pre-IND (FDA INTERACT complete)",
    title: "YB002 for Alzheimer's Disease (Planned)",
    sponsor: "YouthBio Therapeutics",
    phase: "Pre-IND",
    status:
      "Positive FDA INTERACT meeting Sept 2025. CMC and pilot tox studies underway.",
    indication: "Alzheimer's disease",
    intervention:
      "YB002: AAV gene therapy delivering partial reprogramming factors to dentate gyrus hippocampal neurons",
    enrollmentTarget: "TBD",
    startDate: "Estimated ~2028",
    notes:
      "FDA confirmed preclinical bioactivity. Would be first partial reprogramming therapy for the brain. Aged mice showed cognitive improvement in preclinical studies.",
  },
  {
    nctId: "IND planned",
    title: "Turn Bio Skin Rejuvenation (Planned)",
    sponsor: "Turn Biotechnologies",
    phase: "Pre-IND",
    status: "Planning clinical trial initiation for 2026",
    indication: "Skin aging / dermatologic conditions",
    intervention:
      "ERA (Epigenetic Reprogramming of Age) mRNA delivered topically or locally to skin cells",
    enrollmentTarget: "TBD",
    startDate: "Estimated 2026",
    notes:
      "Would be the first mRNA-based (non-viral) partial reprogramming therapy in humans. Potential first-mover in aesthetic/dermatology reprogramming.",
  },
  {
    nctId: "Retro-AU-2025",
    title: "Retro Biosciences Alzheimer's Early-Stage Trial",
    sponsor: "Retro Biosciences",
    phase: "Phase 1 (Australia)",
    status: "Initiated 2025",
    indication: "Alzheimer's disease (microglia replacement)",
    intervention:
      "Cell therapy replacing aged/dysfunctional microglia with rejuvenated cells",
    enrollmentTarget: "Not yet disclosed",
    startDate: "2025",
    notes:
      "Part of Retro's $1B program. One of three clinical programs alongside blood stem cell therapy and metabolic interventions.",
  },
  {
    nctId: "STAY (Loyal)",
    title: "STAY Study - LOY-002 for Canine Lifespan Extension",
    sponsor: "Loyal",
    phase: "Pivotal (conditional approval pathway)",
    status:
      "Active. FDA accepted RXE (efficacy) and TAS (safety) packages. Recruiting.",
    indication: "Lifespan extension in senior dogs (10+ years, 14+ lbs)",
    intervention:
      "LOY-002: Daily oral tablet targeting metabolic dysfunction associated with aging (GLP-1/IGF-1 pathways)",
    enrollmentTarget: "1,000+ dogs across 70 veterinary clinics",
    startDate: "Ongoing",
    notes:
      "Largest veterinary clinical trial in history. If approved, would be the first FDA-approved lifespan extension drug in any species. Not reprogramming per se but validates geroscience therapeutic model.",
  },
];

// -----------------------------------------------------------------------------
// MARKET OVERVIEW
// -----------------------------------------------------------------------------

export interface MarketStats {
  label: string;
  value: string;
  year: string;
  source: string;
}

export const marketStats: MarketStats[] = [
  {
    label: "Total Longevity Sector Investment",
    value: "$8.49B across 331 deals",
    year: "2024",
    source: "Longevity.Technology Annual Report 2024",
  },
  {
    label: "YoY Investment Growth",
    value: "220% increase from 2023",
    year: "2024",
    source: "PR Newswire / Longevity Investment Report",
  },
  {
    label: "Largest Single Company Raise",
    value: "$5.56B (Altos Labs cumulative)",
    year: "2022-2025",
    source: "Tracxn",
  },
  {
    label: "Cellular Reprogramming Subsector",
    value: "Most capital-intensive longevity domain",
    year: "2024",
    source: "New Market Pitch Longevity Report",
  },
  {
    label: "First Partial Reprogramming Human Trial",
    value: "NCT07290244 (Life Biosciences ER-100)",
    year: "2026",
    source: "ClinicalTrials.gov / FDA IND clearance",
  },
  {
    label: "Companies in Partial Reprogramming",
    value: "18+ active companies globally",
    year: "2026",
    source: "Compiled from multiple sources",
  },
];
