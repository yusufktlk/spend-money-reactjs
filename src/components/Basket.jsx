import React from 'react'
import BasketList from './BasketList'

function Basket({basket,products,total}) {
 
  return (
    <div>
        {basket.map(item => (
                <BasketList total={total} item={item} product={products.find(product => product.id === item.id)} />
        ))} 
        
        <h1 className='mt-5 text-4xl text-red-600'>Total: {new Intl.NumberFormat().format(total)}</h1>
    </div>
  )
}

export default Basket
