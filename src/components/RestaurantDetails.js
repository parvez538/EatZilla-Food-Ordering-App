import React from "react";
import IMG_CDN from "../config";

const RestaurantDetails = ({restaurantDetails}) => {

  // console.log( restaurantDetails?.costForTwoMessage)
  return (
    <>
      <div className="bg-gray-600 flex">
        <div className="ml-72 mr-10 my-4 max-w-md ">
          <img
            className=" shadow-xl rounded-2xl"
            src={IMG_CDN + restaurantDetails?.cloudinaryImageId}
          />
        </div>

        <div className="rest_main_info">
          <h1 className="text-white font-serif font-bold text-3xl mx-5 mt-10">
            {restaurantDetails?.name}
          </h1>
          <h4 className="text-md mx-5 text-gray-200 font-thin font-serif mt-1">
            {restaurantDetails?.cuisines?.join(", ")}
          </h4>
          <h4 className="text-md mx-5 text-gray-200 font-thin font-serif mt-1">
            {restaurantDetails?.areaName}
          </h4>

          <div className="">
            <div className="flex mx-5 gap-9 mt-4 text-gray-200  ">
              <h3>
                &#9734;{" "}
                {restaurantDetails?.avgRating}{" "}
              </h3>
              <h6>
                {restaurantDetails?.totalRatingsString}
              </h6>
            </div>
            <div className="flex mx-5 gap-9 mt-4 text-gray-200  ">
              <h3>
                {restaurantDetails?.sla?.slaString}
              </h3>
              <h6>
                {restaurantDetails?.sla?.lastMileTravelString}
              </h6>
            </div>
            <div className=" mx-5  mt-4 text-gray-200  ">
              <h3>
                {
                    restaurantDetails?.costForTwoMessage
                }
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;