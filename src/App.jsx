import { Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { About, Home, Service, ContactUs } from "./pages"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
