import React from "react";

type Props = {};

const Policies = (props: Props) => {
  return (
    <div className="pending-leaves leave-page w-full font-medium font-[Inter]">
      <p className="leave-page-heading">Please choose from the below options</p>
      <ul className="flex flex-col px-[3px] mb-2">
        <li className="p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">Employee Contract</li>
        <li className="p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">Termination Policiy</li>
        <li className="p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">Employee Wages</li>
        <li className="p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">Code of conduct</li>
      </ul>
    </div>
  );
};

export default Policies;
