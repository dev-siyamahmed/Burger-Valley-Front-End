import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../Dashboard';

const Dashboard_Layout = () => {
    return (
        <div className="lg:flex gap-1 min-h-screen bg-black ">
            <Dashboard></Dashboard>
            <main className="  flex-1 mx-auto min-h-screen lg:px-1 bg-black ">
               
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Dashboard_Layout;