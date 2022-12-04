import styles from "../styles/Question.module.css";
import QuestionModel from "../model/question";
import Statement from "./Statement";
import Answer from "./Answer";

interface QuestionProps {
  model: QuestionModel;
  onResponse: (index: number) => void;
}

export default function Question(props: QuestionProps) {
  const { model, onResponse } = props;
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
      {renderAnswers()}
    </div>
  );
}
