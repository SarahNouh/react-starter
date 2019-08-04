/**
 * @Author: sarah
 * @Date:   2019-07-31T16:13:06+02:00
 * @Last modified by:   sarah
 * @Last modified time: 2019-08-04T13:29:40+02:00
 */

/*An example of how to import ant design components*/
import Button from "antd/es/button";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { User } from "../../interfaces/interface-user";
import userService from "../../services/userServices/userService";

/**
 *This component represents the demo user page that contains examples of using the services to retreive certain items using axios
 *@props: user: User
 */
class UserPage extends React.Component<RouteComponentProps, { user: User }> {
  /**
   * An instance of the user service
   */
  userService: userService;
  constructor(props: any) {
    super(props);
    this.userService = new userService();
    this.state = {
      user: {}
    };
  }

  /**
   * A function called on component mouting
   *
   * @public
   */
  componentDidMount() {
    console.log(this.props.match.params);
    const id = this.props.match.params.hasOwnProperty("id")
      ? (this.props.match.params as any).id
      : 1;
    this.userService.getUser(id).then(response => {
      this.setState({ user: response });
    });
  }
  render() {
    return (
      <div>
        USER: {this.state.user.name}
        <Button type="primary">Button</Button>
      </div>
    );
  }
}
export default UserPage;
