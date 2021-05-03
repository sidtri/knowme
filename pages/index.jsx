import Head from 'next/head'
import Image from 'next/image'
import Blog from './blog'

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
