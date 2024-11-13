"use client";

import React from "react";
import { IconType } from "react-icons";

interface StatCardProps {
  icon: IconType;
  count: number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, count, label }) => (
  <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md transform transition hover:scale-105 hover:shadow-lg">
    <div className="flex justify-center items-center mb-4">
      <Icon className="text-green-500 text-4xl" />
    </div>
    <h2 className="text-3xl font-bold text-white">{count}</h2>
    <p className="text-gray-300">{label}</p>
  </div>
);

export default StatCard;
