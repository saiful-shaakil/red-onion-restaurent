import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../OtherPages/Loading/Loading";

const Profile = () => {
  //to get the user
  const [user, loading, error] = useAuthState(auth);
  //to sign out the user
  const logOut = () => {
    signOut(auth);
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <button onClick={logOut}>Sign Out</button>
    </div>
  );
};

export default Profile;
