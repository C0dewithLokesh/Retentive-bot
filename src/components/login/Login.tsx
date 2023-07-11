import { IonButton, IonInput, IonLabel, IonPage } from '@ionic/react'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <IonPage className="login-page p-3 flex items-center justify-center">
      <div className="login-container p-5 rounded-md bg-[#f7f5f5] text-black">
        <h1 className='w-full text-[24px] mb-3 text-center'>Login</h1>
        <form>
          <label className="w-full block my-2">Username</label>
          <input type="text" className='p-3 block w-full rounded-md border-gray-400 border-solid border-[1px] outline-gray-600' placeholder='username' />
          <label className="w-full block my-2">Password</label>
          <input type="Password" className='p-3 block w-full rounded-md border-gray-400 border-solid border-[1px] outline-gray-600' placeholder='password' />
          <IonButton routerLink="/home" className="login-btn py-[10px] bg-[#7c3aed] text-lg rounded-[50px] text-white w-[50%] mt-[10px] ml-[50px]">Login</IonButton>
        </form>
      </div>
    </IonPage>
  )
}

export default Login