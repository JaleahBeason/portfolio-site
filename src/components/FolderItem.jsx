import { motion } from "framer-motion"

const COLORS = ["#401F28", "#D38492", "#A7A94F", "#8A6F58"]

export default function FolderItem({ label, index, onOpen }) {
  const color = COLORS[index % COLORS.length]

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      className="flex flex-col items-center text-center cursor-pointer group focus:outline-none"
      aria-label={`Open ${label}`}
    >
      <div className="relative mb-3 w-28 md:w-32">
        <div
          className="absolute -top-3 left-3 w-12 h-4 rounded-t-sm"
          style={{ background: color }}
        />
        <div
          className="h-20 rounded-tr-xl rounded-b-md shadow-[3px_4px_0_rgba(64,31,40,0.18)] group-hover:shadow-[4px_6px_0_rgba(64,31,40,0.24)] transition-shadow"
          style={{ background: color }}
        />
      </div>
      <div className="text-sm text-charcoal-soft font-medium w-28 md:w-32">{label}</div>
    </motion.button>
  )
}
