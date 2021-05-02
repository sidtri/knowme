import Head from 'next/head'
import Image from 'next/image'
import Blog from './blog'

function BulletPoint(props) {
  return (
    <p className="flex items-start mt-8 mb-4 space-x-2">
     <svg className="w-6 h-6 flex-none mt-0.5" fill="none">
      <circle cx="12" cy="12" r="12" fill="#A7F3D0" />
      <path d="M18 8l-8 8-4-4" stroke="#047857" stroke-width="2"></path>
     </svg>
     <span className="flex-1 text-base leading-7">
      {props.content}
     </span>
    </p>
   )
}

export default function Home() {
  let authorName = 'Siddhartha Danthuluri'


  return (
    <div>
      <Head>
        <title>{authorName}</title>
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
            I'm {authorName}
          </h1>
        </div>

        <div className='max-w-7xl mx-auto mt-60'>
          <Blog />
        </div>
      </div>

    </div>
  )
}
