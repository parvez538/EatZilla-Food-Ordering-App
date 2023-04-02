import { useDispatch } from "react-redux";
import { RemoveItem, IncreaseItem, DecreaseItem } from "../Slices/CartSlice";
import { AiOutlineDelete } from "react-icons/ai";

const FoodItemCart = (FoodItem) => {
  console.log(FoodItem);

  const dispatch = useDispatch();

  const increaseCount = (id) => {
    dispatch(IncreaseItem(id));
  };
  const decreaseCount = (id) => {
    dispatch(DecreaseItem(id));
  };
  const deleteCart = (id) => {
    dispatch(RemoveItem(id));
  };

  return (
    <>
      <div key={FoodItem?.data?.id} className="bg-white p-3 w-[460px]">
        <div className="flex justify-between">
          <div className="flex">
            {FoodItem?.data?.itemAttribute?.vegClassifier === "VEG" ? (
              <img
                className="w-4 h-4 mx-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXduvaGYmb-0pH83i62FCkrx0yTLruWksgygP1n9vZdg&s"
              />
            ) : (
              <img
                className="w-4 h-4 mx-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYteGPinx4N697CzQh72N0wcLprAcv2BOxw&usqp=CAU"
              />
            )}
            <h1 className=" text-sm">{FoodItem?.data?.name}</h1>
          </div>

          <div className="flex">
            <div className="flex border border-green-300  ">
              <button
                onClick={() => {
                  decreaseCount(FoodItem?.data);
                }}
                className="font-bold text-green-500 text-xl w-[20px] h-6  px-1 bg-white rounded-sm "
              >
                -
              </button>
              <span className="font-bold text-sm text-green-500 text-center w-[40px] h-6  px-2 mx-1 bg-white  rounded-s">
                {FoodItem?.data?.count}
              </span>
              <button
                onClick={() => {
                  increaseCount(FoodItem?.data);
                }}
                className="font-bold text-center text-green-500 text-xl w-[20px] h-6  px-1 bg-white  rounded-s"
              >
                +
              </button>
            </div>
            <div className="w-4 text-sm ml-5 ">
              <h1 className=" ">
                ₹{FoodItem?.data?.ItemPrice / 100}
              </h1>
            </div>

            <AiOutlineDelete
              onClick={() => {
                deleteCart(FoodItem?.data?.index);
              }}
              className="mx-3 text-2xl cursor-pointer ml-12"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItemCart;
