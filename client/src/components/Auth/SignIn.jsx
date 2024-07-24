import React, {useContext} from "react";
import { AuthContext } from "../../context/authContext";

function SignIn() {
  const { signIn } = useContext(AuthContext);

  return (
    <button className="p-4 rounded-md text-lg dark:text-white" onClick={signIn}>
      Sign in
    </button>
  );
}

export default SignIn;
