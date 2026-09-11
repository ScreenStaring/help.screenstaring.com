import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const supportURL = siteConfig.themeConfig.supportURL;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={styles.hero}>
        <div className="container">
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        </div>
      </header>
      <main className="container">
        <section className={styles.apps}>
          <div className={styles.appCard}>
            <div className={styles.appCardBody}>
              <h3 className={styles.appCardTitle}>It's Got: The Food Database</h3>
              <p className={styles.appCardText}>
                Product nutrition data management and label builder.
                Generate supplement, drug, pet, and nutrition information panels in multiple formats & languages.
              </p>
              <Link className={styles.appCardLink} to="/docs/itsgot">
                User's Guide →
              </Link>
            </div>
          </div>
          <div className={styles.appCard}>
            <div className={styles.appCardBody}>
              <h3 className={styles.appCardTitle}>Product Expiration Dates</h3>
              <p className={styles.appCardText}>
                Inventory management system for your perishable products.
                Track expiry dates, batch numbers, and materials from intake to sale.
              </p>
              <Link className={styles.appCardLink} to="/docs/product-expiration-dates">
                User's Guide →
              </Link>
            </div>
          </div>
          <div className={styles.appCard}>
            <div className={styles.appCardBody}>
              <h3 className={styles.appCardTitle}>Need help?</h3>
              <p className={styles.appCardText}>
                Our support team is happy to assist with any problems or questions you have.
              </p>
              <a className={styles.appCardLink} href={supportURL} target="_blank">
                Contact support →
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
