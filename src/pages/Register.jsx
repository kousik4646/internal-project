
import React, { useState,useEffect } from 'react'
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate=useNavigate()
    const [Emailaddress,setEmailaddress]= useState()
    const [Password,setPassword]=useState()
    const register=async()=>{
        await localStorage.setItem("email",Emailaddress);
        await localStorage.setItem('password',Password);
        

    }
    
   useEffect(()=>{
    register()
   },[])
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Emailaddress</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={Emailaddress}onChange={(e)=>setEmailaddress(e.target.value)}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={Password}onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={()=>navigate('/login')}>
                                {/* <Link to="/login" className="text-decoration-underline text-info">register</Link> */}
                                register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register