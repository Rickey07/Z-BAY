import React, { useState } from 'react'
import LoginRegisterContainer from '../Containers/LoginRegisterContainer';

const Login = () => {
  const [currentPage,setCurrentPage] = useState("login");

  return (
    <>
    <LoginRegisterContainer/>
    </>
  )
}

export default Login