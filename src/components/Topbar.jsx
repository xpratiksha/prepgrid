import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/':            'Dashboard',
  '/roadmap':     'Roadmap',
  '/questions':   'Questions',
  '/journal':     'Journal',
  '/friends':     'Friends',
  '/leaderboard': 'Leaderboard',
}

function Topbar() {
  const location = useLocation()
  const title = pageTitles[location.pathname] || 'PrepGrid'

  const now = new Date()
  const date = now.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <header className="sticky top-0 z-40 bg-pg-surface border-b border-pg-border px-8 py-3 flex items-center justify-between">
      
      {/* Page title */}
      <h1 className="font-chakra font-bold text-xl text-pg-text tracking-wide">
        {title}
      </h1>

      {/* Right side */}
      <div className="flex items-center gap-4">
        
        {/* Date */}
        <div className="font-mono text-xs text-pg-text3 hidden md:block">
          {date}
        </div>

        {/* Season chip */}
        <div className="font-mono text-xs text-pg-gold bg-pg-gold3/20 border border-pg-gold3 px-3 py-1 rounded-full">
          WK_01 / 24
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-lg bg-pg-violet/20 border border-pg-violet/40 flex items-center justify-center font-chakra font-bold text-xs text-pg-violet">
          YN
        </div>

      </div>
    </header>
  )
}

export default Topbar