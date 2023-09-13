import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const UsersList = () => {
  const context = useContext(MyContext);
  const { usersList } = context;

  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold">Users</h1>
      {usersList.length !== 0 ? (
        <div className="grid grid-cols-4 gap-5 min-h-[100px] px-2 py-4">
          {usersList.map((currUser, index) => (
            <UserItem key={index} user={currUser} />
          ))}
        </div>
      ) : (
        <h1 className="text-center mx-auto my-52">No users to display</h1>
      )}
    </div>
  );
};
export default UsersList;

const UserItem = (props) => {
  const context = useContext(MyContext);
  const { deleteUser } = context;
  const { name, email, profileImage, key } = props.user;
  console.log();
  return (
    <div className="space-y-3 border text-white p-4 rounded-md">
      <div className="h-24 w-24  mx-auto rounded-full overflow-hidden">
        <img
          className="  w-full h-full object-cover"
          src={profileImage}
          alt=""
        />
      </div>
      <h1 className="text-lg font-bold">{name}</h1>
      <p className="opacity-75">{email}</p>
      <div id="buttons" className="space-x-4">
        <button
          onClick={() => deleteUser(key)}
          className="text-red-500 border rounded-md py-1 px-3 hover:border-red-500 duration-300"
        >
          Delete
        </button>
        <button className="text-blue-500 border rounded-md py-1 px-3 hover:border-blue-500 duration-300">
          Edit
        </button>
      </div>
    </div>
  );
};
