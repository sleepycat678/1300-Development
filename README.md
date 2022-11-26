# Development

### Link to Deployed Website
https://sleepycat678.github.io/1300-Development/

### Goal and Value of the Application

The goal of this application is to build a online game store where users can sort games by IGN rating or by price and they can also filter games based on the developers and game genre. Users can easily add games to the shopping cart and increase/decrease the number or delete the game from the cart.

### Usability Principles Considered

1. The layout is simple and comprehensible at first sight. The application is on one page with three basic parts: the filter is on the left, the game list is in the middle, the shopping cart is on the right side. 

2. The filters and the buttons of the application are intuitive and provide quick feedback so that the users can easily learn how to use them.
3. The application allows users to reset filters and empty cart so they can easily revert to the beginning.

### Organization of Components

1. `App` is the main component, it contains all the other components: `Filters`, `GameItem`, `Cart`.
2. `Filters` is the component that represents the filters on the left. It contains three RadioGroup(imported from MUI): "Sort By", "Genre", "Developer".
3. `GameItem` is the component which displays the information (image, name, rating, genre, price, developer) and wraps them in a box. The application uses `GameItem` to build the game list in the middle of the page.
4. `Cart` is the component that represents the shopping cart on the right which displays the games, quantities and price in the cart. The users can also modify the quantity of the game or choose to delete the game from the cart.

### How Data is Passed Down Through Components

1. game-data.json file contains the specific data for the games and is imported as gameData in `App` .  `App` initializes states: sort, genre, developer, cart. No prop is passed in `App`.
2. sort, setSort, genre, setGenre, developer, setDeveloper are passed to `Filters`. I use set functions to change the values based on `e.target.value` . There is a `resetFilters` for resetting the filters to default setting.
3. game information and `addToCart` are passed to `GameItem` which displays the information. `addToCart` is used to add the item.name and item.price to the cart.
4. cart, setCart, addToCart are passed to `Cart`. ` setCart` is used to resertCart, removeItem, reduceItemQuantity. `addToCart` is used to increase the quantity of the item in cart.

### How the User Triggers State Changes

The users can trigger state changes in many ways:

1. The users can trigger state changes by clicking a radio button, which changes the state of sort, genre, or developer.
2. The users can trigger state changes by clicking "Reset Filters" or "Empty Cart" button, which resets the states to default setting.
3. The users can trigger state changes by clicking "Add to Cart" button, which adds the item.name and item.price to the cart.
4. The users can trigger state changes by clicking increase, decrease, or delete item button in the cart, which change the item.name and item.quantity of the cart state
