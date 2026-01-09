import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name + " Constructor");
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    //console.log(this.props.name + " component Did Mount");
    const data = await fetch("https://api.github.com/users/Shubham-Modi777");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, location } = this.state.userInfo;
    //console.log(this.props.name + " render");
    return (
      <div className="flex flex-wrap p-2 m-2 border-solid rounded-sm w-60 bg-amber-200 cursor-pointer">
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h4>Contact: shubham@gamil.com</h4>
      </div>
    );
  }
}

export default UserClass;
