import React from "react";

function RestaurantMenuSearch() {
  return (
    <>
      <div className=" w-full my-3 flex mx-5 justify-center">
        <input
          onChange={(e) => {
            // setMenuSearch(e.target.value);
          }}
          type="text"
          className="mx-5 px-4 w-[270px] h-[35px] text-xl border-gray-900 bg-slate-200 text-black"
          placeholder="Search Food Items"
        />
        <button
          onClick={() => {
            // const data = filterMenu(menuSearch, restaurantMenu);
            // setFilteredMenu(data);
          }}
          className="mx-5 bg-sky-500 px-4 rounded-md text-white font-bold hover:text-sky-500 hover:bg-white"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default RestaurantMenuSearch;
