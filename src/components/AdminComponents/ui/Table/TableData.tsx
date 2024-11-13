// TableData.tsx
import React from "react";

interface TableDataProps {
  children: React.ReactNode;
  className?: string;
}

const TableData: React.FC<TableDataProps> = ({ children, className = "" }) => (
  <td className={`px-6 py-5 text-gray-200 ${className}`}>
    {children}
  </td>
);

export default TableData;
