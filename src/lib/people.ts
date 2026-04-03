// Key People in Partial Reprogramming & Cellular Rejuvenation
// Structured data ready for website consumption

export interface Person {
  id: string;
  name: string;
  affiliation: string;
  role: string;
  contribution: string;
  notableWork: string;
  category: "pioneer" | "researcher" | "industry" | "investor-founder";
  links?: { label: string; url: string }[];
}

export const people: Person[] = [
  // ─── PIONEERS ────────────────────────────────────────────────
  {
    id: "john-gurdon",
    name: "Sir John B. Gurdon",
    affiliation: "Gurdon Institute, University of Cambridge (1933-2025)",
    role: "Father of Nuclear Reprogramming",
    contribution:
      "Proved in 1962 that mature, specialised cells retain all genetic information needed to form any cell type, laying the conceptual foundation for all reprogramming work.",
    notableWork:
      "Nobel Prize in Physiology or Medicine 2012 (shared with Yamanaka). Demonstrated somatic cell nuclear transfer in frogs, disproving the irreversibility of cell differentiation.",
    category: "pioneer",
    links: [
      {
        label: "Nobel Prize",
        url: "https://www.nobelprize.org/prizes/medicine/2012/gurdon/facts/",
      },
      {
        label: "Gurdon Institute",
        url: "https://www.gurdon.cam.ac.uk/people/john-gurdon/",
      },
    ],
  },
  {
    id: "shinya-yamanaka",
    name: "Shinya Yamanaka",
    affiliation:
      "Gladstone Institutes & UCSF; Director Emeritus, CiRA, Kyoto University; Senior Scientist, Altos Labs",
    role: "Discoverer of Induced Pluripotent Stem Cells (iPSCs)",
    contribution:
      "Identified the four transcription factors (Oct4, Sox2, Klf4, c-Myc -- the Yamanaka factors) that can reprogram adult cells back to a pluripotent state. This discovery is the bedrock of all partial reprogramming research.",
    notableWork:
      "Nobel Prize in Physiology or Medicine 2012. The 2006 Cell paper demonstrating iPSC generation from mouse fibroblasts is one of the most cited papers in biology.",
    category: "pioneer",
    links: [
      {
        label: "Gladstone Institutes",
        url: "https://gladstone.org/people/shinya-yamanaka",
      },
      {
        label: "UCSF Profile",
        url: "https://profiles.ucsf.edu/shinya.yamanaka",
      },
    ],
  },
  {
    id: "kazutoshi-takahashi",
    name: "Kazutoshi Takahashi",
    affiliation: "CiRA, Kyoto University; Gladstone Institutes",
    role: "Co-discoverer of iPSCs",
    contribution:
      "Lead author on the landmark 2006 Cell paper with Yamanaka that first demonstrated induced pluripotent stem cells from mouse fibroblasts, and the 2007 paper extending the work to human cells.",
    notableWork:
      "McEwen Award for Innovation (2011). The original iPSC papers have defined an entire field of regenerative medicine and aging research.",
    category: "pioneer",
    links: [
      {
        label: "Original 2006 Paper",
        url: "https://www.cell.com/fulltext/S0092-8674(06)00976-7",
      },
    ],
  },

  // ─── CORE RESEARCHERS ────────────────────────────────────────
  {
    id: "juan-carlos-izpisua-belmonte",
    name: "Juan Carlos Izpisua Belmonte",
    affiliation:
      "Altos Labs (Founding Scientist & SVP); formerly Salk Institute",
    role: "Pioneer of Partial Reprogramming In Vivo",
    contribution:
      "First demonstrated in 2016 that cells can be partially reprogrammed -- rejuvenated without losing their identity -- opening the door to therapeutic applications. Discovered that aging involves a pervasive 'mesenchymal drift' that partial reprogramming can reverse.",
    notableWork:
      "2016 Cell paper on in vivo partial reprogramming in progeria mice. 2025 Cell paper on mesenchymal drift reversal across 40+ human tissues.",
    category: "researcher",
    links: [
      {
        label: "Altos Labs",
        url: "https://www.altoslabs.com/team/juan-carlos-izpisua-belmonte",
      },
    ],
  },
  {
    id: "david-sinclair",
    name: "David Sinclair",
    affiliation:
      "Harvard Medical School, Paul F. Glenn Center for Biology of Aging Research; Co-founder, Life Biosciences",
    role: "Proponent of Information Theory of Aging & Epigenetic Reprogramming",
    contribution:
      "Proposed that aging is primarily caused by loss of epigenetic information, not DNA mutations. Demonstrated OSK (Oct4, Sox2, Klf4) gene therapy can restore vision in aged mice by resetting the epigenome. Co-founded Life Biosciences to bring epigenetic reprogramming to the clinic.",
    notableWork:
      "2020 Nature paper restoring vision in mice via epigenetic reprogramming. ER-100 drug candidate cleared by FDA for first human clinical trial in eye disease (2026). Author of 'Lifespan: Why We Age and Why We Don't Have To'.",
    category: "researcher",
    links: [
      {
        label: "Sinclair Lab",
        url: "https://sinclair.hms.harvard.edu/",
      },
      {
        label: "Life Biosciences",
        url: "https://www.lifebiosciences.com/",
      },
    ],
  },
  {
    id: "steve-horvath",
    name: "Steve Horvath",
    affiliation:
      "Principal Investigator, Altos Labs Cambridge Institute of Science; formerly UCLA",
    role: "Creator of the Epigenetic Clock",
    contribution:
      "Developed the first pan-tissue epigenetic clock (2013) based on DNA methylation at 353 CpG sites, enabling precise measurement of biological age. Without this biomarker, measuring whether reprogramming actually 'rejuvenates' cells would be impossible.",
    notableWork:
      "Pan-tissue epigenetic clock (Horvath clock), GrimAge, PhenoAge, pan-mammalian clocks. Over 50,000 citations.",
    category: "researcher",
    links: [
      {
        label: "Altos Labs",
        url: "https://www.altoslabs.com/team/steve-horvath",
      },
      {
        label: "Eric Topol Interview",
        url: "https://erictopol.substack.com/p/steve-horvath-our-epigenetic-age",
      },
    ],
  },
  {
    id: "morgan-levine",
    name: "Morgan Levine",
    affiliation:
      "VP of Computation, Altos Labs; formerly Yale University School of Medicine",
    role: "Computational Biologist & Aging Clock Developer",
    contribution:
      "Developed next-generation epigenetic clocks (PhenoAge) and computational methods to quantify system dysregulation during aging. Leads AI/ML efforts at Altos Labs to model cellular perturbation responses.",
    notableWork:
      "PhenoAge clock. Cleo Flow Matching Model for perturbation prediction (NeurIPS 2025). Author of 'True Age'.",
    category: "researcher",
    links: [
      {
        label: "Altos Labs",
        url: "https://www.altoslabs.com/team/morgan-levine",
      },
      {
        label: "FoundMyFitness Interview",
        url: "https://www.foundmyfitness.com/episodes/morgan-levine",
      },
    ],
  },
  {
    id: "wolf-reik",
    name: "Wolf Reik",
    affiliation:
      "Director, Altos Labs Cambridge Institute of Science; Honorary Group Leader, Babraham Institute",
    role: "Epigenetic Reprogramming in Development & Aging",
    contribution:
      "Developed protocols for substantial rejuvenation of human cells without loss of cell identity. Pioneered single-cell multi-omics technologies to understand cell fate decisions during development and how they degrade during aging.",
    notableWork:
      "Multi-omics single-cell rejuvenation studies. Demonstrated that transient reprogramming can reset epigenetic age while maintaining cell identity.",
    category: "researcher",
    links: [
      {
        label: "Altos Labs",
        url: "https://www.altoslabs.com/team/wolf-reik",
      },
      {
        label: "Babraham Institute",
        url: "https://www.babraham.ac.uk/our-research/epigenetics/wolf-reik",
      },
    ],
  },
  {
    id: "manuel-serrano",
    name: "Manuel Serrano",
    affiliation:
      "Principal Investigator, Altos Labs Cambridge Institute of Science; formerly IRB Barcelona",
    role: "Discoverer of p16 & Expert on Cellular Senescence and In Vivo Reprogramming",
    contribution:
      "Discovered the p16 tumour-suppressor gene (1993), a master regulator of cellular senescence. Now focuses on the intersection of senescence and partial reprogramming, seeking pharmacological and dietary interventions that mimic partial reprogramming for rejuvenation.",
    notableWork:
      "Discovery of p16/INK4a. In vivo reprogramming studies at IRB Barcelona. Severo Ochoa Award for advances in aging research. Identified role of vitamin B12 in cellular reprogramming.",
    category: "researcher",
    links: [
      {
        label: "Altos Labs",
        url: "https://www.altoslabs.com/team/manuel-serrano",
      },
      {
        label: "IRB Barcelona (former)",
        url: "https://www.irbbarcelona.org/en/research/manuel-serrano",
      },
    ],
  },
  {
    id: "alejandro-ocampo",
    name: "Alejandro Ocampo",
    affiliation:
      "University of Lausanne, Faculty of Biology and Medicine; Founder, EPITERNA",
    role: "Chemical Reprogramming for Aging Reversal",
    contribution:
      "Trained under Izpisua Belmonte at the Salk Institute, then established his own lab focused on chemical (non-genetic) approaches to partial reprogramming. Demonstrated that small molecules can replicate the rejuvenating effects of Yamanaka factors with better safety profiles.",
    notableWork:
      "2025 EMBO Molecular Medicine paper on chemical reprogramming extending C. elegans lifespan. Founded EPITERNA to commercialise high-throughput drug screening for rejuvenation compounds.",
    category: "researcher",
    links: [
      {
        label: "Ocampo Lab",
        url: "https://www.ocampolab.com/",
      },
    ],
  },
  {
    id: "yuancheng-lu",
    name: "Yuancheng Lu",
    affiliation: "Sinclair Lab, Harvard Medical School",
    role: "Developer of OSK Gene Therapy for Vision Restoration",
    contribution:
      "Engineered the AAV-delivered OSK (Oct4, Sox2, Klf4) gene therapy that restored vision in aged mice and glaucoma models, providing the first proof that complex tissues can be safely rejuvenated via partial reprogramming in vivo.",
    notableWork:
      "Lead author of the 2020 Nature paper on epigenetic reprogramming to restore vision. 2025 bioRxiv preprint on reprogramming factors activating oxidative resilience pathways to rejuvenate RPE cells.",
    category: "researcher",
    links: [
      {
        label: "Sinclair Lab Profile",
        url: "https://sinclair.hms.harvard.edu/people/yuancheng-lu",
      },
      {
        label: "2020 Nature Paper",
        url: "https://www.nature.com/articles/s41586-020-2975-4",
      },
    ],
  },
  {
    id: "hongkui-deng",
    name: "Hongkui Deng",
    affiliation: "Peking University, School of Life Sciences",
    role: "Pioneer of Fully Chemical Reprogramming",
    contribution:
      "Developed the world's first method to generate human pluripotent stem cells using only small molecules, eliminating the need for any genetic modification. This chemical-only approach has major safety advantages for therapeutic applications.",
    notableWork:
      "2022 Nature paper on chemical reprogramming of human somatic cells. 2025 Nature Chemical Biology paper achieving reprogramming in 10 days with 100% donor success rate. 2025 Cell Stem Cell paper generating iPSCs from a single drop of fingerstick blood. Future Science Prize 2024 in Life Sciences.",
    category: "researcher",
    links: [
      {
        label: "Peking University",
        url: "https://web.bio.pku.edu.cn/en/index/detail-2202.html",
      },
    ],
  },
  {
    id: "nir-barzilai",
    name: "Nir Barzilai",
    affiliation:
      "Albert Einstein College of Medicine; Director, Institute for Aging Research",
    role: "Leader of the TAME Trial & Geroscience Advocate",
    contribution:
      "Designed the TAME (Targeting Aging with Metformin) clinical trial, the first FDA-approved trial template that treats aging itself as the indication rather than individual diseases. This regulatory framework paves the way for future reprogramming therapies to target aging directly.",
    notableWork:
      "TAME trial (3,000 subjects, 14 US centres). Over 330 scientific publications. Director of the NIH Nathan Shock Centers of Excellence. Studies centenarian genomes for protective longevity genes.",
    category: "researcher",
    links: [
      {
        label: "Einstein Profile",
        url: "https://einsteinmed.edu/faculty/484/nir-barzilai",
      },
      {
        label: "Peter Attia TAME Discussion",
        url: "https://peterattiamd.com/tame-metformin-anti-aging-trial-nir-barzilai/",
      },
    ],
  },
  {
    id: "alex-zhavoronkov",
    name: "Alex Zhavoronkov",
    affiliation:
      "Founder & CEO, Insilico Medicine; Founder, Deep Longevity; Co-founder, ARDD Conference",
    role: "AI-Driven Aging Biomarkers & Drug Discovery",
    contribution:
      "Pioneered deep learning-based biological age clocks and applied generative AI to discover geroprotective drug candidates. Co-founded the annual ARDD (Aging Research and Drug Discovery) conference, the field's premier annual gathering.",
    notableWork:
      "First DNN-based aging clocks (2016). Deep biomarkers of aging published in leading journals. Insilico Medicine's AI-discovered drug candidates entering clinical trials. Book: 'Artificial Intelligence for Healthy Longevity'.",
    category: "researcher",
    links: [
      {
        label: "Insilico Medicine",
        url: "https://www.crunchbase.com/person/alex-zhavoronkov",
      },
    ],
  },
  {
    id: "joao-pedro-de-magalhaes",
    name: "Joao Pedro de Magalhaes",
    affiliation:
      "University of Birmingham, Chair of Molecular Biogerontology; CSO, YouthBio Therapeutics",
    role: "Computational Genomics of Aging & Rejuvenation",
    contribution:
      "Combines computational biology with experimental approaches to study aging. Maintains the most comprehensive public databases on aging biology (GenAge, AnAge, DrugAge, CellAge). As CSO of YouthBio, guides the development of partial reprogramming gene therapies.",
    notableWork:
      "GenAge database. AnAge database. Proposed 'ageing as a software design flaw' framework. Advising YouthBio's YB002 Alzheimer's gene therapy through FDA pathway.",
    category: "researcher",
    links: [
      {
        label: "Personal Site",
        url: "https://jp.senescence.info/about/",
      },
      {
        label: "YouthBio Therapeutics",
        url: "https://youthbiotx.com/",
      },
    ],
  },
  {
    id: "aubrey-de-grey",
    name: "Aubrey de Grey",
    affiliation: "Founder & CSO, LEV Foundation (Longevity Escape Velocity)",
    role: "Architect of the SENS Damage-Repair Framework",
    contribution:
      "Proposed the Strategies for Engineered Negligible Senescence (SENS) framework treating aging as an engineering problem with seven categories of damage. While not directly focused on reprogramming, his damage-repair paradigm provides context for where reprogramming fits in the broader anti-aging toolkit.",
    notableWork:
      "SENS framework. LEV Foundation Robust Mouse Rejuvenation studies combining multiple interventions. Predicts 50% chance of reaching longevity escape velocity within 12-15 years. Author of 'Ending Aging'.",
    category: "researcher",
    links: [
      {
        label: "LEV Foundation",
        url: "https://www.levf.org/",
      },
    ],
  },
  {
    id: "vittorio-sebastiano",
    name: "Vittorio Sebastiano",
    affiliation:
      "Stanford School of Medicine, Associate Professor of OB/GYN; Head of Research, Turn Biotechnologies",
    role: "Developer of ERA (Epigenetic Reprogramming of Aging) Technology",
    contribution:
      "Developed the ERA platform that uses mRNA-delivered transcription factor cocktails to achieve epigenetic rejuvenation of adult cells while preserving cell identity. This mRNA-based approach avoids the risks of permanent genetic modification.",
    notableWork:
      "ERA technology platform. Turn Bio's $300M deal with HanAll Biopharma. Breakthrough presentations at Cold Spring Harbor Labs. 2025: Acquisition of ARMMs vesicular technology for expanded tissue targeting.",
    category: "researcher",
    links: [
      {
        label: "Turn Biotechnologies",
        url: "https://www.turn.bio/",
      },
      {
        label: "Phaedon Institute",
        url: "https://www.phaedon.institute/people/vittorio-sebastiano/",
      },
    ],
  },
  {
    id: "andrew-steele",
    name: "Andrew Steele",
    affiliation:
      "Director & Co-Founder, The Longevity Initiative; formerly Francis Crick Institute",
    role: "Science Communicator & Longevity Advocate",
    contribution:
      "Transitioned from computational biology at the Crick Institute to full-time science communication, making aging research accessible to the public. Co-founded The Longevity Initiative to bridge research and policy.",
    notableWork:
      "Author of 'Ageless: The New Science of Getting Older Without Getting Old' -- widely considered the best introductory book on aging biology. Featured on Netflix, NBC, BBC.",
    category: "researcher",
    links: [
      {
        label: "Personal Site",
        url: "https://andrewsteele.co.uk/",
      },
      {
        label: "Ageless Book",
        url: "https://andrewsteele.co.uk/ageless/",
      },
    ],
  },

  // ─── INDUSTRY LEADERS ────────────────────────────────────────
  {
    id: "hal-barron",
    name: "Hal Barron",
    affiliation: "CEO, Founder & Board Co-Chair, Altos Labs",
    role: "Leader of the Largest Cellular Rejuvenation Company",
    contribution:
      "Built and leads Altos Labs, the best-funded company in the reprogramming space ($3B). Previously led R&D at GSK and was president of R&D at Calico (Google's aging company). Designed Altos to integrate academic freedom with industry focus on translating reprogramming science into medicines.",
    notableWork:
      "Launched Altos Labs in January 2022. Recruited a world-class team including Yamanaka, Belmonte, Horvath, Levine, Reik, and Serrano. Established three global Institutes of Science (SF, San Diego, Cambridge).",
    category: "industry",
    links: [
      {
        label: "Altos Labs",
        url: "https://www.altoslabs.com/team/hal-barron",
      },
    ],
  },
  {
    id: "rick-klausner",
    name: "Rick Klausner",
    affiliation:
      "Chief Scientific Advisor, Founder & Board Co-Chair, Altos Labs",
    role: "Scientific Architect of Altos Labs",
    contribution:
      "Co-founded Altos Labs and serves as its chief scientist, shaping the scientific strategy. Former director of the National Cancer Institute. Organised the initial meetings that brought together the scientists who would form Altos Labs.",
    notableWork:
      "Co-founded Altos Labs with $3B funding. Hinted at significant preclinical breakthroughs in 2025. Orchestrated acquisition of Dorian Therapeutics (senotherapeutics). Keynote at Aspen Ideas: 'The New Science of Aging'.",
    category: "industry",
    links: [
      {
        label: "Altos Labs",
        url: "https://www.altoslabs.com/team/rick-klausner",
      },
    ],
  },
  {
    id: "daphne-koller",
    name: "Daphne Koller",
    affiliation: "Founder & CEO, insitro",
    role: "AI/ML-Driven Drug Discovery for Aging",
    contribution:
      "Built insitro to integrate machine learning with wet-lab biology for drug discovery, including aging-related targets. Previously served as Chief Computing Officer at Calico (Google's aging company). Her approach of using ML to model disease mechanisms rather than just optimise molecules is shaping how reprogramming targets are identified.",
    notableWork:
      "Co-founded Coursera. Stanford AI professor. 2025 partnership with Eli Lilly for ML-based pharmacological prediction models. MacArthur Fellowship recipient.",
    category: "industry",
    links: [
      {
        label: "insitro",
        url: "https://www.insitro.com/leadership/daphne-koller/",
      },
    ],
  },
  {
    id: "joe-betts-lacroix",
    name: "Joe Betts-LaCroix",
    affiliation: "Co-founder & CEO, Retro Biosciences",
    role: "Leading Retro Bio's Multi-Pronged Longevity Programs",
    contribution:
      "Co-founded Retro Biosciences in 2020 to extend healthy human lifespan by 10 years through cellular reprogramming, autophagy enhancement, and plasma-inspired therapies. Partnered with OpenAI to apply AI to improve reprogramming efficiency by 50x.",
    notableWork:
      "Retro Biosciences' AI-optimised Yamanaka factors (50x improvement). RTR242 autophagy pill entering human trials for Alzheimer's. $1B+ total funding at $5B valuation.",
    category: "industry",
    links: [
      {
        label: "Retro Biosciences",
        url: "https://retro.bio/",
      },
    ],
  },
  {
    id: "yuri-deigin",
    name: "Yuri Deigin",
    affiliation: "Co-founder & CEO, YouthBio Therapeutics",
    role: "Bringing Partial Reprogramming Gene Therapy to the Clinic",
    contribution:
      "Founded YouthBio Therapeutics to develop rejuvenation gene therapies based on partial reprogramming by Yamanaka factors. Targeting brain aging with AAV-delivered partial reprogramming, with the FDA supporting their path toward first-in-human trials.",
    notableWork:
      "YB002 Alzheimer's gene therapy -- first partial epigenetic reprogramming therapy for the brain to receive FDA support for human trials (2025). Successful INTERACT meeting with FDA.",
    category: "industry",
    links: [
      {
        label: "YouthBio Therapeutics",
        url: "https://youthbiotx.com/",
      },
    ],
  },

  // ─── INVESTORS & TECH FOUNDERS ───────────────────────────────
  {
    id: "brian-armstrong",
    name: "Brian Armstrong",
    affiliation: "CEO, Coinbase; Co-founder, NewLimit",
    role: "Tech Billionaire Backing Epigenetic Reprogramming",
    contribution:
      "Co-founded NewLimit in 2022 to develop medicines that target aging through epigenetic reprogramming. The company has identified 20+ transcription factor sets that restore youthful phenotypes in aged hepatocytes from testing 3,000+ combinations.",
    notableWork:
      "NewLimit raised $130M Series B + $45M from Eli Lilly (2025), valued at $1.62B. Nearing first clinic-ready epigenetic reprogramming medicine for liver cells. Publicly advocates for treating aging as a disease.",
    category: "investor-founder",
    links: [
      {
        label: "NewLimit",
        url: "https://www.newlimit.com/",
      },
    ],
  },
  {
    id: "sam-altman",
    name: "Sam Altman",
    affiliation: "CEO, OpenAI; Lead investor, Retro Biosciences",
    role: "Largest Individual Investor in Cellular Reprogramming",
    contribution:
      "Provided the entire $180M seed round for Retro Biosciences and is joining the $1B Series A. Facilitated the OpenAI-Retro partnership that used GPT-4b to optimise Yamanaka factors, achieving a 50x improvement in reprogramming efficiency -- demonstrating the power of AI in accelerating reprogramming research.",
    notableWork:
      "$180M seed investment in Retro Bio. OpenAI x Retro partnership producing 50x reprogramming improvement. Retro Bio now valued at $5B (Dec 2025).",
    category: "investor-founder",
    links: [
      {
        label: "TechCrunch Coverage",
        url: "https://techcrunch.com/2025/01/24/retro-biosciences-backed-by-sam-altman-is-raising-1-billion-to-extend-human-lifespan/",
      },
    ],
  },
];
