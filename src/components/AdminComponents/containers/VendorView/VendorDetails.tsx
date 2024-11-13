"use client";
import { useRouter } from "next/navigation";

const vendors = [
  {
    vendor: {
      name: "Nila",
      initials: "PB",
      place: "Calicut",
      vendorType: "Hospital",
      imageUrl: "https://www.meitra.com/public/upload_file/63130c0088dcf1662192640.jpg",
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
];

const VendorDetails = () => {
  const router = useRouter();
  const vendor = vendors[0];

  if (!vendor) {
    return <p>Vendor not found.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-neutral-200 p-6">
      <div className="flex max-w-4xl w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Image */}
        <div className="w-1/2">
          <img
            src={vendor.vendor.imageUrl}
            alt="Vendor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Vendor Details */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6">Vendor Details</h1>
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${vendor.vendor.bgColor} text-neutral-900 font-semibold`}
            >
              {vendor.vendor.initials}
            </div>
            <div>
              <h2 className="text-xl font-bold">{vendor.vendor.name}</h2>
              <p className="text-sm text-neutral-400">{vendor.vendor.vendorType}</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-neutral-400">Place</h3>
            <p>{vendor.vendor.place}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-neutral-400">Contact</h3>
            <p>{vendor.vendor.contact}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-neutral-400">Requested Date</h3>
            <p>{vendor.date}</p>
          </div>

          <div className="mb-6 flex items-center">
            <span className="font-semibold text-neutral-400 mr-2">Status:</span>
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full ${vendor.status.bgColor}`}
            >
              {vendor.status.icon}
              <span className={`${vendor.status.color} font-semibold`}>
                {vendor.status.text}
              </span>
            </div>
          </div>

          <button
            className="w-full py-3 bg-emerald-500 text-white rounded-md font-semibold hover:bg-emerald-600"
            onClick={() => router.push("/admin/vendors-list")}
          >
            Back to Vendors
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
