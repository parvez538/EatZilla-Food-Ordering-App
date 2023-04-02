import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        AddItem:(state,action)=>{
            state.items.push({...action.payload,count:1,ItemPrice:action.payload.price})
            // console.log(state.items)
        },
        IncreaseItem:(state,action)=>{
            state.items=state.items.map(item => item.id===action.payload?.id ?{...item,count:item.count+1,ItemPrice:item.ItemPrice+item.price}: item)

        },
        DecreaseItem:(state,action)=>{
            state.items=state.items.map(item => item.id===action.payload?.id && item.count >0 ?{...item,count:item.count-1,ItemPrice:item.ItemPrice-item.price}: item )

        },
        RemoveItem:(state,action)=>{
            state.items.splice(action.payload,1)
            // console.log("hii"+ action.payload)
           
        },
        ClearItems:(state)=>{
            
           state.items=[];
        }
    }
})

export default CartSlice.reducer;

export const {AddItem,IncreaseItem,DecreaseItem,RemoveItem,ClearItems}=CartSlice.actions;