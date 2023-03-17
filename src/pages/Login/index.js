import React, { useState } from "react"
import AuthLayout from "../../common/components/layout/Auth"
import { Input } from "antd"
import { auth, authService } from "../../utils/firebase"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        alert("You are logged in!")
      })
      .catch((err) => setLoginError(err.message))
  }

  return (
    <AuthLayout
      errorMessage={loginError}
      submitText="Login"
      redirectLink="/auth/register"
      redirectLinkText="Register"
      handleSubmit={handleLogin}
    >
      <Input
        autoComplete="email"
        label="Email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        autoComplete="password"
        label="Password"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </AuthLayout>
  )
}

export default Login
