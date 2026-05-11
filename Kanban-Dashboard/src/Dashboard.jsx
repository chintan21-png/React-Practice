import { useEffect, useState } from "react";

const STORAGE_KEY = "kanban-data";

const colMeta = {
  todo: { accent: "#6C63FF", bar: "bg-violet-500" },
  inProgress: { accent: "#3B82F6", bar: "bg-blue-500" },
  review: { accent: "#F59E0B", bar: "bg-amber-400" },
  done: { accent: "#10B981", bar: "bg-emerald-500" },
};

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (value === 0) {
      setDisplay(0);
      return;
    }
    let start = 0;
    const step = Math.ceil(600 / value);
    const timer = setInterval(() => {
      start += 1;
      setDisplay(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{display}</span>;
}

function ProgressBar({ value, max, barClass }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="relative h-1.5 bg-white/20 rounded-full overflow-hidden">
      <div
        className={`absolute left-0 top-0 h-full rounded-full ${barClass} transition-all duration-700`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

const Dashboard = () => {
  const [columns, setColumns] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) setColumns(JSON.parse(data));
  }, []);

  if (!columns) {
    return (
      <div className="flex items-center justify-center h-48 text-slate-400 text-sm">
        Loading…
      </div>
    );
  }

  const allItems = Object.values(columns).flatMap((c) => c.items);
  const total = allItems.length;
  const completed = (columns.done?.items ?? []).length;
  const pending = total - completed;
  const inProgress = (columns.inProgress?.items ?? []).length;
  const review = (columns.review?.items ?? []).length;
  const completionPct = total > 0 ? Math.round((completed / total) * 100) : 0;
  const pendingPct = total > 0 ? Math.round((pending / total) * 100) : 0;
  const inProgressPct = total > 0 ? Math.round((inProgress / total) * 100) : 0;
  const reviewPct = total > 0 ? Math.round((review / total) * 100) : 0;

  const priorityCounts = allItems.reduce((acc, t) => {
    acc[t.priority] = (acc[t.priority] || 0) + 1;
    return acc;
  }, {});
  const highPct =
    total > 0 ? Math.round(((priorityCounts.high || 0) / total) * 100) : 0;
  const mediumPct =
    total > 0 ? Math.round(((priorityCounts.medium || 0) / total) * 100) : 0;
  const lowPct =
    total > 0 ? Math.round(((priorityCounts.low || 0) / total) * 100) : 0;

  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (completionPct / 100) * circumference;

  const metrics = [
    {
      label: "Total",
      value: total,
      pct: 100,
      sub: "all tasks",
      from: "from-violet-500",
      to: "to-violet-700",
      ring: "bg-violet-400/20",
      dot: "bg-violet-300",
    },
    {
      label: "Completed",
      value: completed,
      pct: completionPct,
      sub: "of total",
      from: "from-emerald-400",
      to: "to-emerald-600",
      ring: "bg-emerald-400/20",
      dot: "bg-emerald-300",
    },
    {
      label: "Pending",
      value: pending,
      pct: pendingPct,
      sub: "of total",
      from: "from-amber-400",
      to: "to-amber-600",
      ring: "bg-amber-400/20",
      dot: "bg-amber-300",
    },
    {
      label: "In Progress",
      value: inProgress,
      pct: inProgressPct,
      sub: "of total",
      from: "from-blue-400",
      to: "to-blue-600",
      ring: "bg-blue-400/20",
      dot: "bg-blue-300",
    },
  ];

  return (
    <>
      <style>{`
        .dash-bg::before {
          content: '';
          position: fixed; top: -120px; left: -80px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%);
          border-radius: 50%;
          animation: orb1 10s ease-in-out infinite;
          pointer-events: none; z-index: 0;
        }
        .dash-bg::after {
          content: '';
          position: fixed; bottom: -100px; right: -60px;
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%);
          border-radius: 50%;
          animation: orb2 12s ease-in-out infinite;
          pointer-events: none; z-index: 0;
        }
        @keyframes orb1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(40px,20px) scale(1.12); }
        }
        @keyframes orb2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(-30px,-15px) scale(1.1); }
        }
        .metric-card { backdrop-filter: blur(12px); }
      `}</style>

      <div className="dash-bg relative min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-5 py-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Dashboard
              </h1>
              <p className="text-sm text-indigo-300 mt-1">
                {total} tasks · {Object.keys(columns).length} columns
              </p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {completionPct}% complete
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {metrics.map(({ label, value, pct, sub, from, to, ring, dot }) => (
              <div
                key={label}
                className={`metric-card bg-linear-to-br ${from} ${to} rounded-2xl p-4 relative overflow-hidden`}
              >
                {/* glow orb inside card */}
                <div
                  className={`absolute -top-4 -right-4 w-20 h-20 rounded-full ${ring}`}
                />
                <p className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-2 relative z-10">
                  {label}
                </p>
                <p className="text-3xl font-bold text-white leading-none relative z-10">
                  <AnimatedNumber value={value} />
                </p>
                <div className="flex items-center gap-1 mt-1 relative z-10">
                  <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                  <span className="text-xs text-white/60">
                    {pct}% {sub}
                  </span>
                </div>
                <div className="mt-3 relative z-10">
                  <ProgressBar
                    value={value}
                    max={total}
                    barClass="bg-white/50"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Donut ring + column breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Donut */}
            <div className="metric-card bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-indigo-300 uppercase tracking-widest mb-4">
                Completion
              </p>
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg
                  width="112"
                  height="112"
                  className="absolute top-0 left-0 -rotate-90"
                >
                  <circle
                    cx="56"
                    cy="56"
                    r="42"
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="42"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{
                      transition:
                        "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  />
                </svg>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-emerald-400">
                    {completionPct}%
                  </span>
                  <span className="text-xs text-white/40">done</span>
                </div>
              </div>
              <div className="mt-4 flex gap-4 text-xs text-white/50">
                <span>
                  <span className="text-emerald-400 font-semibold">
                    {completed}
                  </span>{" "}
                  done
                </span>
                <span>
                  <span className="text-amber-400 font-semibold">
                    {pending}
                  </span>{" "}
                  left
                </span>
              </div>
            </div>

            {/* Column breakdown */}
            <div className="metric-card bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-xs font-semibold text-indigo-300 uppercase tracking-widest mb-4">
                By column
              </p>
              <div className="space-y-3">
                {Object.entries(columns).map(([id, col]) => {
                  const meta = colMeta[id] || {
                    accent: "#6C63FF",
                    bar: "bg-violet-500",
                  };
                  const pct =
                    total > 0
                      ? Math.round((col.items.length / total) * 100)
                      : 0;
                  return (
                    <div key={id}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-white/70">
                          {col.name}
                        </span>
                        <span className="text-xs text-white/40">
                          {col.items.length} ·{" "}
                          <span className="text-white/60 font-medium">
                            {pct}%
                          </span>
                        </span>
                      </div>
                      <ProgressBar
                        value={col.items.length}
                        max={total}
                        barClass={meta.bar}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Priority breakdown */}
          <div className="metric-card bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-xs font-semibold text-indigo-300 uppercase tracking-widest mb-4">
              Priority breakdown
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  key: "high",
                  label: "High",
                  value: priorityCounts.high || 0,
                  pct: highPct,
                  from: "from-red-500",
                  to: "to-rose-600",
                  dot: "bg-red-300",
                },
                {
                  key: "medium",
                  label: "Medium",
                  value: priorityCounts.medium || 0,
                  pct: mediumPct,
                  from: "from-amber-400",
                  to: "to-orange-500",
                  dot: "bg-amber-300",
                },
                {
                  key: "low",
                  label: "Low",
                  value: priorityCounts.low || 0,
                  pct: lowPct,
                  from: "from-emerald-400",
                  to: "to-teal-600",
                  dot: "bg-emerald-300",
                },
              ].map(({ key, label, value, pct, from, to, dot }) => (
                <div
                  key={key}
                  className={`bg-gradient-to-br ${from} ${to} rounded-xl p-3 relative overflow-hidden`}
                >
                  <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-white/10" />
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1 relative z-10">
                    {label}
                  </p>
                  <p className="text-2xl font-bold text-white relative z-10">
                    <AnimatedNumber value={value} />
                  </p>
                  <div className="flex items-center gap-1 mt-0.5 relative z-10">
                    <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                    <span className="text-xs text-white/60">{pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
