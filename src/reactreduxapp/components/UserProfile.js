import classes from "./UserProfile.module.css";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const username = useSelector((state) => state.auth.userdetails.username);
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <h1>Welcome {username}</h1>
    </main>
  );
};

export default UserProfile;
