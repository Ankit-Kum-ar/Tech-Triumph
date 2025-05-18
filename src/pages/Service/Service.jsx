import React from 'react'

import { serviceprovided } from '../../constant';
import { Hero, ServiceCard } from './components';

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
