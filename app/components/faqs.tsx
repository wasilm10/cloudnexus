import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~/components/ui/accordion'
import DotPattern from './dot-pattern'
import { cn } from '~/lib/utils'
import { buttonVariants } from './ui/button'

const faqs = [
    {
        question: 'How does CloudNexus enhance remote team collaboration?',
        answer:
            'CloudNexus provides real-time document editing, integrated chat, and project management tools all in one platform to keep teams connected and productive.',
    },
    {
        question: 'Does CloudNexus support integrations with third-party apps?',
        answer:
            'Yes, CloudNexus offers seamless integrations with popular tools such as Slack, Google Workspace, Microsoft 365, and more to fit your workflow.',
    },
    {
        question: 'What security measures does CloudNexus have in place?',
        answer:
            'CloudNexus uses end-to-end encryption, SOC 2 compliance, and regular security audits to ensure your data is safe and private.',
    },
    {
        question: 'Is there a free trial available for CloudNexus?',
        answer:
            'Absolutely, CloudNexus offers a 14-day free trial with access to all premium features so you can evaluate the platform risk-free.',
    },
]

const FAQs = () => {
    return (
        <section className="relative mx-auto px-5 pb-8 pt-48">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center">
                <div>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25">
                        <span className="brightness-[1.7]">FAQs</span>
                    </span>
                    <h1 className="mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl">
                        <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Frequently{' '}
                        </span>
                        <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                            asked{' '}
                        </span>
                        <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                            questions
                        </span>
                    </h1>
                </div>
                <p className="text-lg text-muted-foreground">
                    Haven’t found what you’re looking for?{' '}
                    <a
                        href="#contact"
                        className={cn(
                            buttonVariants({ variant: 'link' }),
                            'px-0 text-lg text-foreground'
                        )}
                    >
                        Contact us.
                    </a>
                </p>
                <div className="mt-20 flex items-center justify-between">
                    <DotPattern
                        width={20}
                        height={20}
                        cx={1}
                        cy={1}
                        cr={1}
                        className={cn(
                            'fill-primary/40 [mask-image:linear-gradient(to_bottom,transparent,white,white,transparent,transparent)]'
                        )}
                    />
                    <Accordion
                        collapsible
                        type="single"
                        className="mx-auto w-full max-w-4xl grow basis-28 text-left"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-xl hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQs
