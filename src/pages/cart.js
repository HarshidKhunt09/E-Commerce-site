import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import './cart.css';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <div className='noCartMsg-Container'>
        <h1>Your Cart is Empty</h1>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button variant='contained'>Back to Home</Button>
        </Link>
      </div>
    );

  return (
    <>
      <div className='cartTotal'>
        <h3>
          Total Cart Items : [{totalItems}] <br />
          <br /> Cart Items : [{totalUniqueItems}]
        </h3>
      </div>
      <div className='table-container'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Items</TableCell>
                <TableCell align='right'>Price</TableCell>
                <TableCell align='right'>Quantity</TableCell>
                <TableCell align='right'>Remove Item</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow
                  key={item.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {item.title}
                  </TableCell>
                  <TableCell align='right'>${item.price}</TableCell>
                  <TableCell align='right'>
                    <Button
                      variant='outlined'
                      size='small'
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                    <Button variant='outlined' size='small'>
                      {item.quantity}
                    </Button>
                    <Button
                      variant='outlined'
                      size='small'
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </Button>
                  </TableCell>
                  <TableCell align='right'>
                    <DeleteIcon
                      style={{ color: 'red' }}
                      onClick={() => removeItem(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <h2>Total Price: ${cartTotal}</h2>
        </div>
        <div>
          <Link to='/' style={{ textDecoration: 'none', margin: '10px' }}>
            <Button variant='contained'>Add More Items</Button>
          </Link>
          <Button variant='contained' style={{ margin: '10px' }}>
            Buy Now
          </Button>
          <Button
            variant='contained'
            onClick={() => emptyCart()}
            style={{ margin: '10px' }}
          >
            Clear Cart
          </Button>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button variant='outlined' style={{ margin: '10px' }}>
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
