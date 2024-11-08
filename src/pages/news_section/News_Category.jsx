import React from 'react';
import { motion } from "framer-motion";


const News_Category = ({ tabs, activeTab, setActiveTab }) => {

    return (
        <div className="space-x-1 mb-5 mt-4">
            {tabs?.map((tab) => (
                <div className="flex items-center" key={tab.id}>
                    <div className="border-b-4 border-[#FF9D00] w-6"></div>
                    <div
                        onClick={() => {
                            setActiveTab(tab.id);
                        }}
                        className={`${activeTab === tab.id ? "text-yellow-600  " : ""}
                        relative rounded-full px-3 text-lg font-medium cursor-pointer py-1 text-white transition focus-visible:outline-2`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-10 blo mix-blend-multiply"
                                style={{ borderRadius: 9 }}
                                transition={{ type: "spring", bounce: -10, duration: 0.6 }}
                            />
                        )}
                        {tab.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default News_Category;