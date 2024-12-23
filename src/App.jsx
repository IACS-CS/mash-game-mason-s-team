import { useState } from "react";
import "./App.css";
import { isReturnStatement } from "typescript";

const App = () => {

 //lists:
  const countriesGroupA = ["NETHERLANDS", "SENEGAL", "QATAR", "ECUADOR"];
  const countriesGroupB = ["ENGLAND", "IRAN", "UNITED STATES", "WALES"];

  {/* ChatGPT helped set up the grouping this way instead of having inputs for them */}
    // State to track the guessed letters for each country
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [guessedLettersB, setGuessedLettersB] = useState([]);

  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const[currentCountryIndexB, setCurrentCountryIndexdB] = useState(0);

  const [groupInput, setGroupInput] = useState("");
 
  // Function to check if the user has guessed all letters for the country
 
  const [page, setPage] = useState(1);
  
  // The console.log statement below will show you each time
  // the App renders.

  console.log('Rendering app!','page is', page);



//might delete this later.
  const onGroupItemInputChange = (e, index) => {
    const newInputs = [...groupInputs]; // Copy the current inputs array
    newInputs[index] = e.target.value;     // Update the value at the specific index
    setCategoryInputs(newInputs);          // Set the updated state
  };

  // render parts of our output...
  const renderGroupChooser = () => {
    if (page === 1) {
     // render the first page...
     const currentCountry = countriesGroupA[currentCountryIndex];
    
     const guessLetter = (ltr) => {
      if (ltr && !guessedLetters.includes(ltr)) {
        setGuessedLetters([...guessedLetters, ltr]); // Add the guessed letter to the list
      }
      setGroupInput(""); // Clear the input after guessing
    };

    const displayTarget = () => {
      let output = [];
      for (let ltr of currentCountry) {
        if (guessedLetters.includes(ltr)) {
          output.push(ltr);
        } else {
          output.push("_");
        }
      }
      return output.join(" "); 
    };

    const isCountryGuessed = () => {
      return currentCountry.split("").every((ltr) => guessedLetters.includes(ltr));
    };

    {/*ChatGPT helped me set this one up */}
  const nextCountry = () => {
    if (isCountryGuessed() && currentCountryIndex < countriesGroupA.length - 1) {
      setGuessedLetters([]); // Reset the guessed letters
      setCurrentCountryIndex(currentCountryIndex + 1); // Move to the next country
    }
  };

  return (
    <>
    <h2>Guess the countries for Group A of the 2022 World Cup!</h2>

    {/*ChatGPT helped me on this downwards */}
    <label>
        Guess a letter:
        <input
          type="text"
          //Got rid of the max length for this part
          value={groupInput} // Controlled input
          onChange={(e) => setGroupInput(e.target.value.toUpperCase())} // Update input value
        />
      </label>

      <button onClick={() => guessLetter(groupInput)}>Guess</button>

      <hr />

      {/* Show the current country with underscores for unguessed letters */}
      <h3>Country A:</h3>
      <div>{displayTarget()}</div>

      {/* Shows guessed letters for the current country */}
      <h4>Letters guessed for this country:</h4>
      {guessedLetters.map((letter, index) => (
        <span key={index}>{letter}, </span>
      ))}
      <hr />

      {isCountryGuessed() && (
        <div>
          <h3>Congratulations! You've guessed this country! {currentCountry}</h3>
          <button onClick={nextCountry}>Next Country</button>
        </div>
      )}
    </>
  )
  } else {
    return renderCongratulationsPage();
  }
}



const renderCongratulationsPage = () => {
  if (page === 2) {
   // render the first page...
   return (
   <>
    <h1>Congratulations!</h1>
    <h2>Would you like to guess the next group?</h2>
    <button onClick={()=>setPage(3)}>Next</button> 
    </>)
} else {
  return renderGroupBPage();
}
}


const renderGroupBPage = () => {
  if (page === 3) {

    const currentCountryB = countriesGroupB[currentCountryIndexB];

    const guessLetterB = (ltr) => {
      if (ltr && !guessedLettersB.includes(ltr)) {
        setGuessedLettersB([...guessedLettersB, ltr]); // Add the guessed letter to the list
      }
      setGroupInput(""); // Clear the input after guessing
    };

    const displayTargetB = () => {
      let output = [];
      for (let ltr of currentCountryB) {
        if (guessedLettersB.includes(ltr)) {
          output.push(ltr);
        } else {
          output.push("_");
        }
      }
      return output.join(" "); 
    };

    {/*ChatGPT help: creates a function that checks if the user has guessed all the letters for the country*/}
    const isCountryGuessed = () => {
      return currentCountryB.split("").every((ltr) => guessedLettersB.includes(ltr));
    };
  
    {/*ChatGPT helped me set this one up */}
    const nextCountry = () => {
      if (isCountryGuessed() && currentCountryIndexB < countriesGroupB.length - 1) {
        setGuessedLettersB([]); // Reset the guessed letters
        setCurrentCountryIndexB(currentCountryIndexB + 1); // Move to the next country
      }
    };


   return (
    <>
    <h2>Guess the countries for Group B of the 2022 World Cup!</h2>

    {/*ChatGPT on how to make an input */}
    <label>
        Guess a letter:
        <input
          type="text"
          maxLength={1}
          //I let the max length work for this part
          value={groupInput} // Controlled input
          onChange={(e) => setGroupInput(e.target.value.toUpperCase())} // Update input value
        />
      </label>

      <button onClick={() => guessLetterB(groupInput)}>Guess</button>


      <hr />

      <h3>Country B:</h3>
      <div>{displayTargetB()}</div>

      {/* Show guessed letters for the current country */}
      <h4>Letters guessed for this country:</h4>
      {guessedLettersB.map((letter, index) => (
        <span key={index}>{letter}, </span>
      ))}
      <hr />

      {/* Show a message if the country is fully guessed */}
      {isCountryGuessed() && (
        <div>
          <h3>Congratulations! You've guessed this country! {currentCountryB}</h3>
          <button onClick={nextCountry}>Next Country</button>
        </div>
      )}
    </>
   )
  
  } else {
    return (<p>?</p>)
  }
}

  return (
  <main>
    <h1>Welcome to the 2022 World Cup Team Guessing Game!</h1>
    <div className="col">
      {renderGroupChooser()}
    </div>    
  </main>
  );
};

export default App;