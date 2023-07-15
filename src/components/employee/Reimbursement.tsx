import businessIcon from '/business-icon.svg';
import mapIcon from "/map-icon.svg";
import medicalIcon from "/medical_information_FILL0_wght300_GRAD0_opsz24 2.svg";
import workSpaceIcon from "/workspace_premium_FILL0_wght300_GRAD0_opsz24 2.svg";
import webhookIcon from "/webhook_FILL0_wght300_GRAD0_opsz24 2.svg";

const Reimbursement = () => {
  return (
    <div className="pending-leaves leave-page w-full font-medium font-[Inter]">
      <p className="leave-page-heading">Please choose your reimbursement type</p>
      <ul className="flex flex-col px-[3px] mb-2">
        <li className="flex items-center gap-[6px] p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">
          <img src={businessIcon} alt="business-icon" />
          Business and Conferences
        </li>
        <li className="flex items-center gap-[6px] p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">
          <img src={mapIcon} alt="map-icon" />
          Travel and Accomodation
        </li>
        <li className="flex items-center gap-[6px] p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">
          <img src={medicalIcon} alt="medical-icon" style={{color: 'black'}} />
          Medical Expenses
        </li>
        <li className="flex items-center gap-[6px] p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">
          <img src={workSpaceIcon} alt="workspace-icon" />
          Professional Certification
        </li>
        <li className="flex items-center gap-[6px] p-2 rounded-[4px] text-[15px] font-light hover:bg-[#7E55F1] hover:text-white">
          <img src={webhookIcon} alt="business-icon" />
          Software requirement
        </li>
      </ul>
    </div>
  );
};

export default Reimbursement;
