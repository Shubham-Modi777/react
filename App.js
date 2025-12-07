/**
 *
 * <div id="parents">
 *      <div id="child">
 *      <h1>Hello h1 tag! </h1>
 *      <h2>Hello h2 tag! </h2>
 *      </div>
 *      <div id="child2">
 *      <h1>Hello h1 tag! </h1>
 *      <h2>Hello h2 tag! </h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello h1 tag!"),
    React.createElement("h2", {}, "Hello h2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello h1 tag!"),
    React.createElement("h2", {}, "Hello h2 tag!"),
  ]),
]);

console.log(parent);

//const heading = React.createElement("h1", { id: "heading" }, "Hello React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
