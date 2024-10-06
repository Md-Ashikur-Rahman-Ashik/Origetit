"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";
import SentimentChart from "./components/SentimentChart";
import TrustworthyNewsChart from "./components/NewsChart";
import BarChartComponent from "./components/BarChart";
import MapComponent from "./components/MapComponent";

export default function Home() {
  // Sample data for "This week"
  const sentimentDataWeek = {
    positive: [10, 20, 15, 30, 35, 25],
    neutral: [5, 15, 10, 5, 15, 20],
    negative: [2, 5, 7, 2, 5, 3],
  };

  const trustworthyDataWeek = [75, 60, 80, 90, 85, 70, 85];

  return (
    <div className="">
      <Navbar />
      <Navbar2 />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* Add your existing content here */}
      </div>

      {/* New Chart Section */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl text-[#0FA7E6] font-bold">
            Falcon AI Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">
              Sentiment in Real-Time
            </h2>

            <SentimentChart data={sentimentDataWeek} />
          </div>

          <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">
              Trustworthy News Score
            </h2>

            <TrustworthyNewsChart data={trustworthyDataWeek} />

            {/* Add conditions for other tabs */}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        <div className="lg:w-1/2 w-full">
          <BarChartComponent />
        </div>
        <div className="lg:w-1/2 w-full">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
