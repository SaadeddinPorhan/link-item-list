import react from 'react';
import ReactDOM from 'react-dom'
import ItemOrderBy from './../ItemOrderBy'
import {render} from '@testing-library/react'

it('render Links form correctly', ()=>{
    const props = {
       orderby:'1'
    }
    render(<ItemOrderBy  selected={props.orderby} />)
})