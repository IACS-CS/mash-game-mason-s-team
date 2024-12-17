import { useState } from "react";
import "./App.css";
import { isReturnStatement } from "typescript";

const App = () => {

  // Note: this function runs once when the App starts up
  // and then again any piece of state 
  // changes!
  
  // Example state and setter
  //lists:
  const [group, setGroup] = useState('Letters for Group A');
  const [groupInputs, setGroupInputs] = useState(["___________", "_______", "_______", "_____"]);
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
    setCategoryInputs(newInputs);          // Set the updated state
  };

  // render parts of our output...
  const renderGroupChooser = () => {
    if (page === 1) {
     // render the first page...
     //  I don't know if we should use onNextCategory instead of ()=setPage(2) thing.
     return (
     <>
      <h1>Enter {group}!</h1>
      {/* Help from ChatGPT*/}
      {groupInputs.map((input, index) => (
            <div key={index}>
              <input
                type="text"
                value={input}
                onChange={(e) => handleInputChange(e, index)} // Update the state when text changes
                maxLength={input.length}  // Limit input length to match dashes
                placeholder="Enter a letter" // IT DOESN'T WORK, CHECK IN WITH TEACHER.
              />
            </div>
          ))}

      <button onClick={()=>setPage(2)}>Next</button> 
      
      </>)
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