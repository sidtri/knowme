import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Siddhartha Danthuluri</title>
        <meta name="description" content="personal website" />
      </Head>

      <h1>Siddhartha Danthuluri</h1>
      <img src="./me.jpeg" alt="" />
    </div>
  )
}
