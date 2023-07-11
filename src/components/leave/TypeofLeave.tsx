const buttonNames: string[] = [
  "Casual",
  "Maternity",
  "Privilege",
  "Sick",
  "Half-Day",
];

const TypeofLeave = () => {
  return (
    <div className="leave-form leave-page font-medium flex flex-col items-center gap-4 w-full">
      <p>Type of Leave</p>

      <div className="type w-full pl-[5px]">
        <div className="type-btns w-full flex gap-2 flex-wrap">
          {buttonNames.map((name, index) => (
            <div
              key={index}
              className="type-btn p-[10px] bg-white rounded-[20px]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <div className="leave-date w-full flex flex-col items-start gap-[13px] pl-2">
        <label htmlFor="Date" className="w-full">
          Date
        </label>
        <input
          type="date"
          className="w-full p-[10px] outline-gray-400 rounded-[5px] bg-white border-gray-400"
        />
      </div>

      <div className="leave-reason w-full flex items-start flex-col gap-[10px] pl-2">
        <label htmlFor="leave-reason" className="w-full">
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

export default TypeofLeave;
