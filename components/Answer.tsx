import AnswerModel from "../model/answer";
import styles from "../styles/Answer.module.css";

interface AnswerProps {
  model: AnswerModel;
  index: number;
  letter: string;
  backgroundColor: string;
  onResponse: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
  const { model, index, letter, backgroundColor, onResponse } = props;
  const value = model.value;
  return (
    <div className={styles.answer} onClick={() => onResponse(index)}>
      <div className={styles.answerContent}>
        {!model.revealed ? (
          <div className={styles.answerFront}>
            <div
              style={{ backgroundColor: backgroundColor }}
              className={styles.answerLetter}
            >
              {letter}
            </div>
            <div className={styles.answerValue}>{value}</div>
          </div>
        ) : (
          <div className={styles.answerBack}>
            {model.answerIsCorrect ? (
              <div className={styles.correct}>
                <div>A resposta correta é....</div>
                <div className={styles.value}>{model.value}</div>
              </div>
            ) : (
              <div className={styles.wrong}>
                <div>A resposta errada é....</div>
                <div className={styles.value}>{model.value}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
