// Learning Resources for Partial Reprogramming & Cellular Rejuvenation
// Structured data ready for website consumption

export interface Resource {
  id: string;
  title: string;
  type:
    | "video"
    | "podcast"
    | "book"
    | "blog-newsletter"
    | "social"
    | "conference"
    | "course"
    | "community";
  creator?: string;
  platform?: string;
  url: string;
  description: string;
  tags: string[];
}

export const resources: Resource[] = [
  // ─── YOUTUBE VIDEOS ──────────────────────────────────────────
  {
    id: "huberman-sinclair",
    title:
      "The Biology of Slowing & Reversing Aging | Dr. David Sinclair",
    type: "video",
    creator: "Andrew Huberman & David Sinclair",
    platform: "YouTube / Huberman Lab",
    url: "https://www.hubermanlab.com/episode/dr-david-sinclair-the-biology-of-slowing-and-reversing-aging",
    description:
      "Deep dive into the Information Theory of Aging, epigenetic reprogramming, NAD+ boosting, fasting, and sirtuins. Sinclair explains how 80% of longevity is controlled by the epigenome. Essential viewing for understanding the 'why' behind partial reprogramming.",
    tags: [
      "epigenetics",
      "NAD+",
      "Information Theory of Aging",
      "fasting",
      "beginner-friendly",
    ],
  },
  {
    id: "veritasium-aging",
    title: "How to Slow Aging (and even reverse it)",
    type: "video",
    creator: "Veritasium (Derek Muller)",
    platform: "YouTube",
    url: "https://www.veritasium.com/videos/2019/12/14/how-to-slow-aging-and-even-reverse-it",
    description:
      "High-production explainer featuring David Sinclair, covering the evidence for speeding up, slowing, and reversing aging at the cellular level. Great visual explanations of epigenetic changes and reprogramming concepts.",
    tags: ["explainer", "visual", "beginner-friendly", "epigenetics"],
  },
  {
    id: "kurzgesagt-aging",
    title: "Why Age? Should We End Aging Forever?",
    type: "video",
    creator: "Kurzgesagt -- In a Nutshell",
    platform: "YouTube",
    url: "https://kurzgesagt.org/portfolio/how-to-cure-aging/",
    description:
      "Beautifully animated explainer on why we age and the scientific case for treating aging as a curable condition. Covers senescent cells, telomeres, and emerging rejuvenation technologies. Over 30M views.",
    tags: [
      "animation",
      "beginner-friendly",
      "senescence",
      "telomeres",
      "popular",
    ],
  },
  {
    id: "big-think-levine",
    title: "The Science of Superhuman Longevity",
    type: "video",
    creator: "Morgan Levine / Big Think",
    platform: "YouTube / Big Think",
    url: "https://bigthink.com/series/explain-it-like-im-smart/epigenetics-and-aging/",
    description:
      "Altos Labs' Morgan Levine explains epigenetics and aging in accessible terms -- how DNA methylation changes with age and how reprogramming might reverse it.",
    tags: ["epigenetic clocks", "DNA methylation", "accessible"],
  },
  {
    id: "lifespan-io-reprogramming",
    title: "Yamanaka Factors and Cellular Reprogramming",
    type: "video",
    creator: "Lifespan.io",
    platform: "YouTube / Lifespan.io",
    url: "https://lifespan.io/topic/yamanaka-factors/",
    description:
      "Educational resource page and video series from the Lifespan Research Institute dedicated specifically to Yamanaka factors and how they are being applied to reverse aging. Regularly updated with the latest research.",
    tags: [
      "Yamanaka factors",
      "educational",
      "research updates",
      "reprogramming",
    ],
  },

  // ─── PODCAST EPISODES ────────────────────────────────────────
  {
    id: "lex-fridman-sinclair",
    title:
      "#189 -- David Sinclair: Extending the Human Lifespan Beyond 100 Years",
    type: "podcast",
    creator: "Lex Fridman Podcast",
    platform: "YouTube / Spotify / Apple Podcasts",
    url: "https://lexfridman.com/david-sinclair/",
    description:
      "Long-form conversation covering the genetic reset switch that reverses aging, wearable health tracking, AI in biology, societal implications of radical lifespan extension, and the philosophy of death.",
    tags: [
      "long-form",
      "philosophy",
      "genetics",
      "societal implications",
      "AI",
    ],
  },
  {
    id: "attia-sinclair-reprogramming",
    title:
      "#70 -- David Sinclair: How Cellular Reprogramming Could Slow Our Aging Clock",
    type: "podcast",
    creator: "The Peter Attia Drive",
    platform: "Spotify / Apple Podcasts",
    url: "https://peterattiamd.com/davidsinclair2/",
    description:
      "Peter Attia and David Sinclair discuss the Information Theory of Aging, sirtuins, NAD+ research, and how cellular reprogramming could fundamentally change medicine. Covers the science in clinical depth.",
    tags: [
      "clinical depth",
      "NAD+",
      "sirtuins",
      "reprogramming",
      "intermediate",
    ],
  },
  {
    id: "attia-aravanis-epigenetics",
    title:
      "#290 -- Alex Aravanis: Liquid Biopsies, Epigenetics in Aging, and the Future of Aging Research",
    type: "podcast",
    creator: "The Peter Attia Drive",
    platform: "Spotify / Apple Podcasts",
    url: "https://peterattiamd.com/alexaravanis/",
    description:
      "Deep exploration of DNA methylation, epigenetic clocks, and using cellular reprogramming to reverse epigenetic changes that accumulate with aging.",
    tags: [
      "DNA methylation",
      "epigenetic clocks",
      "reprogramming",
      "liquid biopsies",
    ],
  },
  {
    id: "attia-kennedy-longevity",
    title:
      "#357 -- Brian Kennedy: A New Era of Longevity Science",
    type: "podcast",
    creator: "The Peter Attia Drive",
    platform: "Spotify / Apple Podcasts",
    url: "https://peterattiamd.com/briankennedy/",
    description:
      "Covers slowing biological aging through noise reduction and reprogramming, evaluating the epigenome's role in aging, rapamycin human trials, and the limits of methylation clocks. Published July 2025.",
    tags: [
      "rapamycin",
      "biological clocks",
      "reprogramming",
      "2025",
      "advanced",
    ],
  },
  {
    id: "kurzgesagt-podcast-aging",
    title: "The Science of Aging: Can We Reverse It?",
    type: "podcast",
    creator: "Kurzgesagt Podcast: Science Revealed",
    platform: "Spotify",
    url: "https://open.spotify.com/episode/6JUMYfQ61vOjOIWXZW9MtU",
    description:
      "Kurzgesagt's podcast episode exploring telomeres, senescent cells, and the scientific quest to turn back the clock. Released March 2025.",
    tags: ["telomeres", "senescence", "2025", "beginner-friendly"],
  },
  {
    id: "existential-hope-levine",
    title: "Morgan Levine | On the Future of Aging",
    type: "podcast",
    creator: "Existential Hope Podcast",
    platform: "Podcast",
    url: "https://www.existentialhope.com/podcasts/existential-hope-podcast-morgan-levine-on-aging-and-the-future",
    description:
      "Morgan Levine discusses her work on epigenetic clocks, biological age, and the future of aging interventions including reprogramming.",
    tags: [
      "epigenetic clocks",
      "biological age",
      "future of aging",
      "intermediate",
    ],
  },

  // ─── BOOKS ───────────────────────────────────────────────────
  {
    id: "lifespan-sinclair",
    title: "Lifespan: Why We Age -- and Why We Don't Have To",
    type: "book",
    creator: "David Sinclair & Matthew LaPlante",
    url: "https://www.simonandschuster.com/books/Lifespan/David-Sinclair/9781501191978",
    description:
      "The defining book on the Information Theory of Aging. Sinclair presents the case that aging is a disease caused by loss of epigenetic information, and that reprogramming can reverse it. Covers sirtuins, NAD+, the epigenome, and the future of longevity medicine. Essential reading.",
    tags: [
      "Information Theory of Aging",
      "epigenetics",
      "essential",
      "beginner-friendly",
    ],
  },
  {
    id: "ageless-steele",
    title:
      "Ageless: The New Science of Getting Older Without Getting Old",
    type: "book",
    creator: "Andrew Steele",
    url: "https://andrewsteele.co.uk/ageless/",
    description:
      "Widely considered the best introductory book on aging biology. Covers all hallmarks of aging including DNA damage, mitochondrial dysfunction, stem cells, senescence, and reprogramming. More balanced and broad than Lifespan.",
    tags: [
      "hallmarks of aging",
      "comprehensive",
      "beginner-friendly",
      "balanced",
    ],
  },
  {
    id: "outlive-attia",
    title: "Outlive: The Science and Art of Longevity",
    type: "book",
    creator: "Peter Attia & Bill Gifford",
    url: "https://peterattiamd.com/outlive/",
    description:
      "Comprehensive guide to the practical science of living longer and healthier. While focused on Medicine 3.0 (prevention-focused), it provides essential context for understanding where reprogramming fits in the longevity landscape.",
    tags: [
      "practical",
      "medicine 3.0",
      "prevention",
      "comprehensive",
      "beginner-friendly",
    ],
  },
  {
    id: "ending-aging-degrey",
    title: "Ending Aging: The Rejuvenation Breakthroughs That Could Reverse Human Aging in Our Lifetime",
    type: "book",
    creator: "Aubrey de Grey & Michael Rae",
    url: "https://www.amazon.com/Ending-Aging-Rejuvenation-Breakthroughs-Lifetime/dp/0312367074",
    description:
      "The foundational text on the SENS (Strategies for Engineered Negligible Senescence) framework. Proposes treating aging as an engineering problem with seven categories of accumulated damage. Provides the conceptual context for understanding reprogramming as one tool in a broader damage-repair toolkit.",
    tags: ["SENS", "damage repair", "engineering approach", "foundational"],
  },
  {
    id: "true-age-levine",
    title: "True Age: Cutting-Edge Research to Help Turn Back the Clock",
    type: "book",
    creator: "Morgan Levine",
    url: "https://www.amazon.com/True-Age-Cutting-Edge-Research-Help/dp/0593329252",
    description:
      "Morgan Levine explains epigenetic clocks, biological vs chronological age, and the science behind measuring and modifying how we age. Essential for understanding the biomarkers used to evaluate reprogramming.",
    tags: ["epigenetic clocks", "biological age", "biomarkers", "accessible"],
  },

  // ─── BLOGS & NEWSLETTERS ────────────────────────────────────
  {
    id: "fight-aging",
    title: "Fight Aging!",
    type: "blog-newsletter",
    creator: "Reason (founder of Repair Biotechnologies)",
    url: "https://www.fightaging.org/",
    description:
      "Weekly newsletter covering the latest in rejuvenation biotechnology with sharp, informed commentary. One of the oldest and most respected sources in the longevity space. Covers reprogramming research extensively.",
    tags: [
      "weekly newsletter",
      "commentary",
      "rejuvenation biotech",
      "long-running",
    ],
  },
  {
    id: "longevity-technology",
    title: "Longevity.Technology",
    type: "blog-newsletter",
    creator: "Longevity.Technology editorial team",
    url: "https://longevity.technology/",
    description:
      "News platform covering longevity biotech companies, research breakthroughs, investment trends, and interviews with key researchers. Strong coverage of reprogramming companies like NewLimit, Altos Labs, and Turn Bio.",
    tags: [
      "news",
      "industry",
      "investment",
      "interviews",
      "reprogramming companies",
    ],
  },
  {
    id: "lifespan-io",
    title: "Lifespan.io (Lifespan Research Institute)",
    type: "blog-newsletter",
    creator: "LEAF (Life Extension Advocacy Foundation)",
    url: "https://lifespan.io/",
    description:
      "Non-profit platform publishing research news, educational content, and community updates on aging science. Runs the Rejuvenation Roundup monthly newsletter summarising the latest findings. Fiscally sponsors longevity research projects.",
    tags: [
      "non-profit",
      "research news",
      "community",
      "Rejuvenation Roundup",
      "educational",
    ],
  },
  {
    id: "vitadao",
    title: "VitaDAO Research Newsletter",
    type: "blog-newsletter",
    creator: "VitaDAO community",
    url: "https://www.vitadao.com/",
    description:
      "Decentralised community funding early-stage longevity research. Monthly research newsletter covers the latest in aging biology. Also funds reprogramming projects directly through IP-NFT tokens.",
    tags: [
      "decentralised",
      "research funding",
      "monthly newsletter",
      "community-driven",
    ],
  },
  {
    id: "longevity-initiative",
    title: "The Longevity Initiative",
    type: "blog-newsletter",
    creator: "Andrew Steele et al.",
    url: "https://thelongevityinitiative.org/",
    description:
      "Annual analysis of the business and science of longevity. Published the definitive 'Business of Longevity in 2025' report covering funding, clinical pipelines, and the reprogramming landscape.",
    tags: ["annual report", "business analysis", "industry landscape"],
  },

  // ─── X/TWITTER ACCOUNTS ──────────────────────────────────────
  {
    id: "x-aging-biology",
    title: "@AgingBiology",
    type: "social",
    platform: "X (Twitter)",
    url: "https://x.com/agingbiology",
    description:
      "Curated feed of aging science news, paper highlights, and research commentary. One of the most active accounts in the longevity science space.",
    tags: ["news curation", "research papers", "active"],
  },
  {
    id: "x-brad-stanfield",
    title: "@BradStanfieldMD",
    type: "social",
    platform: "X (Twitter) / YouTube",
    url: "https://x.com/BradStanfieldMD",
    description:
      "Dr. Brad Stanfield shares evidence-based longevity research with a clinical lens. Heavy on links to research papers and critical analysis of supplements and interventions.",
    tags: [
      "evidence-based",
      "clinical",
      "supplements",
      "research papers",
      "YouTube",
    ],
  },
  {
    id: "x-morgan-levine",
    title: "@DrMorganLevine",
    type: "social",
    platform: "X (Twitter)",
    url: "https://x.com/DrMorganLevine",
    description:
      "VP of Computation at Altos Labs shares insights on epigenetic clocks, biological aging, and computational biology approaches to aging research.",
    tags: ["epigenetic clocks", "computation", "Altos Labs", "researcher"],
  },
  {
    id: "x-david-sinclair",
    title: "@davidasinclair",
    type: "social",
    platform: "X (Twitter)",
    url: "https://x.com/davidasinclair",
    description:
      "David Sinclair shares research updates, media appearances, and advocacy for treating aging as a disease. Large following in the longevity community.",
    tags: [
      "research updates",
      "aging as disease",
      "Harvard",
      "influential",
    ],
  },
  {
    id: "x-nature-aging",
    title: "@NatureAging",
    type: "social",
    platform: "X (Twitter)",
    url: "https://x.com/NatureAging",
    description:
      "Official account of Nature Aging journal. Shares the latest peer-reviewed research on the biology and mechanisms of aging.",
    tags: [
      "peer-reviewed",
      "journal",
      "primary literature",
      "authoritative",
    ],
  },
  {
    id: "x-vitadao",
    title: "@vita_dao",
    type: "social",
    platform: "X (Twitter)",
    url: "https://x.com/vita_dao",
    description:
      "VitaDAO community updates on decentralised longevity research funding, IP tokens, and the latest in aging science.",
    tags: ["DeSci", "funding", "community", "IP-NFTs"],
  },

  // ─── CONFERENCES ─────────────────────────────────────────────
  {
    id: "longevity-summit-dublin",
    title: "Longevity Summit Dublin",
    type: "conference",
    url: "https://longevitysummitdublin.com/",
    description:
      "Premier science-led conference on human longevity held annually in Dublin. Brings together scientists, clinicians, entrepreneurs, investors, and policymakers. 2025 held at Trinity Business School covering regenerative medicine, gene editing, personalised health, and policy. 2026 edition confirmed.",
    tags: [
      "annual",
      "Dublin",
      "multidisciplinary",
      "policy",
      "investment",
      "research",
    ],
  },
  {
    id: "ardd",
    title:
      "ARDD (Aging Research and Drug Discovery) Conference",
    type: "conference",
    url: "https://www.ardd.io/",
    description:
      "Annual gathering co-founded by Alex Zhavoronkov. The premier conference for aging research and drug discovery, featuring keynotes from leaders in reprogramming, senolytics, AI-driven aging biology, and geroprotector development.",
    tags: [
      "annual",
      "drug discovery",
      "AI",
      "geroprotectors",
      "reprogramming",
    ],
  },
  {
    id: "epigenetic-reprogramming-summit",
    title: "Epigenetic Reprogramming of Aging Summit",
    type: "conference",
    creator: "Phaedon Institute",
    url: "https://www.phaedon.institute/summit/epigenetic-2025/",
    description:
      "Dedicated summit convening leading researchers, clinicians, and industry experts specifically on advances in epigenetic reprogramming for aging. Organised by the Phaedon Institute (founded by Vittorio Sebastiano).",
    tags: [
      "specialised",
      "epigenetic reprogramming",
      "researchers",
      "industry",
    ],
  },
  {
    id: "longevity-investors-conference",
    title: "Longevity Investors Conference",
    type: "conference",
    url: "https://longevityinvestors.com/",
    description:
      "Annual conference held in Gstaad, Switzerland, focused on the investment landscape of longevity biotech. Sixth edition held September 2025. Brings together investors, entrepreneurs, and scientists working on aging.",
    tags: ["investment", "Switzerland", "annual", "biotech", "networking"],
  },

  // ─── ONLINE COURSES ──────────────────────────────────────────
  {
    id: "stanford-live-forever",
    title: "The Science of How to Live Forever",
    type: "course",
    creator: "Stanford University",
    platform: "Stanford Online",
    url: "https://online.stanford.edu/courses/som-xche0035-science-how-live-forever",
    description:
      "Executive-level workshop exploring molecular mechanisms of aging, breakthroughs in therapeutic interventions, and the quest for radical life extension. Covers epigenetic reprogramming directly.",
    tags: ["Stanford", "executive", "epigenetic reprogramming", "advanced"],
  },
  {
    id: "coursera-epigenetics",
    title: "Epigenetic Control of Gene Expression",
    type: "course",
    creator: "University of Melbourne",
    platform: "Coursera",
    url: "https://www.coursera.org/learn/epigenetics",
    description:
      "Comprehensive course on epigenetic mechanisms -- the same biology underlying partial reprogramming. Covers DNA methylation, histone modifications, chromatin remodelling, and non-coding RNAs. Free to audit.",
    tags: [
      "free",
      "Coursera",
      "DNA methylation",
      "histone modifications",
      "foundational",
    ],
  },
  {
    id: "futurelearn-aging",
    title: "Why Do We Age? The Molecular Mechanisms of Ageing",
    type: "course",
    creator: "University of Groningen",
    platform: "FutureLearn",
    url: "https://www.futurelearn.com/courses/ageing",
    description:
      "Free online course covering current concepts and theories of aging, molecular and cellular processes, and experimental methods used to study aging. Great foundational course for understanding the problems reprogramming aims to solve.",
    tags: ["free", "FutureLearn", "molecular mechanisms", "beginner"],
  },
  {
    id: "stanford-epigenomics",
    title: "Epigenetics and Microbiomics in Precision Health",
    type: "course",
    creator: "Stanford University",
    platform: "Stanford Online",
    url: "https://online.stanford.edu/courses/xgen207-epigenetics-and-microbiomics-precision-health",
    description:
      "Stanford course covering how environment and behaviour affect genes through epigenetic mechanisms, and how to use epigenetic markers to influence aging and metabolic disorders.",
    tags: ["Stanford", "precision health", "epigenetic markers", "advanced"],
  },
  {
    id: "gcls-longevity",
    title: "Executive Master of Science in Longevity",
    type: "course",
    creator: "Geneva College of Longevity Science",
    platform: "GCLS",
    url: "https://www.gcls.study/",
    description:
      "Formal academic degree in longevity science covering biological age assessment, epigenetic clocks, multi-omics, cellular senescence, and mitochondrial health. The most comprehensive academic programme in the field.",
    tags: [
      "degree programme",
      "formal",
      "epigenetic clocks",
      "multi-omics",
      "advanced",
    ],
  },

  // ─── COMMUNITY RESOURCES ─────────────────────────────────────
  {
    id: "long-bio-fellowship",
    title: "Long Biology Fellowship",
    type: "community",
    url: "https://www.longbiofellowship.org/",
    description:
      "Fellowship programme with a curated recommended reading list covering the intersection of AI, aging biology, and reprogramming. Good entry point for researchers entering the field.",
    tags: ["fellowship", "reading list", "researchers", "AI + biology"],
  },
  {
    id: "longevity-advice",
    title: "Longevity Advice",
    type: "community",
    url: "https://www.longevityadvice.com/",
    description:
      "Maintains curated lists of longevity experts and influencers on X/Twitter, along with guides to the longevity space. Useful for discovering who to follow.",
    tags: ["curated lists", "influencers", "guides", "X/Twitter"],
  },
];
