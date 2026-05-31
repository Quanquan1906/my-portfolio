import { ExternalLink, FileText, Code2, Image, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ImageLightbox from "@/components/research/ImageLightbox";
import type { Publication, PublicationStatus, PublicationType } from "@/types/publication";

function getStatusStyle(status: PublicationStatus): string {
  switch (status) {
    case "Published":
      return "border-cyan-500/40 bg-cyan-500/10 text-cyan-300";
    case "Accepted":
      return "border-blue-400/30 bg-blue-500/15 text-blue-300";
    case "Under Review":
      return "border-blue-400/30 bg-blue-500/8 text-blue-400";
    case "In Progress":
      return "border-border/50 bg-muted/40 text-muted-foreground";
  }
}

function getTypeStyle(type: PublicationType): string {
  switch (type) {
    case "Conference Paper":
      return "border-violet-400/30 bg-violet-500/10 text-violet-300";
    case "Research Poster":
      return "border-amber-400/30 bg-amber-500/10 text-amber-300";
    case "Award":
      return "border-yellow-400/30 bg-yellow-500/10 text-yellow-300";
  }
}

interface ResearchCardProps {
  publication: Publication;
}

export default function ResearchCard({ publication }: ResearchCardProps) {
  const {
    title,
    authors,
    year,
    venue,
    status,
    type,
    description,
    highlights,
    keywords,
    pdfUrl,
    codeUrl,
    doiUrl,
    posterUrl,
    certificateUrl,
  } = publication;

  const hasLinks = pdfUrl || codeUrl || doiUrl || posterUrl || certificateUrl;

  return (
    <article className="group relative rounded-2xl border border-border-subtle bg-surface/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/5 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">
      {/* Subtle inner glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_top_left,rgba(59,130,246,0.06),transparent_60%)]" />

      {/* External link (DOI) */}
      {doiUrl && (
        <a
          href={doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-8 top-8 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Open DOI"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      )}

      {/* Badges row: status + type */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[1px] ${getStatusStyle(status)}`}
        >
          {status}
        </span>
        {type && (
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[1px] ${getTypeStyle(type)}`}
          >
            {type}
          </span>
        )}
      </div>

      {/* Venue + year */}
      {(venue || year) && (
        <p className="mb-2 font-mono text-xs text-blue-400/70">
          {venue && <span>{venue}</span>}
          {venue && year && <span> · </span>}
          {year && <span>{year}</span>}
        </p>
      )}

      {/* Title */}
      <h3 className="mb-2 max-w-3xl pr-8 text-xl font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-blue-50">
        {title}
      </h3>

      {/* Authors */}
      <p className="mb-4 font-mono text-xs text-muted-foreground">
        {authors.join(", ")}
      </p>

      {/* Description */}
      <p className="mb-5 max-w-3xl text-sm leading-7 text-muted-foreground">
        {description}
      </p>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <ul className="mb-5 space-y-1">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400/60" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Keywords */}
      <div className="flex flex-wrap gap-2">
        {keywords.map((kw) => (
          <Badge key={kw} variant="outline">
            {kw}
          </Badge>
        ))}
      </div>

      {/* Optional links */}
      {hasLinks && (
        <div className="mt-6 flex flex-wrap gap-4 border-t border-border-subtle pt-5">
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors hover:text-blue-300"
            >
              <FileText className="h-3.5 w-3.5" />
              PDF
            </a>
          )}
          {posterUrl && (
            <ImageLightbox
              src={posterUrl}
              alt={`${title} — Poster`}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors hover:text-blue-300"
            >
              <Image className="h-3.5 w-3.5" />
              Poster
            </ImageLightbox>
          )}
          {certificateUrl && (
            <ImageLightbox
              src={certificateUrl}
              alt={`${title} — Certificate`}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors hover:text-amber-300"
            >
              <Award className="h-3.5 w-3.5" />
              Certificate
            </ImageLightbox>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors hover:text-blue-300"
            >
              <Code2 className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      )}
    </article>
  );
}
