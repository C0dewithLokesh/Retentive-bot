import LeaveReason from "./LeaveReason";

interface Reason {
  number: number;
  content: string;
}

const reasons: Reason[] = [
  { number: 10, content: "Casual" },
  { number: 3, content: "Privilege" },
  { number: 8, content: "Sick" },
];

const Leave = () => {
  return (
    <div className="pending-leaves leave-page w-full font-medium">
      <p>Pending Leaves</p>
      <div className="leave-reasons flex center flex-col gap-[10px] px-1 pb-2">
        {reasons.map((reason) => (
          <LeaveReason
            key={reason.number}
            number={reason.number}
            content={reason.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Leave;
