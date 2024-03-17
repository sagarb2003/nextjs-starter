"use client"

export function SignIn(){
    return (
      <div className="border-2 border-slate-200 w-52 m-48 shadow-xl h-64 ">
        <h1 className="font-bold text-2xl text-center  mt-2">Sign In</h1>
        <div className="flex flex-col justify-center m-4 p-2">
          <input
            type="text"
            placeholder="email"
            className="w-36 rounded-sm  border-2 border-slate-300 shadow-2xl mb-2 p-2"
          />
          <input
            type="text"
            placeholder="password"
            className="w-36 p-2 rounded-sm  border-2 border-slate-300 shadow-2xl"
          />
        </div>
        <button className="bg-slate-300 w-32 p-2 ml-7 rounded-md" onClick={()=>{console.log("button clicked");}
        }>
          Sign in
        </button>
      </div>
    );
}