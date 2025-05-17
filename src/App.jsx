import { Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { Home } from "./pages"
import Service from "./pages/Service/Service"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
