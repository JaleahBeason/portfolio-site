import ScrapbookCard from "../ScrapbookCard"
import { profile } from "../../data/content"
import headshot from "../../assets/headshot.jpeg"

export default function CoverSlide() {
  const { name, title, bio, contact } = profile

  return (
    <div className="min-h-full flex flex-col items-center justify-center px-6 md:px-16 gap-6 py-10">
      <div className="text-center">
        <div className="font-serif font-bold text-6xl md:text-8xl text-blue-deep mb-3">
          Hello,
        </div>
        <div className="text-xl md:text-2xl text-charcoal-soft">
          I'm {name}, {title}
        </div>
      </div>

      <ScrapbookCard variant="badge" clipped rotate={-2} className="w-[26rem] max-w-full">
        <div className="flex gap-5 items-start">
          <img
            src={headshot}
            alt={name}
            className="w-28 h-32 md:w-32 md:h-36 rounded-md object-cover object-top flex-shrink-0 border border-[#E3CBC3]"
          />
          <p className="text-base leading-relaxed text-charcoal-soft self-center">
            {bio}
          </p>
        </div>
      </ScrapbookCard>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${contact.email}`}
          className="text-sm font-medium px-5 py-2 rounded-full bg-paper border border-[#E3CBC3] text-blue-deep hover:bg-paper-dim transition-colors"
        >
          Email
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium px-5 py-2 rounded-full bg-paper border border-[#E3CBC3] text-blue-deep hover:bg-paper-dim transition-colors"
        >
          GitHub
        </a>
        {contact.linkedin && (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium px-5 py-2 rounded-full bg-paper border border-[#E3CBC3] text-blue-deep hover:bg-paper-dim transition-colors"
          >
            LinkedIn
          </a>
        )}
        {contact.resume && (
          <a
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium px-5 py-2 rounded-full bg-blue-deep text-paper hover:bg-blue-mid transition-colors"
          >
            Resume
          </a>
        )}
      </div>

      <div className="text-sm text-charcoal-soft/70">
        Use the arrows, tabs below, or your keyboard to look around →
      </div>
    </div>
  )
}
