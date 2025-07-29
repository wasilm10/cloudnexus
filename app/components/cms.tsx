import React from 'react'
import Drupal from '~/components/icons/drupal'
import Framer from '~/components/icons/framer'
import Joomla from '~/components/icons/joomla'
import Notion from '~/components/icons/notion'
import Sanity from '~/components/icons/sanity'
import Storyblok from '~/components/icons/storyblok'
import Strapi from '~/components/icons/strapi'
import Typedream from '~/components/icons/typedream'
import Wordpress from '~/components/icons/wordpress'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip'

const Cms = () => {
  const cms = [
    { component: <Drupal height={42} width={42} />, name: 'Drupal' },
    { component: <Framer height={42} width={42} />, name: 'Framer' },
    { component: <Joomla height={42} width={42} />, name: 'Joomla' },
    { component: <Notion height={42} width={42} />, name: 'Notion' },
    { component: <Sanity height={42} width={42} />, name: 'Sanity' },
    { component: <Storyblok height={42} width={42} />, name: 'Storyblok' },
    { component: <Strapi height={42} width={42} />, name: 'Strapi' },
    { component: <Typedream height={42} width={42} />, name: 'Typedream' },
    { component: <Wordpress height={42} width={42} />, name: 'Wordpress' },
  ]

  return (
    <div className="mx-6 mt-10">
      <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-[#5B4CDA]">
        Integrated with 10+ Content Management Systems
      </p>
      <div className="mx-auto flex flex-wrap justify-center gap-12 lg:gap-x-20">
        {cms.map((item) => (
          <TooltipProvider key={item.name} delayDuration={150}>
            <Tooltip>
              <TooltipTrigger
                aria-label={item.name}
                className="cursor-pointer rounded-lg p-2 transition-transform transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-[#5B4CDA]"
              >
                {/* Wrapping icon in a div to add consistent fill & color */}
                <div className="fill-[#232E45] hover:fill-[#23D8A1] transition-colors">
                  {item.component}
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-[#5B4CDA] text-white rounded-md px-3 py-1 shadow-lg select-none text-sm font-medium"
              >
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}

export default Cms
