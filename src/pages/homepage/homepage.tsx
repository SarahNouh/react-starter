/**
 * @Author: sarah
 * @Date:   2019-07-31T16:12:38+02:00
 * @Last modified by:   sarah
 * @Last modified time: 2019-07-31T17:48:38+02:00
 */
import React from "react";
import userService from "../../services/UserServices/userService";

interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
}
class HomePage extends React.Component<{}, { users: user[] }> {
  userService: userService;
  constructor(props: {}) {
    super(props);
    this.state = {
      users: []
    };

    this.userService = new userService();
  }

  componentDidMount() {
    this.userService.getAllUsers().then(response => {
      this.setState({
        users: response
      });
    });
  }

  renderUsers() {
    return this.state.users.map((user, key) => {
      return (
        <li key={key}>
          <h4>{user.name}</h4>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <h4>Here's the list of users</h4>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

export default HomePage;
