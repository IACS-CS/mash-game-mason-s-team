import { useState } from "react";
import "./App.css";

const App = () => {

  // Note: this function runs once when the App starts up
  // and then again any piece of state 
  // changes!
  //lists:
  const groups = ["Group A", "Group B", "Group C", "Group D"]
  // Example state and setter
  const [toggle,setToggle] = useState(true);//Get rid of this later
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  // The console.log statement below will show you each time
  // the App renders.
  const group = groups[currentGroupIndex]
  const [groupInputs,setGroupInputs] = useState(["___________","_______","_______","_____"]);
  const [allInputs,setAllInputs] = useState([]);
  const [page,setPage] = useState(true);

  console.log('Rendering app!','page is', page);


  // actions  

  // render parts of our output...
  const renderLightSwitch = () => {
    if (toggle) {
      return <div>🟢⚡✅ We are on </div>
    } else {
      return <div>🔴🔕❌ We are off :-(</div>
    }
  }

  return (
  <main>
    <h1>Welcome to the 2022 World Cup Team Guessing Game!</h1>
    <h2>Group A</h2>
    <div className="col">
      <button onClick={()=>setToggle(!toggle)}>Next</button>
      <div>
        {renderLightSwitch()}
      </div>
    </div>    
  </main>
  );
};

export default App;