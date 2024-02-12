
import React, { useState } from 'react'
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const [Emailaddress,setEmailaddress]=useState() 
  const [Password,setPassword]=useState()
  const validate=async()=>{
    let Emailaddress=await localStorage.getItem('Emailaddress')
    let Password=await localStorage.getItem('Password')
    console.log("Emailaddress",Emailaddress,"Password",Password)
   
    navigate('/')
    if (Emailaddress==Emailaddress&&Password==Password) {
        console.log("valid data")
        alert('login success')

    } else {
      console.log("invalid data")
    }
  
      console.log("login page")

  }
  
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Emailaddress</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={Emailaddress}onChange={(e)=>setEmailaddress(e.target.value)}  
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={Password}onChange={(e)=>setPassword(e.target.value)}  
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={validate} >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
