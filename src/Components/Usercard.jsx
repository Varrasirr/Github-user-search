import React from "react";

function UserCard({ user }) {
  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img src={user.avatar_url} alt="avatar" className="avatar" />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {user.name}
            <span>@a{user.login}</span>
          </h1>
          <p className="app-user_about">{user.bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span> {user.public_repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <span> {user.followers}</span>
        </li>
        <li className="app-user_stats-item">
          Звёзд
          <span> {user.public_repos}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{user.location}</li>
        <li className="app-user_location-item">
          <a href={user.blog}>{user.blog}</a>
        </li>
      </ul>
    </div>
  );
}

export default UserCard;
