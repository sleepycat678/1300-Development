import './App.css';
import { useState } from "react";
import gameData from "./assets/game-data.json";
import GameItem from "./components/GameItem";
import Filters from "./components/Filters";
import Cart from "./components/Cart";

// this makes the image URLs work
gameData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [sort, setSort] = useState("");
  const [genre, setGenre] = useState("");
  const [developer, setDeveloper] = useState("");

  const [cart, setCart] = useState([]);

  // const resetFilters = () => {
  //   setSort("");
  //   setGenre("");
  //   setDeveloper("");
  // };

  // filter the games based on the selected filters
  const filteredGames = gameData.filter((item) => {
    if (genre.length === 0) {
      return true;
    } else {
      return item.genre === genre;
    }
  }).filter((item) => {
    if (developer.length === 0) {
      return true;
    } else {
      return item.developer === developer;
    }
  });

  const sortedGames = filteredGames.sort((a, b) => {
    if (sort === "price") {
      return a.price - b.price; // ascending order
    } else if (sort === "ign rating") {
      return b.rating - a.rating; // descending order
    } else {
      return 0;
    }
  });

  const addToCart = (name, price) => {
    if (cart.find((item) => item.name === name)) {
      // if the game is already in the cart, increase the quantity
      setCart(
        cart.map((item) => {
          if (item.name === name) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }));
    } else {
      // if the game is not in the cart, add it
      setCart([...cart, { name, price, quantity: 1 }]);
    }
    // setCart([...cart, {name, price}]);
  };

  return (
    <div className="App">
      {/* <div className="header-icon">
        <img src="images/video-game-icon.png" alt="game icon" width="105px"/>
      </div> */}
      <h1 className="header">Game Store</h1>

      <div className="main">
        <div className="filter">
          <Filters 
            sort={sort}
            setSort={setSort}
            genre={genre}
            setGenre={setGenre}
            developer={developer}
            setDeveloper={setDeveloper}  
          />
        </div>
          
        <div className="game-list">
          {/* {gameData.map((item, index) => (
            <GameItem key={index} game={item} setCart={setCart}/>
          ))} */}
          {sortedGames.map((item, index) => (
            <GameItem key={index} game={item} onAddToCart={addToCart}/>
          ))}
        </div>

        <div className="aggregator">
            <Cart cart={cart} setCart={setCart} addToCart={addToCart}/>
        </div>
      </div>
      

    </div>
  );
}

export default App;
