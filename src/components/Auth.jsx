import React from "react";
import { useState } from "react";
import { auth ,googleProvider } from "../firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";


export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try{
    await createUserWithEmailAndPassword(auth,email,password)
    }catch (err){
        console.error()
    }
  };
  const signInWithGoogle = async () => {
    try{
    await signInWithPopup(auth,googleProvider)
    }catch (err){
        console.error()
    }
  };


  const logout = async () => {
    try{
    await signOut(auth)
    }catch (err){
        console.error()
    }
  };



  return (
    <div>
      <input
       placeholder="Email..."
       onChange={(e)=>setEmail(e.target.value)}
       type='email'
        />

      <input placeholder="Password.." 
        onChange={(e)=>setPassword(e.target.value)}
        type='password'
      />
      <button onClick={signIn}>Sign In</button>

      <button onClick={signInWithGoogle}>Sign In With Google </button>   
    <button onClick={logout}>Logout</button>
    </div>


  );
};
