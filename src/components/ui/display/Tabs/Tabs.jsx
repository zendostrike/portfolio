import styles from "./Tabs.module.css";

function Tab(props) {
  const { children } = props;

  return <nav className={styles.tabs}>{children}</nav>;
}

export default Tab;
