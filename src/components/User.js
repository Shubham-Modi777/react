import { useState } from "react";

const User = ({ name, location }) => {
  //const { name, location } = props;
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h4>Contact: shubham@gamil.com</h4>
    </div>
  );
};

export default User;
