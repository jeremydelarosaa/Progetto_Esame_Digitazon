import { useState } from "react";
import IconDelete from "../utils/Delete";
import iconUpdate from "../assets/update.svg";

function User({ user, onDeleteUser, onModifyUser }) {
  const { num, title, text } = user;
  const [inModifica, setInModifica] = useState(false);
  const [newText, setnewText] = useState(text);
  const handleSetText = (e) => setnewText(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onModifyUser(num, text, newText);
      setInModifica(false);
    } else if (e.key === "Escape") {
      setInModifica(false);
      SetNewNum(text);
    }
  };

  return (
    <div>
      <IconDelete user={user} onDeleteUser={onDeleteUser} />
      <img
        onClick={() => setInModifica((prev) => !prev)}
        src={iconUpdate}
        alt=""
      />
      <h3>{num}</h3>
      <h1>{title}</h1>

      <p>
        {inModifica ? (
          <input
            value={newText}
            onChange={handleSetText}
            onKeyDown={handleKeyDown}
          />
        ) : (
          text
        )}
      </p>
    </div>
  );
}

export default User;
