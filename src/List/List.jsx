import React from "react";

const List = props => {
  const deleteitemfromlist = key => {
    const newList = props.itemList.filter(itemObj => {
      return itemObj.key !== key;
    });
    props.updateItemList(newList);
  };

  return (
    <div>
      {props.itemList.map(itemobj => {
        return (
          <div className="items">
            <div className="Item">
              <p>{itemobj.item}</p>
            </div>
            <span>
              <button
                className="edit"
                onClick={() => deleteitemfromlist(itemobj.key)}
              >
                delete
              </button>
              <button onClick={() => props.EditHandler(itemobj.key)}>
                edit
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
