import React, { PureComponent } from 'react';

class Login extends PureComponent {

  render() {
    const { login } = this.props;
    return (
      <form action="">
        <div>
          <label htmlFor="userName">User Name</label>
          <input id="userName" type="text" />
        </div>
        <div>
          <label htmlFor="password">User Name</label>
          <input id="password" type="password" />
        </div>
          <input type="submit" 
          onClick={e => {
            e.preventDefault();
            login();
          }}/>
      </form>
    );
  }
}

export default Login;
