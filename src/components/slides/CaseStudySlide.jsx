import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { caseStudies } from "../../data/content"

const TABS = ["Product Spec", "User Flow", "Technical Architecture"]

export default function CaseStudySlide({ studyId }) {
  const [tab, setTab] = useState(TABS[0])
  const study = caseStudies[studyId]
  if (!study) return null

  return (
    <div className="min-h-full flex flex-col items-center justify-start px-6 md:px-16 gap-6 overflow-y-auto py-10">
      <div className="text-center">
        <div className="font-serif font-bold text-5xl md:text-6xl text-blue-deep">
          {study.name}
        </div>
        <div className="text-base text-charcoal-soft">{study.tagline}</div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={study.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-brass hover:underline"
          >
            View on GitHub ↗
          </a>
          {study.live && (
            <a
              href={study.live}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-brass hover:underline"
            >
              View live demo ↗
            </a>
          )}
        </div>
      </div>

      <div
        role="tablist"
        aria-label={`${study.name} case study sections`}
        className="flex gap-1 bg-paper-dim rounded-full p-1.5"
      >
        {TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
              tab === t
                ? "bg-blue-deep text-paper"
                : "text-charcoal-soft hover:text-blue-deep"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="bg-paper/75 backdrop-blur-sm border border-[#E3CBC3] rounded-md p-7 max-w-2xl w-full shadow-[2px_3px_0_rgba(64,31,40,0.12)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.2 }}
          >
            {tab === "Product Spec" && (
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-brass uppercase tracking-wide mb-1.5">
                    Problem
                  </div>
                  <p className="text-base leading-relaxed text-charcoal-soft">
                    {study.productSpec.problem}
                  </p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-brass uppercase tracking-wide mb-1.5">
                    Goals
                  </div>
                  <ul className="text-base leading-relaxed text-charcoal-soft list-disc pl-5 space-y-1.5">
                    {study.productSpec.goals.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-semibold text-brass uppercase tracking-wide mb-1.5">
                    How I'd measure it
                  </div>
                  <ul className="text-base leading-relaxed text-charcoal-soft list-disc pl-5 space-y-1.5">
                    {study.productSpec.metrics.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tab === "User Flow" && (
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-brass uppercase tracking-wide mb-1.5">
                    Who it's for
                  </div>
                  <p className="text-base leading-relaxed text-charcoal-soft">
                    {study.userFlow.who}
                  </p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-brass uppercase tracking-wide mb-1.5">
                    Flow
                  </div>
                  <ol className="text-base leading-relaxed text-charcoal-soft list-decimal pl-5 space-y-1.5">
                    {study.userFlow.flow.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {tab === "Technical Architecture" && (
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-brass uppercase tracking-wide mb-1.5">
                    Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.technicalArchitecture.stack.map((s) => (
                      <span
                        key={s}
                        className="text-sm px-3 py-1.5 rounded-full bg-paper-dim text-charcoal-soft"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-base leading-relaxed text-charcoal-soft">
                  {study.technicalArchitecture.notes}
                </p>
                <div>
                  <div className="text-sm font-semibold text-brass uppercase tracking-wide mb-1.5">
                    Tradeoffs
                  </div>
                  <ul className="text-base leading-relaxed text-charcoal-soft list-disc pl-5 space-y-1.5">
                    {study.technicalArchitecture.tradeoffs.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
