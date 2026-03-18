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
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${color}`}/>
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

function QuestItem({ icon, name, xp, topic, progress, done, accentColor }) {
  return (
    <div
      className={`
        relative bg-pg-bg border border-pg-border rounded-xl p-3 mb-2
        flex items-center gap-3 cursor-pointer
        transition-all duration-200
        ${done
          ? 'opacity-35'
          : 'hover:translate-x-1'
        }
      `}
      style={{
        borderLeft: `2px solid ${done ? '#1E0A38' : accentColor + '40'}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={e => {
        if (done) return
        e.currentTarget.style.borderLeftColor = accentColor
        e.currentTarget.style.boxShadow = `0 4px 16px ${accentColor}25`
      }}
      onMouseLeave={e => {
        if (done) return
        e.currentTarget.style.borderLeftColor = accentColor + '40'
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)'
      }}
    >
      {/* Icon */}
      <div className="w-9 h-9 rounded-lg bg-pg-surface border border-pg-border flex items-center justify-center text-lg flex-shrink-0">
        {done ? '✓' : icon}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className={`font-rajdhani font-semibold text-sm mb-0.5 ${done ? 'line-through text-pg-muted' : 'text-pg-text2'}`}>
          {name}
        </div>
        <div className="font-mono text-xs mb-1.5" style={{ color: accentColor + '80' }}>
          {xp} · {topic}
        </div>
        {!done && (
          <div className="h-0.5 bg-pg-surface rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: accentColor }}
            />
          </div>
        )}
      </div>

      {/* Check */}
      <div
        className="w-5 h-5 rounded-md border flex items-center justify-center text-xs flex-shrink-0"
        style={{
          borderColor: done ? accentColor + '40' : '#2A1050',
          background: done ? accentColor + '15' : 'transparent',
          color: done ? accentColor + '60' : '#1E0A38',
        }}
      >
        {done && '✓'}
      </div>
    </div>
  )
}

const QUESTS = [
  {
    icon: '🧩',
    name: 'Sliding window mastery',
    xp: '+120 XP',
    topic: 'Arrays & Strings',
    progress: 60,
    done: false,
    accentColor: '#8B4CFF',
  },
  {
    icon: '⚡',
    name: 'Solve 5 DP problems today',
    xp: '+200 XP',
    topic: 'Daily challenge',
    progress: 40,
    done: false,
    accentColor: '#F5C842',
  },
  {
    icon: '🔍',
    name: 'Complete Binary Search subtopics',
    xp: '+150 XP',
    topic: 'Completed',
    progress: 100,
    done: true,
    accentColor: '#2DD4B0',
  },
]

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

      {/* Two column layout */}
      <div className="grid grid-cols-3 gap-6">

        {/* Active Quests — takes 2 cols */}
        <div
          className="col-span-2 rounded-xl p-5 border border-pg-border2"
          style={{
            background: 'linear-gradient(160deg, #160E28 0%, #0A0618 100%)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset',
            borderTop: '1px solid #4A2880',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="font-mono text-xs text-pg-text3 tracking-widest flex items-center gap-2">
              <span className="text-pg-violet/60">▶</span>
              ACTIVE QUESTS
            </div>
            <div className="font-mono text-xs text-pg-teal bg-pg-teal/10 border border-pg-teal/25 px-3 py-1 rounded-full">
              ● 1 / 3 complete
            </div>
          </div>

          {/* Quest items */}
          {QUESTS.map((quest, i) => (
            <QuestItem key={i} {...quest} />
          ))}
        </div>

        {/* Pace card — takes 1 col */}
        <div
          className="rounded-xl p-5 border border-pg-border2 flex flex-col gap-4"
          style={{
            background: 'linear-gradient(160deg, #160E28 0%, #0A0618 100%)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset',
            borderTop: '1px solid #4A2880',
          }}
        >
          <div className="font-mono text-xs text-pg-text3 tracking-widest flex items-center gap-2">
            <span className="text-pg-violet/60">▶</span>
            PACE TRACKER
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="font-rajdhani text-sm text-pg-text3">Week</span>
              <span className="font-mono text-xs text-pg-violet">1 / 24</span>
            </div>
            <div className="h-1.5 bg-pg-bg rounded-full overflow-hidden border border-pg-border">
              <div className="h-full bg-pg-violet rounded-full" style={{ width: '4%' }}/>
            </div>

            <div className="flex justify-between items-center mt-2">
              <span className="font-rajdhani text-sm text-pg-text3">Topics</span>
              <span className="font-mono text-xs text-pg-gold">0 / 19</span>
            </div>
            <div className="h-1.5 bg-pg-bg rounded-full overflow-hidden border border-pg-border">
              <div className="h-full bg-pg-gold rounded-full" style={{ width: '0%' }}/>
            </div>

            <div className="flex justify-between items-center mt-2">
              <span className="font-rajdhani text-sm text-pg-text3">Questions</span>
              <span className="font-mono text-xs text-pg-teal">0 / 245</span>
            </div>
            <div className="h-1.5 bg-pg-bg rounded-full overflow-hidden border border-pg-border">
              <div className="h-full bg-pg-teal rounded-full" style={{ width: '0%' }}/>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-pg-border">
            <div className="font-mono text-xs text-pg-text3 mb-1">Status</div>
            <div className="font-rajdhani font-semibold text-pg-teal">
              On Track ✓
            </div>
            <div className="font-mono text-xs text-pg-muted mt-1">
              // just getting started
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard