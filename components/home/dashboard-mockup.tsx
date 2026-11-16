import { BarChart3, Bus, CalendarCheck, LayoutDashboard, Users, Wallet } from 'lucide-react'

const STATS = [
  { label: 'Bookings', value: '1,284', delta: '+12%' },
  { label: 'Revenue', value: '$86.4k', delta: '+8%' },
  { label: 'Departures', value: '42', delta: 'Today' },
  { label: 'Customers', value: '3,910', delta: '+5%' },
]

const DEPARTURES = [
  { tour: 'Old Town Walking Tour', time: '08:30', guide: 'Amara K.', status: 'Confirmed' },
  { tour: 'Desert Safari Adventure', time: '14:00', guide: 'Ravi S.', status: 'Boarding' },
  { tour: 'Coastal Sunset Cruise', time: '17:45', guide: 'Lena M.', status: 'Pending' },
]

const BARS = [40, 62, 48, 75, 58, 88, 70]

export function DashboardMockup() {
  return (
    <div
      role="img"
      aria-label="JauntCraft dashboard preview showing bookings, revenue, departures and customer stats"
      className="overflow-hidden rounded-3xl bg-white text-left shadow-soft ring-1 ring-black/5"
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="size-2.5 rounded-full bg-coral" />
        <span className="size-2.5 rounded-full bg-[#f5b942]" />
        <span className="size-2.5 rounded-full bg-[#3fb27f]" />
        <span className="ml-3 h-5 flex-1 rounded-full bg-white" />
      </div>
      <div className="flex">
        <aside className="hidden w-44 shrink-0 flex-col gap-1 border-r border-border p-3 sm:flex">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: CalendarCheck, label: 'Bookings' },
            { icon: Bus, label: 'Operations' },
            { icon: Users, label: 'Customers' },
            { icon: Wallet, label: 'Finance' },
            { icon: BarChart3, label: 'Reports' },
          ].map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold ${
                active ? 'bg-coral text-white' : 'text-muted-foreground'
              }`}
            >
              <Icon className="size-3.5" aria-hidden="true" />
              {label}
            </div>
          ))}
        </aside>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-xl bg-surface p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
                <p className="mt-1 text-lg font-bold">{s.value}</p>
                <p className="text-[10px] font-semibold text-coral">{s.delta}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-xl border border-border p-3">
              <p className="mb-2 text-xs font-bold">{"Today's departures"}</p>
              <ul className="flex flex-col gap-2">
                {DEPARTURES.map((d) => (
                  <li key={d.tour} className="flex items-center justify-between gap-2 rounded-lg bg-surface px-3 py-2">
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-semibold">{d.tour}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {d.time} · {d.guide}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-coral-soft px-2 py-0.5 text-[9px] font-bold text-[#b8352a]">
                      {d.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border p-3">
              <p className="mb-2 text-xs font-bold">Weekly revenue</p>
              <div className="flex h-28 items-end gap-2">
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-md ${i === 5 ? 'bg-coral' : 'bg-coral-soft'}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between text-[9px] text-muted-foreground">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <span key={i} className="flex-1 text-center">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
