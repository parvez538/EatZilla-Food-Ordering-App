import React from "react";
import IMG_CDN from "../config";
import { useDispatch } from "react-redux";
import { AddItem, RemoveItem } from "../Slices/CartSlice";

function RestaurantMenuItems({ restaurantItems }) {
  const dispatch = useDispatch();

  const increment = (menu_item_cart) => {
    // console.log(restaurantDetails.name)

    dispatch(AddItem(menu_item_cart));
  };
  const decrement = () => {
    dispatch(RemoveItem());
  };
  // restaurantItems?.map((x) => x?.card?.card?.itemCards?.map((menu_items) => console.log(menu_items?.card?.info)));
  // console.log(restaurantDetails)
  return (
    <>
      {" "}
      {restaurantItems?.map((x) =>
        x?.card?.card?.itemCards?.map((menu_item) => (
          <div className="flex " key={menu_item?.card?.info?.id}>
            <div className="">
              <div className="flex justify-between w-[800px] ml-[400px] my-2 hover:shadow-xl">
                <div className="px-5 py-3 ">
                  {menu_item?.card?.info?.itemAttribute?.vegClassifier ===
                  "NONVEG" ? (
                    <img
                      className="w-5 h-5"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYteGPinx4N697CzQh72N0wcLprAcv2BOxw&usqp=CAU"
                    />
                  ) : (
                    <img
                      className="w-5 h-5"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXduvaGYmb-0pH83i62FCkrx0yTLruWksgygP1n9vZdg&s"
                    />
                  )}
                  <li className="text-black font-serif font-bold text-2xl my-2 list-none ">
                    {menu_item?.card?.info?.name}
                  </li>
                  <h2 className="text-gray-600  font-semibold text-md">
                    {" "}
                    &#8377;{menu_item?.card?.info?.price / 100}
                  </h2>
                  <h2 className="text-gray-600 text-sm my-1">
                    {menu_item?.card?.info?.description}
                  </h2>
                </div>
                <img
                  className="flex items-end w-[150px] h-[130px] px-1 py-2"
                  src={IMG_CDN + menu_item?.card?.info?.imageId}
                />
              </div>
              <hr className="w-[800px] ml-[410px]" />
            </div>

            <div className="flex border border-green-300 h-8 w-20 mt-12 justify-center  hover:text-white hover:bg-green-500">
              <button
                onClick={() => increment(menu_item?.card?.info)}
                className="font-bold text-sm text-center px-1 mx-1 "
              >
                ADD
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default RestaurantMenuItems;
