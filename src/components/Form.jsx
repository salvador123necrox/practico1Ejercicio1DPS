import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const products = [
    {
        name: 'Manzana',
        price: 0.25
    },
    {
        name: 'Uva',
        price: 2.00
    },
    {
        name: 'Aguacate',
        price: 0.50
    },
    {
        name: 'Guineo',
        price: 1
    },
    {
        name: 'Mandarina',
        price: 3
    },
    {
        name: 'Kiwi',
        price: 0.25
    },
    {
        name: 'Granada',
        price: 0.50
    },
    {
        name: 'Piña',
        price: 1.50
    },
    {
        name: 'Limones',
        price: 0.40
    },
    {
        name: 'Jocote',
        price: 0.05
    },

    
]

const Form = ({ productList, setProductList }) => {

    const productSelected = useRef();

    const handleClick = () => {
        const pos = productSelected.current.value;

        const exist = productList.findIndex( list => list.name === products[pos].name )

        if(exist === -1)
        {
            setProductList([ ...productList, { ...products[pos], cantidad: 1 } ]);
        }
        else
        {
            productList[exist].cantidad += 1;
            setProductList([...productList]); 
        }

    }

    return(
        <>
            <div className='container-fluid row mt-4'>
                <div className='col-8'>
                    <select className="form-select" name="list" id="list" defaultValue="-1" ref={ productSelected }>
                        <option value="-1" disabled>Seleccione un producto</option>
                        {
                            products.map( (product, index) => (
                                <option key={ index } value={ index }>{ product.name }</option>
                            ))
                        }
                    </select>
                </div>
                <button className='btn btn-outline-info col-4' onClick={ () => handleClick() }>Agregar</button>
            </div>
        </>
    );
}

export default Form;