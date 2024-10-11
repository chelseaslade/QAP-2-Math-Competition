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

  return { question };
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 *
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(question, answer) {
  return false;
}

module.exports = {
  getQuestion,
  isCorrectAnswer,
};
