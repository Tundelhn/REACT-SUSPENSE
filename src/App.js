import React, { Suspense } from 'react';
import './App.css';
import { fetchData } from './Api';
const resource = fetchData();

const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>users loading...</h1>}>
        <ProfileDetails />
      </Suspense>
      <Suspense fallback={<h1>post loading....</h1>}>
        <ProfilePosts />
      </Suspense>
    </div>
  );
};

const ProfileDetails = () => {
  const user = resource.user.read();
  return (
    <div className="card card-body y-3">
      <h1 className="large text-primary">{user.name}</h1>
      <ul>
        <li>Username:{user.username}</li>
        <li>Email:{user.email}</li>
        <li>city:{user.address.city}</li>
      </ul>
    </div>
  );
};
const ProfilePosts = () => {
  const posts = resource.posts.read();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <strong>Latest Posts</strong>
      </li>
      {posts.map(post => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};
export default App;
