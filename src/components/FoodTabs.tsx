import { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";

const FoodTabs = () => {
  const [data, setData] = useState<any[]>([]);
  const [foodData, setFoodData] = useState<any[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc"
      );
      const data = response.data;
      const initialSelectedTab = data[0].table_menu_list[0].menu_category;
      if (selectedTab === "") setSelectedTab(initialSelectedTab);
      const foodData = data[0].table_menu_list;
      setData(data[0].table_menu_list);
      const tab = selectedTab === "" ? initialSelectedTab : selectedTab;
      const filteredFoodData = filterFoodData(tab, foodData);
      setFoodData(filteredFoodData);
    };
    fetchData();
  }, [selectedTab]);

  const filterFoodData = (initialSelectedTab: any, foodData: any) => {
    const filterData = foodData.filter((eachData: any) => {
      if (eachData.menu_category === initialSelectedTab) {
        return true;
      }
      return false;
    });
    return filterData[0].category_dishes;
  };

  return (
    <div className="w-full">
      {data.length > 0 ? (
        <>
          <ul className="flex justify-between p-4 border-t-2 border-b-2 overflow-y-auto max-h-[80px]">
            {data.map((eachMenu, index) => {
              const menuCategory = eachMenu.menu_category;
              return (
                <li
                  className="flex justify-center items-center"
                  key={index}
                  onClick={() => setSelectedTab(menuCategory)}
                >
                  <p
                    className={`text-lg font-bold cursor-pointer text-center whitespace-nowrap pr-5 pl-5 ${
                      menuCategory === selectedTab
                        ? "text-red-600 border-b-2 border-red-600"
                        : ""
                    }`}
                  >
                    {menuCategory}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="p-2">
            <ul className="grid grid-cols-1 gap-5">
              {foodData.map((eachFoodData, index) => {
                return <FoodCard key={index} data={eachFoodData} />;
              })}
            </ul>
          </div>
        </>
      ) : (
        <p className="text-2xl font-bold text-center mt-[200px]">Loading...</p>
      )}
    </div>
  );
};

export default FoodTabs;
