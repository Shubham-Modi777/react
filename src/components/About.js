import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is about page of dummy Food point APP.</h2>
      <User name={"Shubham Modi functional"} location={"Pune, Maharastra"} />
      <UserClass name={"Shubham Modi class"} location={"Dhanbad, Jharkhand"} />
    </div>
  );
};

export default About;
