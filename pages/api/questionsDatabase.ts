import QuestionModel from "../../model/question";
import AnswerModel from "../../model/answer";

const questions: QuestionModel[] = [
  new QuestionModel(
    1,
    "Qual jogador que joga com a camisa '10' na seleção brasileira?",
    [
      AnswerModel.correct("Neymar"),
      AnswerModel.wrong("Vinicius Jr."),
      AnswerModel.wrong("Casimiro"),
      AnswerModel.wrong("Danilo"),
      AnswerModel.wrong("Daniel Alves"),
    ]
  ),
  new QuestionModel(
    2,
    "Complete a frase: 'O Brasil será ______ campeão se vencer a copa de 2022.'",
    [
      AnswerModel.correct("hexa"),
      AnswerModel.wrong("hepta"),
      AnswerModel.wrong("penta"),
      AnswerModel.wrong("tri"),
      AnswerModel.wrong("bi"),
    ]
  ),
  new QuestionModel(3, "Qual é o narrador de copa do mundo mais chato?", [
    AnswerModel.correct("Galvão Bueno"),
    AnswerModel.wrong("Casimiro"),
    AnswerModel.wrong("Gaules"),
    AnswerModel.wrong("tixinha"),
    AnswerModel.wrong("picanha"),
  ]),
  new QuestionModel(4, "Onde será sediada a copa do mundo de 2026?", [
    AnswerModel.correct("EUA, México,Canadá"),
    AnswerModel.wrong("EUA"),
    AnswerModel.wrong("Canadá"),
    AnswerModel.wrong("México"),
    AnswerModel.wrong("Nenhuma das alternativas"),
  ]),
];

export default questions;
