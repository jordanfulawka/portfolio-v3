function Hero() {
  return (
    <div className='p-5'>
      <div className='flex flex-col gap-3'>
        <h5 className='font-fancy uppercase text-xs font-light tracking-wider'>
          Software Developer · London, Ontario
        </h5>
        <h1 className='font-heading font-bold text-4xl'>Jordan Fulawka</h1>
        <p className='text-ink-muted text-lg'>
          I'm a full stack developer that learns best by building. I'm currently
          writing software at Aurelis, a custom-software shop in Toronto, and
          spend the rest of my time learning things I'm curious about. This is
          where I keep my work and write about what I'm figuring out.
        </p>
        <div className='flex justify-start gap-5'>
          <button className='bg-sky py-3 px-5 rounded-lg font-main font-semibold text-sm'>
            See my projects
          </button>
          <button className='bg-surface-raised border border-line py-3 px-5 rounded-lg font-main font-semibold text-sm'>
            Read the blog
          </button>
        </div>
      </div>
      <div className='bg-sky p-6 rounded-xl mt-5'>
        <img
          src='wolf.jpg'
          className='rounded-full w-35 h-35 object-cover border-5 border-focus-ring'
        />
        <p className='font-fancy text-sm mt-5 mb-2 uppercase'>Currently</p>
        <ul className='font-main flex flex-col gap-1.5 text-on-sky'>
          <li>Software developer at Aurelis</li>
          <li>Building a distributed job scheulder in Java</li>
          <li>Reading about operating systems</li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
