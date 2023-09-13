import React, { useState } from "react";
import MyContext from "./MyContext";

const GlobalState = (props) => {
  const [isTokenExists, setIsTokenExists] = useState(
    JSON.parse(localStorage.getItem("token")) !== null ? true : false
  );

  // add user
  const [usersList, setUsersList] = useState(
    JSON.parse(localStorage.getItem("usersList")) ?? []
  );

  const addUser = (user) => {
    setUsersList(usersList.concat({ ...user, key: Date() }));
    localStorage.setItem(
      "usersList",
      JSON.stringify(usersList.concat({ ...user, key: Date() }))
    );
  };

  const deleteUser = (key) => {
    const filteredUsers = usersList.filter((currUser) => currUser.key !== key);
    setUsersList(filteredUsers);
    localStorage.setItem("usersList", JSON.stringify(filteredUsers));
  };

  return (
    <MyContext.Provider
      value={{
        isTokenExists,
        setIsTokenExists,
        addUser,
        deleteUser,
        usersList,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default GlobalState;
