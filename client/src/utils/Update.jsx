import { useState } from "react";
import iconUpdate from "../assets/update.svg";

function Update({ onUpdateUser }) {
  const [inModifica, setInModifica] = useState(false);
  return (
    <div>
      <img
        onClick={() => setInModifica((prev) => !prev)}
        src={iconUpdate}
        alt=""
      />
    </div>
  );
}

export default Update;
