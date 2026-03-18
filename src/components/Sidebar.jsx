import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/',          label: 'Dashboard',   icon: '⬛' },
  { path: '/roadmap',   label: 'Roadmap',     icon: '◎'  },
  { path: '/questions', label: 'Questions',   icon: '✦'  },
  { path: '/journal',   label: 'Journal',     icon: '✐'  },
]

const bottomItems = [
  { path: '/friends',     label: 'Friends',     icon: '👥' },
  { path: '/leaderboard', label: 'Leaderboard', icon: '🏆' },
]

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-56 bg-pg-surface border-r border-pg-border flex flex-col z-50">
      
      {/* Logo */}
      <div className="px-5 py-5 border-b border-pg-border">
        <div className="font-chakra font-bold text-2xl text-pg-text">
          Prep<span className="text-pg-gold">Grid</span>
        </div>
        <div className="font-mono text-xs text-pg-muted mt-1 tracking-widest">
          PLACEMENT SPRINT
        </div>
      </div>

      {/* XP Block */}
      <div className="mx-3 mt-4 bg-pg-bg border border-pg-border rounded-lg p-3">
        <div className="flex justify-between items-center mb-1">
          <span className="font-mono text-xs text-pg-violet">LVL_01</span>
          <span className="font-mono text-xs text-pg-muted">0/1000</span>
        </div>
        <div className="text-xs font-rajdhani text-pg-text2 mb-2">
          Initiate
        </div>
        <div className="h-1.5 bg-pg-bg rounded-full overflow-hidden border border-pg-border">
          <div className="h-full bg-pg-violet rounded-full w-0"/>
        </div>
        <div className="font-mono text-xs text-pg-muted mt-1">
          // 1000 xp to LVL_02
        </div>
      </div>

      {/* Streak */}
      <div className="mx-3 mt-3 bg-pg-bg border border-pg-gold3 rounded-lg p-3 flex items-center gap-3">
        <span className="text-xl">🔥</span>
        <div>
          <div className="font-mono text-lg text-pg-gold leading-none">0</div>
          <div className="font-mono text-xs text-pg-muted mt-0.5">DAY STREAK</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 mt-4">
        <div className="font-mono text-xs text-pg-muted px-2 mb-2 tracking-widest">
          // NAVIGATE
        </div>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg mb-1 font-rajdhani font-medium text-sm transition-all duration-150
              ${isActive
                ? 'bg-pg-violet/10 text-pg-text border-l-2 border-pg-violet'
                : 'text-pg-text3 hover:bg-pg-bg hover:text-pg-text2'
              }`
            }
          >
            <span className="text-xs w-4">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}

        <div className="font-mono text-xs text-pg-muted px-2 mb-2 mt-4 tracking-widest">
          // SOCIAL
        </div>
        {bottomItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg mb-1 font-rajdhani font-medium text-sm transition-all duration-150
              ${isActive
                ? 'bg-pg-violet/10 text-pg-text border-l-2 border-pg-violet'
                : 'text-pg-text3 hover:bg-pg-bg hover:text-pg-text2'
              }`
            }
          >
            <span className="text-xs w-4">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-4 py-4 border-t border-pg-border">
        <div className="font-mono text-xs text-pg-muted text-center leading-relaxed">
          "The struggle to retrieve<br/>builds the memory."
        </div>
      </div>

    </aside>
  )
}

export default Sidebar