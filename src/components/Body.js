import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import IMG_CDN from "../config";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import getRestaurant from "../utils/useRestaurants";
import userContext from "../Context/userContext";

const Cart = (props) => {
  return (
    <>
      <div className="w-64 h-[340px] ml-[60px] hover:shadow-xl hover:border-2 hover:border-gray-300">
        <img className="p-2" src={IMG_CDN + props?.cloudinaryImageId} />
        <h1 className="ml-1 p-1  font-sans text-md font-bold">{props.name}</h1>
        <h3 className="ml-1 p-1  text-sm font-sans text-gray-800">
          {props.locality}
        </h3>

        <h3 className="ml-1 p-1  text-sm font-sans text-gray-700">
          {props.cuisines?.join(", ")}
        </h3>
        <div className="flex mt-3 ml-1">
          {props.avgRating >= 4 ? (
            <h3 className="ml-1 w-10 h-5 text-white  text-sm font-sans bg-green-400 ">
              {" "}
              &#9734; {props.avgRating}{" "}
            </h3>
          ) : (
            <h3 className="ml-1 w-10 h-5 text-white  text-sm font-sans bg-red-400">
              {" "}
              &#9734; {props.avgRating}{" "}
            </h3>
          )}
          <h3 className="mx-3 text-sm font-sans text-gray-700">
            {props.sla?.slaString}
          </h3>
          <h3 className="mx-3 text-sm font-sans text-gray-700">
            {props.costForTwo}
          </h3>
        </div>
      </div>
    </>
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=16.7049873&lng=74.24325270000001"
    );
    const json = await data.json();

    Object.values(json?.data?.success?.cards).map((x) =>
      setAllRestaurant(x?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    );
    Object.values(json?.data?.success?.cards).map((x) =>
      setFilteredRestaurant(
        x?.gridWidget?.gridElements?.infoWithStyle?.restaurants
      )
    );
  //   Object.values(json?.data?.success?.cards).map((x) =>
  //   console.log(x?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  // );

  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <>offline,please check your internet connection</>;
  }

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex  justify-center gap-10 m-2 p-2">
        <input
          placeholder="Search for restaurant"
          type="text"
          value={searchText}
          className="mx-3 px-4 w-[270px] h-[35px] text-xl border-gray-900 bg-slate-200 text-black"
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filterData(searchText, allRestaurant);
            setFilteredRestaurant(data);
          }}
        />
        <button
          className="mx-3 bg-sky-500 px-4 rounded-md text-white font-bold hover:text-sky-500 hover:bg-white"
          onClick={() => {}}
        >
          SEARCH
        </button>
      </div>
      <div className="w-[1350px] flex flex-wrap justify-start ml-[200px] pt-4 gap-4  ">
        {filteredRestaurant?.map((x) => {
          return (
            <Link to={"/restaurant/" + x?.info?.id} key={x?.info?.id}>
              <Cart {...x?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
