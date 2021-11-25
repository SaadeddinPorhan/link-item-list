import react from 'react';
import ReactDOM from 'react-dom'
import LinkItem from './../LinkItem'
import {render} from '@testing-library/react'

it('render Links form correctly', ()=>{
    const props = {
        link:  {id:1,points:0,name:"Google",address:"www.google.com"}
    }
    render(<LinkItem  key={props.link.id} item={props.link}/>)
})