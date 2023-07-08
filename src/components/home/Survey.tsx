import { IonButton, IonIcon } from "@ionic/react";
import { starSharp } from "ionicons/icons";

type Props = {};

const Survey = (props: Props) => {
  return (
    <div className="msg-content bot">
      <div className={`msg-content-inside bot survey`}>
        <div className="survey-heading flex justify-between p-[10px] rounded-t-[10px] bg-[#9257f8]">
          <div className="survey-name">Satisfaction Survey</div>
          <div className="question-no">Question: 1</div>
        </div>
        <div className="survey-question py-[3px] px-[10px] text-black">
          <p className="mt-[5px]">How satisfied are you with the respect from your coworkers</p>
        </div>

        <div className="survey-stars py-[3px] px-[10px]">
          <IonIcon icon={starSharp} className="star-icon" size="large" />
          <IonIcon icon={starSharp} className="star-icon" size="large" />
          <IonIcon icon={starSharp} className="star-icon" size="large" />
          <IonIcon icon={starSharp} className="star-icon" size="large" />
          <IonIcon icon={starSharp} className="star-icon" size="large" />
        </div>
        <div className="survey-btn p-1 flex justify-end align-middle">
          <IonButton className="previous-btn bg-[#ffffff80] rounded cursor-pointer text-[#9257f8]" fill="clear">
            Previous
          </IonButton>
          <IonButton className="next-btn bg-[#9257f8] text-[#fff] rounded cursor-pointer" fill="clear">
            Next
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default Survey;
