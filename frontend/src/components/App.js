import React from "react";
import Users from "./Users";

class App extends React.Component {
  state = {
    selectUser: null,
  };

  selectUser = (user) => {
    this.setState({ selectedUser: user });
  };

  render() {
    return (
      <div className="container mx-auto px-4">
        <Users selectUser={this.selectUser} />
      </div>
    );
  }
}

export default App;
