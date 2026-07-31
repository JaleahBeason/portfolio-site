export default function Paperclip({ className = "", rotate = -8 }) {
  return (
    <svg
      viewBox="0 0 24 40"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      width="20"
      height="34"
      aria-hidden="true"
    >
      <path
        d="M12 4 C6 4 3 8 3 13 L3 28 C3 33 7 36 12 36 C17 36 20 33 20 28 L20 10 C20 7 17 5 15 5 C13 5 11 7 11 10 L11 27"
        fill="none"
        stroke="#A8ADB4"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
