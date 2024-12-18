import { useState } from "react";
import "./App.css";
import { isReturnStatement } from "typescript";

const App = () => {

  // Note: this function runs once when the App starts up
  // and then again any piece of state 
  // changes!

  //Chat GPT help
  const groups = ["Letters for Group A", "Letters for Group B", "Letters for Group C", "Letters for Group D",]
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  //lists:
  const [group, setGroup] = useState('Letters for Group A');
  const [groupInputs, setGroupInputs] = useState(["", "", "", ""]);
  //const [groupInputs, setGroupInputs] = useState(["___________", "_______", "_______", "_____"]);
  // Chat GPT gave me this:   const [groupInputs, setGroupInputs] = useState([
//{word: "Netherlands", inputs: ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]}
//{word: "Ecuador", inputs: ["_", "_", "_", "_", "_", "_", "_"]}
//{word: "Senegal", inputs: ["_", "_", "_", "_", "_", "_", "_"]}
//{word: "Qatar", inputs: ["_", "_", "_", "_", "_"]}, but it doesn't work, for having a set of characters in each set.
 
  const [page, setPage] = useState(1);
  
  // The console.log statement below will show you each time
  // the App renders.

  console.log('Rendering app!','page is', page);


  // actions  
  const onNextGroup = () => {
    if (group === 'Letters for Group A') {
      setGroup('Letters for Group B');
    } else {
      setPage(3);
    }
  }

  const onGroupItemInputChange = (e, index) => {
    const newInputs = [...groupInputs]; // Copy the current inputs array
    newInputs[index] = e.target.value;     // Update the value at the specific index
    setGroupInputs(newInputs);          // Set the updated state
  };

  // render parts of our output...
  const renderGroupChooser = () => {
    if (page === 1) {
      // render the first page...
      return (<>
        <h1>Enter {group}!</h1>
        {/* Help from ChatGPT*/}
        {/* Render inputs for groupInputs */}
        <div>
          {groupInputs.map((value, index) => {
            return (
              <div key={index}>
                <label>
                  {index + 1}:{" "}
                  <input
                    type="text"
                    value={value} // controlled input
                    onChange={(e) => onGroupItemInputChange(e, index)} // handle input changes
                  />
                </label>
              </div>
            );
          })}
        </div>

        <button onClick={()=>setPage(2)}>Next</button>        
      </>)
    } else {
    return renderCongratulationsPage();
  }
}
//NOTE: Add a used letters page section at bottom right, that links it with guessed letter, probably a check mark to it.
//Having a hint for how many characters for the certain inputs might be useful to the user.

const renderCongratulationsPage = () => {
  if (page === 2) {
   // render the first page...
   return (
   <>
    <h1>Congratulations!</h1>
    <h2>Would you like to guess the next group?</h2>
    <button onClick={onNextGroup}>Next</button> 
    </>)
} else {
  return renderGroupBPage();
}
}


const renderGroupBPage = () => {
  if (page === 3) {
    return (<>
    <h1>Enter some letters!</h1>
    <button onClick={()=>setPage(4)}>Next</button>
    </>)
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