import { Link } from '@remix-run/react'
import { GithubIcon } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select'
import useTheme, { changeTheme } from '~/hooks/use-theme'
import { cn } from '~/lib/utils'
import { type ThemeName } from '~/registry/themes'
import Saastellar from './icons/saasstellar'

const Navbar = () => {
    const [theme, setTheme] = useTheme()
    return (
        <div className="px-6 py-3 bg-gradient-to-r from-[#231F3AEE] via-[#23D8A155] to-[#5B4CDA22] shadow-[0_4px_24px_rgba(35,46,69,0.12)] rounded-b-2xl backdrop-blur-lg">
            <nav className="mx-auto flex max-w-6xl items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <Saastellar
                        aria-label="cloudflix logo"
                        linearFrom="text-[#23D8A1]"
                        className="w-7 transition-transform group-hover:scale-110"
                        linearTo={cn(
                            'text-[#5B4CDA]',
                            theme === 'zinc' && 'text-zinc-700',
                            theme === 'slate' && 'text-slate-700',
                            theme === 'stone' && 'text-stone-700'
                        )}
                    />
                    <span className="hidden md:block text-xl font-black tracking-tight text-[#231F3A] group-hover:text-[#5B4CDA] transition-colors">
                        
                        
                    </span>
                </Link>
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#23D8A1]/40 bg-white/60 text-[#5B4CDA] hover:text-white hover:bg-gradient-to-br from-[#23D8A1] to-[#5B4CDA] shadow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4CDA]"
                        aria-label="my github"
                    >
                        <GithubIcon className="h-5 w-5" />
                    </a>
                    <Select
                        onValueChange={(theme: ThemeName) => {
                            changeTheme(theme)
                            setTheme(theme)
                        }}
                        value={theme}
                    >
                        <SelectTrigger
                            className="w-[160px] bg-[#F0F4FB] border-none rounded ring-2 ring-[#5B4CDA22] focus:ring-2 focus:ring-[#23D8A1] text-[#231F3A] font-semibold shadow"
                            aria-label="customize theme"
                        >
                            <SelectValue placeholder="Customize" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl shadow-xl bg-white/95 border-[#231F3A22] mt-2">
                            <SelectItem value="zinc">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-zinc-600" />
                                    <span>Zinc</span>
                                </span>
                            </SelectItem>
                            <SelectItem value="slate">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-slate-600" />
                                    <span>Slate</span>
                                </span>
                            </SelectItem>
                            <SelectItem value="stone">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-stone-600" />
                                    <span>Stone</span>
                                </span>
                            </SelectItem>
                            <SelectItem value="gray">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-gray-600" />
                                    <span>Gray</span>
                                </span>
                            </SelectItem>
                            <SelectItem value="neutral">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-neutral-600" />
                                    <span>Neutral</span>
                                </span>
                            </SelectItem>
                            <SelectItem value="red">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-red-600" />
                                    <span>Red</span>
                                </span>
                            </SelectItem>
                            <SelectItem value="rose">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-rose-600" />
                                    <span>Rose</span>
                                </span>
                            </SelectItem>
                            <SelectItem value="orange">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-orange-600" />
                                    <span>Orange</span>
                                </span>
                            </SelectItem>
                            <SelectItem value="green">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-green-600" />
                                    <span>Green</span>
                                </span>
                            </SelectItem>
                            <SelectItem value="blue">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-blue-600" />
                                    <span>Blue</span>
                                </span>
                            </SelectItem>
                            <SelectItem value="yellow">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-yellow-600" />
                                    <span>Yellow</span>
                                </span>
                            </SelectItem>
                            <SelectItem value="violet">
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-violet-600" />
                                    <span>Violet</span>
                                </span>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
