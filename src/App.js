import './App.css';
import Links from './components/Links';
import NewItem from './components/NewItem';
import { useState } from 'react'
import { FaPlus,FaArrowLeft } from 'react-icons/fa';
import ItemOrderBy from './components/ItemOrderBy';

const initItemList = [
  {id:1,points:0,name:"Google",address:"www.google.com"},
  {id:2,points:0,name:"Yahoo",address:"www.yahoo.com"},
  {id:3,points:0,name:"Facebook",address:"www.facebook.com"},
  {id:4,points:0,name:"Youtube",address:"www.youtube.com"}
]
function App() {
  const [orderBy, setOrderBy] = useState('1');
  const [isInsertPage,setInsertPageFlag] = useState(false)
  const [linkItemList,setItemList] = useState(initItemList)
  function addNewLinkItem(newItemData){
    setItemList((prevItemList) => {
      return [...prevItemList,newItemData]
    })
    setInsertPageFlag(false)
    alert(newItemData.name + " added.")
  }
  function removeSelectedItem(removedData){
    setItemList((prevItemList) => {
      const updatedList = prevItemList.filter((item) => item.id !== removedData.id);
      return updatedList
    })
    alert(removedData.name + " removed.")

  }
  function insertItemClicked(){
    setInsertPageFlag(true)
  }
  
  function returnClicked(){
    setInsertPageFlag(false)
  }
  function updateSelectedItem(updatedData){
 
    setItemList((prevItemList) => {
      const updatedList = prevItemList.filter((item) => item.id !== updatedData.id);
      return  [...updatedList,updatedData]
    })
  }
  const orderByChangeHandler = (newOrder) => {
    setOrderBy(newOrder);
  };
  if (isInsertPage){
    return (
      <div className="App">
      <button className="return-button" onClick={returnClicked}> <FaArrowLeft /> Return to List Menu</button>
        <NewItem onAddNewItem={addNewLinkItem} ></NewItem>
      </div>
    );
  }
  return (
    <div className="App">
      <button className="submit-button" onClick={insertItemClicked}>
         <div className="button-main">
          <div className="icon-main">
            <FaPlus className="icon-plus" />
          </div> 
          <div >
            <i className="button-text"> SUBMIT A LINK </i>
          </div>
         </div>
         </button>
         <ItemOrderBy
         className="dropdown"
          selected={orderBy}
          onChangeOrderBy={orderByChangeHandler}
        />
      <Links items={linkItemList} order={orderBy} onRemoveItemFromList={removeSelectedItem}  onUpdateItemInList={updateSelectedItem}></Links>
    </div>
  );
}

export default App;
