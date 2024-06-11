import React from "react";
import { useState } from "react";

function AddFriend({ friendNames, OnsetFriendName }) {
  const [name, setName] = useState("");

  function handleInput(e) {
    setName(e.target.value);
  }

  function submitInput(e) {
    e.preventDefault();

    if (name.trim() !== "") {
      OnsetFriendName([...friendNames, name]);
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
    </div>
  );
}

export default AddFriend;
