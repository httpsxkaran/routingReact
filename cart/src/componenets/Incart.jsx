import React from 'react'

function Incart({cart, setCart, val, setVal}) {
    function handel(id){
        // let a = cart.map((item)=> item._id===id? cart.filter((itm)=> itm._id!==id):item)
        let b=  cart.filter((itm)=> itm._id!==id)
        let c = val.map((item)=> item._id===id? {...item, isNew: !item.isNew}: item)
        setVal(c);
        setCart(b);
    }
  return (
     <div className='bg-gray-900 flex flex-wrap justify-center items-center  gap-10'>
        {cart.map((item, index)=>{
            return (
                <div className={`h-auto w-44  bg-black  rounded-2xl shadow-lg m-4 mb-5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:cursor-pointer hover:shadow-gray-500  flex flex-col items-center hover:-translate-y-2 `} key={index}>
                    <img className={`object-cover overflow-hidden h-48 rounded-2xl w-full object-top`} src={item.image} alt="" />
                    <h1 className='text-center text-lg font-semibold text-white'>{item.title}</h1>
                    <h1 className='text-center text-xs text-white'>{item.description.split(" ").slice(0, 10).join(" ")}...</h1>
                    {/* <button onClick={()=>handle(item._id)} className={`text-white px-3.5 py-1 my-2.5 rounded-lg font-semibold text-xs tracking-wide transition-all duration-400 ease-linear transform ${item.isNew? "bg-blue-500 scale-105 hover:bg-blue-600":"bg-green-400 scale-100 hover:bg-green-500"}`}>{item.isNew? "Add to cart": "In cart"}</button> */}
                    <button onClick={()=> handel(item._id)} className='bg-red-900 text-white px-2 py-0 rounded-lg my-1 hover:bg-red-950 '>Remove</button>
                </div>
            )
        })}
    </div>
  )
}

export default Incart