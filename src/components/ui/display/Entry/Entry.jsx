import styles from "./Entry.module.css";

import createMarkup from "@/utils/create-markup";

export function Entry(props) {
  const { title, content } = props;

  return (
    <div className={styles.entry}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={createMarkup(content)} />
    </div>
  );
}