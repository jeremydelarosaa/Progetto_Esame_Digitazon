import IconAdd from "../utils/Add";
import User from "./User";

function Step({ user, onDeleteUser, onModifyUser }) {
  return (
    <div>
      <section className="mb">
        <h1 className="mb-small center">Step</h1>
        <div className="steps">
          {user.map((user) => (
            <User
              key={user.num}
              user={user}
              onDeleteUser={onDeleteUser}
              onModifyUser={onModifyUser}
            />
          ))}
          <IconAdd />
        </div>
      </section>
    </div>
  );
}

export default Step;
