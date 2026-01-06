import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is about page of dummy Food point APP.</h2>
//       <User name={"Shubham Modi functional"} location={"Pune, Maharastra"} />
//       <UserClass name={"Shubham Modi class"} location={"Dhanbad, Jharkhand"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent component Did Mount");
  }

  render() {
    //console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is about page of my Food point APP.</h2>
        <User name={"Shubham Modi functional"} location={"Pune, Maharastra"} />
        <UserClass name={"First child"} location={"Dhanbad, Jharkhand"} />
      </div>
    );
  }
}

export default About;

/**
 * ------MOUNTING-------
 *
 * constructor(dummy)
 * render(dummy)
 *    <HTML dummy>
 * component did mount
 *    <API Call>
 *    <this.setState()>
 *
 * -----Update
 *  render(API data)
 *      <HTML Loaded with API data>
 * component did update
 *
 *
 * -----UNMOUNT-------
 * when move to other page
 *    component will unmount
 *
 */
