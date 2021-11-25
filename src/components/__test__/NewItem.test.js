import react from 'react';
import ReactDOM from 'react-dom'
import NewItem from './../NewItem'
import {render} from '@testing-library/react'

it('renders learn react link', () => {
  const div = document.createElement("div");
  ReactDOM.render(<NewItem/>,div)
});

it('render New Item form correctly', ()=>{
    render(<NewItem></NewItem>)
})