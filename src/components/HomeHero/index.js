import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomeHero(props) {
  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {props.title}
        </Heading>
        <p className={styles.heroSubtitle}>{props.tagline}</p>
      </div>
    </header>
  );
}
