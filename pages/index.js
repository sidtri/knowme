import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Siddhartha Danthuluri</title>
        <meta name="description" content="personal website" />
      </Head>

      <div className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto mt-20'>
          <div className="float-right">
            <a className="text-gray-900 mr-4 hover:underline" href="tel:+91963-238-9771">Connect</a>
            <a className="text-gray-700 mr-4 hover:underline" href="https://github.com/sidtri" target="_blank">Github</a>
            <a className="text-gray-700 mr-4 hover:underline" href="https://www.linkedin.com/in/siddhartha-danthuluri/" target="_blank">Linkedin</a>
          </div>
          <h1 className='lg:leading-loose text-4xl font-bold text-gray-900 lg:tracking-wide'>
            Hy! <span className='icon'>👋 </span><br/> 
            I'm Siddhartha Danthuluri
          </h1>
        </div>

        <div className='max-w-7xl mx-auto mt-60'>
          
          <ol>
            <li>
              <h3 className='lg:leading-loose text-3xl font-bold text-gray-700'>1. Today I learned - Summaries</h3>
              <div className='text-gray-400 pl-8'>Hard learnings from past experience . May 01, 2021</div>
              <div className='text-gray-600 text-xl mt-8 pl-8'>
                <p class="flex items-start mt-8 mb-4 space-x-2"><svg class="w-6 h-6 flex-none mt-0.5" fill="none"><circle cx="12" cy="12" r="12" fill="#A7F3D0"></circle><path d="M18 8l-8 8-4-4" stroke="#047857" stroke-width="2"></path></svg>
                  <span class="flex-1 text-base leading-7">
                    Spend more time writing good specs. Written code does not have to be super dry and perfect</span>
                </p>

                <p class="flex items-start mt-8 mb-4 space-x-2"><svg class="w-6 h-6 flex-none mt-0.5" fill="none"><circle cx="12" cy="12" r="12" fill="#A7F3D0"></circle><path d="M18 8l-8 8-4-4" stroke="#047857" stroke-width="2"></path></svg>
                  <span class="flex-1 text-base leading-7">
                    Write smaller libraries and improvise along with features than bundling up with more and more plugins.
                    </span>
                </p>

                <p class="flex items-start mt-8 mb-4 space-x-2"><svg class="w-6 h-6 flex-none mt-0.5" fill="none"><circle cx="12" cy="12" r="12" fill="#A7F3D0"></circle><path d="M18 8l-8 8-4-4" stroke="#047857" stroke-width="2"></path></svg>
                  <span class="flex-1 text-base leading-7">
                    Identify patterns mostly after some duplication happens, and improvise periodically
                    </span>
                </p>

                <p class="flex items-start mt-8 mb-4 space-x-2"><svg class="w-6 h-6 flex-none mt-0.5" fill="none"><circle cx="12" cy="12" r="12" fill="#A7F3D0"></circle><path d="M18 8l-8 8-4-4" stroke="#047857" stroke-width="2"></path></svg>
                  <span class="flex-1 text-base leading-7">
                    Mitigate technical debt, implement minimum viable product.
                    </span>
                </p>

              </div>
            </li>
            <li>
              <h3 className='lg:leading-loose text-3xl font-bold text-gray-700'>2. Learn `YAML` in minutes</h3>
              <div className='text-gray-400 pl-8'>usage of yaml happens to be mostly experienced candidates . May --, 2021</div>
              <div className='text-gray-600 text-xl mt-8 pl-8'>
                Coming soon...
              </div>
            </li>
            <li>
            </li>
          </ol>

        </div>
      </div>

    </div>
  )
}
