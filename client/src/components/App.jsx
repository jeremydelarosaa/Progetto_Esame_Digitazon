import Hero from "./Hero.jsx";
import Step from "./Step.jsx";
import Argomento from "./Argomento.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";

import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((user) => setUser(user.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteUser = (idNum) => {
    if (confirm("Sei sicuro di voler cancellare lo Step?"))
      setUser(user.filter((user) => user.num !== idNum));
    axios.post("http://localhost:3001/deleteUser", {
      num: idNum,
    });
  };

  const handleModifyUser = (num, text, newText) => {
    const setNewText = user.map((user) =>
      user.text === text ? { ...user, text: newText } : user
    );
    setUser(setNewText);
    axios.post("http://localhost:3001/updateUser", {
      num: num,
      text: newText,
    });
  };
  const handleAddUser = (newUser) => {
    setUser((prev) => [...prev, newUser]);
  };

  return (
    <>
      <Hero />
      <main>
        <Step
          user={user}
          onDeleteUser={handleDeleteUser}
          onModifyUser={handleModifyUser}
          onAddUser={handleAddUser}
        />
        <Argomento />
      </main>

      <Footer />
    </>
  );
}

export default App;
