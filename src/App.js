import React, { useState } from 'react';
import './App.css';

function App() {

  let [toDoItems, updateList] = useState([]);
  let [itemToAdd, updateItemToAdd] = useState({item: '', completed: false});
  let myItems = [...toDoItems];

  // When the Add button is clicked, add the inputted item to myItems and update toDoItems state with myItems array
  const handleAddClick = () => {
    myItems.push(itemToAdd);
    updateList(myItems);
  }

  // When input field is changed, update itemToAdd state with value of input field (possible because it is passed event target)
  const handleInputChange = (event) => {
    updateItemToAdd({item: event.target.value, completed: false});
  }

  return (
    <div id="outerDiv">
      <h1>Tasks</h1>
      <div id='inputDiv'>
        <input
          type="text"
          id="listItem"
          name="listItem"
          onChange={handleInputChange}
          value={{itemToAdd}.item}
          placeholder= "Add a task"
        />
        <button onClick={handleAddClick}>+</button>
      </div>     
      <ListItemCard items={toDoItems} updateList={updateList} itemsCopy={myItems} />
    </div>      
  );
}

const ListItemCard = (props) => {

  // Remove item at given index from array and update state 
  const handleDeleteClick = (index) => {
    props.itemsCopy.splice(index, 1);
    props.updateList(props.itemsCopy);
  }

  // Change list item completed property to opposite boolean value and update the state
  const handleCompletedClick = (index) => {
    let currentCompletedBool = props.itemsCopy[index].completed
    props.itemsCopy[index] = {item: props.itemsCopy[index].item, completed: !currentCompletedBool}
    props.updateList(props.itemsCopy);
  }

  return(
    <>
      {props.items.map((listItem, index) => {
        return(
          <div id="toDoItem" key={index}>
            {(listItem.completed)?
              <h3 id="completed">{listItem.item}</h3> :
              <h3 id="uncompleted">{listItem.item}</h3>
            }
            <div id="listButtons">
              <button id="completeButton" onClick={() => handleCompletedClick(index)}>✓</button>
              <button id="deleteButton" onClick={() => handleDeleteClick(index)}>X</button>            
            </div>

          </div>
        )
      })}
    </>
  )
}

export default App;