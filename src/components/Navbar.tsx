import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./Hooks";

const Navbar = () => {
  const navigate = useNavigate();
  const foodData = useAppSelector((state) => state.Food.orders);
  const itemInCart = foodData.length;

  return (
    <div className="flex justify-between min-w-[full] bg-slate-100 p-4">
      <div>
        <p
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer"
        >
          UNI Resto Cafe
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => navigate("/myorders")}
          className="text-lg font-bold flex justify-center items-center"
        >
          <p>My Orders :</p>
          <div className="bg-red-600 ml-2 rounded-full flex justify-center items-center w-[40px] max-h-[40px] p-2 font-bold text-white">
            {itemInCart}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
