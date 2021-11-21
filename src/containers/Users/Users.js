import { useEffect, useState } from "react";
import { http } from "../../service/api";
import { Card } from "./Card";

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    http.get("/users").then(({ data }) => setUsers(data.users));
  }, []);

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {users?.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </ul>
  );
}
