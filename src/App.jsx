import { Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { About, Home, Service } from "./pages"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
