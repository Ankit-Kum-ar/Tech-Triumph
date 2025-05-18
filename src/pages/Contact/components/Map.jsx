import React from 'react'
import { Form } from '../../../components'

const Map = () => {
  return (
    <div className="flex flex-col h-[120vh] w-full">
    {/* Form Section */}
    <div className="flex-shrink-0 p-4 md:p-0 bg-[#F0F4FA]">
      <Form />
    </div>

    {/* Map Section */}
    <div className="flex-grow relative">
      <iframe
        src=
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.9842580341358!2d77.03551315385069!3d28.577325129222128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aeb7d8d192d%3A0x8fd7a6d09c7e455c!2sNIMI%20GROUP!5e0!3m2!1sen!2sin!4v1742303871361!5m2!1sen!2sin"
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  </div>
  )
}

export default Map
