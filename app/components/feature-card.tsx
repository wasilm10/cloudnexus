import { cn } from '~/lib/utils'
import { type FeatureCardProps } from '~/types/feature-card'

const FeatureCard = ({
  title,
  description,
  icon,
  backgroundColor,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        'relative max-w-sm flex flex-col gap-6 rounded-xl bg-gradient-to-tr from-[#23D8A1]/20 via-[#5B4CDA]/10 to-transparent p-6 shadow-lg transition-shadow hover:shadow-2xl md:text-left',
        backgroundColor
      )}
    >
      <span
        className={cn(
          'mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#5B4CDA] to-[#23D8A1] shadow-md transition-transform group-hover:scale-110 md:ml-0',
          backgroundColor
        )}
      >
        {icon}
      </span>
      <div className='flex flex-col gap-3 text-center md:text-left'>
        <h2 className='text-2xl font-extrabold tracking-tight text-transparent bg-gradient-to-b from-[#5B4CDA] to-[#23D8A1] bg-clip-text'>
          {title}
        </h2>
        <p className='text-gray-600 dark:text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
