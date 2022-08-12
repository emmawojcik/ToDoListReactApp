import React, { useState } from 'react';
import './App.css';

function App() {

  let [toDoItems, updateList] = useState([]);
  let [itemToAdd, updateItemToAdd] = useState('');
  let myItems = [...toDoItems];

  // When the Add button is clicked, add the inputted item to myItems and update toDoItems state with myItems array
  const handleAddClick = () => {
    myItems.push(itemToAdd);
    updateList(myItems);
  }

  // When input field is changed, update itemToAdd state with value of input field (possible because it is passed event target)
  const handleInputChange = (event) => {
    updateItemToAdd(event.target.value);
  }

  return (
    <div>     
      <input
        type="text"
        id="listItem"
        name="listItem"
        onChange={handleInputChange}
        value={itemToAdd}
      />

      <button onClick={handleAddClick}>Add</button>
      <ListItemCard items={toDoItems} updateList={updateList} itemsCopy={myItems} />
      {/* {toDoItems.map((listItem, index) => {
        return(
          <h2 key={index}>{listItem}</h2>
        )
      })} */}
    </div>
  );
}

const ListItemCard = (props) => {

  const handleDeleteClick = (index) => {
    props.itemsCopy.splice(index, 1);
    props.updateList(props.itemsCopy);
  }

  const handleCompletedClick = () => {

  }

  return(
    <>
      {props.items.map((listItem, index) => {
        return(
          <div key={index}>
            <h2>{listItem}</h2>
            <button>Check</button>
            <button onClick={() => handleDeleteClick(index)}>Delete</button>
          </div>
        )
      })}
    </>
  )
}

export default App;
