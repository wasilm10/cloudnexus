import { LinkedinIcon, Loader2Icon, TwitterIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import Discord from './icons/discord'
import { useForm } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm('xpzgladz')

  return (
    <section className="mx-auto mt-40 flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">
      {/* Left: Contact info & social links */}
      <div className="mx-auto max-w-2xl flex-grow basis-0 flex-col gap-8 lg:flex lg:flex-col">
        <h1 className="font-inter scroll-m-20 text-4xl font-extrabold tracking-tight text-center text-[#232E45] lg:text-left lg:text-5xl">
          {/* Gradient text */}
          <span className="bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-transparent">
            Get{' '}
          </span>
          <span className="bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-transparent">
            In{' '}
          </span>
          <span className="bg-gradient-to-b from-[#23D8A1] to-[#5B4CDA] bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="text-center text-lg text-[#5B4CDAcc] lg:text-left">
          <span className="hidden lg:block">
            If you have any questions, suggestions, or would like to discuss potential collaborations, please don't hesitate to reach out. I'd love to hear from you!
          </span>
          <span className="block lg:hidden">
            Questions, ideas, or collaborations? Reach out—I'm all ears!
          </span>
        </p>
        <div className="flex justify-center lg:justify-start">
          <div className="flex flex-col gap-5 text-[#232E45]">
            <a
              href="https://twitter.com"
              className="inline-flex items-center gap-3 text-[#23D8A1] hover:text-[#5B4CDA] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="h-6 w-6" />
              @abcdef
            </a>
            <a
              href="https://www.linkedin.com"
              className="inline-flex items-center gap-3 text-[#23D8A1] hover:text-[#5B4CDA] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-6 w-6" />
              abcdef
            </a>
            <span className="inline-flex items-center gap-3 text-[#23D8A1]">
              <Discord className="h-6 w-6 fill-[#23D8A1]" />
              abcdef
            </span>
          </div>
        </div>
      </div>
      {/* Right: Contact form */}
      <form
        onSubmit={handleSubmit}
        className="relative flex w-full max-w-xl flex-grow basis-0 flex-col gap-5 rounded-xl bg-gradient-to-br from-white/10 to-transparent p-8 shadow-lg backdrop-blur-sm before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-tr before:from-[#23D8A1] before:via-[#5B4CDA]/50 before:to-[#23D8A1] before:blur-lg before:opacity-40"
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-left text-[#5B4CDA] font-semibold">
            Full name
          </Label>
          <Input
            required
            type="text"
            id="name"
            name="fullname"
            placeholder="John Doe"
            className="w-full rounded-md bg-[#F0F4FB] text-[#232E45] border-none shadow-sm focus:ring-2 focus:ring-[#23D8A1]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-email" className="text-left text-[#5B4CDA] font-semibold">
            Email
          </Label>
          <Input
            required
            type="email"
            name="contact-email"
            id="contact-email"
            placeholder="abc.de@example.com"
            className="w-full rounded-md bg-[#F0F4FB] text-[#232E45] border-none shadow-sm focus:ring-2 focus:ring-[#23D8A1]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message" className="text-left text-[#5B4CDA] font-semibold">
            Message
          </Label>
          <Textarea
            required
            id="message"
            name="message"
            placeholder="Your message here..."
            className="rounded-md bg-[#F0F4FB] text-[#232E45] border-none shadow-sm focus:ring-2 focus:ring-[#23D8A1]"
            rows={5}
          />
        </div>
        {!state.succeeded && (
          <Button
            variant="secondary"
            disabled={state.submitting}
            className="self-start bg-gradient-to-r from-[#23D8A1] to-[#5B4CDA] text-white font-bold rounded-lg shadow-lg hover:from-[#5B4CDA] hover:to-[#23D8A1] transition-all px-8 py-3"
          >
            {state.submitting && <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />}
            {state.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        )}
        {state.succeeded && (
          <Button
            variant="secondary"
            className="pointer-events-none self-start bg-[#232E45] text-white font-bold rounded-lg px-8 py-3 shadow-md"
          >
            Message sent!
          </Button>
        )}
      </form>
    </section>
  )
}

export default Contact
