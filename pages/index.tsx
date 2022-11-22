import Question from "../components/Question";
import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";

export default function Home() {
  const questionTest = new QuestionModel(3, "Melhor time do rio?", [
    AnswerModel.wrong("madureira"),
    AnswerModel.wrong("botafogo"),
    AnswerModel.wrong("vasco"),
    AnswerModel.wrong("fluminense"),
    AnswerModel.correct("flamengo"),
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
