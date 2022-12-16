import styles from "../styles/Question.module.css";
import QuestionModel from "../model/question";
import Statement from "./Statement";
import Answer from "./Answer";
import Timer from "./Timer";

interface QuestionProps {
  model: QuestionModel;
  onResponse: (index: number) => void;
  timerOut: () => void;
}

export default function Question(props: QuestionProps) {
  const { model, onResponse, timerOut } = props;
  const question = model;

  const letters = ["A", "B", "C", "D"];

  const renderAnswers = () => {
    return question.answers.map((arrayAnswer, i) => {
      return (
        <Answer
          key={i}
          model={arrayAnswer}
          index={i}
          letter={letters[i]}
          backgroundColor="#00c853"
          onResponse={onResponse}
        />
      );
    });
  };

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      <Timer duration={10} timerOut={timerOut} />
      {renderAnswers()}
    </div>
  );
}
