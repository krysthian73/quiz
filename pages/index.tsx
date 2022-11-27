import Question from "../components/Question";
import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";

export default function Home() {
  const questionTest = new QuestionModel(3, "Melhor time do rio?", [
    AnswerModel.wrong("Botafogo"),
    AnswerModel.wrong("Vasco"),
    AnswerModel.wrong("Fluminense"),
    AnswerModel.correct("Flamengo"),
  ]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Question model={questionTest} />
    </div>
  );
}
