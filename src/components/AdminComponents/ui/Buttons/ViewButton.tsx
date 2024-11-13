// components/Button.tsx
"use client"
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className = "" }) => {
  const router = useRouter();

  const viewHandler = () => {
    router.push('/admin/vendors-list/vendor')
  };

  return (
    <button
      className={`px-4 py-2 text-emerald-500 font-semibold ${className}`}
      onClick={viewHandler}
    >
      {label}
    </button>
  );
};

export default Button ;
