import React, { useState, useEffect } from 'react';
import Auth from './components/Register/Auth';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function App() {

  const [respData, setRespData] = useState();
  
  return (
    <React.Fragment>

     <div className="app-container">
    <Auth setData={setRespData}/>
     </div>

     <GoogleOAuthProvider clientId="235213662998-9eqe351jifk2urdcj1q6k38hfru1bcme.apps.googleusercontent.com">
     <GoogleLogin
  onSuccess={credentialResponse => {
    setRespData(JSON.stringify(credentialResponse));

    //1. Пост-запрос на эндпоинт на сервере
    fetch("https://f528-37-215-41-154.ngrok-free.app/Auth/GoogleAuthentication", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      body: JSON.stringify(credentialResponse)
    })

  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>

     </GoogleOAuthProvider>
     
     <p className="responce-data">
      {respData}
     </p>

    </React.Fragment>    
  );
}

export default App;
