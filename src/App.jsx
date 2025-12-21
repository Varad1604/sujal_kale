import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ScrollToTop } from './components/ScrollToTop'

// Lazy load all pages except Home for faster initial load
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Products = lazy(() => import('./pages/Products').then(m => ({ default: m.Products })))
const AutomobileCED = lazy(() => import('./pages/AutomobileCED').then(m => ({ default: m.AutomobileCED })))
const Refrigeration = lazy(() => import('./pages/Refrigeration').then(m => ({ default: m.Refrigeration })))
const Process = lazy(() => import('./pages/Process').then(m => ({ default: m.Process })))
const OurFacility = lazy(() => import('./pages/OurFacility').then(m => ({ default: m.OurFacility })))
const OurLab = lazy(() => import('./pages/OurLab').then(m => ({ default: m.OurLab })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })))
const JobApplication = lazy(() => import('./pages/JobApplication').then(m => ({ default: m.JobApplication })))
const ThankYou = lazy(() => import('./pages/ThankYou').then(m => ({ default: m.ThankYou })))

// Minimal loading spinner
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    color: 'var(--color-primary)'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(255,177,98,0.2)',
      borderTop: '3px solid var(--color-primary)',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="products" element={<Suspense fallback={<PageLoader />}><Products /></Suspense>} />
          <Route path="products/automobile-ced" element={<Suspense fallback={<PageLoader />}><AutomobileCED /></Suspense>} />
          <Route path="products/refrigeration" element={<Suspense fallback={<PageLoader />}><Refrigeration /></Suspense>} />
          <Route path="process" element={<Suspense fallback={<PageLoader />}><Process /></Suspense>} />
          <Route path="our-facility" element={<Suspense fallback={<PageLoader />}><OurFacility /></Suspense>} />
          <Route path="our-lab" element={<Suspense fallback={<PageLoader />}><OurLab /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
          <Route path="careers" element={<Suspense fallback={<PageLoader />}><Careers /></Suspense>} />
          <Route path="careers/:jobId" element={<Suspense fallback={<PageLoader />}><JobApplication /></Suspense>} />
          <Route path="thank-you" element={<Suspense fallback={<PageLoader />}><ThankYou /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
