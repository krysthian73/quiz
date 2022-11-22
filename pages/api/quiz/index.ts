import questions from "../questionsDatabase";

export default (request, response) => {
  response.status(200).json(questions.map((quest) => quest.id));
};
