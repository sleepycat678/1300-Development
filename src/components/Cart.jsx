import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import "./Cart.css";

export default function Cart ({ cart, setCart, addToCart }) {
    const resetCart = () => {
        setCart([]);
    }

    const removeItem = (name) => {
        setCart(cart.filter((item) => item.name !== name));
    }

    const reduceItemQuantity = (name) => {
        if (cart.find((item) => item.name === name && item.quantity > 1)) {
            setCart(
                cart.map((item) => {
                    if (item.name === name && item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                })
            );
        } else {
            removeItem(name);
        } 
    }

    return (
        <div className="cart">
            {/* <h2>Cart</h2> */}
            <ShoppingCartIcon className="cart-icon" fontSize="large"/>
            {cart.length === 0 ? 
                <div>
                <h3 className="empty-cart">Your cart is empty</h3>
                </div>
                :
                <div>
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div className="cart-item" key={index}>
                                <p>{`${item.quantity} x ${item.name} \u00A0$${(item.price * item.quantity).toFixed(2)}`}</p>
                                <div className="cart-item-buttons">
                                    <div className='cart-button-icon' onClick={() => reduceItemQuantity(item.name)}>
                                        <RemoveIcon />
                                    </div>
                                    <div className='cart-button-icon' onClick={() => addToCart(item.name, item.price)}>
                                        <AddIcon />
                                    </div>
                                    <div className='cart-button-icon' onClick={() => removeItem(item.name)}>
                                        <DeleteIcon />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-total">
                        <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
                    </div>
                </div>
            }

            <button className="reset-cart" onClick={resetCart}>Empty Cart</button>
        </div> 
    );
};