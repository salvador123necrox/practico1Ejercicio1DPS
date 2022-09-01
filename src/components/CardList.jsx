import React from 'react';

const CardList = ({ productInfo, deleteProduct, index, updateCant }) => {
    return (
        <div className='d-flex justify-content-between border-bottom mt-3'>
            <div>
                <h5>{ productInfo.name }</h5>
                <h6>$ { (productInfo.price).toFixed(2) }</h6>
            </div>
            <div className='d-flex align-items-center justify-content-end'>
                <input className='form-control w-50' 
                    defaultValue={ productInfo.cantidad }
                    value = { productInfo.cantidad }
                    onChange = { (e) => updateCant(index, e.target.value === "" ? "1" : e.target.value )}
                    min={1} 
                    type="number" 
                    name="cant" id="cant" 
                />
                <button className='btn btn-danger mx-2' onClick={ () => deleteProduct(index) }>X</button>
            </div>
        </div>
    )
}

export default CardList;