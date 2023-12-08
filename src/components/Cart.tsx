import { useAppSelector } from "./Hooks";

import CartItems from "./CartItems";

const Cart = () => {
  const data = useAppSelector((state: any) => state.Food.orders);

  return (
    <div>
      <ul>
        {data.map((eachData: any, index: number) => {
          return <CartItems key={index} data={eachData} />;
        })}
      </ul>
    </div>
  );
};

export default Cart;
