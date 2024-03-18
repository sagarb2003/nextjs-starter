import axios from "axios";

//This is the bad way because getUser runs on the server.
//This means we’re sending a request from a server back to the server
// async function getUser() {
//   try {
//     const response = await axios.get("http://localhost:3000/api/user");
//     return response.data;
//   } catch (e) {
//     console.log(e);
//   }
// }

//This better solution to fetch the details of user from a server component
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();
import client from "@/db";
async function getUser() {
  const response = await client.user.findFirst({});

  return {
    email: response?.email,
    password: response?.password,
  };
}

export default async function Home() {
  const user = await getUser();
  // console.log(user);

  return (
    <div>
      {user.email} <br />
      {user.password}
    </div>
  );
}
