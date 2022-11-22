import AnswerModel from "../model/answer";
import styles from "../styles/Answer.module.css";

interface AnswerProps {
  model: AnswerModel;
  index: number;
  letter: string;
  letterColor: string;
}

export default function Answer(props: AnswerProps) {
  const { model, index, letter, letterColor } = props;
  const value = model.value;
  return (
    <div className={styles.answer}>
      <div className={styles.answerContent}>
        <div className={styles.answerFront}>
          <div className={styles.answerLetter}>{letter}</div>
          <div className={styles.answerLetter}>{value}</div>
        </div>
        <div className={styles.answerBack}></div>
      </div>
    </div>
  );
}
