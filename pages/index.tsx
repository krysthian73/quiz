import { useState } from "react";
import Question from "../components/Question";
import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";

const questionMock = new QuestionModel(3, "Melhor time do rio?", [
  AnswerModel.wrong("Botafogo"),
  AnswerModel.wrong("Vasco"),
  AnswerModel.wrong("Fluminense"),
  AnswerModel.correct("Flamengo"),
]);

export default function Home() {
  const [question, setQuestion] = useState(questionMock);

  const onResponse = (index: number) => setQuestion(question.answering(index));

  const timerOut = () => {
    if (question.notAnswered) setQuestion(question.answering(-1));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Question
        model={question}
        onResponse={onResponse}
        timeToAnswer={5}
        timerOut={timerOut}
      />
    </div>
  );
}
