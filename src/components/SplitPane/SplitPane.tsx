import { useState } from "react";
import {
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/react";

import "./SplitPane.css";
import '../SIdebarContent/SidebarContent.css'
import 'animate.css'

import "./SplitPane.css";
import { Redirect, Route } from "react-router";
import Home from "../../pages/Home";
import { FaAngleDown } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { chatbubbleEllipsesOutline, clipboardOutline } from "ionicons/icons";

type Props = {};

const SplitPane = (props: Props) => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [showSplitMenu, setshowSplitMenu] = useState(false);
  const [showPendingLeave, setShowPendingLeave] = useState(false);
  const [ShowTypeLeave, setShowTypeLeave] = useState(false);
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

  const pendingLeaveHandler = () => {
    if (showPendingLeave === false) {
      setShowPendingLeave(true);
    } else {
      setShowPendingLeave(false);
    }
  };

  const typeLeaveHandler = () => {
    if(ShowTypeLeave === false) {
      setShowTypeLeave(true);
    }
    else {
      setShowTypeLeave(false);
    }
  }

  const splitMenuHandler = () => {
    if (showSplitMenu === false) {
      setshowSplitMenu(true);
    } else {
      setshowSplitMenu(false);
    }
  };

  return (
    <IonSplitPane
      when="xs"
      contentId="main"
      className={`ion-splitpane ${showSplitMenu ? "visible" : "close"}`}
    >
      
      <IonMenu
        contentId="main"
        className={`split-menu ${showSplitMenu ? "" : "close"}`}
      >
        <IonHeader className="menu-header"></IonHeader>

        {/* 
          SideBar Content 
        */}

        {/* <SidebarContent showSplitMenu ={showSplitMenu} /> */}
        <div className={`main-sidebar`}>
          <div className="ion-padding p-10">
            <IonItem className="ion-item" routerLink="/home">
              <div className="sidebar-item">
                <div className="sidebar-icon active animate__animated animate__rollIn">
                  <FontAwesomeIcon
                    icon={faRobot}
                    style={{ color: "#7c3aed" }}
                  />
                </div>
                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                >
                  Chatbot
                </p>
              </div>
            </IonItem>

            <div className="sidebar-item">
              <div
                className={`sidebar-icon ${
                  showSurvey ? "active" : ""
                } animate__animated animate__fadeInLeft`}
              >
                <IonIcon
                  icon={clipboardOutline}
                  onClick={surveyHandler}
                  style={{ color: "#7c3aed" }}
                />
              </div>
              <p
                className={`animate__animated ${
                  showSplitMenu ? "animate__fadeInLeft" : ""
                }`}
              >
                Survey
              </p>
            </div>

            {/* <IonItem className="ion-item leave-sidebar-item" routerLink="/leave"> */}
            <div
              className="sidebar-item leave-sidebar-item"
              onClick={showLeaveDropdownHandler}
            >
              <div className="sidebar-icon animate__animated animate__fadeInUp">
                <IonIcon
                  icon={chatbubbleEllipsesOutline}
                  style={{ color: "#7c3aed" }}
                />
              </div>
              <div className="sidebar-item-content">
                <div className="sidebar-item-content-heading">
                  <p
                    className={`animate__animated ${
                      showSplitMenu ? "animate__fadeInLeft" : ""
                    }`}
                  >
                    Leave
                  </p>
                  <FaAngleDown className={`${LeaveDropdown ? "t-180" : ""}`} />
                </div>
                {LeaveDropdown && (
                  <ul className="dropdown-list">
                    <IonItem
                      className="ion-item animate__animated animate__fadeInLeft dropdown-list-item"
                      onClick={pendingLeaveHandler}
                    >
                      Pending List
                    </IonItem>
                    <IonItem
                      className="ion-item animate__animated animate__fadeInLeft dropdown-list-item"
                      onClick={typeLeaveHandler}
                    >
                      Leave Type
                    </IonItem>
                  </ul>
                )}
              </div>
            </div>
            {/* </IonItem> */}
          </div>
        </div>
      </IonMenu>

      <IonRouterOutlet>
        {/* <Route exact path="/pendingleave">
          <Leave />
        </Route> */}
        {/* <Route exact path="/typeofleave">
          <TypeofLeave />
        </Route> */}
        <Route exact path="/home">
          <Home showSurvey={showSurvey} showPendingLeave={showPendingLeave} ShowTypeLeave={ShowTypeLeave} splitMenuHandler={splitMenuHandler} />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonSplitPane>
  );
};

export default SplitPane;
