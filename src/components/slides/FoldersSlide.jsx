import { useState } from "react"
import FolderItem from "../FolderItem"
import { folders, otherProjects } from "../../data/content"

export default function FoldersSlide({ onOpenCaseStudy }) {
  const [showList, setShowList] = useState(false)

  function handleOpen(folder) {
    if (folder.kind === "case-study") {
      onOpenCaseStudy(folder.id)
    } else if (folder.kind === "external") {
      window.open(folder.url, "_blank", "noreferrer")
    } else if (folder.kind === "list") {
      setShowList((v) => !v)
    }
  }

  return (
    <div className="min-h-full flex flex-col items-center justify-center px-6 md:px-16 gap-8 py-10">
      <div className="font-serif font-bold text-5xl md:text-6xl text-blue-deep">
        Table of contents
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-start justify-items-center">
        {folders.map((f, i) => (
          <FolderItem
            key={f.id}
            label={f.label}
            index={i}
            onOpen={() => handleOpen(f)}
          />
        ))}
      </div>

      {showList && (
        <div className="bg-paper/75 backdrop-blur-sm border border-[#E3CBC3] rounded-md p-6 max-w-lg w-full">
          <div className="text-sm font-semibold text-brass uppercase tracking-wide mb-3">
            More technical work
          </div>
          <ul className="space-y-3">
            {otherProjects.map((p) => (
              <li key={p.name} className="text-sm">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-deep hover:underline"
                >
                  {p.name}
                </a>
                <span className="text-charcoal-soft">: {p.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
