import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Home from "../home/Home";
import { clipboardOutline } from "ionicons/icons";
import { useState } from "react";

const Sidebar = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  // Survey Handlers
  const surveyHandler = () => {
    setShowSurvey((prevValue) => !prevValue);
    // sidebarHandler();
  };

  return (
    <>
      <IonMenu contentId="main-content" className="sidebar-menu mt-[60px]">
        <IonHeader className="hidden">
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div
            className="sidebar-item"
            // onClick={sidebarHandler}
          >
            <div className="sidebar-icon active animate__animated animate__rollIn">
              <FontAwesomeIcon
                icon={faRobot}
                style={{ color: "#7E55F1", height: "20px", width: "20px" }}
              />
            </div>
            <p className={`animate__animated animate__fadeInLeft`}>Chatbot</p>
          </div>

          {/* SURVEY */}
          <IonMenuToggle>
            <div className="sidebar-item" onClick={surveyHandler}>
              <div
                // className={`sidebar-icon ${
                //   showSurvey ? "active" : ""
                // } animate__animated animate__fadeInLeft`}
              >
                <IonIcon
                  icon={clipboardOutline}
                  style={{ color: "#7E55F1", height: "20px", width: "20px" }}
                />
              </div>
              <p
                // className={`animate__animated ${
                //   showSplitMenu ? "animate__fadeInLeft" : ""
                // }`}
              >
                Survey
              </p>
            </div>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Home
            showSurvey={showSurvey}
          />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Sidebar;
