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

export default function Blog() {
  return (
    <ol>
      <li>
        <h3 className='lg:leading-loose text-3xl font-bold text-gray-700'>1. Today I learned - Summaries</h3>
        <div className='text-gray-400 pl-8'>Hard learnings from past experience . May 01, 2021</div>
        <div className='text-gray-600 text-xl mt-8 pl-8'>
          <BulletPoint content="Spend more time writing good specs. Written code does not have to be super dry and perfect" />
          <BulletPoint content='Write smaller libraries and improvise along with features than bundling up with more and more plugins.' />
          <BulletPoint content='Identify patterns mostly after some duplication happens, and improvise periodically' />
          <BulletPoint content='Mitigate technical debt, implement minimum viable product.' />
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
  )
}
