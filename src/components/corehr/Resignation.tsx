import React from "react";

type Props = {};

const Resignation = (props: Props) => {
  return (
    <div className="leave-form leave-page font-medium flex flex-col items-center gap-4 w-full">
      <p className="leave-page-heading">Apply for resignation</p>

      <div className="leave-date w-full flex flex-col items-start gap-[5px] pl-2">
        <label htmlFor="Date" className="w-full text-sm">
          Department
        </label>
        <input
          type="text"
          className="w-full p-[10px] outline-gray-400 rounded-[5px] bg-white border-gray-400"
        />
      </div>

      <div className="leave-date w-full flex flex-col items-start gap-[5px] pl-2">
        <label htmlFor="Date" className="w-full text-sm">
          Date
        </label>
        <input
          type="date"
          placeholder="Select Date"
          className="w-full p-[10px] outline-gray-400 rounded-[5px] bg-white border-gray-400"
        />
      </div>

      <div className="leave-reason w-full flex items-start flex-col gap-[5px] pl-2">
        <label htmlFor="leave-reason" className="w-full text-sm">
          Reason
        </label>
        <textarea
          className="w-full h-[88px] outline-gray-400 rounded-[5px] bg-white p-1 border-gray-400 "
          name="leave-reason"
          placeholder="Type reason here..."
          id="leave-reason"
          cols={30}
          rows={10}
        ></textarea>
      </div>
      <button className="form-btn py-[10px] bg-[#7c3aed] text-lg rounded-[50px] text-white w-[50%] mb-[10px]">
        Submit
      </button>
    </div>
  );
};

export default Resignation;
