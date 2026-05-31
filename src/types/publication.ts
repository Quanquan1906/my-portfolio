export type PublicationStatus =
  | "Published"
  | "Accepted"
  | "Under Review"
  | "In Progress";

export type PublicationType =
  | "Conference Paper"
  | "Research Poster"
  | "Award";

export interface Publication {
  title: string;
  authors: string[];
  year: number;
  venue?: string;
  status: PublicationStatus;
  type?: PublicationType;
  description: string;
  highlights?: string[];
  keywords: string[];
  pdfUrl?: string;
  codeUrl?: string;
  doiUrl?: string;
  posterUrl?: string;
  certificateUrl?: string;
}
