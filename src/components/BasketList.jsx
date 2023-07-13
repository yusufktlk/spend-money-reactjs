import React from 'react'

function BasketList({item,product}) {
  return (
    <div>
        {product.title} <span className='font-bold'>x</span> {item.amount}
    </div>
  )
}

export default BasketList