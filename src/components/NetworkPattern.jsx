const TRACES = [
  "M 4 10 H 22 V 26 H 40",
  "M 40 26 H 60",
  "M 15 40 V 18 H 34",
  "M 70 8 V 30 H 88",
  "M 88 30 H 96 V 55",
  "M 60 60 H 78 V 45",
  "M 20 65 V 88 H 45",
  "M 45 88 H 62",
  "M 78 72 V 92",
  "M 55 30 V 45",
  "M 6 55 H 15",
]

const PADS = [
  [4, 10], [22, 26], [40, 26], [60, 26], [15, 40], [34, 18],
  [70, 8], [88, 30], [96, 55], [60, 60], [78, 45], [20, 65],
  [20, 88], [45, 88], [62, 88], [78, 72], [78, 92], [55, 30],
  [55, 45], [6, 55], [15, 55],
]

export default function NetworkPattern({ className = "" }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {TRACES.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="#401F28"
          strokeWidth="0.35"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {PADS.map(([x, y], i) => (
        <rect key={i} x={x - 0.6} y={y - 0.6} width="1.2" height="1.2" fill="#401F28" />
      ))}
    </svg>
  )
}
