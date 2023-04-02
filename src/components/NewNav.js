

const NewNav = () => {
    return (
      <div className="ml-[200px] flex justify-between border-b-2 border-gray-300 w-[1350px]  h-[60px]">
        <h2 className="m-2 p-2 ml-12 text-2xl font-sans text-gray-900">{20} Restaurants</h2>
        <ul className="flex">
          <li className="m-3 p-3 font-sans text-sm text-gray-500 hover:text-gray-900">Relevance</li>
          <li className="m-3 p-3 font-sans text-sm text-gray-500 hover:text-gray-900">Delivery Time</li>
          <li className="m-3 p-3 font-sans text-sm text-gray-500 hover:text-gray-900">Rating</li>
          <li className="m-3 p-3 font-sans text-sm text-gray-500 hover:text-gray-900">Cost: Low To High</li>
          <li className="m-3 p-3 font-sans text-sm text-gray-500 hover:text-gray-900">Cost: High To Low</li>
          <li className="m-3 p-3 font-sans text-sm text-gray-500 hover:text-gray-900">Filters</li>
        </ul>
      </div>
    );
  };
  
  export default NewNav;