import react from 'react';
import ReactDOM from 'react-dom'
import LinkItemForm from './../LinkItemForm'
import {render} from '@testing-library/react'

it('render Links form correctly', ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<LinkItemForm/>,div)
})