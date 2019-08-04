/**
 * @Author: sarah
 * @Date:   2019-07-31T16:12:38+02:00
 * @Last modified by:   sarah
 * @Last modified time: 2019-08-04T13:24:15+02:00
 */
import { Link } from "react-router-dom";
import React from "react";
import { User } from "../../interfaces/interface-user";
import userService from "../../services/userServices/userService";

/**
 *This component represents the demo homepage that contains examples of using the services
 */
class HomePage extends React.Component<{}, { users: User[] }> {
  /**
   * An instance of the user service
   */
  userService: userService;
  constructor(props: {}) {
    super(props);
    this.state = {
      users: []
    };

    this.userService = new userService();
  }
  /**
   * A function called on component mouting
   *
   * @public
   */
  componentDidMount() {
    this.userService.getAllUsers().then(response => {
      this.setState({
        users: response
      });
    });
  }
  /**
   * A function called to render the list of all avaiable users
   * @public
   */
  renderUsers() {
    return this.state.users.map((user, key) => {
      return (
        <li key={key}>
          <Link to={`users/${user.id}`}>{user.name}</Link>
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
