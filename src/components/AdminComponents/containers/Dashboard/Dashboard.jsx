"use client";
import { useState } from "react";
import { MdStore, MdMedicalServices, MdPeople } from "react-icons/md";
import RevenueGraph from "@/components/AdminComponents/ui/RevenueGraph/RevenueGraph";
import StatCard from "@/components/BaseComponents/ui/StatCard/StatCard";

const Dashboard = () => {
  const [vendors, setVendors] = useState([
    {
      category: "Hospital",
      date: "Jan 4, 2022",
      status: "Pending",
      name: "Aims",
      place: "Calicut",
    },
    {
      category: "Lab",
      date: "Jan 2, 2022",
      status: "Completed",
      name: "Al-shifa Lab",
      place: "Alappuzha",
    },
    {
      category: "Pharmacy",
      date: "Jan 4, 2022",
      status: "Cancelled",
      name: "Nura Medicals",
      place: "Kannur",
    },
    {
      category: "Clinic",
      date: "Jan 8, 2022",
      status: "Completed",
      name: "Bridgeon Clinic",
      place: "Cochin",
    },
    {
      category: "Hospital",
      date: "Jan 6, 2022",
      status: "Pending",
      name: "Aster Mims",
      place: "Kannur",
    },
  ]);

  const recentActivities = [
    {
      type: "vendor",
      message: "Aims Hospital registered as a new vendor.",
      time: "5 mins ago",
    },
    {
      type: "user",
      message: "User 'John Doe' created an account.",
      time: "10 mins ago",
    },
    {
      type: "order",
      message: "Order #12345 marked as Completed.",
      time: "15 mins ago",
    },
    {
      type: "vendor",
      message: "Bridgeon Clinic status updated to Completed.",
      time: "20 mins ago",
    },
    {
      type: "user",
      message: "User 'Jane Smith' updated profile.",
      time: "30 mins ago",
    },
  ];

  return (
    <div className="bg-black text-white p-8 flex h-full w-full flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Welcome Back, Admin</h1>
          <p className="text-lg text-gray-400">
            Here's an overview of your platform.
          </p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md">
          Create Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        <StatCard icon={MdStore} count={94} label="Total Vendors" />
        <StatCard icon={MdMedicalServices} count={32} label="Total Doctors" />
        <StatCard icon={MdPeople} count={56} label="Total Users" />
      </div>

      {/* Revenue Graph */}
      <div className="mb-8">
        <RevenueGraph />
      </div>

      {/* Recent Activity Feed */}
      <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="divide-y divide-gray-700">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex justify-between py-3">
              <p className="text-gray-300">{activity.message}</p>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Status in Vendors</h2>
        <div className="divide-y divide-gray-700">
          {vendors.map((vendor, index) => (
            <div key={index} className="flex justify-between py-4">
              <div>
                <p className="font-medium text-gray-300">{vendor.name}</p>
                <p className="text-sm text-gray-500">
                  {vendor.category} - {vendor.place}
                </p>
              </div>
              <div>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    vendor.status === "Completed"
                      ? "bg-green-500 text-white"
                      : vendor.status === "Pending"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {vendor.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vendors Table */}
      <div className="rounded-lg border border-gray-700 shadow-md">
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="bg-gray-900 text-sm font-medium text-green-600">
              <th className="p-4">Category</th>
              <th className="p-4">Name</th>
              <th className="p-4">Reg Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Place</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-700">
            {vendors.map((vendor, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-700 ${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                }`}
              >
                <td className="p-4">{vendor.category}</td>
                <td className="p-4">{vendor.name}</td>
                <td className="p-4">{vendor.date}</td>
                <td
                  className={`p-4 ${
                    vendor.status === "Completed"
                      ? "text-green-500"
                      : vendor.status === "Pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {vendor.status}
                </td>
                <td className="p-4">{vendor.place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
