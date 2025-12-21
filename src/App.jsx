import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { AutomobileCED } from './pages/AutomobileCED'
import { Refrigeration } from './pages/Refrigeration'
import { Process } from './pages/Process'
import { OurFacility } from './pages/OurFacility'
import { OurLab } from './pages/OurLab'
import { Contact } from './pages/Contact'
import { Careers } from './pages/Careers'
import { JobApplication } from './pages/JobApplication'
import { ThankYou } from './pages/ThankYou'

import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/automobile-ced" element={<AutomobileCED />} />
          <Route path="products/refrigeration" element={<Refrigeration />} />
          <Route path="process" element={<Process />} />
          <Route path="our-facility" element={<OurFacility />} />
          <Route path="our-lab" element={<OurLab />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />
          <Route path="careers/:jobId" element={<JobApplication />} />
          <Route path="thank-you" element={<ThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
