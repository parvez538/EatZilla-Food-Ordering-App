import { useState,useEffect } from "react";
import { Fetch_Api_Rest_Menu } from "../config";

const useRestaurantMenu=(id)=>{
    const [restaurantDetails,setRestaurantDetails]=useState(null)
    const [restaurantItems,setRestaurantItems]=useState(null)

    useEffect(() => {
        getRestaurantMenu();
      }, []);
    
      async function getRestaurantMenu() {
        const data = await fetch(Fetch_Api_Rest_Menu +id);
        const json = await data.json();
     
        setRestaurantDetails(json?.data?.cards?.[0]?.card?.card?.info)
        setRestaurantItems(Object.values(json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?? {}))
      }
      return {restaurantDetails,restaurantItems};
}

export default useRestaurantMenu;