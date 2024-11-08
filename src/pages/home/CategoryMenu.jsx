import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import useAllMenus from "../../Hooks/useAllMenus";
import MenuCard from "../menu/MenuCard";
import { Link } from "react-router-dom";


const CategoryMenu = () => {
    const [allMenuData] = useAllMenus();
    const [shuffledMenuData, setShuffledMenuData] = useState([]);

    useEffect(() => {
      const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      };
  
      setShuffledMenuData(shuffleArray(allMenuData));
    }, [allMenuData]);
  
    let tabs = [
      { id: "burger", label: "Food" },
      { id: "snack", label: "Snack" },
      { id: "beverage", label: "Beverage" },
    ];
  
    let [activeTab, setActiveTab] = useState(tabs[0]?.id);
    const CurrentTab = shuffledMenuData?.filter(
      (food) => food?.category === activeTab
    );

    // Slice the CurrentTab array to show only eight items
    const slicedCurrentTab = CurrentTab?.slice(0, 8);
  
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
                                  relative rounded-xl px-4 bg-neutral-900  py-3 text-base font-medium  transition text-white focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab?.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10  bg-yellow-400 mix-blend-hard-light"
                  style={{ borderRadius: 9 }}
                  transition={{ type: "spring", bounce: -10, duration: 0.6 }}
                />
              )}
              {tab?.label}
            </button>
          ))}
        </div>
        <div className="container mx-auto grid  grid-cols-1 mt-3 md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-4 lg:gap-3 gap-2">
          {slicedCurrentTab?.map((food,) => (
            <MenuCard key={food._id} food={food}></MenuCard>
          ))}
        </div>
        <Link to={'/all-foods'}>
        <button
              className="bg-yellow-500 text-white font-bold py-2 px-4 rounded  mt-5"
              type="button"
            >
             See All
            </button></Link>
      </div>
    );
};

export default CategoryMenu;