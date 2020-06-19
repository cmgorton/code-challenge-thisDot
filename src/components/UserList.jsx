import React from "react";

import User from "./User";

const UserList = ({ response }) => {
  return (
    <div className="user-list">
      {response.map(item => {
        return (
          <a key={item.id} className="user-list__link" href={item.html_url}>
            <User
              key={item.id}
              id={item.id}
              url={item.html_url}
              title={item.login}
              followers={item.followers_url}
              img_url={item.avatar_url}
              details={item.url}
            />
          </a>
        );
      })}

    </div>
  );
};
export default UserList;