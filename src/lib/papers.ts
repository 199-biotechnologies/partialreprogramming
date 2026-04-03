export interface Paper {
  year: string;
  title: string;
  authors: string;
  journal: string;
  doi: string;
  summary: string;
  organism: string;
  category: string;
}

export const papers: Paper[] = [
  /* ────────────────────────────────────────────────────────
     1. FOUNDATIONAL
     ──────────────────────────────────────────────────────── */
  {
    year: "1962",
    title:
      "The Developmental Capacity of Nuclei taken from Intestinal Epithelium Cells of Feeding Tadpoles",
    authors: "Gurdon, J.B.",
    journal: "J. Embryol. Exp. Morphol.",
    doi: "https://doi.org/10.1242/dev.10.4.622",
    summary:
      "Proved that differentiated somatic cell nuclei retain full genetic information for development -- the conceptual origin of reprogramming.",
    organism: "Frog",
    category: "foundational",
  },
  {
    year: "2006",
    title:
      "Induction of Pluripotent Stem Cells from Mouse Embryonic and Adult Fibroblast Cultures by Defined Factors",
    authors: "Takahashi & Yamanaka",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2006.07.024",
    summary:
      "Identified four transcription factors (Oct3/4, Sox2, c-Myc, Klf4) that reprogram mouse fibroblasts into iPSCs. Nobel Prize-winning work that launched the field.",
    organism: "Mouse",
    category: "foundational",
  },
  {
    year: "2007",
    title:
      "Induction of Pluripotent Stem Cells from Adult Human Fibroblasts by Defined Factors",
    authors: "Takahashi, Tanabe, Ohnuki et al.",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2007.11.019",
    summary:
      "Extended iPSC technology to human cells, showing the same four Yamanaka factors reprogram adult human fibroblasts into pluripotent stem cells.",
    organism: "Human cells",
    category: "foundational",
  },

  /* ────────────────────────────────────────────────────────
     2. THEORETICAL
     ──────────────────────────────────────────────────────── */
  {
    year: "1957",
    title: "The Strategy of the Genes",
    authors: "Waddington, C.H.",
    journal: "George Allen & Unwin (book)",
    doi: "https://doi.org/10.4324/9781315765471",
    summary:
      'Introduced the "epigenetic landscape" metaphor -- a ball rolling through valleys of cell fate. The conceptual foundation for understanding reprogramming as movement through epigenetic state space.',
    organism: "Theoretical",
    category: "theoretical",
  },
  {
    year: "2012",
    title:
      "Aging, Rejuvenation, and Epigenetic Reprogramming: Resetting the Aging Clock",
    authors: "Rando & Chang",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2012.01.003",
    summary:
      "Landmark review defining youthfulness and senescence as epigenetic states, proposing that the aging clock can be reversed through epigenetic reprogramming.",
    organism: "Review",
    category: "theoretical",
  },
  {
    year: "2013",
    title: "The Hallmarks of Aging",
    authors: "Lopez-Otin, Blasco, Partridge et al.",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2013.05.039",
    summary:
      "Defined the nine hallmarks of aging, including epigenetic alterations. The unifying framework connecting reprogramming to aging.",
    organism: "Review",
    category: "theoretical",
  },
  {
    year: "2023",
    title: "Hallmarks of Aging: An Expanding Universe",
    authors: "Lopez-Otin, Blasco, Partridge et al.",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2022.11.001",
    summary:
      "Updated the hallmarks to twelve, adding disabled macroautophagy, chronic inflammation, and dysbiosis. The most current organizing framework for aging biology.",
    organism: "Review",
    category: "theoretical",
  },
  {
    year: "2023",
    title: "Loss of Epigenetic Information as a Cause of Mammalian Aging",
    authors: "Yang, Hayano, Griffin et al. (Sinclair lab)",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2022.12.027",
    summary:
      'Using an ICE mouse model, showed that faithful DNA repair erodes the epigenetic landscape and drives aging. OSK reprogramming reverses these changes, supporting the "Information Theory of Aging."',
    organism: "Mouse",
    category: "theoretical",
  },
  {
    year: "2023",
    title: "The Information Theory of Aging",
    authors: "Lu, Tian & Sinclair",
    journal: "Nature Aging",
    doi: "https://doi.org/10.1038/s43587-023-00527-6",
    summary:
      "Formalizes the Information Theory of Aging: aging is driven by progressive loss of youthful epigenetic information, retrievable via epigenetic reprogramming.",
    organism: "Theoretical",
    category: "theoretical",
  },

  /* ────────────────────────────────────────────────────────
     3. IN VIVO MOUSE -- PROGERIA
     ──────────────────────────────────────────────────────── */
  {
    year: "2016",
    title:
      "In Vivo Amelioration of Age-Associated Hallmarks by Partial Reprogramming",
    authors: "Ocampo, Reddy, Martinez-Redondo et al.",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2016.11.052",
    summary:
      "The foundational partial reprogramming paper. Cyclic OSKM (2 days on, 5 off) reversed aging hallmarks and extended lifespan by ~30% in progeroid mice without teratomas.",
    organism: "Mouse (progeria)",
    category: "mouse-progeria",
  },
  {
    year: "2022",
    title:
      "A Single Short Reprogramming Early in Life Initiates and Propagates an Epigenetically Related Mechanism Improving Fitness and Promoting an Increased Healthy Lifespan",
    authors: "Alle, Le Borgne, Bensadoun et al.",
    journal: "Aging Cell",
    doi: "https://doi.org/10.1111/acel.13714",
    summary:
      "A single OSKM pulse at 2 months of age prevented musculoskeletal deterioration and increased lifespan by ~15% in old age -- implying a deep, persistent epigenetic memory of early-life reprogramming.",
    organism: "Mouse (progeria & WT)",
    category: "mouse-progeria",
  },

  /* ────────────────────────────────────────────────────────
     4. IN VIVO MOUSE -- WILDTYPE
     ──────────────────────────────────────────────────────── */
  {
    year: "2022",
    title:
      "In Vivo Partial Reprogramming Alters Age-Associated Molecular Changes During Physiological Aging in Mice",
    authors: "Browder, Reddy, Yamamoto et al.",
    journal: "Nature Aging",
    doi: "https://doi.org/10.1038/s43587-022-00183-2",
    summary:
      "First study in naturally aging wildtype mice. Long-term cyclic OSKM reversed the epigenetic clock in kidney and skin, reduced inflammation and senescence.",
    organism: "Mouse",
    category: "mouse-wildtype",
  },
  {
    year: "2022",
    title:
      "Multi-omic Rejuvenation of Naturally Aged Tissues by a Single Cycle of Transient Reprogramming",
    authors: "Chondronasiou, Gill, Vaquero et al.",
    journal: "Aging Cell",
    doi: "https://doi.org/10.1111/acel.13578",
    summary:
      "A single 1-week transient OSKM expression reversed DNA methylation changes in pancreas, liver, spleen, and blood of naturally aged wildtype mice.",
    organism: "Mouse",
    category: "mouse-wildtype",
  },
  {
    year: "2024",
    title:
      "Gene Therapy-Mediated Partial Reprogramming Extends Lifespan and Reverses Age-Related Changes in Aged Mice",
    authors: "Macip, Czajka, Selber-Hnatiw et al.",
    journal: "Cellular Reprogramming",
    doi: "https://doi.org/10.1089/cell.2023.0072",
    summary:
      "AAV-delivered inducible OSK extended median remaining lifespan by 109% in extremely aged (124-week) mice with significant age-reversal in heart and liver.",
    organism: "Mouse",
    category: "mouse-wildtype",
  },
  {
    year: "2024",
    title:
      "Targeted Partial Reprogramming of Age-Associated Cell States Improves Markers of Health in Mouse Models of Aging",
    authors: "Macip, Hasan, Houghton et al.",
    journal: "Science Translational Medicine",
    doi: "https://doi.org/10.1126/scitranslmed.adg1777",
    summary:
      "Targeted OSK to senescent cells via AAV, achieving a 12% lifespan extension in wildtype mice -- the largest by partial reprogramming in wildtype mice to date.",
    organism: "Mouse",
    category: "mouse-wildtype",
  },

  /* ────────────────────────────────────────────────────────
     5. TISSUE-SPECIFIC
     ──────────────────────────────────────────────────────── */
  {
    year: "2020",
    title:
      "Reprogramming to Recover Youthful Epigenetic Information and Restore Vision",
    authors: "Lu, Brommer, Tian et al. (Sinclair lab)",
    journal: "Nature",
    doi: "https://doi.org/10.1038/s41586-020-2975-4",
    summary:
      "OSK (without c-Myc) restored youthful DNA methylation, promoted axon regeneration, and reversed vision loss in glaucoma and aged mice. No tumors over 10-18 months.",
    organism: "Mouse (eye)",
    category: "tissue-specific",
  },
  {
    year: "2020",
    title:
      "In Vivo Reprogramming Ameliorates Aging Features in Dentate Gyrus Cells and Improves Memory in Mice",
    authors: "Rodriguez-Matellan, Alcazar, Hernandez et al.",
    journal: "Stem Cell Reports",
    doi: "https://doi.org/10.1016/j.stemcr.2020.09.010",
    summary:
      "Cyclic OSKM in the dentate gyrus elevated neurogenesis markers, increased NMDA receptor subunits, and improved object recognition memory in wildtype mice.",
    organism: "Mouse (brain)",
    category: "tissue-specific",
  },
  {
    year: "2021",
    title:
      "Reversible Reprogramming of Cardiomyocytes to a Fetal State Drives Heart Regeneration in Mice",
    authors: "Chen, Luttmann, Schoger et al.",
    journal: "Science",
    doi: "https://doi.org/10.1126/science.abg5159",
    summary:
      "Heart-specific transient OSKM induced cardiomyocyte dedifferentiation to a fetal-like state, conferring regenerative capacity and improving cardiac function after infarction.",
    organism: "Mouse (heart)",
    category: "tissue-specific",
  },
  {
    year: "2024",
    title:
      "Expansion of the Neocortex and Protection from Neurodegeneration by In Vivo Transient Reprogramming",
    authors: "Shen, Zaballa, Bech et al.",
    journal: "Cell Stem Cell",
    doi: "https://doi.org/10.1016/j.stem.2024.09.013",
    summary:
      "Controlled Yamanaka factor induction in the brain expanded upper cortical neurons, enhanced behavior, and prevented Alzheimer's hallmarks in the 5xFAD model.",
    organism: "Mouse (brain)",
    category: "tissue-specific",
  },

  /* ────────────────────────────────────────────────────────
     6. HUMAN CELLS (IN VITRO)
     ──────────────────────────────────────────────────────── */
  {
    year: "2019",
    title:
      "Partial Reprogramming Induces a Steady Decline in Epigenetic Age Before Loss of Somatic Identity",
    authors: "Olova, Simpson, Marioni & Chandra",
    journal: "Aging Cell",
    doi: "https://doi.org/10.1111/acel.12877",
    summary:
      'Mapped a "safe window" (days 3-13) where epigenetic age declines ~10-20+ years before cell identity is lost, proving rejuvenation and dedifferentiation can be uncoupled.',
    organism: "Human cells",
    category: "human-cells",
  },
  {
    year: "2020",
    title:
      "Transient Non-Integrative Expression of Nuclear Reprogramming Factors Promotes Multifaceted Amelioration of Aging in Human Cells",
    authors: "Sarkar, Quarta, Mukherjee et al.",
    journal: "Nature Communications",
    doi: "https://doi.org/10.1038/s41467-020-15174-3",
    summary:
      "mRNA-mediated transient OSKM+LIN28+NANOG in aged human cells reset the epigenetic clock, reduced inflammation, and restored youthful regenerative responses without full dedifferentiation.",
    organism: "Human cells",
    category: "human-cells",
  },
  {
    year: "2022",
    title:
      "Multi-omic Rejuvenation of Human Cells by Maturation Phase Transient Reprogramming",
    authors: "Gill, Parry, Santos et al. (Reik lab)",
    journal: "eLife",
    doi: "https://doi.org/10.7554/eLife.71624",
    summary:
      'Developed "maturation phase transient reprogramming" -- rejuvenated the transcriptome of human fibroblasts by ~30 years, restored youthful collagen production, and partially restored migration speed.',
    organism: "Human cells",
    category: "human-cells",
  },

  /* ────────────────────────────────────────────────────────
     7. CHEMICAL REPROGRAMMING
     ──────────────────────────────────────────────────────── */
  {
    year: "2013",
    title:
      "Pluripotent Stem Cells Induced from Mouse Somatic Cells by Small-Molecule Compounds",
    authors: "Hou, Li, Zhang et al. (Deng lab)",
    journal: "Science",
    doi: "https://doi.org/10.1126/science.1239278",
    summary:
      "First demonstration that pluripotent stem cells can be generated from somatic cells using only seven small-molecule compounds -- no transcription factors needed.",
    organism: "Mouse",
    category: "chemical",
  },
  {
    year: "2022",
    title:
      "Chemical Reprogramming of Human Somatic Cells to Pluripotent Stem Cells",
    authors: "Guan, Wang, Wang et al. (Deng lab)",
    journal: "Nature",
    doi: "https://doi.org/10.1038/s41586-022-04593-5",
    summary:
      "Extended chemical reprogramming to human cells for the first time, generating human chemically induced pluripotent stem cells from somatic cells without genetic factors.",
    organism: "Human cells",
    category: "chemical",
  },
  {
    year: "2023",
    title:
      "Highly Efficient and Rapid Generation of Human Pluripotent Stem Cells by Chemical Reprogramming",
    authors: "Yang, Wang et al. (Deng lab)",
    journal: "Cell Stem Cell",
    doi: "https://doi.org/10.1016/j.stem.2023.02.008",
    summary:
      "Shortened chemical reprogramming from ~50 to 16 days with reproducible efficiency across 17 donors, making chemical reprogramming clinically tractable.",
    organism: "Human cells",
    category: "chemical",
  },
  {
    year: "2023",
    title: "Chemically Induced Reprogramming to Reverse Cellular Aging",
    authors: "Yang, Petty, Dixon-McDougall et al. (Sinclair lab)",
    journal: "Aging",
    doi: "https://doi.org/10.18632/aging.204896",
    summary:
      "Identified six chemical cocktails that restore youthful transcript profiles and reverse transcriptomic age in human cells within 4 days, without genetic factors.",
    organism: "Human cells",
    category: "chemical",
  },
  {
    year: "2025",
    title:
      "Chemical Reprogramming Ameliorates Cellular Hallmarks of Aging and Extends Lifespan",
    authors: "Schoenfeldt, L., Paine, P.T., Pico, S. et al.",
    journal: "EMBO Molecular Medicine",
    doi: "https://doi.org/10.1038/s44321-025-00265-9",
    summary:
      "A seven-compound cocktail reverses aging hallmarks in human fibroblasts; a reduced two-compound subset extended median lifespan by 42% in C. elegans.",
    organism: "Human cells + C. elegans",
    category: "chemical",
  },

  /* ────────────────────────────────────────────────────────
     8. EPIGENETIC CLOCKS
     ──────────────────────────────────────────────────────── */
  {
    year: "2013",
    title: "DNA Methylation Age of Human Tissues and Cell Types",
    authors: "Horvath, S.",
    journal: "Genome Biology",
    doi: "https://doi.org/10.1186/gb-2013-14-10-r115",
    summary:
      "The first multi-tissue epigenetic clock: 353 CpG sites predicting chronological age across 51 tissues (r = 0.97). The foundational biomarker for biological age.",
    organism: "Human",
    category: "clocks",
  },
  {
    year: "2013",
    title:
      "Genome-wide Methylation Profiles Reveal Quantitative Views of Human Aging Rates",
    authors: "Hannum, Guinney, Zhao et al.",
    journal: "Molecular Cell",
    doi: "https://doi.org/10.1016/j.molcel.2012.10.016",
    summary:
      "Built a quantitative model of aging using 71 key CpG markers from 656 blood samples, establishing the Hannum epigenetic clock and showing aging rates vary by gender and genetics.",
    organism: "Human",
    category: "clocks",
  },
  {
    year: "2018",
    title:
      "An Epigenetic Biomarker of Aging for Lifespan and Healthspan (PhenoAge)",
    authors: "Levine, Lu, Quach et al.",
    journal: "Aging",
    doi: "https://doi.org/10.18632/aging.101414",
    summary:
      "DNAm PhenoAge: 513 CpGs optimized for phenotypic age rather than chronological, outperforming prior clocks at predicting mortality, cancer, and Alzheimer's risk.",
    organism: "Human",
    category: "clocks",
  },
  {
    year: "2018",
    title:
      "DNA Methylation-Based Biomarkers and the Epigenetic Clock Theory of Ageing",
    authors: "Horvath & Raj",
    journal: "Nature Reviews Genetics",
    doi: "https://doi.org/10.1038/s41576-018-0004-3",
    summary:
      "Comprehensive review unifying epigenetic clocks under a theory linking developmental and maintenance processes to biological aging across the life course.",
    organism: "Review",
    category: "clocks",
  },
  {
    year: "2019",
    title:
      "DNA Methylation GrimAge Strongly Predicts Lifespan and Healthspan",
    authors: "Lu, Quach, Wilson et al. (Horvath lab)",
    journal: "Aging",
    doi: "https://doi.org/10.18632/aging.101684",
    summary:
      "GrimAge: trained on time-to-death data with 8 methylation-based surrogate markers. Outperforms all prior clocks for predicting mortality, heart disease, and cancer.",
    organism: "Human",
    category: "clocks",
  },

  /* ────────────────────────────────────────────────────────
     9. SAFETY / CANCER RISK
     ──────────────────────────────────────────────────────── */
  {
    year: "2013",
    title:
      "Reprogramming In Vivo Produces Teratomas and iPS Cells with Totipotency Features",
    authors: "Abad, Mosteiro, Pantoja et al. (Serrano lab)",
    journal: "Nature",
    doi: "https://doi.org/10.1038/nature12586",
    summary:
      "Continuous in vivo OSKM causes teratomas across multiple organs -- establishing why partial/transient reprogramming is necessary instead of full reprogramming.",
    organism: "Mouse",
    category: "safety",
  },
  {
    year: "2016",
    title:
      "Tissue Damage and Senescence Provide Critical Signals for Cellular Reprogramming In Vivo",
    authors: "Mosteiro, Pantoja, Alcazar et al. (Serrano lab)",
    journal: "Science",
    doi: "https://doi.org/10.1126/science.aaf4445",
    summary:
      "In vivo OSKM simultaneously induces senescence and reprogramming. Senescence through Ink4a/Arf and IL-6 creates a permissive environment, revealing the link between tumor suppression and reprogramming.",
    organism: "Mouse",
    category: "safety",
  },
  {
    year: "2020",
    title:
      "Prevention of Tumor Risk Associated with the Reprogramming of Human Pluripotent Stem Cells",
    authors: "Lee, Tang, Rao et al.",
    journal: "J. Exp. Clin. Cancer Research",
    doi: "https://doi.org/10.1186/s13046-020-01584-0",
    summary:
      "Comprehensive review of strategies to prevent tumor risk in iPSC therapies: c-Myc exclusion, suicide gene systems, and selection methods for clinical translation.",
    organism: "Review",
    category: "safety",
  },

  /* ────────────────────────────────────────────────────────
     10. NON-HUMAN PRIMATES
     ──────────────────────────────────────────────────────── */
  {
    year: "2025",
    title:
      "Senescence-Resistant Human Mesenchymal Progenitor Cells Counter Aging in Primates",
    authors: "Lei, J., Xin, Z., Liu, N. et al.",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2025.05.021",
    summary:
      "FOXO3-engineered cells delivered to aged macaques improved cognition, preserved brain structure, rejuvenated immunity, and reversed biological age across multiple tissues.",
    organism: "Non-human primate",
    category: "primates",
  },

  /* ────────────────────────────────────────────────────────
     11. REVIEWS
     ──────────────────────────────────────────────────────── */
  {
    year: "2021",
    title: "Cellular Reprogramming and Epigenetic Rejuvenation",
    authors: "Simpson, Olova & Chandra",
    journal: "Clinical Epigenetics",
    doi: "https://doi.org/10.1186/s13148-021-01158-7",
    summary:
      "Reviews the strategy of epigenetic rejuvenation -- separating rejuvenation from dedifferentiation. Discusses transient expression, OSK vs. OSKM, and the safe window concept.",
    organism: "Review",
    category: "reviews",
  },
  {
    year: "2024",
    title:
      "Partial Cellular Reprogramming: A Deep Dive into an Emerging Rejuvenation Technology",
    authors: "Paine, Nguyen & Ocampo",
    journal: "Aging Cell",
    doi: "https://doi.org/10.1111/acel.14039",
    summary:
      "Comprehensive review of partial reprogramming's aging-related benefits, examining how reprogramming modulates cell fate and cellular age while preserving cell identity.",
    organism: "Review",
    category: "reviews",
  },
  {
    year: "2024",
    title:
      "The Long and Winding Road of Reprogramming-Induced Rejuvenation",
    authors: "Ruetz, Pogson, Bhatt et al.",
    journal: "Nature Communications",
    doi: "https://doi.org/10.1038/s41467-024-46020-5",
    summary:
      "Critical review comparing partial reprogramming, full reprogramming, and transdifferentiation approaches. Assesses safety concerns and translational barriers.",
    organism: "Review",
    category: "reviews",
  },
  {
    year: "2024",
    title:
      "Mechanisms, Pathways and Strategies for Rejuvenation Through Epigenetic Reprogramming",
    authors: "Cipriano, A., Moqri, M., Maybury-Lewis, S.Y. et al.",
    journal: "Nature Aging",
    doi: "https://doi.org/10.1038/s43587-023-00539-2",
    summary:
      "Reviews the mechanisms by which transient reprogramming factors achieve rejuvenation at cellular, tissue, and organismal levels. Evaluates translational potential.",
    organism: "Review",
    category: "reviews",
  },
  {
    year: "2024",
    title:
      "Cellular Plasticity in Reprogramming, Rejuvenation and Tumorigenesis: A Pioneer TF Perspective",
    authors: "Huyghe, A., Trajkova, A. and Lavial, F.",
    journal: "Trends in Cell Biology",
    doi: "https://doi.org/10.1016/j.tcb.2023.07.013",
    summary:
      "Examines the role of pioneer transcription factors (Oct4, Sox2, Klf4) in both rejuvenation and tumorigenesis, parsing the critical differences that determine outcome.",
    organism: "Review",
    category: "reviews",
  },

  /* ────────────────────────────────────────────────────────
     12. 2025-2026 LATEST
     ──────────────────────────────────────────────────────── */
  {
    year: "2025",
    title:
      "Prevalent Mesenchymal Drift in Aging and Disease is Reversed by Partial Reprogramming",
    authors: "Lu et al. (Sinclair lab)",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2025.07.031",
    summary:
      'Identified a pervasive "mesenchymal drift" across 40+ tissues and 20 diseases. Higher drift correlates with worse outcomes. Partial reprogramming markedly reduces it.',
    organism: "Human + Mouse",
    category: "latest",
  },
  {
    year: "2025",
    title:
      "Partial Reprogramming by Cyclical Overexpression of Yamanaka Factors Improves Pathological Phenotypes of Tauopathy Mouse Model of Human Alzheimer's Disease",
    authors: "Anton-Fernandez, A., Ruiz de Alegria, A., Mariscal-Casero, A. et al.",
    journal: "Progress in Neurobiology",
    doi: "https://doi.org/10.1016/j.pneurobio.2025.102743",
    summary:
      "Cyclical OSKM improved pathological phenotypes in an Alzheimer's tauopathy model, demonstrating therapeutic potential for neurodegenerative diseases.",
    organism: "Mouse (Alzheimer's)",
    category: "latest",
  },
  {
    year: "2026",
    title:
      "Cognitive Rejuvenation Through Partial Reprogramming of Engram Cells",
    authors: "Berdugo-Vega et al. (EPFL)",
    journal: "Neuron",
    doi: "https://doi.org/10.1016/j.neuron.2025.11.028",
    summary:
      "Targeted OSK at engram (memory trace) neurons in aged and Alzheimer's mice, recovering learning and memory to youthful levels by re-establishing synaptic plasticity.",
    organism: "Mouse (brain)",
    category: "latest",
  },
  {
    year: "2026",
    title:
      "The Epigenetic Rejuvenation Promise: Partial Reprogramming as a Therapeutic Strategy for Aging and Disease",
    authors: "Li, Y.Y. and Tay, F.R.",
    journal: "Ageing Research Reviews",
    doi: "https://doi.org/10.1016/j.arr.2026.103009",
    summary:
      "Comprehensive review of how partial reprogramming resets epigenetic age and opens therapeutic opportunities for degenerative diseases without tumorigenic risks.",
    organism: "Review",
    category: "latest",
  },
  {
    year: "2026",
    title:
      "Redefining Cellular Reprogramming with Advanced Genomic Technologies",
    authors: "Morris, S.A.",
    journal: "Nature Reviews Genetics",
    doi: "https://doi.org/10.1038/s41576-025-00899-y",
    summary:
      "Reviews how single-cell genomics and molecular recording tools are revealing mechanisms of incomplete reprogramming, highlighting targetable failure points for rejuvenation therapies.",
    organism: "Review",
    category: "latest",
  },
];

/* ─── Categories ─────────────────────────────────────────── */

export const categories = [
  { key: "all", label: "All" },
  { key: "foundational", label: "Foundational" },
  { key: "theoretical", label: "Theoretical" },
  { key: "mouse-progeria", label: "Aging Mice (Progeria)" },
  { key: "mouse-wildtype", label: "Aging Mice (Natural)" },
  { key: "tissue-specific", label: "Organ-Specific" },
  { key: "human-cells", label: "Human Cells" },
  { key: "chemical", label: "Drug-Based" },
  { key: "clocks", label: "Biological Clocks" },
  { key: "safety", label: "Safety & Risks" },
  { key: "primates", label: "Primate Studies" },
  { key: "reviews", label: "Reviews" },
  { key: "latest", label: "2025-2026" },
] as const;

export type CategoryKey = (typeof categories)[number]["key"];

/* ─── Eras ───────────────────────────────────────────────── */

export const eras = [
  { key: "foundation", label: "The Foundation", range: "1957 - 2015", start: 0, end: 2015 },
  { key: "acceleration", label: "The Acceleration", range: "2016 - 2022", start: 2016, end: 2022 },
  { key: "clinic", label: "The Clinic", range: "2023 - 2026", start: 2023, end: 2026 },
] as const;
