// Imports
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useForm } from '@formspree/react'
import { Loader2Icon } from 'lucide-react'
import Saastellar from './icons/saasstellar'
import { cn } from '~/lib/utils'
import useTheme from '~/hooks/use-theme'

const Banner = ({ formspreeId = 'mjvqrzpz' }) => {
  const [state, handleSubmit] = useForm(formspreeId)
  const [theme] = useTheme()

  return (
    <section className="relative mt-36 flex flex-col items-center px-4 py-20 gap-12 bg-gradient-to-bl from-[#232E45] via-[#5B4CDA77] to-[#23D8A1] shadow-[0_6px_40px_rgba(35,46,69,0.15)] rounded-xl">
      <div className="h-[2px] w-full bg-gradient-to-r from-[#5B4CDA] to-transparent"></div>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Title & Form */}
          <div className="w-full md:max-w-xl flex flex-col gap-7 bg-white/90 rounded-lg p-8 shadow-lg">
            <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-[#232E45] tracking-tight">
              Transform Your Workflow
              <span className="block mt-2 text-[#5B4CDA] font-black">
                with CloudNexus
              </span>
            </h1>
            <p className="text-gray-700 text-base md:text-lg text-center md:text-left">
              Streamline your business, supercharge your productivity, and discover new horizons with an all-new SaaS experience.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-stretch gap-3"
            >
              <div className="flex-1 flex flex-col gap-1">
                <Label htmlFor="email-banner" className="text-xs text-[#5B4CDA] font-semibold">Early Access</Label>
                <Input
                  name="email"
                  required
                  id="email-banner"
                  type="email"
                  className="rounded bg-[#F0F4FB] text-[#232E45] border-none focus:ring-2 focus:ring-[#23D8A1]"
                  placeholder="your.email@domain.com"
                />
              </div>
              {!state.succeeded && (
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#23D8A1] to-[#5B4CDA] text-white font-bold rounded shadow-lg hover:from-[#5B4CDA] hover:to-[#23D8A1] transition-all h-12 px-6"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <>
                      <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join Now"
                  )}
                </Button>
              )}
              {state.succeeded && (
                <Button
                  variant="secondary"
                  className="pointer-events-none bg-[#232E45]/90 text-white font-bold rounded h-12 px-6"
                >
                  Success! 🎉
                </Button>
              )}
            </form>
          </div>
          {/* Right: Illustration/logo */}
          <Saastellar
            linearFrom="text-[#5B4CDA]"
            className="w-56 lg:w-64 drop-shadow-xl mx-auto md:mx-0"
            linearTo={cn(
              'text-[#23D8A1]',
              theme === 'zinc' && 'text-zinc-700',
              theme === 'slate' && 'text-slate-700',
              theme === 'stone' && 'text-stone-700'
            )}
          />
        </div>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-l from-[#23D8A1] to-transparent"></div>
    </section>
  )
}

export default Banner
