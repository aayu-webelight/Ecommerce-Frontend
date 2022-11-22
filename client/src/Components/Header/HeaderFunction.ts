import React from "react";

interface IUser {
  name: string;
  email: string;
  phonenumber: string;
  password: string;
  address: string;
}

export async function HeaderFunction(token: string) {
  const data = await fetch("http://localhost:3001/user/find", {
    method: "GET",
    headers: {
      authorization: token,
    },
  });
  return data.json();
}
