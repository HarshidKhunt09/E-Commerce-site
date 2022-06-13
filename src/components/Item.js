import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Item.css';

const Item = ({ item }) => {
  const { addItem } = useCart();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Card
        sx={{ maxWidth: 300 }}
        className='card'
        data-aos='fade-up'
        data-aos-offset='100'
      >
        <CardActionArea>
          <CardMedia
            component='img'
            height='200'
            image={item.img}
            alt='Mobile Phone'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {item.title}
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              $ {item.price}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to='./cart' style={{ textDecoration: 'none' }}>
            <Button size='medium' color='primary' onClick={() => addItem(item)}>
              Add to Cart
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Item;
