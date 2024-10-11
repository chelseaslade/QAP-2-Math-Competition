const express = require("express");
const { getQuestion, isCorrectAnswer } = require("./utils/mathUtilities");
const app = express();
const port = 3000;

let generateQuestion; //Global for access in both GET/POST
let leaderboard = [];
let streak = 0;
let highestStreak = 0;
let streakNotice = "";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static("public")); // To serve static files (e.g., CSS)

//Some routes required for full functionality are missing here. Only get routes should be required
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/quiz", (req, res) => {
  generateQuestion = getQuestion();
  res.render("quiz", { generateQuestion });
});

app.get("/leaderboards", (req, res) => {
  res.render("leaderboard", { leaderboard });
});

app.get("/quizcomplete", (req, res) => {
  res.render("quizcomplete");
});

//Handles quiz submissions.
app.post("/quiz", (req, res) => {
  const { answer } = req.body;
  console.log(`Answer: ${answer}`);

  //Check for correct answer
  const quizResult = isCorrectAnswer(generateQuestion, answer);
  if (quizResult) {
    streak += 1;
    highestStreak = streak;
    streakNotice = "Correct! Streak increased by 1.";
  } else {
    highestStreak = streak;
    leaderboard.push(highestStreak);
    console.log(leaderboard);
    streakNotice = `Sorry, wrong answer! You reached a streak of ${highestStreak}`;
    streak = 0;
  }

  //Render with result, return to quiz complete
  res.render("quizComplete", {
    quizResult,
    streak,
    streakNotice,
    highestStreak,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
