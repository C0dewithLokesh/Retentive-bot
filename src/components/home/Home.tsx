import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { sendOutline } from "ionicons/icons";

import { useRef, useState } from "react";
import Leave from "../leave/Leave";
import TypeofLeave from "../leave/TypeofLeave";
import Survey from "./Survey";
import Resignation from "../corehr/Resignation";
import Reliving from "../corehr/Reliving";
import Policies from "../corehr/Policies";
import Reimbursement from "../employee/Reimbursement";
import Payslips from "../payroll/Payslips";
import DocumentRequest from "../corehr/DocumentRequest";
import HolidaySheet from "../leave/HolidaySheet";
import MedicalExpensis from "../employee/MedicalExpensis";

interface Message {
  text: string;
  isUser: boolean;
}

interface HomeProps {
  showSurvey: boolean;
  showPendingLeave: boolean;
  ShowTypeLeave: boolean;
  showHolidaySheet: boolean;
  splitMenuHandler: any;
  showDocumentRequest: boolean;
  showResignation: boolean;
  showPolicies: boolean;
  showReliving: boolean;
  showReimbursement: boolean;
  showPayslips: boolean;
}

const Home: React.FC<HomeProps> = ({
  showSurvey,
  showPendingLeave,
  ShowTypeLeave,
  showHolidaySheet,
  splitMenuHandler,
  showDocumentRequest,
  showResignation,
  showPolicies,
  showReliving,
  showReimbursement,
  showPayslips
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");

  const userInputRef = useRef<HTMLIonTextareaElement>(null);

  const handleUserMessage = () => {
    const enteredInput = userInputRef.current!.value;

    const newMessage: Message = {
      text: `${enteredInput}`,
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setUserInput("");

    setTimeout(() => {
      const botMessage: Message = {
        text: `${enteredInput}`,
        isUser: false,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 500);
  };

  return (
    <IonPage id="main-content" className="home-page">
      {/* HEADER */}
      <IonHeader className="header shadow-none border-b border-[#7c3aed] w-screen">
        <IonToolbar className="header-wrapper flex flex-row items-center">
          <IonButtons
            slot="start"
            className="menu-ion-btn"
            onClick={splitMenuHandler}
          >
            <IonMenuButton
              className="menu-ion-btn"
              autoHide={false}
            ></IonMenuButton>
          </IonButtons>

          <div className="header-container flex items-center justify-between px-5">
            <div className=" max-w-fit">
              <h1 className="user-name mt-5 mb-0 font-medium text-[20px]">Retentive Bot</h1>
              <p className="user-status mb-4 text-sm text-[#4ac14a] mt-1">
                Active
              </p>
            </div>
            <IonButton routerLink="/login" className="logout-btn py-[10px] bg-[#7c3aed] text-sm rounded-[50px]">LogOut</IonButton>
          </div>
          
        </IonToolbar>
      </IonHeader>

      <div className="ion-padding msg-section flex flex-col items-start overflow-y-scroll w-full p-[10px]">
        <div className="msg-container max-h-full w-full overflow-y-scroll flex flex-col-reverse">
          {messages
            .slice()
            .reverse()
            .map((message, index) => (
              <div
                key={index}
                className={`msg-content ${message.isUser ? "user" : "bot"}`}
              >
                <div
                  className={`msg-content-inside ${
                    message.isUser ? "user" : "bot"
                  }`}
                >
                  <span
                    className={`${message.isUser ? "user" : "bot"} msg-text`}
                  >
                    {message.text}
                  </span>
                </div>
              </div>
            ))
          }

          {/* Default Messages */}

          {/* Payroll Components */}
          {showPayslips && <Payslips />}

          {/* Employee Components */}
          {/* <MedicalExpensis /> */}
          {showReimbursement && <Reimbursement />}

          {/* CORE HR */}
          {showReliving && <Reliving />}
          {showPolicies && <Policies />}
          {showResignation && <Resignation />}
          {showDocumentRequest && <DocumentRequest />}

          {/* Leave */}
          {showHolidaySheet && <HolidaySheet />}
          {ShowTypeLeave && <TypeofLeave />}
          {showPendingLeave && <Leave />}

          {showSurvey && <Survey />}

          <div className="msg-content user">
            <div className={`msg-content-inside user`}>
              <span className="msg-text">
                Hey let's have survey on Satisfaction Survey and refresh your
                mind.
              </span>
            </div>
          </div>

          <div className="msg-content user">
            <div className={`msg-content-inside user`}>
              <span className="msg-text">
                "However many holy words you read, However many you speak, What
                good will they do you If you do not act on upon them?"
                <br />
                -Buddha
              </span>
            </div>
          </div>

          <div className="msg-content user">
            <div className={`msg-content-inside user`}>
              <span className="msg-text">Good Afternoon</span>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="msg-input-container w-full">
          <IonItem className="msg-input rounded-lg w-full border-2 border-gray-400">
            <IonTextarea
              autoGrow={true}
              rows={1}
              placeholder="Write your message here..."
              value={userInput}
              ref={userInputRef}
              onIonChange={(e) => setUserInput(e.detail.value!)}
            ></IonTextarea>
            <IonIcon icon={sendOutline} onClick={handleUserMessage} />
          </IonItem>
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
