"use client";

import axios from "axios";
import { useState } from "react";
// import { redirect } from "next/navigation";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function buttonHandler() {
    try {
      const response = await axios.post("http://localhost:3000/api/user", {
        email,
        password,
      });
    } catch (e) {
       console.error("Error signing in:", e);
      // alert("Error in signing in");
    }
  }
  return (
    <div className="border-2 border-slate-200 w-52 m-48 shadow-xl h-64 ">
      <h1 className="font-bold text-2xl text-center  mt-2">Sign In</h1>
      <div className="flex flex-col justify-center m-4 p-2">
        <input
          type="text"
          placeholder="email"
          className="w-36 rounded-sm  border-2 border-slate-300 shadow-2xl mb-2 p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          className="w-36 p-2 rounded-sm  border-2 border-slate-300 shadow-2xl"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-slate-300 w-32 p-2 ml-7 rounded-md"
        onClick={buttonHandler}
        type="button"
      >
        Sign in
      </button>
    </div>
  );
}
