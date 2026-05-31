const message = "Thank you for taking the time to review my portfolio.";

export default function ThankYouMarquee() {
  const repeatedMessages = Array.from({ length: 8 }, (_, index) => (
    <span key={index} className="mx-8 whitespace-nowrap">
      {message}
    </span>
  ));

  return (
    <section
      aria-label="Thank you message"
      className="border-y border-blue-400/20 bg-background/40 py-4"
    >
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center text-xs font-mono uppercase tracking-[0.25em] text-blue-200/80 md:text-sm">
          {repeatedMessages}
          {repeatedMessages}
        </div>
      </div>
    </section>
  );
}
