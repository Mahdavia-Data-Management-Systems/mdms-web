"use client";

import ProtectedRoute from "@/components/protected-route";
import styles from "./page.module.css";

function DashboardContent() {
  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <img src="/logo.png" alt="MDMS" className={styles.sidebarLogo} />
          <div>
            <div className={styles.sidebarTitle}>MDMS</div>
            <div className={styles.sidebarSubtitle}>Admin Portal</div>
          </div>
        </div>

        <nav className={styles.sidebarNav}>
          <div className={styles.sidebarSection}>Main</div>
          <div className={styles.sidebarLinkActive}>
            <svg className={styles.sidebarIcon} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="7" height="7" rx="1.5" />
              <rect x="11" y="2" width="7" height="7" rx="1.5" />
              <rect x="2" y="11" width="7" height="7" rx="1.5" />
              <rect x="11" y="11" width="7" height="7" rx="1.5" />
            </svg>
            Dashboard
          </div>
          <div className={styles.sidebarLink}>
            <svg className={styles.sidebarIcon} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="14" height="5" rx="1.5" />
              <rect x="3" y="12" width="14" height="5" rx="1.5" />
            </svg>
            Applications
          </div>
          <div className={styles.sidebarLink}>
            <svg className={styles.sidebarIcon} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 1 L18 6 L18 14 L10 19 L2 14 L2 6 Z" />
              <circle cx="10" cy="10" r="3" />
            </svg>
            Identity &amp; SSO
          </div>

          <div className={styles.sidebarSection}>Platform</div>
          <div className={styles.sidebarLink}>
            <svg className={styles.sidebarIcon} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="4,13 8,7 12,11 16,5" />
              <line x1="3" y1="17" x2="17" y2="17" />
            </svg>
            Analytics
          </div>
          <div className={styles.sidebarLink}>
            <svg className={styles.sidebarIcon} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 3 L3 7 L7 11" />
              <path d="M13 9 L17 13 L13 17" />
              <line x1="5" y1="7" x2="15" y2="13" />
            </svg>
            Developers
          </div>
          <div className={styles.sidebarLink}>
            <svg className={styles.sidebarIcon} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="10" cy="10" r="7" />
              <circle cx="10" cy="10" r="2.5" />
              <line x1="10" y1="1" x2="10" y2="3" />
              <line x1="10" y1="17" x2="10" y2="19" />
              <line x1="1" y1="10" x2="3" y2="10" />
              <line x1="17" y1="10" x2="19" y2="10" />
            </svg>
            Settings
          </div>
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.sidebarAvatar}>
            <span className={styles.sidebarAvatarText}>NA</span>
          </div>
          <div>
            <div className={styles.sidebarUserName}>Noor Ahmed</div>
            <div className={styles.sidebarUserRole}>Administrator</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className={styles.main}>
        {/* Top bar */}
        <header className={styles.topbar}>
          <span className={styles.topbarGreeting}>Welcome back, Noor</span>
          <div className={styles.topbarActions}>
            <div className={styles.topbarSearch}>
              <svg className={styles.topbarSearchIcon} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="8.5" cy="8.5" r="5.5" />
                <line x1="13" y1="13" x2="17" y2="17" />
              </svg>
              Search anything...
            </div>
            <button className={styles.topbarBell}>
              <svg className={styles.topbarBellIcon} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 2 C7 2 5 4.5 5 7.5 L5 11 L3 14 L17 14 L15 11 L15 7.5 C15 4.5 13 2 10 2 Z" />
                <path d="M8 14 C8 15.5 9 17 10 17 C11 17 12 15.5 12 14" />
              </svg>
              <span className={styles.topbarBellDot} />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className={styles.content}>
          {/* Stats */}
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ background: "rgba(31, 122, 92, 0.08)" }}>
                <svg viewBox="0 0 20 20" fill="none" stroke="var(--green-action)" strokeWidth="1.5">
                  <circle cx="7" cy="7" r="3" />
                  <circle cx="14" cy="7" r="3" />
                  <path d="M3 17 C3 14 5 12 7 12 L14 12 C16 12 18 14 18 17" />
                </svg>
              </div>
              <div>
                <div className={styles.statLabel}>Community Members</div>
                <div className={styles.statValue}>12,847</div>
                <div className={`${styles.statTrend} ${styles.statTrendUp}`}>
                  &#9650; 8.3% this month
                </div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ background: "rgba(31, 122, 92, 0.08)" }}>
                <svg viewBox="0 0 20 20" fill="none" stroke="var(--green-action)" strokeWidth="1.5">
                  <rect x="3" y="3" width="14" height="5" rx="1.5" />
                  <rect x="3" y="12" width="14" height="5" rx="1.5" />
                </svg>
              </div>
              <div>
                <div className={styles.statLabel}>Active Applications</div>
                <div className={styles.statValue}>4</div>
                <div className={styles.statTrend}>2 live, 1 beta, 1 in development</div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ background: "var(--gold-soft)" }}>
                <svg viewBox="0 0 20 20" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <rect x="5" y="9" width="10" height="8" rx="1.5" />
                  <path d="M7 9 L7 6 C7 3.5 8.5 2 10 2 C11.5 2 13 3.5 13 6 L13 9" />
                </svg>
              </div>
              <div>
                <div className={styles.statLabel}>Monthly Logins</div>
                <div className={styles.statValue}>48.2K</div>
                <div className={`${styles.statTrend} ${styles.statTrendUp}`}>
                  &#9650; 12.5% vs last month
                </div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ background: "var(--gold-soft)" }}>
                <svg viewBox="0 0 20 20" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <path d="M7 3 L3 7 L7 11" />
                  <path d="M13 9 L17 13 L13 17" />
                  <line x1="5" y1="7" x2="15" y2="13" />
                </svg>
              </div>
              <div>
                <div className={styles.statLabel}>Developer Keys</div>
                <div className={styles.statValue}>18</div>
                <div className={`${styles.statTrend} ${styles.statTrendUp}`}>
                  &#9650; 3 new this month
                </div>
              </div>
            </div>
          </div>

          {/* Apps + Identity panels */}
          <div className={styles.panelsRow}>
            {/* Registered Applications */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelTitle}>Registered Applications</span>
                <span className={styles.panelAction}>Manage</span>
              </div>
              {[
                {
                  name: "Ishqnama",
                  desc: "Quranic Learning & Scripture",
                  users: "8,432 users",
                  status: "Live",
                  badge: styles.badgeLive,
                  color: "#0F3D2E",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M4 4 L10 2 L16 4 L16 16 L10 18 L4 16 Z" />
                      <line x1="10" y1="2" x2="10" y2="18" />
                    </svg>
                  ),
                },
                {
                  name: "Taleem Portal",
                  desc: "Education & Learning",
                  users: "--",
                  status: "Coming Soon",
                  badge: styles.badgeDev,
                  color: "#1F7A5C",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M3 4 L17 4 L17 16 L3 16 Z" />
                      <line x1="3" y1="8" x2="17" y2="8" />
                      <line x1="7" y1="8" x2="7" y2="16" />
                    </svg>
                  ),
                },
                {
                  name: "Sehat Connect",
                  desc: "Community Healthcare",
                  users: "--",
                  status: "Coming Soon",
                  badge: styles.badgeDev,
                  color: "#C9A24A",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M10 3 C6 3 3 6 3 9 C3 14 10 18 10 18 C10 18 17 14 17 9 C17 6 14 3 10 3 Z" />
                    </svg>
                  ),
                },
                {
                  name: "Rabita",
                  desc: "Social Cohesion & Community",
                  users: "--",
                  status: "Coming Soon",
                  badge: styles.badgeDev,
                  color: "#6B5B3E",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
                      <circle cx="7" cy="8" r="3" />
                      <circle cx="13" cy="8" r="3" />
                      <path d="M3 17 C3 14 5 12 7 12" />
                      <path d="M13 12 C15 12 17 14 17 17" />
                    </svg>
                  ),
                },
              ].map((app) => (
                <div key={app.name} className={styles.appRow}>
                  <div className={styles.appIcon} style={{ background: app.color }}>
                    {app.icon}
                  </div>
                  <div>
                    <div className={styles.appName}>{app.name === "Ishqnama" ? <a href="https://www.ishqnama.com" target="_blank" rel="noopener noreferrer">{app.name}</a> : app.name}</div>
                    <div className={styles.appDesc}>{app.desc}</div>
                  </div>
                  <span className={styles.appUsers}>{app.users}</span>
                  <span className={app.badge}>{app.status}</span>
                </div>
              ))}
            </div>

            {/* Identity Providers */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelTitle}>Identity Providers</span>
                <span className={styles.panelAction}>Configure</span>
              </div>

              <div className={styles.idpRow}>
                <div className={styles.idpDot} />
                <div>
                  <div className={styles.idpName}>Azure Entra ID</div>
                  <div className={styles.idpDetail}>Primary, Enterprise SSO</div>
                </div>
                <div className={styles.idpMetric}>
                  <span className={styles.idpBadge}>Primary</span>
                </div>
              </div>

              {[
                { name: "Google", detail: "Social login, OAuth 2.0", pct: 62 },
                { name: "Facebook", detail: "Social login, OAuth 2.0", pct: 24 },
                { name: "Email / Password", detail: "Local accounts", pct: 14 },
              ].map((idp) => (
                <div key={idp.name} className={styles.idpRow}>
                  <div className={styles.idpDot} />
                  <div>
                    <div className={styles.idpName}>{idp.name}</div>
                    <div className={styles.idpDetail}>{idp.detail}</div>
                  </div>
                  <div className={`${styles.idpMetric} ${styles.idpBar}`}>
                    <div className={styles.idpBarTrack}>
                      <div
                        className={styles.idpBarFill}
                        style={{ width: `${idp.pct}%` }}
                      />
                    </div>
                    <span className={styles.idpBarLabel}>{idp.pct}%</span>
                  </div>
                </div>
              ))}

              <div className={styles.panelFooter}>
                <span>SSO adoption rate</span>
                <span className={styles.panelFooterValue}>86%</span>
              </div>
            </div>
          </div>

          {/* Chart + Health panels */}
          <div className={styles.chartRow}>
            {/* Monthly Active Users */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelTitle}>Monthly Active Users</span>
                <span className={styles.panelAction}>View Report</span>
              </div>
              <div className={styles.chart}>
                {[
                  { month: "Feb", value: "28K", height: 50, opacity: 0.25 },
                  { month: "Mar", value: "31K", height: 56, opacity: 0.3 },
                  { month: "Apr", value: "35K", height: 63, opacity: 0.4 },
                  { month: "May", value: "38K", height: 68, opacity: 0.5 },
                  { month: "Jun", value: "42K", height: 76, opacity: 0.65 },
                  { month: "Jul", value: "45K", height: 82, opacity: 0.8 },
                  { month: "Aug", value: "48K", height: 90, opacity: 1 },
                ].map((bar) => (
                  <div key={bar.month} className={styles.chartColumn}>
                    <span className={styles.chartValue}>{bar.value}</span>
                    <div
                      className={styles.chartBar}
                      style={{
                        height: `${bar.height}%`,
                        background:
                          bar.opacity === 1
                            ? "var(--green-action)"
                            : `rgba(31, 122, 92, ${bar.opacity})`,
                      }}
                    />
                    <span className={styles.chartLabel}>{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Health */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelTitle}>System Health</span>
                <span className={styles.panelAction}>Details</span>
              </div>
              {[
                { name: "API Gateway", uptime: "99.98%" },
                { name: "Azure Entra ID (CIAM)", uptime: "99.99%" },
                { name: "PostgreSQL Database", uptime: "99.95%" },
                { name: "Static Web Apps (CDN)", uptime: "99.99%" },
                { name: "Azure Functions", uptime: "99.97%" },
              ].map((svc) => (
                <div key={svc.name} className={styles.healthRow}>
                  <div className={styles.healthDot} />
                  <span className={styles.healthName}>{svc.name}</span>
                  <span className={styles.healthUptime}>{svc.uptime}</span>
                  <span className={styles.healthStatus}>Operational</span>
                </div>
              ))}
              <div className={styles.panelFooter}>
                <span>Overall platform uptime</span>
                <span className={styles.panelFooterValue}>99.97%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
