import { useState } from 'react'
import './LinkItemForm.css'
const LinkItemForm = (props) => {
    const [inputName,setInputName] = useState('')
    const [inputAdress,setInputAdress] = useState('')

    function linkNameChanged(event){
        setInputName(event.target.value)
    }
    function linkAddressChanged(event){
        setInputAdress(event.target.value)
    }
    function submitFormData(event){
        event.preventDefault();
        const linkItemData = {
            id:Math.random(),
            points:0,
            name:inputName,
            address:inputAdress
        }
        props.onSaveNewItem(linkItemData)
        setInputName('')
        setInputAdress('')
    }
    return (
        
            <form onSubmit={submitFormData}>
                <div className="new-item__controls">
                <div className="new-item__control">
                        <label> Link Name </label>
                        <input type="text" value={inputName} onChange={linkNameChanged}/>
                    </div>
                    <div className="new-item__control">
                        <label> Link Address </label>
                        <input type="text" value={inputAdress} onChange={linkAddressChanged}/>
                    </div>
                </div>
                <div className="new-item__actions">
                    <button type="submit" > Add New Link Item</button>
                </div>
            </form>
        
    )
}

export default LinkItemForm;