import Link from "next/link";
import styles from "../legal.module.css";

export default function PrivacyPage() {
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
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: August 2026</p>
        </div>

        <article className={styles.body}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p>
              The Mahdavia Data Management System (&ldquo;MDMS,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              is committed to protecting the privacy of our users. This
              Privacy Policy explains how we collect, use, and safeguard
              your information when you use our platforms and services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Information We Collect</h2>
            <h3 className={styles.subTitle}>Account Information</h3>
            <p>
              When you create an account, we collect your name, email
              address, and authentication credentials. This information is
              necessary to provide you with access to our platforms.
            </p>
            <h3 className={styles.subTitle}>Usage Data</h3>
            <p>
              We may collect information about how you interact with our
              services, including pages visited, features used, and the
              dates and times of your visits. This helps us improve our
              platforms.
            </p>
            <h3 className={styles.subTitle}>Community Contributions</h3>
            <p>
              Content you submit to our platforms&mdash;such as educational
              resources, community data, or other contributions&mdash;is
              stored to fulfil the purposes of our mission.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className={styles.list}>
              <li>Provide, maintain, and improve our platforms</li>
              <li>Authenticate your identity and manage your account</li>
              <li>Communicate with you about services and updates</li>
              <li>Preserve and organize community knowledge and data</li>
              <li>Ensure the security and integrity of our systems</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures
              to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. We use
              industry-standard encryption and secure authentication
              methods.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to
              third parties. We may share information only in the following
              circumstances:
            </p>
            <ul className={styles.list}>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>
                With trusted service providers who assist in operating our
                platforms, subject to confidentiality agreements
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Your Rights</h2>
            <p>You have the right to:</p>
            <ul className={styles.list}>
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and associated data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p>
              To exercise any of these rights, please{" "}
              <Link href="/contact" className={styles.inlineLink}>
                contact us
              </Link>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify users of any material changes by posting the updated
              policy on our platforms. Your continued use of our services
              after changes are posted constitutes your acceptance of the
              revised policy.
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
