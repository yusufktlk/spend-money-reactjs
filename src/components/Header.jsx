

function Header(props) {
  return (
    <div className='text-center mt-10 '>
        <h1 className='text-5xl mb-5 font-bold'>Spend Elon Musk's Money</h1>
        <p className='text-3xl pl-52 pr-52 '>
          If Elon cashed out all of his stocks & assets today he would have approximately <span className='font-bold text-green-600'>${new Intl.NumberFormat().format(props.money)}</span> (US Dollars) in his bank account.
        </p>

        <div>
            
                {props.total >= 0 ? <h1 className="text-3xl mt-6 font-bold bg-black text-green-500 inline-block rounded-xl p-3">You have ${new Intl.NumberFormat().format(props.money - props.total)} </h1> : <h1 className="text-3xl font-bold">All your money is gone :( </h1>}
            
        </div>
    </div>
  )
}

export default Header