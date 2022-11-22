export default class AnswerModel {
  #value: string;
  #answerIsCorret: boolean;
  #revealed: boolean;

  constructor(value: string, answerIsCorret: boolean, revealed = false) {
    this.#value = value;
    this.#answerIsCorret = answerIsCorret;
    this.#revealed = revealed;
  }

  static correct(value: string) {
    return new AnswerModel(value, true);
  }
  static wrong(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get answerIsCorrect() {
    return this.#answerIsCorret;
  }

  get revealed() {
    return this.#revealed;
  }

  show() {
    return new AnswerModel(this.#value, this.#answerIsCorret, true);
  }

  toObject() {
    return {
      value: this.#value,
      answerIsCorret: this.#answerIsCorret,
      revealed: this.#revealed,
    };
  }
}
