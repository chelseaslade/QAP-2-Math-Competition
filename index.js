const express = require("express");
const { getQuestion, isCorrectAnswer } = require("./utils/mathUtilities");
const app = express();
const port = 3000;

//Globals
let generateQuestion; //Global for access in both GET/POST
let leaderboard = [];
let streak = 0;
let highestStreak = 0;
let streakNotice = "";
let leaderNames = [];

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

app.get("/leaderboard", (req, res) => {
  res.render("leaderboard", { leaderboard, leaderNames });
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

  //If question is correct:
  if (quizResult) {
    streak += 1;
    highestStreak = streak;
    streakNotice = "Correct! Streak increased by 1.";
  }

  //If question is incorrect:
  else {
    //Scoreboard streak reached, reset question streak to 0 for new run
    highestStreak = streak;
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

//Handle leaderboard name submission + pushing to leaderboard array
app.post("/leaderboard", (req, res) => {
  const { name } = req.body;

  leaderboard.push({ name, highestStreak });
  //Sort by highest to lowest streak
  leaderboard.sort((a, b) => b.highestStreak - a.highestStreak);
  //Only select first 10 streaks
  leaderboard = leaderboard.slice(0, 10);

  //Redirect to leaderboard
  res.redirect("/leaderboard");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
