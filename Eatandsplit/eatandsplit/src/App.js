import "./App.css";
import AddFriend from "./Components/AddFriendForm";
import FriendList from "./Components/FriendList";
import { useState } from "react";

function App() {
  const [friendNames, setFriendName] = useState([]);

  return (
    <div className="App">
      <h1>Eat and Split</h1>
      <AddFriend friendNames={friendNames} OnsetFriendName={setFriendName} />
      <FriendList friendNames={friendNames} />
    </div>
  );
}

export default App;
