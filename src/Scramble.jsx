import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const teams = [
    "Argentina",
    "Brazil",
    "France",
    "Germany",
    "Spain",
    "England",
    "Netherlands",
    "Portugal",
  ];

  const [scrambledTeam, setScrambledTeam] = useState("");
  const [originalTeam, setOriginalTeam] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");

  // Function to scramble the letters of a word
  const scrambleWord = (word) => {

    const letters = word.toUpperCase().split("");
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join("");
  };

  // Function to start a new game
  const startGame = () => {
    const randomTeam = teams[Math.floor(Math.random() * teams.length)];
    setOriginalTeam(randomTeam);
    setScrambledTeam(scrambleWord(randomTeam));
    setUserGuess("");
    setMessage("");
  };

  // Function to handle user's guess submission
  const handleGuess = () => {
    if (userGuess.toLowerCase() === originalTeam.toLowerCase()) {
      setMessage("Correct! Well done!");
    } else {
      setMessage(`Incorrect. The correct answer was ${originalTeam}.`);
    }
    setScrambledTeam("");
    setOriginalTeam("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Soccer World Cup Scramble Game</h1>
      {!scrambledTeam && (
        <button onClick={startGame} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Start Game
        </button>
      )}

      {scrambledTeam && (
        <div>
          <h2>Scrambled Team: {scrambledTeam}</h2>
          <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Your Guess"
            style={{ padding: "10px", fontSize: "16px", margin: "10px" }}
          />
          <button onClick={handleGuess} style={{ padding: "10px 20px", fontSize: "16px" }}>
            Submit Guess
          </button>
        </div>
      )}

      {message && <h3>{message}</h3>}
    </div>
  );
};

export default App;