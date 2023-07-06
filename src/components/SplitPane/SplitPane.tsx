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
import "../SIdebarContent/SidebarContent.css";
import "animate.css";

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
  const [ShowHrDropdown, setShowHrDropdown] = useState(false);

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
    } else {
      setLeaveDropdown(false);
    }
  };

  const hrDrodownhandler = () => {
    if (ShowHrDropdown === false) {
      setShowHrDropdown(true);
    } else {
      setShowHrDropdown(false);
    }
  };

  const pendingLeaveHandler = () => {
    if (showPendingLeave === false) {
      setShowPendingLeave(true);
    } else {
      setShowPendingLeave(false);
    }
  };

  const typeLeaveHandler = () => {
    if (ShowTypeLeave === false) {
      setShowTypeLeave(true);
    } else {
      setShowTypeLeave(false);
    }
  };

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
                    style={{ color: "#7E55F1", height: "20px", width: "20px" }}
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

            <div className="sidebar-item" onClick={surveyHandler}>
              <div
                className={`sidebar-icon ${
                  showSurvey ? "active" : ""
                } animate__animated animate__fadeInLeft`}
              >
                <IonIcon
                  icon={clipboardOutline}
                  style={{ color: "#7E55F1", height: "20px", width: "20px" }}
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

            <div
              className="sidebar-item leave-sidebar-item"
              onClick={showLeaveDropdownHandler}
            >
              <div className="sidebar-icon animate__animated animate__fadeInUp">
                <IonIcon
                  icon={chatbubbleEllipsesOutline}
                  style={{ color: "#7E55F1", height: "20px", width: "20px" }}
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

            {/* CORE HR */}
            <div className={`sidebar-item ${LeaveDropdown ? "m-68" : ""}`} onClick={hrDrodownhandler}>
              <div
                className={`sidebar-icon ${
                  showSurvey ? "active" : ""
                } animate__animated animate__fadeInLeft`}
                style={{ minWidth: "20px" }}
              >
                <img
                  src="../../../public/Filled_hr.svg"
                  onClick={surveyHandler}
                  style={{ color: "#7E55F1", display: "block" }}
                />
              </div>
              <div className="sidebar-dropdown-container">
                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                >
                  Core HR
                </p>
                <FaAngleDown className={`${ShowHrDropdown ? "t-180" : ""}`} />
              </div>
            </div>
            {/* CORE HR DropDown */}
            <div className={`hr-dropdown ${ShowHrDropdown ? "" : "hide"}`}>
              <p
                className={`animate__animated ${
                  showSplitMenu ? "animate__fadeInLeft" : ""
                }`}
              >
                Document request
              </p>
              <p
                className={`animate__animated ${
                  showSplitMenu ? "animate__fadeInLeft" : ""
                }`}
              >
                Policies
              </p>
            </div>

          </div>
        </div>
      </IonMenu>

      <IonRouterOutlet>
        <Route exact path="/home">
          <Home
            showSurvey={showSurvey}
            showPendingLeave={showPendingLeave}
            ShowTypeLeave={ShowTypeLeave}
            splitMenuHandler={splitMenuHandler}
          />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonSplitPane>
  );
};

export default SplitPane;
