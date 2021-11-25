import React from 'react';
import LinkItem from './LinkItem';
import './Links.css';

const Links = (props) => {
  // let  currentPage = 1;
  function deleteSelectedItem(deleteItemData){
    props.onRemoveItemFromList(deleteItemData)
  }
  function updateSelectedItem(rowItemData){
    props.onUpdateItemInList(rowItemData)
  }
  // function changePage(event){
  //   currentPage = event.target.value
  // }

    if (props.items.length === 0) {
      return <h2 >Found no expenses.</h2>;
    }
      return (
        <div className='links'>
          <ul>
            {props.items.sort((a, b) => (a.points < b.points) ? Number(props.order) : Number(props.order)*-1).map((link) => (
              <LinkItem
                key={link.id}
                item={link}
                onDeleteItem={deleteSelectedItem}
                onUpdateItem={updateSelectedItem}
              />
            ))}
          </ul>
        </div>

      );
}

export default Links;