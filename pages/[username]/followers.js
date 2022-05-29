// import libaries and ui modules.
import { useState, useEffect } from "react";

const Followers = () => {
  // Create a state variable to store users in this component. and a function to update and modify the 'users' state.
  const [users, setUsers] = useState([]);
  // use the react hook useEffect and the libary axios to fetch user followers from Github API.

  // useEffect is a hook that runs a function after the component is rendered.

  // use .map function and loop over the users and display them in a table.
  return <div>followers</div>;
};

export default Followers;
