import React from 'react'
import {GoogleLoginButton} from 'react-social-login-buttons'
import {LoginSocialGoogle} from 'reactjs-social-login'
function Google() {
  return (
    <div>
         <LoginSocialGoogle
        client_id={"785681375944-mc7ifpakul8lq47phqk83jg8120c3pat.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
  )
}

export default Google