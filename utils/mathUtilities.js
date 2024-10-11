/**
 * Gets a random multiplication, division, subtraction or addition question
 *
 * @returns {} The randomly generated math question
 */

function getQuestion() {
  const x = Math.floor(Math.random() * (50 - 1) + 1);
  const y = Math.floor(Math.random() * (10 - 1) + 1);

  const symbol = ["+", "-", "*", "/"];
  const randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];

  const question = `${x} ${randomSymbol} ${y}`;

  let correctAnswer = "";

  if (randomSymbol == "+") {
    correctAnswer = x + y;
  } else if (randomSymbol == "-") {
    correctAnswer = x - y;
  } else if (randomSymbol == "*") {
    correctAnswer = x * y;
  } else {
    correctAnswer = x / y;
  }

  console.log(question);
  console.log(correctAnswer);
  return { question, correctAnswer };
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 *
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */

function isCorrectAnswer(question, answer) {
  console.log(question);
  if (question.correctAnswer == answer) {
    console.log("Well done, correct answer!");
  } else {
    console.log("Sorry, wrong answer!");
  }
}

module.exports = {
  getQuestion,
  isCorrectAnswer,
};
