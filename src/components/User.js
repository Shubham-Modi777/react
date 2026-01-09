import { useState } from "react";

const User = ({ name, location }) => {
  //const { name, location } = props;
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  return (
    <div className="flex flex-wrap p-2 m-2 border-solid rounded-sm w-60 bg-amber-200 cursor-pointer">
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h4>Contact: shubham@gamil.com</h4>
    </div>
  );
};

export default User;
