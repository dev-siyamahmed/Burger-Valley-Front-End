import { motion } from "framer-motion";
import { useState } from "react";

import useAllMenus from "../../Hooks/useAllMenus";

import MenuCard from "./MenuCard";

const AllMenus = () => {
  const [allMenuData] = useAllMenus();
  console.log(allMenuData);
  let tabs = [
    { id: "burger", label: "Food" },
    { id: "snack", label: "Snack" },
    { id: "beverage", label: "Beverage" },
  ];
  let [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const CurrentTab = allMenuData?.filter(
    (food) => food?.category === activeTab
  );

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex space-x-1 mb-2">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => {
              setActiveTab(tab?.id);
            }}
            className={`${activeTab === tab?.id ? "" : ""}
                                relative rounded-xl px-6 bg-[#171717] font-oswald py-3 text-base font-medium  transition text-white focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab?.id && (
              <motion.span  
                layoutId="bubble"
                className="absolute inset-0 z-10  bg-yellow-500 font-oswald mix-blend-hard-light"
                style={{ borderRadius: 9 }}
                transition={{ type: "spring", bounce: -10, duration: 0.6 }}
              />
            )}
            {tab?.label}
          </button>
        ))}{" "}
      </div>
      <div className="container mx-auto grid  grid-cols-1 mt-3 md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 lg:gap-3 gap-2">
        {CurrentTab?.map((food,) => (
          <MenuCard key={food._id} food={food}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default AllMenus;
