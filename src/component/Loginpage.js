import React, { useContext, useState } from "react";
import MyContext from "../context/MyContext";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(MyContext);
  const { setIsTokenExists } = context;

  const handleLoginClick = async (e) => {
    e.preventDefault();
    console.log(email + " and " + password);

    if (email !== "" && password !== "") {
      try {
        const url = "https://reqres.in/api/login";
        const token = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }).then((res) => {
          return res.json();
        });

        // store token in localStorage
        if (token !== "user not found") {
          localStorage.setItem("token", JSON.stringify(token));
          // make isTokenExists true
          setIsTokenExists(true);
        }
      } catch (error) {
        console.log("error occurred");
        console.log(error);
      }
    }
  };

  return (
    <div
      id="form"
      className="border space-y-4 px-5 py-10 rounded-lg w-1/4 border-t-4 border-t-teal-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <h1 className="font-bold text-3xl pb-4">Welcome back</h1>
      <form onSubmit={handleLoginClick} className="flex flex-col gap-5">
        <input
          type="email"
          id="email"
          className="border bg-transparent rounded-md p-2"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          minLength={5}
        />
        <input
          type="password"
          id="password"
          className="border bg-transparent rounded-md p-2"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className="p-2 border rounded-md bg-teal-500 duration-300 hover:scale-95"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
