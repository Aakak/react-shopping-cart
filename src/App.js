import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext  from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = id => {
		const deleteCartItem = cart.filter(item => item.id !== id);
		setCart([...deleteCartItem]);
   };

	return (
		<div className="App">
         <ProductContext.Provider value={{ addItem, products}}>
			 <CartContext.Provider value={{cart, removeItem}}>
			 	<Navigation cart={cart} />
			  	<Route exact path="/" component={Products} />
			  	<Route exact path="/cart" component={ShoppingCart} />
			 </CartContext.Provider>
		 </ProductContext.Provider>
		</div>
	);
}

export default App;
