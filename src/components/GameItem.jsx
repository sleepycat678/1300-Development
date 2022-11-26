import "./GameItem.css";

export default function GameItem ({ game, onAddToCart }) {
    const { image, name, rating, genre, price, developer } = game;
     
    return (
        <div className="game-item">
            <img className="game-image" src={image} alt={name} />
            <div className="game-info">
                <h3>{name}</h3>
                <div className="game-category">
                    {/* <h3>{discount ? "discount" : ""}</h3> */}
                    <p>{`IGN Rating: ${rating}`}</p>
                    <p>{`Genre: ${genre}`}</p>
                    <p>{`Developer: ${developer}`}</p>
                </div>
                <div>
                    <p>{`$${price}`}</p>
                    <button className="add-to-cart" onClick={() => onAddToCart(name, price)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};