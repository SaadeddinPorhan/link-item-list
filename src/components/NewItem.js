import './NewItem.css'
import LinkItemForm from './LinkItemForm';
const NewItem = (props) => {
    function updateItemList(itemFormData){
        const newItemData = itemFormData
        props.onAddNewItem(newItemData)     
    }
    return (
        <div className="new-item">
            <LinkItemForm onSaveNewItem={updateItemList}/>
        </div>
    )
}

export default NewItem;