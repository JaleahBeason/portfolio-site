import ScrapbookCard from "../ScrapbookCard"
import { bridgeSkills, education, expertiseTags } from "../../data/content"

export default function AboutSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 md:px-16 gap-8 overflow-y-auto py-10">
      <div className="font-serif font-bold text-5xl md:text-6xl text-blue-deep">
        Why CS + PM?
      </div>

      <ScrapbookCard variant="note" rotate={1} className="max-w-2xl">
        <p className="text-base leading-relaxed text-charcoal-soft mb-5">
          I built real, shipped software before I ever touched a product
          document: a CLI tool, a REST API that reuses that tool's own logic
          instead of rewriting it, a React dashboard on top of that, and a
          recipe app with a save feature I designed myself. Every single
          time, I caught myself asking the same annoying question: who is
          this actually for, and how would I know if it's working for them.
          Apparently that's called product thinking. I just thought I was
          being nosy.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <div className="text-sm font-semibold text-brass mb-2 uppercase tracking-wide">
              Technical grounding
            </div>
            <div className="flex flex-wrap gap-2">
              {bridgeSkills.technical.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1.5 rounded-full bg-paper-dim text-charcoal-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-blue-deep mb-2 uppercase tracking-wide">
              Product thinking
            </div>
            <div className="flex flex-wrap gap-2">
              {bridgeSkills.product.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1.5 rounded-full bg-blue-pale text-blue-deep"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrapbookCard>

      <div className="flex flex-wrap justify-center gap-4">
        <ScrapbookCard variant="badge" rotate={-1} className="text-center">
          <div className="text-xs uppercase tracking-wide text-brass mb-1.5">
            Education
          </div>
          <div className="text-lg font-semibold text-blue-deep">
            {education.degree}
          </div>
          <div className="text-sm text-charcoal-soft">{education.school}</div>
        </ScrapbookCard>
      </div>

      <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl">
        {expertiseTags.map((tag) => (
          <span
            key={tag}
            className="text-sm px-4 py-1.5 rounded-full border border-[#E3CBC3] bg-paper text-charcoal-soft"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
