import { ServicesSection } from "../../components"
import { GettoKnowUs, Hero } from "./component"

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <ServicesSection />
      <GettoKnowUs />
    </div>
  )
}

export default About
