import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetAllNews from "../../Hooks/userGetAllnews";
import RightSide from "./RightSide";
import News_Features from "./News_Features";


const News_Card = () => {

    const [expandedNews, setExpandedNews] = useState({});

    const [allNewsData] = useGetAllNews()
    console.log(allNewsData);


    const [tabs] = useState([
        { id: "all", label: "All" },
        { id: "burger", label: "Burger" },
        { id: "snack", label: "Snack" },
        { id: "beverage", label: "Beverage" },
    ]);

    let [activeTab, setActiveTab] = useState(tabs[0]?.id);
    const CurrentTab = activeTab === "all" ? allNewsData : allNewsData?.filter((food) => food?.category === activeTab);



    return (

        <>

            <div className="lg:flex bg-black ">


                <section className="container mx-auto  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 2xl:gap-4  md:gap-4 gap-2 md:px-2 py-4 ">
                    {
                        CurrentTab?.map((news) => <div key={news._id} className="">
                            <div className="w-full lg:h-[100vh]  2xl:h-[60vh] bg-black border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                <img className="rounded-t-lg w-full object-cover " src={news?.image} alt="" />

                                <div className="lg:px-2 md:px-1 px-2 py-1 ">

                                    <h5 className="my-2 text-lg md:text-xl lg:text-2xl  font-bold tracking-tight font-oswald lg:tracking-wide text-white dark:text-white  ">
                                        {
                                            news?.title?.slice(0, 50)

                                        }..
                                    </h5>


                                    <p className="text-white ">
                                        {
                                            news?.description?.paragraphs[0]?.slice(0, 80)

                                        }
                                        .....
                                    </p>

                                </div>
                                <Link to={`/news_details/${news?._id}`}>
                                    <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-[#FF9D00] rounded-lg focus:ring-1 focus:outline-none">
                                        {expandedNews[news._id] ? 'Show less' : 'Details Now'}

                                        <svg className={`w-3.5 h-3.5 ms-2 ${expandedNews[news._id] && 'rtl:rotate-180'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>)
                    }

                </section>


                <div className="lg:block lg:w-4/12 px-2 py-4">
                    <News_Features allNewsData={allNewsData}></News_Features>
                    <h1 className="text-xl font-bold text-white ">CATEGORY</h1>
                    <div className="border-b-4 border-[#FF9D00] py-1 w-16"></div>
                    <RightSide tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}></RightSide>

                </div>
            </div>
        </>
    );
};

export default News_Card;