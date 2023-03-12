import React from "react";
import { useState } from "react";
import { auth } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const SignIn = () =>{



 const { email, setEmail } = useState("");
 const { password, setPassword } = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(getAuth,email,password)
    .then((userCredential))
  }




  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control" onSubmit={SignIn}>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            
            
              <button className="btn btn-primary" type="submit">Login</button>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
