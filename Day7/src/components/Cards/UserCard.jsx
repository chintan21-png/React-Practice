// UserCard.jsx
import React from "react";
function UserCard({ user }) {
  return (
    <div className="w-full mx-auto bg-linear-to-r from-zinc-100 to-zinc-200 dark:from-[#000000] dark:to-[#0a0d37] border-zinc-300 dark:border-[#1b2c68a0] relative rounded-lg border shadow-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500">
      <div className="user-card">
        <img src={user.avatar_url} alt={user.login} className="avatar" />
        <div className="user-info">
          <h3>Name:{user.login}</h3>
        </div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          View Profile
        </a>
        
      </div>
    </div>
  );
}
export default UserCard;

//what is rel="noopener noreferrer" in the anchor tag?
//The rel="noopener noreferrer" attribute in the anchor tag is used for security reasons when opening links in a new tab (target="_blank").
//noopener: This prevents the new page from being able to access the window.opener property, which can be a security risk if the new page is malicious. It helps protect against phishing attacks and other malicious activities.
//noreferrer: This prevents the browser from sending the referrer information to the new page. This can help protect user privacy by not revealing the source of the traffic to the new page.
