import React from "react";

interface TableHeaderProps {
  label: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ label }) => (
  <th className="px-6 py-5 text-xs font-medium text-left">{label}</th>
);

export default TableHeader;
