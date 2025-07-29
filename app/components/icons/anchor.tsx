import { type SVGProps } from 'react'

interface AnchorProps extends SVGProps<SVGSVGElement> {
  linearFrom?: string
  linearTo?: string
}

const Anchor = ({
  linearFrom = '#23D8A1',   // Teal default
  linearTo = '#5B4CDA',     // Violet default
  className,
  style,
  ...props
}: AnchorProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 974 1280'
    className={['drop-shadow-2xl', className].filter(Boolean).join(' ')}
    style={style}
    aria-hidden="true"
    {...props}
  >
    <defs>
      <linearGradient id='anchor-a' x1='50%' y1='0%' x2='50%' y2='100%'>
        <stop offset={0} stopColor={linearFrom} />
        <stop offset={1} stopColor={linearTo} />
      </linearGradient>
      {/* SVG drop shadow filter for glow/depth effect */}
      <filter id="anchorShadow" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor={linearTo} floodOpacity="0.28" />
      </filter>
    </defs>
    <g filter="url(#anchorShadow)">
      <path
        fill="url(#anchor-a)"
        d="M466.5.9c-19.8 3.2-42 14.2-58.7 29-11.1 9.8-22.3 28.2-27.1 44.1-5.1 16.8-6.2 30.6-4.9 58.5..."
      />
    </g>
  </svg>
)

export default Anchor
