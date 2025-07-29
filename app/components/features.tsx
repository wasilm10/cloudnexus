import React from 'react'
import {
  BlocksIcon,
  DollarSignIcon,
  MessagesSquareIcon,
  SettingsIcon,
  ShieldCheckIcon,
  ZapIcon,
} from 'lucide-react'
import { type FeatureCardProps } from '~/types/feature-card'
import FeatureCard from './feature-card'

const featuresData: FeatureCardProps[] = [
  {
    title: 'Highly Customizable',
    description: 'Tailor the platform to your unique workflow and business needs.',
    icon: <SettingsIcon size={28} className="text-[#5B4CDA]" />,
    backgroundColor: 'from-[#5B4CDA]/20 to-[#23D8A1]/10',
  },
  {
    title: 'Secure and Reliable',
    description: 'Advanced security protocols ensure your data remains safe and confidential.',
    icon: <ShieldCheckIcon size={28} className="text-[#23D8A1]" />,
    backgroundColor: 'from-[#23D8A1]/20 to-[#5B4CDA]/10',
  },
  {
    title: 'Easy to Use',
    description: 'Intuitive interface designed for seamless onboarding and daily use.',
    icon: <ZapIcon size={28} className="text-[#5B4CDA]" />,
    backgroundColor: 'from-[#5B4CDA]/20 to-[#23D8A1]/10',
  },
  {
    title: 'Powerful Integrations',
    description: 'Connect effortlessly with your favorite tools to optimize workflows.',
    icon: <BlocksIcon size={28} className="text-[#23D8A1]" />,
    backgroundColor: 'from-[#23D8A1]/20 to-[#5B4CDA]/10',
  },
  {
    title: 'Affordable Pricing',
    description: 'Flexible plans designed to fit businesses of all sizes and budgets.',
    icon: <DollarSignIcon size={28} className="text-[#5B4CDA]" />,
    backgroundColor: 'from-[#5B4CDA]/20 to-[#23D8A1]/10',
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support team available anytime to assist you.',
    icon: <MessagesSquareIcon size={28} className="text-[#23D8A1]" />,
    backgroundColor: 'from-[#23D8A1]/20 to-[#5B4CDA]/10',
  },
]

const Features = () => {
  return (
    <section className="mx-auto mt-40 max-w-7xl px-6">
      <div className="mx-auto max-w-2xl flex flex-col gap-6 text-center">
        <div>
          <span className="rounded-full border border-[#5B4CDA50] bg-[#5B4CDA20] px-3 py-1 text-sm font-medium text-[#5B4CDA]">
            <span className="brightness-[1.7]">Powerful Features</span>
          </span>
          <h1 className="mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl">
            <span className="bg-gradient-to-b from-[#5B4CDA] to-[#23D8A1] bg-clip-text text-transparent">
              Advanced{' '}
            </span>
            <span className="bg-gradient-to-b from-[#5B4CDA] to-[#23D8A1] bg-clip-text text-transparent">
              Solutions{' '}
            </span>
            <span className="bg-gradient-to-b from-[#5B4CDA] to-[#23D8A1] bg-clip-text text-transparent">
              for{' '}
            </span>
            <span className="bg-gradient-to-b from-[#5B4CDA] to-[#23D8A1] bg-clip-text text-transparent">
              Business{' '}
            </span>
            <span className="bg-gradient-to-b from-[#5B4CDA] to-[#23D8A1] bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
        </div>
        <p className="text-lg text-[#5B4CDAAA]">
          <span className="hidden lg:block">
            Explore a diverse range of cutting-edge tools meticulously crafted
            to drive your business towards unparalleled success.
          </span>
          <span className="block lg:hidden">
            Explore cutting-edge tools crafted for business success.
          </span>
        </p>
      </div>
      <ul className="mt-20 grid place-content-center gap-20 md:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature, i) => (
          <li key={i}>
            <FeatureCard
              title={feature.title}
              description={feature.description}
              backgroundColor={feature.backgroundColor}
              icon={feature.icon}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Features
