import type { Publication } from "@/types/publication";

export const publications: Publication[] = [
  {
    title: "Multi-Scale Feature Extraction for Cognitive Load Classification",
    authors: [
      "Quoc-Huy Nguyen",
      "Quan Do Minh",
      "Nhu-Tai Do",
      "Lien Nguyen Thi Kim",
    ],
    year: 2025,
    venue: "TAAI 2025",
    status: "Accepted",
    type: "Conference Paper",
    description:
      "A cognitive load classification study that combines Simple Moving Average smoothing with multi-scale feature extraction from physiological signals. The proposed approach uses machine learning models to improve classification performance on wearable-based cognitive load data.",
    highlights: [
      "Accuracy: 75.65%",
      "ROC/AUC: 77%",
      "Best model: XGBoost",
    ],
    keywords: [
      "Cognitive Load",
      "Physiological Signals",
      "Multi-Scale Analysis",
      "Simple Moving Average",
      "XGBoost",
      "Human-Computer Interaction",
    ],
    pdfUrl: "/images/2509_taai_cognitive_load_final.pdf",
    posterUrl: "/images/Multi-Scale%20Feature%20Extraction%20for%20Cognitive%20Load%20Classification.png",
  },
  {
    title: "An Efficient Vibe Coding Process for AI-Assisted Software Development",
    authors: [
      "Vu Thi Thanh Huong",
      "Quan Do Minh",
      "Nguyen Thi Ngoc Thanh",
    ],
    year: 2026,
    venue: "SCFF26",
    status: "Accepted",
    type: "Conference Paper",
    description:
      "A software engineering study that proposes a structured vibe coding process for AI-assisted software development. The process connects business idea formulation, low-code specification, PRD construction, POC development, decoupling, testing, and GitHub delivery.",
    highlights: [
      "311 / 311 tests passed after decoupling",
      "Estimated development time reduced from 78–93 hours to 44–51 hours",
      "Focus: maintainability, testability, and human-in-the-loop refinement",
    ],
    keywords: [
      "Vibe Coding",
      "AI-Assisted Software Development",
      "Human-in-the-loop",
      "Decoupling",
      "Software Testing",
      "PRD",
    ],
    pdfUrl: "/images/(Eng_Final_v1.1)%20An%20Efficient%20Vibe%20Coding%20Process%20for%20AI-Assisted%20Soft-ware%20Development.pdf",
    posterUrl: "/images/SCFF26_Poster_An%20Efficient%20Vibe%20Coding%20Process%20for%20AI-Assisted%20Software%20Development.png",
  },
  {
    title: "Application of Bayesian Networks for Classifying Cognitive Load Signals",
    authors: ["Quan Do Minh"],
    year: 2025,
    venue: "Student Scientific Research Prize 2025",
    status: "Accepted",
    type: "Research Poster",
    description:
      "A research poster applying Bayesian Networks to model probabilistic relationships between physiological signals and cognitive load states.",
    highlights: [
      "Research poster on Bayesian Networks",
      "Focused on cognitive load classification from wearable physiological signals",
      "Recognized in Student Scientific Research Prize 2025",
    ],
    keywords: [
      "Bayesian Network",
      "Cognitive Load",
      "Physiological Signals",
      "GSR",
      "HR",
      "RR",
      "Temperature",
    ],
    posterUrl: "/images/Poster%20eureka%20(2).png",
    certificateUrl: "/images/z7884525375439_1f3b98159a262e65df7881f9aca4ec26.jpg",
  },
];
