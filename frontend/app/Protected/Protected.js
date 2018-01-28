import React, {Fragment} from 'react';

export class Protected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    }
  }

  render() {
    return (<Fragment>
      <h1>Protected Route</h1>
      <div className="section">
        <span className="emoji-heading">👀🔐</span>
        <p>Nothing special here I guess... </p>
      </div>
    </Fragment>);
  }
}
