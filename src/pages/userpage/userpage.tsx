/**
 * @Author: sarah
 * @Date:   2019-07-31T16:13:06+02:00
 * @Last modified by:   sarah
 * @Last modified time: 2019-07-31T16:45:04+02:00
 */
import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface UserProps {
  id: number;
  name: string;
}
class UserPage extends React.Component<UserProps & RouteComponentProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    console.log(this.props.match.params);
  }
  render() {
    return <div>USER:</div>;
  }
}
export default UserPage;
