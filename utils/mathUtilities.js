/**
 * Gets a random multiplication, division, subtraction or addition question
 *
 * @returns {} The randomly generated math question
 */

function getQuestion() {
  let decimalCheck = false;

  while (decimalCheck == false) {
    const x = Math.floor(Math.random() * (50 - 1) + 1);
    const y = Math.floor(Math.random() * (10 - 1) + 1);

    const symbol = ["+", "-", "*", "/"];

    const randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];

    const question = `${x} ${randomSymbol} ${y}`;

    let correctAnswer = "";

    if (randomSymbol == "+") {
      correctAnswer = x + y;
      decimalCheck = true;
    } else if (randomSymbol == "-") {
      correctAnswer = x - y;
      decimalCheck = true;
    } else if (randomSymbol == "*") {
      correctAnswer = x * y;
      decimalCheck = true;
    } else {
      correctAnswer = x / y;

      //Check for decimal in answer, regenerate question if so
      if (correctAnswer - Math.floor(correctAnswer) != 0) {
        continue;
      }
    }

    console.log(`Question: ${question}`);
    console.log(`Correct Answer: ${correctAnswer}`);
    return { question, correctAnswer };
  }
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 *
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */

function isCorrectAnswer(question, answer) {
  let increaseStreak = false;

  if (question.correctAnswer == answer) {
    console.log("Well done, correct answer!");
    increaseStreak = true;
  } else {
    console.log("Sorry, wrong answer!");
  }

  return increaseStreak;
}

module.exports = {
  getQuestion,
  isCorrectAnswer,
};
