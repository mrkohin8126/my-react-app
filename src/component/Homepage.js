import React, { useState } from "react";
import Header from "./Header";
import { Sidebar } from "./Sidebar";
import RegisterUser from "./RegisterUser";
import UsersList from "./UsersList";

const Homepage = () => {
  return (
    <div>
      <Header />
      <section id="container" className="flex relative ">
        <div id="Sidebar" className="sticky top-24 w-1/5">
          <Sidebar />
        </div>
        <section id="content" className="w-full space-y-10">
          <RegisterUser />
          <UsersList />
        </section>
      </section>
    </div>
  );
};

export default Homepage;
