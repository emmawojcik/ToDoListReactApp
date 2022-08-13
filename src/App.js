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
    <div>     
      <input
        type="text"
        id="listItem"
        name="listItem"
        onChange={handleInputChange}
        value={{itemToAdd}.item}
      />

      <button onClick={handleAddClick}>Add</button>
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

  // Update list item completed property with value of true and update state
  const handleCompletedClick = (index) => {
    props.itemsCopy[index] = {item: props.itemsCopy[index].item, completed: true}
    props.updateList(props.itemsCopy);
  }

  return(
    <>
      {props.items.map((listItem, index) => {
        return(
          <div key={index}>
            {(listItem.completed)?
              <h2 className="strikethrough">{listItem.item}</h2> :
              <h2>{listItem.item}</h2>
            }
            <button onClick={() => handleCompletedClick(index)}>Complete</button>
            <button onClick={() => handleDeleteClick(index)}>Delete</button>
          </div>
        )
      })}
    </>
  )
}

export default App;