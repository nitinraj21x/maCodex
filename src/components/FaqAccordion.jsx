import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <article key={item.question} className="overflow-hidden rounded-[1.75rem] border border-ruby/10 bg-white/45">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span className="font-display text-2xl text-soot sm:text-3xl">{item.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-ruby transition ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open ? (
              <div className="px-6 pb-6 text-base leading-8 text-soot/76">{item.answer}</div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

export default FaqAccordion;
