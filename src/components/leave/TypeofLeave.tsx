import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

type Props = {};

const TypeofLeave = (props: Props) => {
  return (
    <div className="leave-form leave-page font-medium">
      <p>Type of Leave</p>
      <div className="type">
        <div className="type-btns">
          <div className="type-btn">Casual</div>
          <div className="type-btn">Sick</div>
          <div className="type-btn">Privilege</div>
        </div>
      </div>
      <div className="leave-date">
        <label htmlFor="Date">Date</label>
        <input type="date" />
      </div>
      <div className="leave-reason">
        <label htmlFor="leave-reason">Reason</label>
        <textarea name="leave-reason" placeholder="Type reason here..." id="" cols={30} rows={10}></textarea>
      </div>
      <button className="form-btn">Submit</button>
    </div>
  );
};

export default TypeofLeave;
