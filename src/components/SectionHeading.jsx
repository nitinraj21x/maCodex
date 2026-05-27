function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.34em] text-ruby">{eyebrow}</p>
      ) : null}
      <h2 className="mt-4 font-display text-4xl leading-none text-soot sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-soot/76 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
