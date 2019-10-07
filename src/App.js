import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from "./components/ProductContext";
import CartContext from ",/components/CartContext";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		<div className="App">
         <ProductContext.Provider value={{ products, addItem}}>
			 <CartContext.Provider value={cart}>
			 <Navigation cart={cart} />
			    {/* Routes */}
			  <Route exact path="/" component={Products} />
	<Route exact path="cart" render={() =>  <ShoppingCart cart={cart} /> } />
			 </CartContext.Provider>
		 </ProductContext.Provider>
		</div>
	);
}

export default App;
