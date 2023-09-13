import React from "react";

export const Sidebar = () => {
  return (
    <div className="sticky top-16 min-h-[88vh] border-r px-2 py-4 pt-10 space-y-5">
      <div id="userImg" className="h-24 w-24 mx-auto rounded-full border"></div>
      <div id="userInfo" className="space-y-5">
        <h1 className="text-xl font-semibold">Sam khan</h1>
        <p>Male</p>
        <h2>
          <i className="fa-solid fa-location-dot text-red-500"></i> India
        </h2>
        <p>
          <i className="fa-solid fa-envelope"></i> test@test.com
        </p>
        <p>
          <i className="fa-solid fa-phone"></i> +91 4638473947
        </p>
      </div>
    </div>
  );
};
