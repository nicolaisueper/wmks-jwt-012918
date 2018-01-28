import React, {Component, Fragment} from 'react';
import './Login.scss';

export class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state.username,
      this.state.password,
      () => {
        this.props.history.push('/');
      },
      (err) => {
        console.log(err);
        this.setState({error: err.response.data.error});
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null
    };
  }

  render() {
    return (
      <Fragment>
        <h1>Login</h1>
        {
          this.props.location.state && this.props.location.state.accessViolation
            ? <div className="section login-alert">You must be logged in to see&nbsp;
              <span className="monospaced">{this.props.location.state.from}</span></div>
            : null
        }
        {
          this.state.error
            ? <div className="section login-alert">{this.state.error}</div>
            : null
        }
        <form className="section login-form" onSubmit={this.handleLogin}>
          <div className="section">
            <label htmlFor="username">Username&nbsp;</label>
            <input value={this.state.username}
                   onChange={(e) => this.setState({username: e.target.value})}
                   id="username" type="text" name="username" autoComplete="username"/>
          </div>
          <div className="section">
            <label htmlFor="password">Password&nbsp;</label>
            <input value={this.state.password}
                   onChange={(e) => this.setState({password: e.target.value})}
                   id="password" type="password" name="password"
                   autoComplete="current-password"/>
          </div>
          <div className="section">
            <small className="hint">Hint: admin:pass</small>
          </div>
          <div className="section">
            <button onClick={this.handleLogin}>Login</button>
          </div>
        </form>
      </Fragment>
    );
  };
}
