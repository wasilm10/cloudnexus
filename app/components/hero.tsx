import { useForm } from '@formspree/react'
import { motion } from 'framer-motion'
import { Loader2Icon, MoveRightIcon } from 'lucide-react'
import { cn } from '~/lib/utils'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import useTheme from '~/hooks/use-theme'
import Leaf from './icons/leaf'
import Flower from './icons/flower'
import Swirl from './icons/swirl'
import Fire from './icons/fire'
import Lightning from './icons/lightning'
import Anchor from './icons/anchor'

const Hero = () => {
  const [state, handleSubmit] = useForm('mjvqrzpz')
  const [theme] = useTheme()

  // Map theme to gradient "to" color for the big "Simplicity" text
  const themeGradientTo = {
    orange: 'to-rose-600',
    blue: 'to-purple-600',
    green: 'to-emerald-600',
    red: 'to-rose-600',
    yellow: 'to-yellow-600',
    violet: 'to-violet-600',
    gray: 'to-gray-600',
    neutral: 'to-neutral-600',
    slate: 'to-slate-600',
    stone: 'to-stone-600',
    zinc: 'to-zinc-600',
    rose: 'to-pink-600',
  }

  return (
    <main className="mx-auto my-10 flex min-h-[calc(100vh-73px)] max-w-2xl flex-col justify-center gap-8 px-6 text-center rounded-xl bg-gradient-to-br from-[#232E45] via-[#5B4CDA33] to-[#23D8A155] shadow-lg">
      <motion.h1
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'scroll-m-20 font-inter text-4xl font-extrabold tracking-tight text-[#232E45] lg:text-5xl select-text'
        )}
      >
        {/* Gradient text with teal/violet */}
        <span className="bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-transparent">
          Discover the{' '}
        </span>
        <span className="bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-transparent">
          Power{' '}
        </span>
        <span className="bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-transparent">
          of{' '}
        </span>
        <span className="bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-transparent">
          SaaS{' '}
        </span>
        <span
          className={cn(
            'relative bg-gradient-to-r from-[#5B4CDA] bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl',
            themeGradientTo[theme] ?? 'to-[#23D8A1]'
          )}
        >
          Simplicity.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="text-base text-[#5B4CDAAA] lg:text-lg select-text"
      >
        Welcome to{' '}
        <span className="font-semibold text-[#23D8A1]">CloudNexus</span>, your gateway to streamlined operations, innovation, enhanced productivity, and limitless growth opportunities.{' '}
        <span className="hidden lg:inline">Discover a brighter future with us.</span>
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex w-full max-w-sm flex-col items-end space-y-2 rounded-xl bg-white/10 p-6 backdrop-blur-md shadow-md"
      >
        <div className="flex w-full flex-col items-start gap-1.5">
          <Label htmlFor="email" className="text-left text-[#5B4CDA] font-semibold">
            Want an early invite?
          </Label>
          <Input
            required
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            className="w-full rounded-md bg-[#F0F4FB] text-[#232E45] border-none shadow-sm focus:ring-2 focus:ring-[#23D8A1]"
          />
        </div>

        {!state.succeeded && (
          <Button
            disabled={state.submitting}
            type="submit"
            className={cn(
              'flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-[#23D8A1] to-[#5B4CDA] px-6 py-3 font-bold text-white shadow-lg transition-all hover:from-[#5B4CDA] hover:to-[#23D8A1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4CDA]',
              state.submitting && 'justify-center'
            )}
          >
            {state.submitting && <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />}
            {state.submitting ? 'Joining' : 'Join the waitlist'}
            {!state.submitting && <MoveRightIcon className="h-5 w-5" />}
          </Button>
        )}

        {state.succeeded && (
          <Button
            variant="secondary"
            className="pointer-events-none w-full rounded-lg bg-[#232E45] py-3 font-bold text-white shadow-md"
          >
            You&apos;ve successfully joined the waitlist! 🔥
          </Button>
        )}

        {!state.succeeded && (
          <p className="w-full text-center text-sm text-[#5B4CDAAA]">
            Join a waitlist of 200+ members!
          </p>
        )}

        {state.succeeded && (
          <p className="w-full text-center text-sm text-[#5B4CDAAA]">Welcome to the future of SaaS!</p>
        )}
      </motion.form>

      {/* Decorative Elements */}
      {['rose', 'green', 'orange', 'yellow', 'blue'].includes(theme) ? null : (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="mx-auto h-56 w-[1px] rounded-full bg-gradient-to-b from-transparent to-[#5B4CDA]"
          aria-hidden="true"
        />
      )}

      {theme === 'rose' && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="mx-auto"
          aria-hidden="true"
        >
          <Flower className="h-56 rotate-180" linearFrom="text-[#5B4CDA]" linearTo="text-[#5B4CDA]/10" />
        </motion.span>
      )}
      {theme === 'green' && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="mx-auto"
          aria-hidden="true"
        >
          <Swirl className="h-56" linearFrom="text-[#5B4CDA]/10" linearTo="text-[#23D8A1]" />
        </motion.span>
      )}
      {theme === 'orange' && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="mx-auto"
          aria-hidden="true"
        >
          <Fire className="h-56" linearFrom="text-[#5B4CDA]/10" linearTo="text-[#5B4CDA]" />
        </motion.span>
      )}
      {theme === 'yellow' && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="mx-auto"
          aria-hidden="true"
        >
          <Lightning className="h-56" linearFrom="text-[#5B4CDA]/10" linearTo="text-[#23D8A1]" />
        </motion.span>
      )}
      {theme === 'blue' && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="mx-auto"
          aria-hidden="true"
        >
          <Anchor className="h-56" linearFrom="text-[#5B4CDA]/10" linearTo="text-[#23D8A1]" />
        </motion.span>
      )}
    </main>
  )
}

export default Hero
