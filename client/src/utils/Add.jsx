import { useState } from "react";
import iconAdd from "../assets/add.svg";
import axios from "axios";

function Add({ onAddUser }) {
  const [num, setNum] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    axios.post("http://localhost:3001/setUser", {
      title: title,
      text: text,
    });
  };

  const handleInputTitle = (e) => setTitle(e.target.value);
  const handleInputText = (e) => setText(e.target.value);
  return (
    <div className="addStyle">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputTitle}
          type="text"
          placeholder="Title..."
          value={title}
        />
        <input
          onChange={handleInputText}
          type="text"
          placeholder="Text..."
          value={text}
        />
        <button>
          <img src={iconAdd} alt="" />
        </button>
      </form>
    </div>
  );
}

export default Add;
