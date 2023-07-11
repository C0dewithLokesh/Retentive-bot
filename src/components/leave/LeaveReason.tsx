interface LeaveReasonProps {
  number: number;
  content: string;
}

const LeaveReason: React.FC<LeaveReasonProps> = ({ number, content }) => {
  return (
    <div className="reason flex items-center gap-[10px] p-[10px] text-base border-2 border-[#53ea53] w-full rounded-lg bg-white">
      <div className="reason-number bg-[#fff] text-black p-[14px] rounded-lg text-lg font-bold w-[60px] text-center">
        {number}
      </div>
      <div className="reason-content font-normal">{content}</div>
    </div>
  );
};

export default LeaveReason;
