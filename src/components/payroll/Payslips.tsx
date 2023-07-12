const Payslips = (
  
) => {
  return (
    <div className="leave-form leave-page font-medium flex flex-col items-center gap-4 w-full">
      <p className="leave-page-heading">Select the dates for your payslip</p>

      <div className="w-full flex p-1 justify-center">
        <div className="leave-date w-[90%] flex flex-col items-start gap-[5px] pl-2">
          <label htmlFor="Date" className="w-full text-sm">
            Start Date
          </label>
          <input
            type="date"
            placeholder="Select Date"
            className="w-full p-[10px] outline-gray-400 rounded-[5px] bg-white border-gray-400"
          />
        </div>

        <div className="leave-date w-[90%] flex flex-col items-start gap-[5px] pl-2">
          <label htmlFor="Date" className="w-full text-sm">
            End Date
          </label>
          <input
            type="date"
            placeholder="Select Date"
            className="w-full p-[10px] outline-gray-400 rounded-[5px] bg-white border-gray-400"
          />
        </div>
      </div>

      <button className="form-btn py-[10px] bg-[#7c3aed] text-lg rounded-[50px] text-white w-[50%] mb-[10px]">
        Submit
      </button>
    </div>
  );
};

export default Payslips;
