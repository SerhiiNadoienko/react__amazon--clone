import React from 'react';
import { Product } from '../.';
import './Home.css';
const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/71kce2wow7L._SX3000_.jpg"
        alt="banner"
      />
      <div className="home__row">
        <Product
          id={'1212'}
          title={'BISSELL SpotClean Pet Pro Portable Carpet Cleaner, 2458, Grapevine Purple, Black'}
          price={119.99}
          rating={5}
          image={'https://m.media-amazon.com/images/I/51Hbmqz3poL._AC_SY230_.jpg'}
        />
        <Product
          id={'1212'}
          title={
            'LG 32UL950-W 32" Class Ultrafine 4K UHD LED Monitor with Thunderbolt 3 Connectivity Silver (31.5" Display)name of the name'
          }
          price={699.99}
          rating={5}
          image={'https://m.media-amazon.com/images/I/41q9KdrsPaL._AC_SY200_.jpg'}
        />
      </div>
      <div className="home__row">
        <Product
          id={'1212'}
          title={
            'Prominence Home 80029-01 Alvina Led Globe Light Hugger/Low Profile Ceiling Fan, 42 inches, Satin Nickel'
          }
          price={53.12}
          rating={4}
          image={'https://m.media-amazon.com/images/I/41haf8PUyPL._AC_SY200_.jpg'}
        />{' '}
        <Product
          id={'1212'}
          title={
            'Brightup Beard Trimmer for Men - 19 Piece Beard Trimming Kit with Hair Clippers, Electric Razor'
          }
          price={35.99}
          rating={5}
          image={'https://m.media-amazon.com/images/I/71VMAGbRLfL._AC_UL320_.jpg'}
        />{' '}
        <Product
          id={'1212'}
          title={
            'Fast Wireless Charger, 10W Max Wireless Charging Pad for iPhone 13/13 Pro/13 Pro Max/13'
          }
          price={17.99}
          rating={4}
          image={'https://m.media-amazon.com/images/I/41+fLpgHJtL._AC_UF226,226_FMjpg_.jpg'}
        />
      </div>
      <div className="home__row">
        <Product
          id={'1212'}
          title={
            'Coolife Luggage 3 Piece Set Suitcase Spinner Hardshell Lightweight TSA Lock 4 Piece Set'
          }
          price={170.99}
          rating={5}
          image={'https://m.media-amazon.com/images/I/514TNyuuIfL._AC_UF226,226_FMjpg_.jpg'}
        />
      </div>
    </div>
  );
};

export default Home;
