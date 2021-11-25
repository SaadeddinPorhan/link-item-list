import './LinkItem.css'
import {useState} from 'react';
import { HiMinusCircle } from "react-icons/hi";
import { RiArrowUpLine,RiArrowDownLine } from "react-icons/ri";

function LinkItem(props) {
    const [item,setItem] = useState(props.item)
    function upVoteClicked(){
        const itemIncreadPoint = {id:item.id,points:item.points+1,name:item.name,address:item.address}
        props.onUpdateItem(itemIncreadPoint)
        setItem(itemIncreadPoint)
    }
    function downVoteClicked(){
        const itemDecreasedPoint = {id:item.id,points:item.points-1,name:item.name,address:item.address}
        props.onUpdateItem(itemDecreasedPoint)
        setItem(itemDecreasedPoint)

    }
    function deleteItem(){
        const response = window.confirm("Do yo want to Remove " + item.name);
        if (response === true) {
            props.onDeleteItem(item)
          } 
    }
    return (
        
      <div className="link-item">
        <div className="link-item_point">
            <div><h2 >{item.points} Points</h2></div>
        </div>
        
        <div className="link-item_detail">
            <div className="link-item_description">
                <div className="link-item__name">{item.name}</div>
                <div> ({item.address})</div>
            </div>
            <div className="vote-buttons">
                <button className="upvote-button" onClick={upVoteClicked}>  <RiArrowUpLine /> Up Vote </button>
                <button className="downvote-button" onClick={downVoteClicked}>  <RiArrowDownLine  /> Down Vote </button>
            </div>
            
        </div>
        <div className="delete-button-main"><button onClick={deleteItem} className="delete-button"> <HiMinusCircle /></button></div>
      </div>
    );
  }
  
  export default LinkItem;