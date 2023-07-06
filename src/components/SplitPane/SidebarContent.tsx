import { useState } from "react";
import 'animate.css';
import { FaAngleDown } from 'react-icons/fa';

import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonIcon, IonItem } from "@ionic/react";
import { chatbubbleEllipsesOutline, clipboardOutline } from "ionicons/icons";


const SidebarContent = ({ showSplitMenu }) => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [LeaveDropdown, setLeaveDropdown] = useState(false);

  const surveyHandler = () => {
    if (showSurvey === true) {
      setShowSurvey(false);
    } else {
      setShowSurvey(true);
    }
  };

  const showLeaveDropdownHandler = () => {
    if (LeaveDropdown === false) {
      setLeaveDropdown(true);
    }
    else {
      setLeaveDropdown(false);
    }
  }

  return (
    <div className={`main-sidebar`}>
      <div className="ion-padding p-10">
      <IonItem className="ion-item" routerLink="/home">
          <div className="sidebar-item">
            <div className="sidebar-icon active animate__animated animate__rollIn">
              <FontAwesomeIcon icon={faRobot} style={{ color: "#7c3aed" }} />
            </div>
            <p className={`animate__animated ${showSplitMenu ? 'animate__fadeInLeft' : ''}`}>Chatbot</p>
          </div>
        </IonItem>

        <div className="sidebar-item">
          <div className={`sidebar-icon ${showSurvey ? "active" : ""} animate__animated animate__fadeInLeft`}>
            <IonIcon icon={clipboardOutline} onClick={surveyHandler} style={{color: '#7c3aed'}} />
          </div>
          <p className={`animate__animated ${showSplitMenu ? 'animate__fadeInLeft' : ''}`}>Survey</p>
        </div>

        {/* <IonItem className="ion-item leave-sidebar-item" routerLink="/leave"> */}
          <div className="sidebar-item leave-sidebar-item" onClick={showLeaveDropdownHandler}>
            <div className="sidebar-icon animate__animated animate__fadeInUp">
              <IonIcon icon={chatbubbleEllipsesOutline} style={{color: '#7c3aed'}} />
            </div>
            <div className="sidebar-item-content">
              <div className="sidebar-item-content-heading">
                <p className={`animate__animated ${showSplitMenu ? 'animate__fadeInLeft' : ''}`}>Leave</p>
                <FaAngleDown className={`${LeaveDropdown ? 't-180' : ''}`} />
              </div>
              { LeaveDropdown && <ul className="dropdown-list">
                <IonItem className='ion-item animate__animated animate__fadeInLeft dropdown-list-item' routerLink="/pendingleave">Pending List</IonItem>
                <IonItem className='ion-item animate__animated animate__fadeInLeft dropdown-list-item' routerLink="/typeofleave">Leave Type</IonItem>
              </ul>}
            </div>
            
          </div>
        {/* </IonItem> */}
        
      </div>
    </div>
  );
};

export default SidebarContent;
