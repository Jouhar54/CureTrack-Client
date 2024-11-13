// VendorTable.js
import Button from '@/components/adminComponents/ui/Buttons/ViewButton';
import TableData from '@/components/adminComponents/ui/Table/TableData';
import TableHeader from '@/components/adminComponents/ui/Table/TableHeader';
import React from 'react'

const VendorTable = ({ vendors }) => {
  return (
    <section className="flex gap-8 items-start px-16 py-5 mt-11 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
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
                {vendors.map((vendor, index) => (
                  <tr key={index} className={index % 2 === 1 ? "bg-zinc-900" : ""}>
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
                      <Button
                        label="View"
                      />
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
