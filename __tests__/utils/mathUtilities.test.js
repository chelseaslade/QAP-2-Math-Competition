const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

//Test for generating a question
// describe("Tests for getQuestion", () => {
//   test("Function output", () => {
//     expect();
//   });
// });

//Test for correct & incorrect answers
describe("Tests for isCorrectAnswer", () => {
  test("Returns true for correct answer", () => {
    const question = { correctAnswer: 5 };
    const answer = 5;
    expect(isCorrectAnswer(question, answer)).toBe(true);
  });

  test("Return false for incorrect answer", () => {
    const question = { correctAnswer: 5 };
    const answer = 3;
    expect(isCorrectAnswer(question, answer)).toBe(false);
  });
});
