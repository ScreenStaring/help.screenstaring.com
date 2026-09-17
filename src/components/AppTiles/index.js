import styles from './styles.module.css';

export default function AppTiles(props) {
  return <section className={styles.apps}>{props.children}</section>;
}
