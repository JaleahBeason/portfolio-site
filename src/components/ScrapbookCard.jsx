import { motion } from "framer-motion"
import Paperclip from "./Paperclip"

/**
 * A reusable "paper" card used throughout the scrapbook aesthetic.
 * variant: "note" | "polaroid" | "badge"
 */
export default function ScrapbookCard({
  children,
  variant = "note",
  clipped = false,
  rotate = 0,
  className = "",
}) {
  const base =
    "relative bg-paper/75 backdrop-blur-sm border border-[#E3CBC3] rounded-md shadow-[2px_3px_0_rgba(64,31,40,0.14)]"
  const variantClass =
    variant === "polaroid"
      ? "p-4 pb-8"
      : variant === "badge"
      ? "p-6"
      : "p-7"

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, rotate: rotate - 2 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`${base} ${variantClass} ${className}`}
    >
      {clipped && (
        <Paperclip className="absolute -top-4 left-1/2 -translate-x-1/2 z-10" />
      )}
      {children}
    </motion.div>
  )
}
