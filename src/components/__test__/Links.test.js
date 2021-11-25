import react from 'react';
import ReactDOM from 'react-dom'
import Links from './../Links'
import {render} from '@testing-library/react'

it('render Links form correctly', ()=>{
    const props = {
        orderBy :'1',
        itemList : [ {id:1,points:0,name:"Google",address:"www.google.com"}]
    }
    render(<Links items={props.itemList} ></Links>)
})