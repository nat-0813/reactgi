import React from "react";
import ReactDOM from "react-dom/client";
class BasicInfo extends React.Component {
  render() {
    const { name, birthday, phoneNumber } = this.props.person;
    return (
      <div>
        <h1>Basic Information</h1>
        <p>Name: {name}</p>
        <p>Birthday: {birthday}</p>
        <p>Phone Number: {phoneNumber}</p>
      </div>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "Natalie Aguilar-Hernandez",
          birthday: "11/15/1996",
          phoneNumber: "123-456-7890",
        },
        {
          name: "Ryan Reynolds",
          birthday: "10/23/1976",
          phoneNumber: "444-555-6666",
        },
        {
          name: "Drew Barrymore",
          birthday: "2/22/1975",
          phoneNumber: "555-777-2222",
        },
      ],
    };
  }
  render() {
    const peopleList = this.state.person.map((person, index) => (
      <BasicInfo key={index} person={person} />
    ));
    return <div>{peopleList}</div>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
