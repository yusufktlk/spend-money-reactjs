import { useEffect, useState } from 'react'
import Header from './components/Header'
import products from './components/products.json'
import Products from './components/Products'
import Basket from './components/Basket'
import './App.css'

function App() {
  
  const [money,setMoney] = useState(217000000000)
  const [basket, setBasket] = useState([])
  const [total,setTotal] = useState(0)

  useEffect(() => {
    setTotal(basket.reduce((acc, item) =>{
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    },0)
   )
  }, [basket])

  return (
    <>
    <Header money={money} total={total} />
    <div className='flex flex-wrap mt-12 justify-center'>
     {
      products.map((product,key) => (
        <div key={key} className='m-5 flex flex-col' id='myid'>
          <Products product={product} basket={basket} setBasket={setBasket} money={money} total={total}  />
        </div>
      ))
     }
    </div>

     <h1 className='text-center text-5xl mt-3 font-bold'>Receipt</h1>
    <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded mb-7 dark:bg-pink-400' />

   <div className='text-3xl text-center'>
       <Basket products={products} basket={basket} total={total} />
   </div>
    
    </>
  )
}

export default App
