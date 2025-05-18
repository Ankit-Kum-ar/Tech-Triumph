import React from 'react'
import { Link } from 'react-router-dom'

const GettoKnowUs = () => {
  return (
    <div class="flex flex-col items-center bg-white py-16 px-4 max-w-5xl w-full text-center border border-gray-200 rounded-2xl">
    <h1 class="text-3xl sm:text-4xl font-semibold sm:font-bold text-gray-800">Get to Know Us</h1>
    <p class="max-w-2xl text-slate-500 mt-4 max-sm:text-sm">All content is introduced by our IT sales team, who are ready to guide you through every step
of your project. Visit our Contact page to connect with us and learn how Triumph Tech can
bring your ideas to life.
</p>
    <div class="flex justify-center mt-6 max-sm:w-full">
        
        <Link to="/contactus" type="button" class="bg-indigo-500 hover:bg-indigo-600 transition-all px-4 py-2 text-white font-medium rounded-full">
            Contact Us
        </Link>
    </div>
</div>
  )
}

export default GettoKnowUs
