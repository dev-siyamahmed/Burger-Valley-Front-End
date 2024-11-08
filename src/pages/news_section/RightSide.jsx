import React from 'react';
import News_Category from './News_Category';
import Offer_Card from './Offer_Card';


const RightSide = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div>
            
            <News_Category tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} ></News_Category>
            <Offer_Card></Offer_Card>
        </div>
    );
};

export default RightSide;