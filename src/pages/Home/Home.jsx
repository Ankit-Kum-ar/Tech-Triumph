import { ServicesSection } from "../../components"
import { EndToEndSection, FeedbackSection, HeroSection, WhyChooseUs } from "./components"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <EndToEndSection />
      <WhyChooseUs />
      <FeedbackSection />
    </div>
  )
}

export default Home
