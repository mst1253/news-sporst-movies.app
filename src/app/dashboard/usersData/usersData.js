"use client";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,LineChart,CartesianGrid,
    Line} from 'recharts';
import { FaUser,FaEye,FaFlag } from "react-icons/fa"
const ViewsByCountryChart = () => {
    const [data, setData] = useState([]);
    const [totalViews,setTotalviews]=useState()
    const [totalUsers,setTotalUsers]=useState()
    const [dominantCountry,setDominantCountry]=useState()
    const [growthData,setGrowthData]=useState([])
    console.log(growthData.date)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api?action=getAnalytics");
                const result = await response.json();
                 console.log(result.growth)
                setData(result.rows.map(data => ({ country: data.country, views: data.view_count })));
                setGrowthData(result.growth.map(data => ({ date: data.view_date.value.split('').slice(5).join(''), dailyViews: data.total_daily_views })));
                setTotalviews(result.rows.map(data=>data.total_views))
                setTotalUsers(result.rows.map(data=>data.unique_users))
                setDominantCountry(result.rows.map(data=>data.country))
            } catch (error) {
                console.error("Error fetching analytics data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container p-10 mx-auto grid gap-16">
            <div className="flex justify-between gap-8">
                <div className="p-4 text-white bg-gray-700 rounded-md  hover:bg-gray-400">
                    total users
                    <span className="flex gap-2">
                        <FaUser fill='#ff5a1f' />
                        {totalUsers}
                    </span>
                </div>
                <div className="p-4 text-white bg-gray-700 rounded-md hover:bg-gray-400">
                    total views
                    <span className="flex gap-2">
                    <FaEye fill='#ff5a1f' />
                    {totalViews}
                    </span>
                </div>
                <div className="p-4 text-white bg-gray-700 rounded-md hover:bg-gray-400">
                    dominant country
                    <span className="flex gap-2">
                    <FaFlag fill='#ff5a1f' />
                    {dominantCountry}
                    </span>
                </div>
            </div>
            <div className="flex justify-between">
                <ResponsiveContainer className='grid gap-2'width="50%" height={400}>
                <h2 className="text-white">users countries</h2>
                 <BarChart data={data}>
                 <XAxis dataKey="country" fill="lightblue"/>
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill='#ff5a1f'/>
               </BarChart>
                 </ResponsiveContainer> 
              <div className="lineChart grid gap-2">
                <h2 className="text-white">daily growth</h2>
               <LineChart width={350} height={400} data={growthData}>
               <XAxis dataKey='date'/>
               <YAxis />
               <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
               <Line type="monotone" dataKey="dailyViews" stroke="#ff5a1f" />
               </LineChart>
          </div>
            </div>
        </div>
    );
};

export default ViewsByCountryChart;
