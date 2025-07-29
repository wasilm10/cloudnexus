const Footer = () => {
  return (
    <footer className="mt-24 flex h-36 flex-col items-center justify-center bg-gradient-to-t from-[#5B4CDA20] via-[#23D8A155] to-transparent backdrop-blur-sm rounded-t-2xl shadow-inner">
      <div className="px-6 text-center text-sm font-semibold text-[#232E45] max-w-lg">
        Looking for a frontend developer with React, Astro, and TailwindCSS skills? Reach
        out to me at{' '}
        <a
          href="mailto:ferjani.nader@hotmail.fr"
          className="font-bold text-[#23D8A1] hover:underline transition-colors"
        >
          abc@gmail.com
        </a>{' '}
        <span aria-label="rocket" role="img">
          🚀
        </span>
      </div>
      <div className="mt-6 w-full max-w-7xl border-t border-gradient-to-r from-transparent via-[#5B4CDA]/70 to-transparent" />
    </footer>
  )
}

export default Footer
