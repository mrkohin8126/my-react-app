import React, { useContext, useState } from "react";
import MyContext from "../context/MyContext";

const RegisterUser = () => {
  const context = useContext(MyContext);
  const { addUser } = context;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [country, setCountry] = useState("");

  const countriesList = ["India", "America", "SriLanka", "Russia", "China"];

  return (
    <div className="w-1/2 mx-auto ">
      <div
        id="form"
        className="border space-y-4 px-5 py-10 rounded-lg border-t-4 border-t-teal-500"
      >
        <h1 className="font-bold text-3xl pb-4">Add User</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addUser({
              name,
              email,
              number,
              gender,
              hobby,
              profileImage,
              country,
            });
            // clear all inputs
            setName("");
            setEmail("");
            setNumber("");
            setGender("");
            setHobby("");
            setProfileImage("");
            setCountry("");
          }}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            id="name"
            className="border bg-transparent rounded-md p-2"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            minLength={5}
          />
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
            type="text"
            id="number"
            className="border bg-transparent rounded-md p-2"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter your number"
          />
          {/* gender */}
          <div id="gender" className="space-x-4 flex">
            <div className="space-x-2">
              <input
                type="radio"
                for="male"
                id="male"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />
              <label for="male">Male</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                for="female"
                id="female"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />
              <label for="female">Female</label>
            </div>
          </div>
          {/* hobbies */}
          <div id="hobbies" className="flex gap-3">
            <div className="space-x-2">
              <input
                type="checkbox"
                id="dancing"
                onChange={(e) => setHobby(e.target.checked)}
              />
              <label for="dancing">Dancing</label>
            </div>
            <div className="space-x-2">
              <input
                type="checkbox"
                id="coding"
                onChange={(e) => setHobby(e.target.checked)}
              />
              <label for="coding">Coding</label>
            </div>
            <div className="space-x-2">
              <input
                type="checkbox"
                id="reading"
                onChange={(e) => setHobby(e.target.checked)}
              />
              <label for="reading">Reading</label>
            </div>
          </div>
          {/* profile image */}
          <input
            type="text"
            id="image"
            className="border bg-transparent rounded-md p-2"
            placeholder="Enter your image"
            onChange={(e) => setProfileImage(e.target.value)}
            value={profileImage}
            minLength={5}
          />
          {/* countries */}
          <select
            className="border bg-transparent rounded-md p-2"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {countriesList.map((country, index) => (
              <option
                className="border bg-black rounded-md p-2"
                key={index}
                value={country}
              >
                {country}
              </option>
            ))}
          </select>
          <button
            className="p-2 border rounded-md bg-teal-500 duration-300 hover:scale-95"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
