import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const SignOut = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <button
      className="p-4 rounded-md text-lg dark:text-white"
      onClick={signOut}
    >
      Sign out
    </button>
  );
};

export default SignOut;
