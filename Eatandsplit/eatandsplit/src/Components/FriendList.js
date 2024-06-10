import React from "react";
import { useState, useEffect } from "react";

function FriendList() {
  const [name, setName] = useState("");
  const [friendNames, setFriendName] = useState([]);

  function handleInput(e) {
    setName(e.target.value);
  }

  function submitInput(e) {
    e.preventDefault();

    if (name.trim() !== "") {
      setFriendName([...friendNames, name]);
      setName("");
    }
  }

  return (
    <div>
      <h1>Friend List</h1>
      <input
        placeholder="Type your Friend name"
        value={name}
        onChange={handleInput}
      />
      <button onClick={submitInput}>Add</button>

      <ul>
        {friendNames.map((friendName, index) => (
          <li key={index}>{friendName}</li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
