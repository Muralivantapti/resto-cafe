import { useState } from "react";
import { useAppSelector, useAppDispatch } from "./Hooks";
import { addItems, updateItems } from "../utils/redux/CartSlice";

export default function FoodCard(data: any) {
  const dispatch = useAppDispatch();
  const foodData = data.data;
  const [orderCount, setOrderCount] = useState(0);
  const orderedData = useAppSelector((state: any) => state.Food.orders);

  const onClickBuyNow = (data: any, count: number) => {
    let newCount: number = count;
    let isOrderAlreadyExist = false;

    let bookedData = {
      data,
      orderCount: newCount,
    } as any;

    if (orderedData.length > 0) {
      orderedData.forEach((eachData: any) => {
        if (eachData.data?.dish_id === data.dish_id) {
          const updatedCount = count + eachData.orderCount;
          bookedData = { data, orderCount: updatedCount };
          isOrderAlreadyExist = true;
          dispatch(updateItems(bookedData));

          // } else {
          //   if (newCount > 0) {
          //     dispatch(addItems(bookedData));
          //   }
        }
      });
    } else if (orderedData.length < 1) {
      if (newCount > 0) {
        dispatch(addItems(bookedData));
      }
    }
    if (isOrderAlreadyExist === false && orderedData.length > 0) {
      dispatch(addItems(bookedData));
    }
  };

  return (
    <div className="border-[1px] shadow-lg p-4 flex justify-between">
      <div
        className={`p-1 border-[1px] self-start mr-2 ${
          foodData.dish_Type === 2 ? "border-green-600" : "border-red-600"
        }`}
      >
        <div
          className={`w-[15px] h-[15px] rounded-full ${
            foodData?.dish_Type == 2 ? "bg-green-600" : "bg-red-600"
          }`}
        ></div>
      </div>
      <div className="w-4/5">
        <p className="text-lg md:text-2xl font-bold">{foodData?.dish_name}</p>
        <div className="flex font-bold pt-2">
          <p>{foodData?.dish_currency}</p>
          <p className="ml-1">{foodData?.dish_price}</p>
        </div>
        <p className=" font-normal text-sm md:text-base pt-2">
          {foodData?.dish_description}
        </p>

        {foodData?.dish_Availability === true ? (
          <div className="flex items-center">
            <div className="bg-green-700 flex justify-between items-center w-[120px] rounded-full pr-5 pl-5 p-1 mt-2">
              <button
                onClick={() =>
                  setOrderCount((prevState) =>
                    prevState > 0 ? (prevState -= 1) : prevState
                  )
                }
                className="flex justify-center items-center font-bold text-white text-2xl"
              >
                -
              </button>
              <p className="text-white m-0 font-bold text-lg">{orderCount}</p>
              <button
                onClick={() => setOrderCount((prevState) => (prevState += 1))}
                className="flex justify-center items-center font-bold text-white text-2xl"
              >
                +
              </button>
            </div>
            <button
              onClick={() => onClickBuyNow(foodData, orderCount)}
              className="ml-5 bg-orange-400 rounded-full text-base font-semibold text-white pr-5 pl-5 pt-2 pb-2 mt-2"
            >
              Buy Now
            </button>
          </div>
        ) : (
          <p className="text-base font-semibold text-red-600 mt-2">
            Not available
          </p>
        )}
      </div>
      <div className="ml-2 mr-2 w-[30%] text-sm md:text-base flex justify-center items-center text-orange-600 font-semibold">
        <p>{foodData?.dish_calories} Calories</p>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="h-[150px] w-[150px]"
          alt={foodData?.dish_name}
          src={foodData?.dish_image}
        />
      </div>
    </div>
  );
}
