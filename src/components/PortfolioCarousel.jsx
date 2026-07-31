import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import BinderRings from "./BinderRings"
import CoverSlide from "./slides/CoverSlide"
import AboutSlide from "./slides/AboutSlide"
import ExperienceSlide from "./slides/ExperienceSlide"
import FoldersSlide from "./slides/FoldersSlide"
import CaseStudySlide from "./slides/CaseStudySlide"
import ContactSlide from "./slides/ContactSlide"

const SLIDES = ["cover", "about", "experience", "folders", "case-study", "contact"]
const SLIDE_LABELS = {
  cover: "Hello",
  about: "About",
  experience: "Experience",
  folders: "Projects",
  "case-study": "Case study",
  contact: "Contact",
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  )
  useEffect(() => {
    function onResize() {
      setIsDesktop(window.innerWidth >= 768)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])
  return isDesktop
}

export default function PortfolioCarousel() {
  const isDesktop = useIsDesktop()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [activeCaseStudy, setActiveCaseStudy] = useState("devmetrics")

  const goTo = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, next))
      setDirection(clamped > index ? 1 : -1)
      setIndex(clamped)
    },
    [index]
  )

  const openCaseStudy = useCallback(
    (id) => {
      setActiveCaseStudy(id)
      goTo(SLIDES.indexOf("case-study"))
    },
    [goTo]
  )

  useEffect(() => {
    if (!isDesktop) return
    function onKey(e) {
      if (e.key === "ArrowRight") goTo(index + 1)
      if (e.key === "ArrowLeft") goTo(index - 1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [index, goTo, isDesktop])

  function renderSlide(id) {
    switch (id) {
      case "cover":
        return <CoverSlide />
      case "about":
        return <AboutSlide />
      case "experience":
        return <ExperienceSlide />
      case "folders":
        return <FoldersSlide onOpenCaseStudy={openCaseStudy} />
      case "case-study":
        return <CaseStudySlide studyId={activeCaseStudy} />
      case "contact":
        return <ContactSlide />
      default:
        return null
    }
  }

  if (!isDesktop) {
    return (
      <div className="min-h-screen">
        {SLIDES.map((id) => (
          <section key={id} className="min-h-[70vh] py-8">
            {renderSlide(id)}
          </section>
        ))}
      </div>
    )
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden flex flex-col">
      <BinderRings />

      <div className="flex-1 relative" style={{ perspective: 1600 }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={SLIDES[index]}
            custom={direction}
            initial={{ opacity: 0, rotateY: direction * 75 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: direction * -75 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 ml-6 md:ml-8"
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            {renderSlide(SLIDES[index])}
          </motion.div>
        </AnimatePresence>

        {index > 0 && (
          <button
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-paper/80 border border-[#E3CBC3] text-blue-deep text-lg flex items-center justify-center hover:bg-paper transition-colors z-30"
          >
            ←
          </button>
        )}
        {index < SLIDES.length - 1 && (
          <button
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-paper/80 border border-[#E3CBC3] text-blue-deep text-lg flex items-center justify-center hover:bg-paper transition-colors z-30"
          >
            →
          </button>
        )}
      </div>

      <nav
        aria-label="Slide navigation"
        className="flex justify-center gap-3 pb-6 pt-3"
      >
        {SLIDES.map((id, i) => (
          <button
            key={id}
            onClick={() => goTo(i)}
            aria-current={i === index}
            className={`text-sm px-4 py-2 rounded-full transition-colors ${
              i === index
                ? "bg-blue-deep text-paper"
                : "bg-paper/70 text-charcoal-soft hover:bg-paper"
            }`}
          >
            {SLIDE_LABELS[id]}
          </button>
        ))}
      </nav>
    </div>
  )
}
