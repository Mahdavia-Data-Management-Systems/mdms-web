"use client";

import Link from "next/link";
import AuthButton from "@/components/auth-button";
import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navBrand}>
          <img src="/logo.png" alt="MDMS" className={styles.navLogo} />
          <span className={styles.navTitle}>MDMS</span>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a href="#mission" className={styles.navLink}>
              Mission
            </a>
          </li>
          <li>
            <a href="#values" className={styles.navLink}>
              Values
            </a>
          </li>
          <li>
            <a href="#team" className={styles.navLink}>
              Team
            </a>
          </li>
        </ul>
        <AuthButton className={styles.navSignIn} />
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroRule} />
          <h1 className={styles.heroTitle}>
            Serving the Mahdavia Community Through Technology
          </h1>
          <p className={styles.heroSubtitle}>
            Building digital infrastructure that preserves sacred knowledge,
            advances education, and strengthens the bonds of community across
            generations.
          </p>
        </div>
        <div className={styles.heroBottom} />
      </section>

      {/* About */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>About</div>
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <div className={styles.dividerDiamond} />
            <div className={styles.dividerLine} />
          </div>
          <h2 className={styles.sectionHeading}>Who We Are</h2>
          <div className={styles.aboutText}>
            <p>
              The Mahdavia Data Management System is a community-driven
              technology initiative dedicated to empowering the Mahdavia
              community worldwide. We design, build, and steward digital
              platforms that serve the community&apos;s spiritual, educational,
              and social needs.
            </p>
            <p>
              Through a centralized identity platform powered by Azure Entra ID,
              we provide seamless single sign-on across all MDMS applications,
              enabling community developers to build and integrate their own
              services within a trusted, secure ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Purpose</div>
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <div className={styles.dividerDiamond} />
            <div className={styles.dividerLine} />
          </div>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="var(--green-action)"
                  strokeWidth="1.5"
                >
                  <circle cx="10" cy="10" r="8" />
                  <circle cx="10" cy="10" r="4" />
                  <circle cx="10" cy="10" r="1" />
                </svg>
              </div>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionText}>
                To serve the Mahdavia community by creating accessible, trusted
                digital platforms that preserve our sacred heritage, advance
                education, support community health, and strengthen the bonds
                that unite us across generations and geographies.
              </p>
            </div>
            <div className={styles.missionDivider} />
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="var(--green-action)"
                  strokeWidth="1.5"
                >
                  <path d="M10 2 L10 5" />
                  <path d="M10 15 L10 18" />
                  <path d="M2 10 L5 10" />
                  <path d="M15 10 L18 10" />
                  <circle cx="10" cy="10" r="5" />
                </svg>
              </div>
              <h3 className={styles.missionTitle}>Our Vision</h3>
              <p className={styles.missionText}>
                A connected, flourishing Mahdavia community where technology
                serves faith, knowledge flows freely across borders, and every
                member has access to the resources they need to learn, grow, and
                contribute to the collective good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Principles</div>
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <div className={styles.dividerDiamond} />
            <div className={styles.dividerLine} />
          </div>
          <h2 className={styles.sectionHeading}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueTerm}>Khidmat</div>
              <div className={styles.valueLabel}>Service</div>
              <p className={styles.valueDesc}>
                We build technology as an act of service to the community,
                placing collective needs above all else and ensuring our work
                serves a purpose greater than itself.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueTerm}>Hifazat</div>
              <div className={styles.valueLabel}>Preservation</div>
              <p className={styles.valueDesc}>
                We safeguard sacred texts and community knowledge with the utmost
                care, ensuring they endure with integrity for generations to
                come.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueTerm}>Ittihad</div>
              <div className={styles.valueLabel}>Unity</div>
              <p className={styles.valueDesc}>
                We create bridges that connect community members across distances
                and differences, fostering a shared sense of belonging and mutual
                support.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueTerm}>Ihsan</div>
              <div className={styles.valueLabel}>Excellence</div>
              <p className={styles.valueDesc}>
                We pursue the highest standards of craft, security, and
                reliability in everything we build, because the work we do
                deserves nothing less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Ecosystem</div>
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <div className={styles.dividerDiamond} />
            <div className={styles.dividerLine} />
          </div>
          <h2 className={styles.sectionHeading}>Our Platforms</h2>
          <p className={styles.sectionSubheading}>
            Applications built under the MDMS umbrella, each serving a distinct
            dimension of community life.
          </p>
          <div className={styles.platformsGrid}>
            <div className={styles.platformCard}>
              <div
                className={styles.platformIcon}
                style={{ background: "#0F3D2E" }}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M4 4 L10 2 L16 4 L16 16 L10 18 L4 16 Z" />
                  <line x1="10" y1="2" x2="10" y2="18" />
                </svg>
              </div>
              <div className={styles.platformDomain}>Scripture</div>
              <a href="https://www.ishqnama.com" target="_blank" rel="noopener noreferrer" className={styles.platformName}>Ishqnama</a>
              <p className={styles.platformDesc}>
                Quranic learning and scripture access with multi-language
                translations, verse bookmarking, and reading progress.
              </p>
            </div>
            <div className={styles.platformCard}>
              <div
                className={styles.platformIcon}
                style={{ background: "#1F7A5C" }}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M3 4 L17 4 L17 16 L3 16 Z" />
                  <line x1="3" y1="8" x2="17" y2="8" />
                  <line x1="7" y1="8" x2="7" y2="16" />
                </svg>
              </div>
              <div className={styles.platformDomain}>Education</div>
              <span className={styles.comingSoon}>Coming Soon</span>
              <div className={styles.platformName}>Taleem Portal</div>
              <p className={styles.platformDesc}>
                Educational resources and learning management for community
                schools, teachers, and students.
              </p>
            </div>
            <div className={styles.platformCard}>
              <div
                className={styles.platformIcon}
                style={{ background: "#C9A24A" }}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M10 3 C6 3 3 6 3 9 C3 14 10 18 10 18 C10 18 17 14 17 9 C17 6 14 3 10 3 Z" />
                </svg>
              </div>
              <div className={styles.platformDomain}>Healthcare</div>
              <span className={styles.comingSoon}>Coming Soon</span>
              <div className={styles.platformName}>Sehat Connect</div>
              <p className={styles.platformDesc}>
                Community healthcare coordination, connecting members with
                medical resources and health initiatives.
              </p>
            </div>
            <div className={styles.platformCard}>
              <div
                className={styles.platformIcon}
                style={{ background: "#6B5B3E" }}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <circle cx="7" cy="8" r="3" />
                  <circle cx="13" cy="8" r="3" />
                  <path d="M3 17 C3 14 5 12 7 12" />
                  <path d="M13 12 C15 12 17 14 17 17" />
                </svg>
              </div>
              <div className={styles.platformDomain}>Community</div>
              <span className={styles.comingSoon}>Coming Soon</span>
              <div className={styles.platformName}>Rabita</div>
              <p className={styles.platformDesc}>
                Social cohesion and community engagement, fostering connections
                and collective initiatives worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>People</div>
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <div className={styles.dividerDiamond} />
            <div className={styles.dividerLine} />
          </div>
          <h2 className={styles.sectionHeading}>Our Team</h2>
          <p className={styles.sectionSubheading}>
            The people behind MDMS, building with purpose and guided by service.
          </p>
          <div className={styles.teamGrid}>
            {[
              { initials: "NM", name: "Noor Mahdi", role: "Founder & CTO" },
              {
                initials: "SA",
                name: "Syed Ather Abbas",
                role: "Principal Architect",
              },
              {
                initials: "SZ",
                name: "Syed Zahirullah",
                role: "Principal DevOps Engineer",
              },
              {
                initials: "NM",
                name: "Dr. Noor Mohammed",
                role: "Advisor",
              },
              { initials: "SR", name: "Syed Rehan", role: "Auditor & Advisor" },
              {
                initials: "SS",
                name: "Faqeer Syed Sajjad",
                role: "COO & Advisor",
              },
            ].map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  <span className={styles.teamInitials}>
                    {member.initials}
                  </span>
                </div>
                <div>
                  <div className={styles.teamName}>{member.name}</div>
                  <div className={styles.teamRole}>{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop} />
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <img src="/logo.png" alt="MDMS" className={styles.footerLogo} />
            <span className={styles.footerBrandText}>
              Mahdavia Data Management System
            </span>
          </div>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className={styles.footerLink}>
                Terms
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.footerLink}>
                Contact
              </Link>
            </li>
          </ul>
          <span className={styles.footerCopyright}>
            &copy; 2026 MDMS. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
