import iconDelete from "../assets/delete.svg";

function Delete({ user, onDeleteUser }) {
  const { num, title, text } = user;
  return <img onClick={() => onDeleteUser(num)} src={iconDelete} alt="" />;
}

export default Delete;
