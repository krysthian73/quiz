import { shuffle } from "../functions/shuffle";
import AnswerModel from "./answer";

export default class QuestionModel {
  // The "#" means the attribute is private ES6
  #id: number;
  #statement: string;
  #answers: AnswerModel[];
  #isCorrect: boolean;

  constructor(
    id: number,
    statement: string,
    answers: AnswerModel[],
    isCorrect = false
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#answers = answers;
    this.#isCorrect = isCorrect;
  }

  get id() {
    return this.#id;
  }

  get statement() {
    return this.#statement;
  }

  get answers() {
    return this.#answers;
  }

  get isCorrect() {
    return this.#isCorrect;
  }

  get notAnswered() {
    return !this.answered;
  }

  get answered() {
    for (const answer of this.#answers) {
      if (answer.revealed) return true;
    }
    return false;
  }

  answering(index: number): QuestionModel {
    const correct = this.#answers[index]?.answerIsCorrect;
    const analyzingAnswers = this.#answers.map((arrayAnswer, i) => {
      const selectedAnswer = index === i;
      const showAnswer = selectedAnswer || arrayAnswer.answerIsCorrect;
      return showAnswer ? arrayAnswer.show() : arrayAnswer;
    });
    return new QuestionModel(
      this.id,
      this.statement,
      analyzingAnswers,
      correct
    );
  }

  shuffleAnswers(): QuestionModel {
    let scrambledAnswers = shuffle(this.#answers);
    return new QuestionModel(
      this.#id,
      this.#statement,
      scrambledAnswers,
      this.#isCorrect
    );
  }

  toObject() {
    return {
      id: this.#id,
      isCorrect: this.#isCorrect,
      answered: this.answered,
      statement: this.#statement,
      answers: this.#answers.map((res) => res.toObject()),
    };
  }
}
