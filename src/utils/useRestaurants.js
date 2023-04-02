async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=16.7049873&lng=74.24325270000001"
    );
    const json = await data.json();

    setAllRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  export default getRestaurant;