export default function BinderRings() {
  const count = 9

  return (
    <div
      className="hidden md:flex absolute top-0 bottom-0 left-0 flex-col justify-evenly z-30 pointer-events-none"
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="34"
          height="26"
          viewBox="0 0 34 26"
          style={{ marginLeft: -6 }}
        >
          {/* punched hole in the page edge */}
          <circle cx="10" cy="13" r="5.5" fill="#E9EFF4" stroke="#C9BA9A" strokeWidth="1" />
          {/* metal coil loop threading through it */}
          <path
            d="M6 4 C22 4 26 8 26 13 C26 18 22 22 6 22"
            fill="none"
            stroke="#A8ADB4"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M6 4 C22 4 26 8 26 13 C26 18 22 22 6 22"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.75"
            strokeLinecap="round"
            opacity="0.6"
            transform="translate(-0.5,-0.5)"
          />
        </svg>
      ))}
    </div>
  )
}
