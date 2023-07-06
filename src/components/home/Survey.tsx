import { IonButton, IonIcon } from "@ionic/react";
import { starSharp } from "ionicons/icons";
import React from "react";

type Props = {};

const Survey = (props: Props) => {
  return (
    <div className="msg-content bot">
      <div className={`msg-content-inside bot survey`}>
        <div className="survey-heading">
          <div className="survey-name">Satisfaction Survey</div>
          <div className="question-no">Question: 1</div>
        </div>
        <div className="survey-question">
          <p>How satisfied are you with the respect from your coworkers</p>
        </div>

        <div className="survey-stars">
          <IonIcon icon={starSharp} className="star-icon" size="large" />
          <IonIcon icon={starSharp} className="star-icon" size="large" />
          <IonIcon icon={starSharp} className="star-icon" size="large" />
          <IonIcon icon={starSharp} className="star-icon" size="large" />
          <IonIcon icon={starSharp} className="star-icon" size="large" />
        </div>
        <div className="survey-btn">
          <IonButton className="previous-btn" fill="clear">
            Previous
          </IonButton>
          <IonButton className="next-btn" fill="clear">
            Next
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default Survey;
