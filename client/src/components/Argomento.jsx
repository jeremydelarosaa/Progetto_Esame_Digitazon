import React, { useState } from "react";

function Argomento() {
  const [count, setCount] = useState(0);
  return (
    <section className=" mb">
      <h1 className="center mb-small">Hook</h1>
      <div className="center ">
        <p className="argomento mb">Hai cliccato {count} volte</p>
        <button className="button" onClick={() => setCount(count + 1)}>
          Cliccami
        </button>
      </div>
    </section>
  );
}

export default Argomento;
