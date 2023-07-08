import styles from "./Tabs.module.css";

export function Tabs(props) {
  const { children } = props;

  return <nav className={styles.tabs}>{children}</nav>;
}
