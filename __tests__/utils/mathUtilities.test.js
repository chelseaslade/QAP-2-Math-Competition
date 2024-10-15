const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

//Test for generating a question
describe("Tests for getQuestion", () => {
  test("Ensure operator is one of symbols in list", () => {
    const result = getQuestion();
    const operator = result.question.split(" ")[1];

    expect(["+", "-", "*", "/"]).toContain(operator);
  });

  test("Check that correctAnswer is result of correctAnswer calculation", () => {
    const result = getQuestion();
    const [x, symbol, y] = result.question.split(" ");
    const correctAnswer = result.correctAnswer;

    let expectedAnswer = "";
    switch (symbol) {
      case "+":
        expectedAnswer = parseInt(x) + parseInt(y);
        break;
      case "-":
        expectedAnswer = parseInt(x) - parseInt(y);
        break;
      case "*":
        expectedAnswer = parseInt(x) * parseInt(y);
        break;
      case "/":
        expectedAnswer = parseInt(x) / parseInt(y);
        break;
    }
    expect(correctAnswer).toBe(expectedAnswer);
  });
});

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
