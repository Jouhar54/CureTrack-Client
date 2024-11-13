import React from "react";
import { Vendors } from "@/interfaces/admin";
import VendorTable from "@/components/BaseComponents/ui/TableData/TableRow";

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
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  },
];

const Page: React.FC = () => {
  return (
    <VendorTable vendors={vendors} />
  );
};

export default Page;
