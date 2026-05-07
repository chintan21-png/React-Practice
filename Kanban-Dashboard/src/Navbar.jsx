import { Link, useLocation } from "react-router-dom";

const links = [
  {
    to: "/",
    label: "Board",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="18" rx="1" />
        <rect x="14" y="3" width="7" height="10" rx="1" />
        <rect x="14" y="17" width="7" height="4" rx="1" />
      </svg>
    ),
  },
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v9H3z" />
        <path d="M14 3h7v5h-7z" />
        <path d="M14 12h7v9h-7z" />
        <path d="M3 16h7v5H3z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <style>{`
        .kb-nav-bg {
          background: linear-gradient(135deg, #4F46E5 0%, #6366F1 40%, #818CF8 100%);
          position: relative;
          overflow: hidden;
        }

        /* animated shimmer orbs */
        .kb-nav-bg::before {
          content: '';
          position: absolute;
          top: -60%;
          left: -10%;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%);
          border-radius: 50%;
          animation: kb-orb1 8s ease-in-out infinite;
          pointer-events: none;
        }

        .kb-nav-bg::after {
          content: '';
          position: absolute;
          top: -80%;
          right: 5%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(199,210,254,0.18) 0%, transparent 70%);
          border-radius: 50%;
          animation: kb-orb2 10s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes kb-orb1 {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); }
          50% { transform: translateX(30px) translateY(10px) scale(1.1); }
        }

        @keyframes kb-orb2 {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); }
          50% { transform: translateX(-20px) translateY(5px) scale(1.08); }
        }
      `}</style>

      <nav className="kb-nav-bg sticky top-0 z-50 border-b border-indigo-500/30 shadow-lg shadow-indigo-900/20">
        <div className="relative z-10 px-6 h-14 flex items-center justify-between">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 no-underline group">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-md group-hover:bg-white/30 transition-all duration-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="18" rx="1.5" />
                <rect x="14" y="3" width="7" height="10" rx="1.5" />
                <rect x="14" y="17" width="7" height="4" rx="1.5" />
              </svg>
            </div>
            <span className="text-base font-bold text-white tracking-tight drop-shadow-sm">
              Kan<span className="text-indigo-200">ban</span>
            </span>
          </Link>

          {/* Nav pill */}
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-1">
            {links.map(({ to, label, icon }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={[
                    "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium no-underline transition-all duration-150",
                    isActive
                      ? "bg-white text-indigo-600 shadow-md"
                      : "text-white/70 hover:text-white hover:bg-white/15",
                  ].join(" ")}
                >
                  <span className={isActive ? "text-indigo-500" : "text-white/60"}>
                    {icon}
                  </span>
                  {label}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 ml-0.5" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-xs font-bold text-white hover:bg-white/30 hover:border-white/70 hover:scale-105 transition-all duration-150 cursor-pointer select-none shadow-md">
            K
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
