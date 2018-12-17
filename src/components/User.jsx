import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class UserList extends Component {
  state = {
    user: {},
    posts: [],
  };

  componentDidMount() {
    const id = this.props.computedMatch.params.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => this.setState({ user: data }));

      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  };

  render() {
    const {
      posts,
      user
    } = this.state;
    const imgSrc = 'https://via.placeholder.com/150';
    const postsList = posts.map(post => {
      return (
        <li key={post.id}>
          <Link to={`../post/${post.id}`}>{post.title}</Link>
          <div>
            <img src={imgSrc} alt="posts"/>
          </div>
      </li>
      ); 
    });
    
    return (
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <ul>{postsList}</ul>
      </div>
    );
  }
}