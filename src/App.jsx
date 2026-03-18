import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Roadmap from './pages/Roadmap'
import Questions from './pages/Questions'
import Journal from './pages/Journal'

function App() {
  return (
    <div className="min-h-screen bg-pg-bg">
      <Sidebar />
      <div className="ml-56 flex flex-col min-h-screen">
        <Topbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App