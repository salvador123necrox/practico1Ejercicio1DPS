import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import CardList from "./components/CardList";
import { useEffect } from 'react';

const App = () => {
  const [ productList, setProductList ] = useState([]);
  const [ total, setTotal ] = useState(0);

  useEffect( () => {
    const totalPrice = () => {
      const subtotal = productList.map( (product) => product.price * product.cantidad );
  
      var total = 0;
      
      subtotal.forEach( sub => {
        total = total + sub;
      } );
  
      setTotal(total);
  
    }

    totalPrice();
    console.log(productList);
  }, [productList])

  const deleteProduct = (i) => {
    const list = productList;
    list.splice(i, 1);
    setProductList([...list]);
  }

  const updateCant = (i, newCant) => {
    const list = productList;
    list[i].cantidad = Number(newCant);
    setProductList([ ...list ]);
  }

  return (
    <div className='container mt-5'>
        <h1 className='text-center'>Lista de Compras</h1>
        <Form productList = { productList } setProductList = { setProductList } />

        <div className='mt-4'>
          {
            productList.map( (element, index) => (
              <CardList 
                key={ index }
                index = { index }
                productInfo={ element }
                deleteProduct = { deleteProduct }
                updateCant = { updateCant }
              />
            ))
          }
        </div>
        <div className = 'mt-3'>
          <h4 className = 'text-end'>Total: ${ (total).toFixed(2) } </h4>
        </div>
    </div>
  );
}

export default App;
