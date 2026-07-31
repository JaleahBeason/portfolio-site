import ScrapbookCard from "../ScrapbookCard"
import { experience, otherExperience } from "../../data/content"

export default function ExperienceSlide() {
  return (
    <div className="min-h-full flex flex-col items-center justify-start px-6 md:px-16 gap-6 overflow-y-auto py-10">
      <div className="font-serif font-bold text-5xl md:text-6xl text-blue-deep">
        Experience
      </div>

      <div className="flex flex-col gap-5 max-w-2xl w-full">
        {experience.map((job, i) => (
          <ScrapbookCard key={job.org} variant="note" rotate={i % 2 === 0 ? -0.5 : 0.5}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <div>
                <span className="text-lg font-semibold text-blue-deep">{job.role}</span>
                <span className="text-base text-charcoal-soft"> &middot; {job.org}</span>
              </div>
              <div className="text-sm text-brass font-medium">{job.dates}</div>
            </div>
            <ul className="text-base leading-relaxed text-charcoal-soft list-disc pl-5 space-y-1">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </ScrapbookCard>
        ))}
      </div>

      <div className="text-sm text-charcoal-soft/80 max-w-2xl text-center">
        Also: {otherExperience.map((o, i) => (
          <span key={o.org}>
            {o.role} at {o.org} ({o.dates}){i < otherExperience.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
    </div>
  )
}
