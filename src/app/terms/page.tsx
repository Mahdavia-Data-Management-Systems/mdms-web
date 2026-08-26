import Link from "next/link";
import styles from "../legal.module.css";

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navBrand}>
          <img src="/logo.png" alt="MDMS" className={styles.navLogo} />
          <span className={styles.navTitle}>MDMS</span>
        </Link>
      </nav>

      <main className={styles.content}>
        <div className={styles.header}>
          <span className={styles.label}>Legal</span>
          <div className={styles.divider}>
            <span className={styles.dividerDiamond} />
          </div>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: August 2026</p>
        </div>

        <article className={styles.body}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
            <p>
              By accessing or using any platform operated by the Mahdavia
              Data Management System (&ldquo;MDMS&rdquo;), you agree to be
              bound by these Terms of Service. If you do not agree with any
              part of these terms, you may not use our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Description of Services</h2>
            <p>
              MDMS provides digital platforms designed to preserve sacred
              knowledge, advance education, and strengthen the Mahdavia
              community. Our services include but are not limited to
              educational resources, community data management, and digital
              preservation tools.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>User Accounts</h2>
            <p>
              To access certain features, you may need to create an account.
              You are responsible for:
            </p>
            <ul className={styles.list}>
              <li>
                Providing accurate and complete registration information
              </li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>
                Notifying us immediately of any unauthorized use of your
                account
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Acceptable Use</h2>
            <p>When using our platforms, you agree not to:</p>
            <ul className={styles.list}>
              <li>
                Use the services for any unlawful or unauthorized purpose
              </li>
              <li>
                Submit false, misleading, or inaccurate information
              </li>
              <li>
                Attempt to gain unauthorized access to any part of our
                systems
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of
                our services
              </li>
              <li>
                Reproduce, distribute, or modify any content without
                authorization
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Intellectual Property</h2>
            <p>
              All content, features, and functionality of our platforms
              &mdash;including text, graphics, logos, and software&mdash;are
              the property of MDMS or its content contributors and are
              protected by applicable intellectual property laws.
            </p>
            <p>
              Content contributed by users remains the intellectual property
              of its respective authors, with a non-exclusive licence
              granted to MDMS for the purpose of operating and improving
              our platforms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Community Contributions</h2>
            <p>
              By submitting content to our platforms, you represent that you
              have the right to share such content and that it does not
              infringe upon the rights of any third party. You grant MDMS a
              non-exclusive, royalty-free licence to use, display, and
              distribute your contributions in connection with our mission.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
            <p>
              MDMS is a community-driven, non-commercial initiative. Our
              services are provided &ldquo;as is&rdquo; without warranties
              of any kind, either express or implied. We shall not be liable
              for any indirect, incidental, or consequential damages
              arising from your use of our platforms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to
              our services at our discretion, with or without notice, for
              conduct that we believe violates these Terms of Service or is
              harmful to our community or platforms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to Terms</h2>
            <p>
              We may revise these Terms of Service at any time. Changes
              will be effective when posted on our platforms. Your continued
              use of our services after changes are posted constitutes your
              acceptance of the revised terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p>
              If you have questions about these Terms of Service, please{" "}
              <Link href="/contact" className={styles.inlineLink}>
                contact us
              </Link>
              .
            </p>
          </section>
        </article>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop} />
        <div className={styles.footerInner}>
          <Link href="/" className={styles.footerBrand}>
            <img src="/logo.png" alt="MDMS" className={styles.footerLogo} />
            <span className={styles.footerBrandText}>
              Mahdavia Data Management System
            </span>
          </Link>
          <span className={styles.footerCopyright}>
            &copy; 2026 MDMS. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
