import Header from "./Header";
import {useContext,useReducer,useState} from "react";
import Body from "./Body";
import { AddItem } from "../Slices/CartSlice";
import { useDispatch } from "react-redux";


const initialState=0;
const reducer=(state,action)=>{
  switch(action){
    case "increment" :
      return state+1;

     case "decrement" :
      return state-1
      
    default : 
    return state   
  }
}

const Offers = () => {

  const [count,dispatch]=useReducer(reducer,initialState)
  const dispatching=useDispatch()

  const handleOnClick=()=>{
    dispatching(AddItem("Graps"))
    console.log("hii")
  }
 
  return (
    <>
    <div className="flex bg-slate-500 w-full">
      <div className="my-28 mx-72 " >
        <h1 className="font-bold text-white text-4xl font-serif">Offers for you</h1>
        <h1 className="py-3 text-white text-xl font-serif font-thin">Explore top deals and offers exclusively for you!</h1>
      </div>
      {/* <div className="mt-20 ">
        <button onClick={()=>{
          dispatch("decrement")
        }} className="bg-indigo-600 px-4 font-sans text-xl">-</button>
        <span className="mx-2 bg-white px-3">{count}</span>
        <button onClick={()=>{
          dispatch("increment")
        }} className="bg-indigo-600 px-4 font-sans text-xl">+</button>
        <button onClick={()=> handleOnClick()} className="bg-indigo-600 px-4 font-sans text-xl">+</button>
      </div> */}

      <div className="mx-10 my-10">
        <img className="w-64" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham" />
      </div>
    </div>
    <Body/>
    </>
  );
};

export default Offers;
