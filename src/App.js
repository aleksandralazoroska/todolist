import React from 'react';
import './App.css';
import products from './components/vsschoolProducts.js';
import Products from './components/Products.js';

function App() {
    const response = products.map(function(product) {
        return (
            <Products 
                key={product.id}
                name={product.name} 
                price={product.price} 
                description={product.description}
            /> 
        )
    })

    return (
        <div>
            {response}
        </div>
    )      
}

export default App;


