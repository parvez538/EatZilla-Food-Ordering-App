import CartLogin from "./CartLogin"

const EmptyCart=()=>{
   
    return(
        <>
        <div className="flex bg-gray-200 h-[1000px] justify-center ">
          <div className="">
          <CartLogin />
         
          </div>
          <div className="bg-gray-200 min-h-fit mt-44">
            <h1 className="my-3 mb-6 text-4xl font-bold text-gray-500">
              Cart Empty
            </h1>
            <img
              className="my-3 w-96"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
            />
            <h1 className="my-2 w-[290px] text-xl font-semibold text-gray-400">
              Good food is always cooking! Go ahead, order some yummy items
              from the menu.
            </h1>
          </div>
        </div>
      </>
    )
}

export default EmptyCart