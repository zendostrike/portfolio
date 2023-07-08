import styles from "./Tab.module.css";

export function Tab(props) {
  const { children, selected } = props;

  let classnames = styles.tab;

  if (selected) {
    classnames += " " + styles.tab__selected;
  }

  return <div className={classnames}>{children}</div>;
}
