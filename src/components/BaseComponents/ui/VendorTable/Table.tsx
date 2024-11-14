"use client";
import React, { useState } from "react";
import Button from "@/components/adminComponents/ui/Buttons/ViewButton";
import TableData from "@/components/adminComponents/ui/Table/TableData";
import TableHeader from "@/components/adminComponents/ui/Table/TableHeader";
import { Vendors } from "@/interfaces/admin";
import Dropdown from "../DropDown/Drop-down";

// Sample vendors data
const vendors: Vendors[] = [
  {
    vendor: {
      name: "Nila",
      initials: "PB",
      place: "Calicut",
      vendorType: "Hospital",
      bgColor: "bg-lime-200",
      contact: "90876 12534",
    },
    date: "Jan 4, 2022",
    status: {
      text: "Approved",
      color: "text-emerald-500",
      bgColor: "bg-emerald-950",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
  },
  // Additional vendors can be added here
];

const VendorTable = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const options = [
    { value: "All", label: "All" },
    { value: "Hospital", label: "Hospital" },
    { value: "Lab", label: "Lab" },
    { value: "Clinic", label: "Clinic" },
  ];

  // Filter vendors based on selected category
  const filteredVendors =
    selectedCategory === "All"
      ? vendors
      : vendors.filter(
          (vendor) => vendor.vendor.vendorType === selectedCategory
        );

  return (
    <section className="flex flex-col gap-4 px-16 py-5 mt-11 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      {/* Category Filter Dropdown */}
      <div className="flex justify-end">
        <Dropdown
          options={options}
          selectedOption={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
          label="Select Category"
        />
      </div>

      {/* Vendors Table */}
      <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-full rounded-xl border border-solid bg-neutral-900 border-zinc-900 max-md:max-w-full">
          <div className="flex flex-wrap items-start w-full text-sm bg-neutral-900 max-md:max-w-full">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-950 text-neutral-300">
                  <TableHeader label="Vendor" />
                  <TableHeader label="Vendor Type" />
                  <TableHeader label="Place" />
                  <TableHeader label="Contact" />
                  <TableHeader label="Requested Date" />
                  <TableHeader label="Status" />
                  <TableHeader label="Actions" />
                </tr>
              </thead>
              <tbody>
                {filteredVendors.map((vendor, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 1 ? "bg-zinc-900" : ""}
                  >
                    <TableData>
                      <div className="flex gap-3 items-center">
                        <div
                          className={`self-stretch px-2 my-auto w-8 h-8 font-medium text-center whitespace-nowrap ${vendor.vendor.bgColor} rounded-[200px] text-neutral-950`}
                        >
                          {vendor.vendor.initials}
                        </div>
                        <div className="self-stretch my-auto font-semibold text-gray-200">
                          {vendor.vendor.name}
                        </div>
                      </div>
                    </TableData>
                    <TableData>{vendor.vendor.vendorType}</TableData>
                    <TableData>{vendor.vendor.place}</TableData>
                    <TableData>{vendor.vendor.contact}</TableData>
                    <TableData>{vendor.date}</TableData>
                    <TableData>
                      <div
                        className={`flex gap-1 items-center self-stretch py-0.5 pr-2 pl-1.5 my-auto rounded-2xl ${vendor.status.bgColor} ${vendor.status.color}`}
                      >
                        {vendor.status.icon}
                        <div className="self-stretch my-auto text-xs font-semibold">
                          {vendor.status.text}
                        </div>
                      </div>
                    </TableData>
                    <TableData className="text-center">
                      <Button label="View" />
                    </TableData>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorTable;
