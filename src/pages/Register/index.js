import React, { useState } from "react"
import AuthLayout from "../../common/components/layout/Auth"
import { Input } from "antd"
import { auth, authService } from "../../utils/firebase"

function Register() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signUpError, setSignUpError] = useState("")

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(authService, email, password)
      .then(() => {
        // auth.updateProfile(authService.currentUser, {
        //   displayName: username,
        // })
        alert("Registered!")
      })
      .catch((err) => setSignUpError(err.message))
  }

  return (
    <AuthLayout
      errorMessage={signUpError}
      submitText="Register"
      redirectLink="/auth/login"
      redirectLinkText="Login"
      handleSubmit={handleRegister}
    >
      <Input
        label="Email"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        label="Username"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
    </AuthLayout>
  )
}

export default Register
