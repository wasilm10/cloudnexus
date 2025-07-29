import { CheckIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { useState } from 'react'
import { cn } from '~/lib/utils'
import { Badge } from './ui/badge'

const Pricing = () => {
  const [checked, setChecked] = useState(false)

  return (
    <section className="mx-auto mb-12 mt-48 px-6 dark:bg-[radial-gradient(ellipse_40%_50%_at_50%_-20%,rgba(35,216,161,0.3),#0000)]">
      <div className="mx-auto mb-16 h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-[#5B4CDA] to-transparent"></div>
      <div className="mx-auto max-w-7xl text-center">
        <div>
          <span className="inline-block rounded-full border border-[#5B4CDA50] bg-[#5B4CDA20] px-3 py-1 text-sm font-medium text-[#5B4CDA] brightness-[1.7] dark:bg-[#5B4CDA40]">
            Adaptable Pricing
          </span>
          <h1 className="mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl">
            <span className="bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-transparent">Choose </span>
            <span className="bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-transparent">your </span>
            <span className="bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-transparent">plan</span>
          </h1>
        </div>
        <p className="mt-2 text-lg text-[#5B4CDAAA]">
          Select the ideal plan for your business requirements
        </p>
        <div className="mt-16 flex items-center justify-center space-x-3">
          <Label htmlFor="price-toggle" className={cn(!checked && 'text-muted-foreground')}>
            Monthly
          </Label>
          <Switch
            id="price-toggle"
            checked={checked}
            onCheckedChange={() => setChecked(!checked)}
            className="data-[state=unchecked]:bg-[#5B4CDA] data-[state=checked]:bg-[#23D8A1]"
            aria-label="toggle pricing"
          />
          <Label htmlFor="price-toggle" className={cn(checked && 'text-muted-foreground')}>
            Annually
          </Label>
        </div>
        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:justify-around lg:px-12">
          {/* Basic Plan */}
          <div className="relative max-w-sm flex-grow basis-0 rounded-xl bg-white/10 p-8 text-left shadow-lg backdrop-blur-md transition-shadow hover:shadow-2xl dark:bg-[#232E451A]">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold text-[#5B4CDA]">Basic</p>
              <div className="flex items-start gap-2">
                <span className="text-2xl text-muted-foreground">$</span>
                <span className="bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-5xl font-semibold text-transparent">
                  0
                </span>
              </div>
              <p className="text-sm text-[#5B4CDAAA]">
                Ideal for startups and small businesses
              </p>
            </div>
            <ul className="mt-8 flex flex-col gap-4 text-[#232E45] dark:text-[#D1D9FF]">
              {[
                'Up to 10 team members',
                '50GB of cloud storage',
                'Streamlined operations',
                'Workflow optimization',
                'Basic analytics',
                'Email support',
              ].map((feature) => (
                <li key={feature} className="flex gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#23D8A1]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-8 w-full rounded-lg px-6 py-3 font-semibold text-[#23D8A1] shadow-md hover:bg-[#23D8A1]/20">
              Get started
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="relative max-w-sm flex-grow basis-0 rounded-xl bg-white/20 p-8 text-left shadow-lg backdrop-blur-md transition-shadow hover:shadow-2xl dark:bg-[#232E4550]">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold text-[#5B4CDA]">Pro</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl text-muted-foreground">$</span>
                <span className="flex items-center gap-2 bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-5xl font-semibold text-transparent">
                  {checked ? '299' : '29'}
                  {checked && <Badge variant="outline">SAVE 15%</Badge>}
                </span>
              </div>
              <p className="text-sm text-[#5B4CDAAA]">
                Perfect for growing businesses
              </p>
            </div>
            <ul className="mt-8 flex flex-col gap-4 text-[#232E45] dark:text-[#D1D9FF]">
              {[
                'Up to 50 team members',
                '250GB of cloud storage',
                'Advanced workflow tools',
                'In-depth analytics',
                'Priority email and phone support',
                'Integration with third-party tools',
              ].map((feature) => (
                <li key={feature} className="flex gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#23D8A1]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full rounded-lg bg-gradient-to-r from-[#23D8A1] to-[#5B4CDA] px-6 py-3 font-semibold text-white shadow-lg hover:from-[#5B4CDA] hover:to-[#23D8A1] transition-all">
              Upgrade now
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="relative max-w-sm flex-grow basis-0 rounded-xl bg-white/10 p-8 text-left shadow-lg backdrop-blur-md transition-shadow hover:shadow-2xl dark:bg-[#232E451A]">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold text-[#5B4CDA]">Premium</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl text-muted-foreground">$</span>
                <span className="flex items-center gap-2 bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-5xl font-semibold text-transparent">
                  {checked ? '699' : '69'}
                  {checked && <Badge variant="outline">SAVE 15%</Badge>}
                </span>
              </div>
              <p className="text-sm text-[#5B4CDAAA]">
                Comprehensive solutions for enterprises
              </p>
            </div>
            <ul className="mt-8 flex flex-col gap-4 text-[#232E45] dark:text-[#D1D9FF]">
              {[
                'Unlimited team members',
                '1TB of cloud storage',
                'Customizable options',
                'Dedicated account manager',
                '24/7 priority support',
                'Advanced security features',
              ].map((feature) => (
                <li key={feature} className="flex gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#23D8A1]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-8 w-full rounded-lg px-6 py-3 font-semibold text-[#23D8A1] shadow-md hover:bg-[#23D8A1]/20">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
