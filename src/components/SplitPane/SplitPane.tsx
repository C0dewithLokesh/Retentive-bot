import { useState } from "react";
import {
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/react";

import "animate.css";

import { Route } from "react-router";
import Home from "../home/Home";
import { FaAngleDown } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { chatbubbleEllipsesOutline, clipboardOutline } from "ionicons/icons";

interface Dropdowns {
  [key: string]: boolean;
}

const SplitPane = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [showSplitMenu, setshowSplitMenu] = useState(false);
  const [dropdowns, setDropdowns] = useState<Dropdowns>({
    leaveDropdown: false,
    hrDropdown: false,
    employeeDropdown: false,
    payrollDropdown: false,
    // Add more dropdowns here if needed
  });

  const [showPendingLeave, setShowPendingLeave] = useState(false);
  const [ShowTypeLeave, setShowTypeLeave] = useState(false);
  const [showDocumentRequest, setShowDocumentRequest] = useState(false);
  const [showResignation, setShowResignation] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);
  const [showReliving, setShowReliving] = useState(false);
  const [showReimbursement, setShowReimbursement] = useState(false);
  const [showPayslips, setShowPayslips] = useState(false);

  const splitMenuHandler = () => {
    if (showSplitMenu === false) {
      setshowSplitMenu(true);
    } else {
      setshowSplitMenu(false);
    }
    resetAllDropdowns();
  };

  const dropdownHandler = (dropdownName: string, closeDropdown?: boolean) => {
    if (showSplitMenu === false) {
      setshowSplitMenu(true);
    }

    setDropdowns((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));

    if (closeDropdown) {
      setshowSplitMenu(false);
    }
  };

  // reset all dropdown value
  const resetAllDropdowns = () => {
    setDropdowns((prevState) => ({
      ...prevState,
      leaveDropdown: false,
      hrDropdown: false,
      employeeDropdown: false,
      payrollDropdown: false,
    }));
  };

  // Autoclose sidebar and dropdown
  const sidebarHandler = () => {
    resetAllDropdowns();
    setshowSplitMenu(false);
  };

  // Survey Handlers
  const surveyHandler = () => {
    setShowSurvey((prevValue) => !prevValue);
    sidebarHandler();
  };

  // Leave Handlers
  const pendingLeaveHandler = () => {
    setShowPendingLeave((prevValue) => !prevValue);
    sidebarHandler();
  };

  const typeLeaveHandler = () => {
    setShowTypeLeave((prevValue) => !prevValue);
    sidebarHandler();
  };

  // Core HR handlers
  const documentRequestHandler = () => {
    setShowDocumentRequest((prevValue) => !prevValue);
    sidebarHandler();
  };

  const resignationHandler = () => {
    setShowResignation((prevValue) => !prevValue);
    sidebarHandler();
  };

  const policiesHandler = () => {
    setShowPolicies((prevValue) => !prevValue);
    sidebarHandler();
  };

  const relivingHandler = () => {
    setShowReliving((prevValue) => !prevValue);
    sidebarHandler();
  };

  // Employee handlers
  const reimbursementHandler = () => {
    setShowReimbursement((prevValue) => !prevValue);
    sidebarHandler();
  };

  // Payslips handlers
  const payslipsHandler = () => {
    setShowPayslips((prevValue) => !prevValue);
    sidebarHandler();
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
        <IonHeader className="menu-header hidden shadow-none"></IonHeader>

        {/* 
          SideBar Content 
        */}
        <div className={`main-sidebar w-40 h-full`}>
          <div className="ion-padding p-10">
            {/* ChatBot */}
            <IonItem className="ion-item" routerLink="/home">
              <div className="sidebar-item" onClick={sidebarHandler}>
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

            {/* SURVEY */}
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

            {/* Leave */}
            <div
              className={`sidebar-item`}
              onClick={() => dropdownHandler("leaveDropdown")}
            >
              <div
                className={`sidebar-icon ${
                  showSurvey ? "active" : ""
                } animate__animated animate__fadeInLeft`}
                style={{ minWidth: "20px" }}
              >
                <IonIcon
                  icon={chatbubbleEllipsesOutline}
                  style={{ color: "#7E55F1", height: "20px", width: "20px" }}
                />
              </div>
              <div className="sidebar-dropdown-container">
                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                >
                  Leave
                </p>
                <FaAngleDown
                  className={`${dropdowns.leaveDropdown ? "t-180" : ""}`}
                />
              </div>
            </div>

            {/* Leave DropDown */}
            {dropdowns.leaveDropdown && (
              <div className={`hr-dropdown`}>
                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                  onClick={pendingLeaveHandler}
                >
                  Leave Overview
                </p>

                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                  onClick={typeLeaveHandler}
                >
                  Apply for Leave
                </p>
              </div>
            )}

            {/* CORE HR */}
            <div
              className={`sidebar-item`}
              onClick={() => dropdownHandler("hrDropdown")}
            >
              <div
                className={`sidebar-icon ${
                  showSurvey ? "active" : ""
                } animate__animated animate__fadeInLeft`}
                style={{ minWidth: "20px" }}
              >
                <img
                  src="/Filled_hr.svg"
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
                <FaAngleDown
                  className={`${dropdowns.hrDropdown ? "t-180" : ""}`}
                />
              </div>
            </div>

            {/* CORE HR DropDown */}
            {dropdowns.hrDropdown && (
              <div className={`hr-dropdown`}>
                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                  onClick={documentRequestHandler}
                >
                  Document request
                </p>

                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                  onClick={resignationHandler}
                >
                  Apply for resignation
                </p>

                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                  onClick={policiesHandler}
                >
                  Policies
                </p>

                <p
                  className={`text-end animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                  onClick={relivingHandler}
                >
                  Apply for reliving letter
                </p>
              </div>
            )}

            {/* Employee Benefits */}
            <div
              className={`sidebar-item`}
              onClick={() => dropdownHandler("employeeDropdown")}
            >
              <div
                className={`sidebar-icon ${
                  showSurvey ? "active" : ""
                } animate__animated animate__fadeInLeft`}
                style={{ minWidth: "20px" }}
              >
                <img
                  src="/redeem_FILL0_wght300_GRAD0_opsz24 1.svg"
                  style={{ color: "#7E55F1", display: "block" }}
                />
              </div>
              <div className="sidebar-dropdown-container">
                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                >
                  Employee Benefits
                </p>
                <FaAngleDown
                  className={`${dropdowns.employeeDropdown ? "t-180" : ""}`}
                />
              </div>
            </div>

            {/* Employee Dropdown */}
            {dropdowns.employeeDropdown && (
              <div className={`hr-dropdown`}>
                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                  onClick={reimbursementHandler}
                >
                  Reimbursement
                </p>
              </div>
            )}

            {/* Payroll */}
            <div
              className={`sidebar-item`}
              onClick={() => dropdownHandler("payrollDropdown")}
            >
              <div
                className={`sidebar-icon ${
                  showSurvey ? "active" : ""
                } animate__animated animate__fadeInLeft`}
                style={{ minWidth: "20px" }}
              >
                <img
                  src="/Filled_payslip.svg"
                  style={{ color: "#7E55F1", display: "block" }}
                />
              </div>

              <div className="sidebar-dropdown-container">
                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                >
                  Payroll
                </p>
                <FaAngleDown
                  className={`${dropdowns.payrollDropdown ? "t-180" : ""}`}
                />
              </div>
            </div>

            {/* Payroll Dropdown */}
            {dropdowns.payrollDropdown && (
              <div className={`hr-dropdown`}>
                <p
                  className={`animate__animated ${
                    showSplitMenu ? "animate__fadeInLeft" : ""
                  }`}
                  onClick={payslipsHandler}
                >
                  Payslips
                </p>
              </div>
            )}
          </div>
        </div>
      </IonMenu>

      {/* HOME Component */}
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home
            showSurvey={showSurvey}
            showPendingLeave={showPendingLeave}
            ShowTypeLeave={ShowTypeLeave}
            splitMenuHandler={splitMenuHandler}
            showDocumentRequest={showDocumentRequest}
            showResignation={showResignation}
            showPolicies={showPolicies}
            showReliving={showReliving}
            showReimbursement={showReimbursement}
            showPayslips={showPayslips}
          />
        </Route>
      </IonRouterOutlet>
    </IonSplitPane>
  );
};

export default SplitPane;
