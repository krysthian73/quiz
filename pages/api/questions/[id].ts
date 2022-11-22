import questions from "../questionsDatabase";

export default (request, response) => {
  const id = +request.query.id;

  const foundedQuestion = questions.filter((quest) => quest.id === id);

  if (foundedQuestion.length === 1) {
    response.status(200).json(foundedQuestion[0].shuffleAnswers().toObject());
  }
  response.status(204).send();
};
