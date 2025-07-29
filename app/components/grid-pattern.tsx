import { useId } from 'react'
import { cn } from '~/lib/utils'

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  squares?: Array<[number, number]>
  strokeDasharray?: string | number
  strokeColor?: string
  fillColor?: string
  squareFillColor?: string
  className?: string
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = '0',
  squares,
  strokeColor = 'rgba(156, 163, 175, 0.3)', // neutral-400/30
  fillColor = 'none',
  squareFillColor = 'rgba(91, 76, 218, 0.1)', // subtle violet fill
  className,
  ...props
}: GridPatternProps) {
  const id = useId()

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full',
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M0.5 ${height} V0.5 H${width}`}
            fill={fillColor}
            stroke={strokeColor}
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${id})`} strokeWidth={0} />

      {/* Render squares with colored fill */}
      {squares && squares.length > 0 && (
        <g transform={`translate(${x}, ${y})`} className="overflow-visible">
          {squares.map(([sqX, sqY]) => (
            <rect
              key={`${sqX}-${sqY}`}
              width={width - 1}
              height={height - 1}
              x={sqX * width + 1}
              y={sqY * height + 1}
              fill={squareFillColor}
              stroke="none"
            />
          ))}
        </g>
      )}
    </svg>
  )
}

export default GridPattern
