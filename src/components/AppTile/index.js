import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function AppTile(props) {
  return (
    <div className={styles.appCard}>
      <div className={styles.appCardBody}>
        <h3 className={styles.appCardTitle}>{props.title}</h3>
        <p className={styles.appCardText}>{props.text}</p>
        {props.href ? (
          <a
            className={styles.appCardLink}
            href={props.href}
            target="_blank"
            rel="noreferrer">
            {props.linkLabel}
          </a>
        ) : (
          <Link className={styles.appCardLink} to={props.to}>
            {props.linkLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
