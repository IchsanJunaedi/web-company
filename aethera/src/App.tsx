import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StudioPage from './pages/StudioPage'
import AboutPage from './pages/AboutPage'
import JournalPage from './pages/JournalPage'
import ReachUsPage from './pages/ReachUsPage'
import ProjectPage from './pages/ProjectPage'
import StickyNav from './components/StickyNav'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <BrowserRouter>
      <StickyNav />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/reach-us" element={<ReachUsPage />} />
        <Route path="/portfolio/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}
