'use client';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


interface DetailsModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailsModal({ id, isOpen, onClose }: DetailsModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // fetch user data using id note: in request collection there is requester id use that in backEnd middleware
  const router = useRouter()
  if (!isOpen) return null;

  const handleApprove = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5001/admin/api/request`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status: 'approved' }),
      });
      if (!response.ok) {
        throw new Error('Failed to approve the request');
      }
      router.refresh()
      onClose();

    } catch (err) {
      console.log(err)
      setError('Error approving request');
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5001/admin/api/request`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, status: 'rejected' }),
      });

      if (!response.ok) {
        throw new Error('Failed to reject the request');
      }
      router.refresh()
      onClose();
    } catch (err) {
      setError('Error rejecting request');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="bg-gray-800 flex flex-col w-full max-w-lg md:max-w-2xl lg:max-w-3xl h-auto p-6 md:p-8 rounded-lg shadow-lg overflow-y-auto">
        <button
          className="self-end text-gray-400 hover:text-gray-300 text-2xl font-semibold cursor-pointer mb-4"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <div className="text-white text-center text-lg md:text-xl font-semibold mb-6">
          Details
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src="https://imgs.search.brave.com/YfyNSZIduSszrOd2DIfVpcEZXVPxARydF3-FOuI_1pA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw"
            alt="Profile Image"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col gap-2 text-gray-300">
            <h1 className="text-lg font-medium">Name</h1>
            <h1 className="text-base">doc1203ms10</h1>
            <h1 className="text-base">Specialty: Gynecology</h1>
            <h1 className="text-base">Contact: 9895683891</h1>
            <h1 className="text-base">IMA ID</h1>
          </div>
        </div>

        {error && <p className="text-red-600 text-center mt-4">{error}</p>}

        <div className="flex mt-10 justify-between gap-4">
          <button
            className="w-full md:w-[48%] h-12 bg-red-600 rounded-lg hover:bg-red-500 text-white font-semibold transition-colors duration-300"
            onClick={handleReject}
            disabled={loading}
          >
            {loading ? 'Rejecting...' : 'Reject'}
          </button>
          <button
            className="w-full md:w-[48%] h-12 bg-green-600 rounded-lg hover:bg-green-500 text-white font-semibold transition-colors duration-300"
            onClick={handleApprove}
            disabled={loading}
          >
            {loading ? 'Approving...' : 'Approve'}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('portalRoot')! // Make sure this element exists
  );
}
