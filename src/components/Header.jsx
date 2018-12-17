import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends PureComponent {

    render() { 
        const { logout } = this.props;
        return ( 
            <div className="header">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/posts" activeClassName="active">Posts</NavLink>
                <NavLink to="/comments" activeClassName="active">Comments</NavLink>
                <span>userName</span>
                <button onClick={logout}>logout</button>
            </div>
         );
    }
}
 
export default Header;