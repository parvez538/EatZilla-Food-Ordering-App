import { useSelector,useDispatch } from "react-redux";
import CartLogin from "./CartLogin";
import FoodItemCart from "./FoodItemCart";
import { ClearItems } from "../Slices/CartSlice";



const ItemCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
    cartItems.map(x=> console.log(x))
  const totalAmount = cartItems.reduce((acc, item) => acc + item.ItemPrice, 0);

  const dispatch=useDispatch()

  const clearItems=()=>{
    dispatch(ClearItems())
  }

  return (
    <>
      <div className="flex bg-gray-300 justify-center h-[1000px]">
        <div className="">
          <CartLogin />
        </div>

        <div className="mt-44">
          {cartItems?.map((x,index) => (
            <FoodItemCart data={{...x,index}} />
          ))}
          <div className="flex">
            <div className="flex bg-white p-3 w-[390px] mt-3 justify-between">
              <h1 className="font-bold font-sans text-sm text-gray-700">
                Item Total
              </h1>
              <h1 className="font-bold font-sans text-sm text-gray-700">
              ₹{totalAmount / 100}
              </h1>
            </div>
            <button onClick={()=>{
              clearItems()
            }} className="bg-red-500 h-10 p-3 mt-3 ml-3 text-sm text-gray-800 font-bold">Clear</button>
          </div>
          <div className="flex w-[460px] h-[40px] mt-3 justify-center bg-sky-500 text-xl font-bold p-1">
          <h1 className="cursor-pointer font-sans text-white tracking-wide">Proceed To Pay</h1>

          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
