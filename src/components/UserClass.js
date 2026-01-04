import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " Constructor");
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  componentDidMount() {
    console.log(this.props.name + " component Did Mount");
  }
  render() {
    const { name, location } = this.props;
    console.log(this.props.name + " render");
    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add count
        </button>
        <h2>Count1: {this.state.count1}</h2>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Add count
        </button>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h4>Contact: shubham@gamil.com</h4>
      </div>
    );
  }
}

export default UserClass;
