import styles from "./Entry.module.css";

import createMarkup from "@/utils/create-markup";

function Entry(props) {
  const { title, content } = props;

  return (
    <div className={styles.entry}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={createMarkup(content)} />
    </div>
  );
}

export default Entry;
