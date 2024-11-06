export const LoadingSpin = ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-80"
        cx={12}
        cy={12}
        r={10}
        stroke="white"
        strokeWidth={4}
        fill="transparent"
      />
      <path
        className="opacity-50"
        fill="#0073CF"
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
  