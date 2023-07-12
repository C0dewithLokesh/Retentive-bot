const Reimbursement = () => {
  return (
    <div className="pending-leaves leave-page w-full font-medium font-[Inter]">
      <p className="leave-page-heading">Please choose your reimbursement type</p>
      <ul className="flex flex-col px-[3px] mb-2">
        <li className="flex items-center gap-[6px] p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">
          <img src="/public/business-icon.svg" alt="business-icon" />
          Business and Conferences
        </li>
        <li className="flex items-center gap-[6px] p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">
          <img src="/public/map-icon.svg" alt="business-icon" />
          Travel and Accomodation
        </li>
        <li className="flex items-center gap-[6px] p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">
          <img src="/public/medical_information_FILL0_wght300_GRAD0_opsz24 2.svg" alt="business-icon" style={{color: 'black'}} />
          Medical Expenses
        </li>
        <li className="flex items-center gap-[6px] p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">
          <img src="/public/workspace_premium_FILL0_wght300_GRAD0_opsz24 2.svg" alt="business-icon" />
          Professional Certification
        </li>
        <li className="flex items-center gap-[6px] p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">
          <img src="/public/webhook_FILL0_wght300_GRAD0_opsz24 2.svg" alt="business-icon" />
          Software requirement
        </li>
      </ul>
    </div>
  );
};

export default Reimbursement;
