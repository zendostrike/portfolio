import Link from "next/link";

import styles from "./CustomLink.module.css";

export function CustomLink(props) {
  const { children, style, ...rest } = props;

  return <Link className={styles.link} {...rest}>{children}</Link>
}