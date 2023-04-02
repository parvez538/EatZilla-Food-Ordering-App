export function filterData(searchText, allRestaurant) {
    return allRestaurant?.filter((temp) =>
      temp?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    )
  }

