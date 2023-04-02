import { useParams } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import IMG_CDN from "../config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantMenuSearch from "./RestaurantMenuSearch";
import { useDispatch } from "react-redux";
import userContext from "../Context/userContext";
import { AddItem,RemoveItem } from "../Slices/CartSlice";
import { useDispatch } from "react-redux";
import RestaurantMenuItems from "./RestaurantMenuItems";


const RestaurantMenu = ({ user }) => {
  const param = useParams();
  const id = Object.values(param);

  const {restaurantDetails,restaurantItems} = useRestaurantMenu(id);
    // console.log(restaurantItems)
    // console.log(restaurantItems)

  return ( 
    <>
    <RestaurantDetails restaurantDetails={restaurantDetails}  />
    <RestaurantMenuSearch />
    <RestaurantMenuItems restaurantItems={restaurantItems}  />
    </>
  );
};

export default RestaurantMenu;
