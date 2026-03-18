function StatCard({ label, value, sub, color }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl p-4 bg-gradient-to-b from-pg-surface2 to-pg-surface border border-pg-border2 cursor-pointer transition-all duration-200 hover:-translate-y-1.5"
      style={{
        boxShadow: '0 2px 4px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3), 0 1px 0 rgba(139,76,255,0.08) inset',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 0 0 1px rgba(139,76,255,0.4), 0 8px 16px rgba(0,0,0,0.5), 0 16px 40px rgba(139,76,255,0.2), 0 1px 0 rgba(139,76,255,0.15) inset'
        e.currentTarget.style.borderColor = 'rgba(139,76,255,0.6)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3), 0 1px 0 rgba(139,76,255,0.08) inset'
        e.currentTarget.style.borderColor = ''
      }}
    >
      {/* Colour accent line top */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${color}`}/>

      {/* White top edge highlight — creates raised 3D look */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5"/>

      <div className="font-mono text-xs text-pg-text3 tracking-widest uppercase mb-2">
        {label}
      </div>
      <div className="font-chakra font-bold text-3xl text-pg-text">
        {value}
      </div>
      <div className="font-rajdhani text-sm text-pg-text3 mt-1">
        {sub}
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="p-8">

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Topics Cleared"
          value="0"
          sub="of 19 total"
          color="bg-pg-violet"
        />
        <StatCard
          label="Questions Solved"
          value="0"
          sub="of 245 recommended"
          color="bg-pg-gold"
        />
        <StatCard
          label="Day Streak"
          value="0"
          sub="days studied in a row"
          color="bg-pg-coral"
        />
        <StatCard
          label="Overall Progress"
          value="0%"
          sub="keep going"
          color="bg-pg-teal"
        />
      </div>

    </div>
  )
}

export default Dashboard