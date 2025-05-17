import React from 'react'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard';
import { serviceprovided } from '../../constant';

const Service = () => {

   
  return (
    <div>
        <Hero />
        <div className="max-w-full p-4 mx-auto flex flex-wrap justify-center">
        {serviceprovided.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
      
    </div>
  )
}

export default Service
