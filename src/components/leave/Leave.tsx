
const Leave = () => {
  return (
      <div className="pending-leaves leave-page">
        <p>Pending Leaves</p>
        <div className="leave-reasons">
          <div className="reason">
            <div className="reason-number">10</div>
            <div className="reason-content">Casual</div>
          </div>
          <div className="reason">
            <div className="reason-number">3</div>
            <div className="reason-content">Privilege</div>
          </div>
          <div className="reason">
            <div className="reason-number">8</div>
            <div className="reason-content">Sick</div>
          </div>
        </div>
      </div>
  );
};

export default Leave;
