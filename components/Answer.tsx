import AnswerModel from "../model/answer";
import styles from "../styles/Answer.module.css";

interface AnswerProps {
  model: AnswerModel;
  index: number;
  letter: string;
  backgroundColor: string;
}

export default function Answer(props: AnswerProps) {
  const { model, index, letter, backgroundColor } = props;
  const value = model.value;
  return (
    <div className={styles.answer}>
      <div className={styles.answerContent}>
        <div className={styles.answerFront}>
          <div
            style={{ backgroundColor: backgroundColor }}
            className={styles.answerLetter}
          >
            {letter}
          </div>
          <div className={styles.answerValue}>{value}</div>
        </div>
        <div className={styles.answerBack}></div>
      </div>
    </div>
  );
}
