import styles from "../styles/Question.module.css";
import QuestionModel from "../model/question";
import Statement from "./Statement";
import Answer from "./Answer";

interface QuestionProps {
  model: QuestionModel;
}

export default function Question(props: QuestionProps) {
  const { model } = props;
  const question = model;

  const renderAnswers = () => {
    return question.answers.map((arrayAnswer, i) => {
      return (
        <Answer
          model={arrayAnswer}
          index={i}
          letter="A"
          letterColor="#00c853"
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
