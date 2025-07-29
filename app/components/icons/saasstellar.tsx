import { type SVGProps } from 'react'

interface CloudNexusProps extends SVGProps<SVGSVGElement> {
  linearFrom?: string
  linearTo?: string
  textClassName?: string
}

const CloudNexus = ({ linearFrom, linearTo, textClassName, ...props }: CloudNexusProps) => (
  <div className="flex items-center space-x-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient
          id="cloudnexus-gradient"
          x1="0"
          y1="0"
          x2="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" className={linearFrom} />
          <stop offset="1" stopColor="currentColor" className={linearTo} />
        </linearGradient>
      </defs>

      <circle cx="32" cy="32" r="28" fill="url(#cloudnexus-gradient)" opacity="0.1" />
      <path
        d="M32 6C18 16 10 32 14 46c6 20 36 20 40 0 4-14-4-30-18-40z"
        fill="url(#cloudnexus-gradient)"
      />
      <path
        d="M20 26c6-6 18-6 24 0s6 18 0 24-18 6-24 0-6-18 0-24z"
        fill="url(#cloudnexus-gradient)"
        opacity="0.6"
      />
      <path
        d="M32 18c-4 8-4 24 0 32"
        stroke="currentColor"
        className={linearFrom}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>

    <span className={textClassName ?? 'text-lg font-semibold text-current'}>
      CloudNexus
    </span>
  </div>
)

export default CloudNexus
