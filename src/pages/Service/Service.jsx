import React from 'react'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard';

const Service = () => {

    const services = [
        {
            title: "Low Code Development",
            description: "Triumph Tech offers low code development to create mobile apps quickly and efficiently. This approach uses visual development platforms with drag-and-drop interfaces and prebuilt components, minimizing the need for extensive manual coding. Its ideal for businesses looking to build apps rapidly, reduce costs, and iterate quickly, especially for prototyping or less complex applications. Low code also allows for easier updates and scalability, making it a flexible solution for startups and enterprises alike.",
            staticSrc: "/images/lowcodedev.png",
        },
        {
            title: "Native CRM Development",
            description: "Triumph Tech provides native CRM (Customer Relationship Management) development, focusing on building mobile apps that integrate seamlessly with CRM systems. This service involves creating apps using platform-specific languages (e.g., Swift for iOS, Kotlin for Android) to ensure optimal performance and user experience. These apps can connect directly to your CRM platform, enabling features like customer data access, sales tracking, and lead management on the go, tailored to your business workflows.",
            staticSrc: "/images/nativecrm.png",
        },
        {
            title: "Cyber Security",
            description: "Triumph Tech prioritizes cyber security in mobile app development, ensuring your app and its users are protected from threats. This service includes implementing secure coding practices, data encryption, and authentication protocols to safeguard sensitive information. They also conduct vulnerability assessments and penetration testing to identify and fix potential risks, ensuring compliance with standards like GDPR or CCPA, and providing peace of mind for businesses handling user data.",
            staticSrc: "/images/cybersecurity.png",
        },
        {
            title: "Software Development",
            description: "Triumph Tech offers custom software development for mobile apps, creating tailored solutions to meet your specific business needs. This service covers the full development lifecycledesign, coding, testing, and deploymentusing modern technologies and frameworks. Whether you need a standalone app or one that integrates with existing systems, their software development ensures high performance, reliability, and a user-friendly experience, built to support your business goals.",
            staticSrc: "/images/softwaredev.png",
        },
        {
            title: "SAAS Solutions",
            description:"Triumph Tech develops SAAS solutions, delivering mobile apps through a cloud-based subscription model. This service allows businesses to access software without managing infrastructure, as Triumph Tech handles hosting, updates, and maintenance. SAAS apps are scalable, accessible across devices, and cost-effective, making them suitable for businesses seeking flexible, on-demand solutions like project management tools, collaboration apps, or industry-specific software.",
            staticSrc: "/images/saas.png",
        },
    ];
  return (
    <div>
        <Hero />
        <div className="max-w-full p-4 mx-auto flex flex-wrap justify-center">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
      
    </div>
  )
}

export default Service
