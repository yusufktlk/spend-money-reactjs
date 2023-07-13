import React, { useState } from 'react'

function Products({product, basket, setBasket,money, total}) {
    const [amount, setAmount] = useState(0)

    const basketValue = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const check = basket.find(item => item.id === product.id)

        if (check) {
            check.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id),check])
            console.log(basket)
        } else{
            setBasket([...basket,{
                id: product.id,
                amount:1
            }])
        }}
    
    const removeBasket = () =>{
        const check = basket.find(item => item.id === product.id)
        check.amount -= 1
        if(check.amount === 0) {
            setBasket([...basket.filter(item => item.id !== product.id)])
        }else {
            setBasket([...basket.filter(item => item.id !== product.id), check])
        }
    }



  return (
    <div className=' bg-black border-2 border-white  text-white h-96 w-96 w mb-0  text-center rounded-xl  '>
        <img src={product.img} className='rounded-xl w-96 h-96 max-h-52' />
        <h1 className='text-3xl font-bold mt-4'>{product.title}</h1>
        <p className='text-3xl text-pink-300'>${new Intl.NumberFormat().format(product.price)}</p>
        <div className=' flex flex-row  justify-around mt-5  '>
            <button disabled={!basketValue} onClick={removeBasket} className='bg-pink-400 rounded text-black p-1 mt-1  w-24 text-2xl font-bold'>Sell</button>
            <p className='mt-2 text-3xl'>{basketValue ? basketValue.amount : 0}</p>
            <button disabled={product.price + total > money} onClick={addBasket} className='bg-pink-400 mt-1 rounded text-black p-1 w-24 text-2xl font-bold'>Buy</button>
        </div>
    </div>
  )
}

export default Products