import React from 'react'

const Hero = () => {
  return (
    <section className=" relative py-16 px-6 md:px-20 rounded-lg overflow-hidden">
         {/* Top Left Blob */}
    <div className="absolute md:block hidden top-15 -left-2 w-72 h-72 bg-primary/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
    {/* Bottom Right Blob */}
    <div className="absolute -bottom-2 -right-24 w-72 h-72 bg-accent/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
      <div className="container  flex flex-col md:flex-row items-center gap-10  md:justify-between">
        {/* Left Content */}
        <div className="md:w-2/3">
            
            <h2 className="text-6xl font-bold">
            Power Up Your <br />
Brand with <br />
Our IT Services
            </h2>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 hidden md:block">
          <img
            src="/images/ourService.png" // Replace with the actual image path
            alt="Making a Difference"
            className="rounded-lg  shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out object-cover "
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
