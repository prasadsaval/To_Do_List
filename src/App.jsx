import React, { useState } from "react";
// import Todo from "./Navbar/Todo";
// import Form from "./component/Form";
import List from "./List/List";
import "./List/list.css";
// import Todo from "./Navbar/Todo";

const App = () => {
  const [currentItems, setcurrentItems] = useState("");
  const [itemList, updateItemList] = useState([]);
  const [edit, SetEdit] = useState(0);

  

  const onchangeHandler = e => {
    // console.log("current value", e.target.value);
    setcurrentItems(e.target.value);
  };

  const addItemToList = e => {
    if (edit) {
      const editItem = itemList.find(value => value.key == edit);
      const updatedList = itemList.map(value =>
        value.key === editItem.key
          ? { key: value.key, item: currentItems }
          : { key: value.key, item: value.currentItems }
      );
      updateItemList(updatedList);
      SetEdit(0);
      SetEdit("");
      return;
    }
    if (currentItems !== "") {
      updateItemList([{ item: currentItems, key: Date.now() }, ...itemList]);
      // console.log("list items", itemList);
      setcurrentItems("");
    }
  };

  const EditHandler = key => {
    const EditCurrentItems = itemList.find(val => val.key == key);
    setcurrentItems(EditCurrentItems.item);
    SetEdit(key);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="Wrapper"> */}
          <h2>DAILY LIST</h2>
          <div className="Input-Wrapper">
            
              <input value={currentItems} onChange={onchangeHandler} />
           
            {/* <div className="button2"> */}
              <button onClick={addItemToList}>{edit ? "edit" : "Go"}</button>
            {/* </div> */}
          </div>
          <List
            itemList={itemList}
            updateItemList={updateItemList}
            EditHandler={EditHandler}
          />
        {/* </div> */}
      </header>
    </div>
  );
};

export default App;
