import styles from "../styles/Statement.module.css";

interface StatementProps {
  text: string;
}

export default function Statement(props: StatementProps) {
  const { text } = props;
  return (
    <div className={styles.statement}>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
