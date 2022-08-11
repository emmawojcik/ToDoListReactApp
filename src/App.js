import React, { useState } from 'react';
import './App.css';

function App() {

  let [toDoItems, updateList] = useState([]);
  let [itemToAdd, updateItemToAdd] = useState('');
  let myItems = [...toDoItems];

  // When the Add button is clicked, add the inputted item to myItems and update toDoItems state with myItems array
  const handleClick = () => {
    myItems.push(itemToAdd);
    updateList(myItems);
  }

  // When input field is changed, update itemToAdd state with value of input field (possible because it is passed event target)
  const handleChange = (event) => {
    updateItemToAdd(event.target.value);
  }

  return (
    <div>     
      <input
        type="text"
        id="listItem"
        name="listItem"
        onChange={handleChange}
        value={itemToAdd}
      />

      <button onClick={handleClick}>Add</button>
      
      {/* Each item in toDoItems is displayed */}
      {toDoItems.map((listItem, index) => {
        return(
          <h2 key={index}>{listItem}</h2>
        )
      })}
    </div>
  );
}

export default App;
