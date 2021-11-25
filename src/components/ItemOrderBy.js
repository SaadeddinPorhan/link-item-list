import React from 'react';

import './ItemOrderBy.css';

const ItemOrderBy = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeOrderBy(event.target.value);
  };

  return (
    <div className='link-list-order'>
      <div>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="1" > Most Voted </option>
          <option value="-1"> Less Voted </option>
        </select>
      </div>
    </div>
  );
};

export default ItemOrderBy;