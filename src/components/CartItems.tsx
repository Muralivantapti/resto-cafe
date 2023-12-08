const CartItems = (data: any) => {
  const foodData = data.data.data;
  const orderCount = data.data.orderCount;

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
        <div className="mt-2">
          <p className="text-lg font-bold">
            Order Count: <span>{orderCount}</span>
          </p>
        </div>
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
};

export default CartItems;
