import React from "react";

function FriendList(props) {
  <ul>
    {props.friendNames.map((friendName, index) => (
      <li key={index}>{friendName}</li>
    ))}
  </ul>;
}

export default FriendList;
