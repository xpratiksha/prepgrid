import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Roadmap from './pages/Roadmap'
import Questions from './pages/Questions'
import Journal from './pages/Journal'

function App() {
  return (
    <div className="min-h-screen bg-pg-bg">
      <Sidebar />
      <main className="ml-56 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </main>
    </div>
  )
}

export default App