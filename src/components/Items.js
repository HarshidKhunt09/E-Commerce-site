import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { products } from '../db';
import Item from './Item';
import './Items.css';

const Items = () => {
  //const [items] = useState(products);
  const [noOfElement, setNoOfElement] = useState(4);
  const slice = products.slice(0, noOfElement);

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  return (
    <>
      <div id='main-container'>
        {slice.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
      <div id='loadMore'>
        <Button variant='contained' onClick={() => loadMore()}>
          Load More
        </Button>
      </div>
    </>
  );
};

export default Items;
